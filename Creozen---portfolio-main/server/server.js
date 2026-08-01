require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const Razorpay = require('razorpay');

const app = express();
const port = 5000;

const allowedOrigins = [
    "http://localhost:5173",
    "https://creozen.co.uk",
    "https://www.creozen.co.uk"
];

function getRazorpayClient() {
    const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

    if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
        throw new Error('Razorpay credentials are not configured on the server');
    }

    return new Razorpay({
        key_id: RAZORPAY_KEY_ID,
        key_secret: RAZORPAY_KEY_SECRET
    });
}

app.use(cors({
    origin(origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
}));

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.status(200).json({ success: true, message: 'API is healthy' });
});

async function forwardToGoogleSheets(data) {
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || process.env.VITE_GOOGLE_APPS_SCRIPT_URL;
    if (!scriptUrl) {
        console.error("GOOGLE_APPS_SCRIPT_URL is not configured on the server.");
        return { ok: false, error: 'missing_script_url' };
    }

    const controller = new AbortController();
    const timeoutMs = Number(process.env.GOOGLE_SHEETS_TIMEOUT_MS || 8000);
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
            body: JSON.stringify(data),
            redirect: 'follow',
            signal: controller.signal
        });

        const responseText = await response.text();

        if (!response.ok) {
            console.error("Google Sheets returned a non-OK response:", response.status, responseText);
            return { ok: false, status: response.status, body: responseText };
        }

        console.log("Google Sheets forward success:", response.status, responseText);
        return { ok: true, status: response.status, body: responseText };
    } catch (err) {
        console.error("Failed to forward to sheets:", err);
        return { ok: false, error: err.message };
    } finally {
        clearTimeout(timeoutId);
    }
}

async function sendPaidWorkshopEmailViaBrevo({ name, email, amount, selectedCourses, paymentId }) {
    const smtpHost = process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com';
    const smtpPort = Number(process.env.BREVO_SMTP_PORT || 587);
    const smtpLogin = process.env.BREVO_SMTP_LOGIN;
    const smtpKey = process.env.BREVO_SMTP_KEY;
    const senderEmail = process.env.BREVO_FROM_EMAIL;
    const senderName = process.env.BREVO_FROM_NAME || 'Creozen';
    const logoUrl = process.env.BREVO_LOGO_URL || 'https://www.creozen.co.uk/C.svg';

    if (!smtpLogin || !smtpKey || !senderEmail) {
        console.warn("Brevo is not configured. Skipping paid workshop confirmation email.");
        return { ok: false, error: 'brevo_not_configured' };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: false,
            auth: {
                user: smtpLogin,
                pass: smtpKey
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: `"${senderName}" <${senderEmail}>`,
            to: email,
            subject: 'Thank you for registering - Creozen Paid Workshop',
            html: `
                <html>
                    <body style="margin:0; padding:0; background:#f5f5f7; font-family: Arial, sans-serif; color:#111111;">
                        <div style="max-width:640px; margin:0 auto; padding:32px 16px;">
                            <div style="background:#ffffff; border:1px solid #ececf1; border-radius:20px; overflow:hidden;">
                                <div style="background:#0b0b0f; padding:28px 24px; text-align:center;">
                                    <img
                                        src="${logoUrl}"
                                        alt="Creozen logo"
                                        style="display:block; margin:0 auto 14px; width:96px; max-width:96px; height:auto;"
                                    />
                                    <div style="color:#ffffff; font-size:28px; font-weight:700; letter-spacing:0.3px;">Creozen</div>
                                    <div style="color:#b8bfd3; font-size:14px; margin-top:8px;">Paid Workshop Registration Confirmed</div>
                                </div>
                                <div style="padding:32px 24px;">
                                    <p style="margin:0 0 16px; font-size:16px; line-height:1.6;">Hi ${name},</p>
                                    <p style="margin:0 0 22px; font-size:16px; line-height:1.7; color:#333333;">
                                        Thank you for registering for the Creozen paid workshop. Your payment was received and your seat has been recorded successfully.
                                    </p>
                                    <div style="background:#f8f8fb; border:1px solid #ececf1; border-radius:16px; padding:20px 18px; margin:0 0 24px;">
                                        <div style="font-size:13px; color:#6b7280; margin-bottom:8px;">PAYMENT DETAILS</div>
                                        <div style="font-size:15px; line-height:1.9; color:#111111;">
                                            <div><strong>Amount Paid:</strong> ${amount}</div>
                                            <div><strong>Courses:</strong> ${selectedCourses}</div>
                                            <div><strong>Payment ID:</strong> ${paymentId}</div>
                                        </div>
                                    </div>
                                    <p style="margin:0 0 12px; font-size:15px; line-height:1.7; color:#333333;">
                                        Keep this email for your records. We will use your registration details for the workshop coordination flow.
                                    </p>
                                    <p style="margin:0; font-size:15px; line-height:1.7; color:#333333;">
                                        Regards,<br />
                                        <strong>Team Creozen</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </body>
                </html>
            `
        });

        console.log("Brevo SMTP email send success:", info.messageId);
        return { ok: true, messageId: info.messageId };
    } catch (error) {
        console.error("Brevo SMTP email send error:", error);
        return { ok: false, error: error.message };
    }
}

app.post('/api/contact', async (req, res) => {
    try {
        const sheetResult = await forwardToGoogleSheets({
            formType: 'Contact Form',
            ...req.body
        });

        if (!sheetResult.ok) {
            return res.status(502).json({
                success: false,
                error: 'Failed to save contact form to Google Sheets',
                sheetLogged: false
            });
        }

        return res.status(200).json({ success: true, sheetLogged: true });
    } catch (error) {
        console.error("Contact Endpoint Error:", error);
        return res.status(500).json({ success: false, error: error.message, sheetLogged: false });
    }
});

app.post('/api/demo', async (req, res) => {
    try {
        const sheetResult = await forwardToGoogleSheets({
            formType: 'Demo Request',
            ...req.body
        });

        if (!sheetResult.ok) {
            return res.status(502).json({
                success: false,
                error: 'Failed to save demo request to Google Sheets',
                sheetLogged: false
            });
        }

        return res.status(200).json({ success: true, sheetLogged: true });
    } catch (error) {
        console.error("Demo Endpoint Error:", error);
        return res.status(500).json({ success: false, error: error.message, sheetLogged: false });
    }
});

app.post('/api/apply', async (req, res) => {
    try {
        const sheetResult = await forwardToGoogleSheets({
            formType: 'Job Application',
            ...req.body
        });

        if (!sheetResult.ok) {
            return res.status(502).json({
                success: false,
                error: 'Failed to save job application to Google Sheets',
                sheetLogged: false
            });
        }

        return res.status(200).json({ success: true, sheetLogged: true });
    } catch (error) {
        console.error("Apply Endpoint Error:", error);
        return res.status(500).json({ success: false, error: error.message, sheetLogged: false });
    }
});

app.post('/api/meeting', async (req, res) => {
    try {
        const sheetResult = await forwardToGoogleSheets({
            formType: 'Meeting Request',
            ...req.body
        });

        if (!sheetResult.ok) {
            return res.status(502).json({
                success: false,
                error: 'Failed to save meeting request to Google Sheets',
                sheetLogged: false
            });
        }

        return res.status(200).json({ success: true, sheetLogged: true });
    } catch (error) {
        console.error("Meeting Endpoint Error:", error);
        return res.status(500).json({ success: false, error: error.message, sheetLogged: false });
    }
});

app.post('/api/send-paid-confirmation', async (req, res) => {
    try {
        const emailResult = await sendPaidWorkshopEmailViaBrevo({
            name: req.body.name,
            email: req.body.email,
            amount: req.body.amount,
            selectedCourses: req.body.selectedCourses,
            paymentId: req.body.paymentId
        });

        return res.status(200).json({
            success: true,
            emailSent: emailResult.ok === true
        });
    } catch (error) {
        console.error("Paid Confirmation Endpoint Error:", error);
        return res.status(500).json({ success: false, error: error.message, emailSent: false });
    }
});

app.post('/api/create-order', async (req, res) => {
    const { amount, currency, receipt } = req.body;

    if (!amount || isNaN(amount)) {
        return res.status(400).json({ success: false, error: 'Amount is required and must be a number' });
    }

    const amountInPaise = parseInt(amount, 10);
    if (amountInPaise < 100) {
        return res.status(400).json({ success: false, error: 'Amount must be at least 100 paise (1 INR)' });
    }

    try {
        const razorpay = getRazorpayClient();
        const order = await razorpay.orders.create({
            amount: amountInPaise,
            currency: currency || 'INR',
            receipt: receipt || `receipt_${Date.now()}`
        });

        return res.status(200).json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency
        });
    } catch (error) {
        console.error('Razorpay Create Order Error:', error);

        if (error.statusCode === 401 || (error.error && error.error.code === 'BAD_REQUEST_ERROR' && error.error.description.includes('Auth'))) {
            return res.status(401).json({ success: false, error: 'Razorpay authentication failed' });
        }

        return res.status(500).json({ success: false, error: error.message || 'Failed to create order with Razorpay' });
    }
});

app.post('/api/verify-payment', (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ success: false, error: 'Missing required signature verification fields' });
    }

    try {
        if (!process.env.RAZORPAY_KEY_SECRET) {
            throw new Error('Razorpay key secret is not configured on the server');
        }

        const text = `${razorpay_order_id}|${razorpay_payment_id}`;
        const generatedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
            .update(text)
            .digest('hex');

        if (generatedSignature === razorpay_signature) {
            return res.status(200).json({ success: true, message: 'Payment signature verified successfully' });
        }

        console.warn('Razorpay Signature Verification Failed: Mismatch');
        return res.status(400).json({ success: false, error: 'Signature mismatch' });
    } catch (error) {
        console.error('Razorpay Signature Verification Error:', error);
        return res.status(500).json({ success: false, error: 'Error during signature verification' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
