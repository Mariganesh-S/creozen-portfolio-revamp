const HANDLER_TYPE = import.meta.env.VITE_EMAIL_PROVIDER || 'backend';

/**
 * Submits form data using the configured handler (backend or formsubmit).
 * @param {object} params
 * @param {string} params.type - A descriptive name for the form (e.g., 'Contact Form').
 * @param {string} params.endpoint - The backend API endpoint (e.g., '/api/contact').
 * @param {object} params.data - The data to submit.
 */
export const submitForm = async ({ type, endpoint, data }) => {
    switch (HANDLER_TYPE) {
        case 'google_sheets':
            return submitWithGoogleSheets(type, data);
        case 'web3forms':
            return submitWithWeb3Forms(type, data);
        case 'formsubmit':
            return submitWithFormSubmit(type, data);
        case 'backend':
        default:
            return submitWithBackend(endpoint, data);
    }
};

export const submitFormWithHandler = async ({ handler, type, endpoint, data }) => {
    switch (handler) {
        case 'google_sheets':
            return submitWithGoogleSheets(type, data);
        case 'web3forms':
            return submitWithWeb3Forms(type, data);
        case 'formsubmit':
            return submitWithFormSubmit(type, data);
        case 'backend':
        default:
            return submitWithBackend(endpoint, data);
    }
};

const submitWithBackend = async (endpoint, data) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        let responseData = null;
        try {
            responseData = await response.json();
        } catch {
            responseData = null;
        }
        
        return {
            ok: response.ok,
            status: response.status,
            data: responseData
        };
    } catch (error) {
        console.error("Backend submit error:", error);
        return {
            ok: false,
            status: 0,
            data: null
        };
    }
};

const submitWithFormSubmit = async (type, data) => {
    const email = import.meta.env.VITE_FORMSUBMIT_EMAIL;
    
    if (!email) {
        console.error("VITE_FORMSUBMIT_EMAIL is not set.");
        return { ok: false, status: 500 };
    }

    try {
        const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _subject: `New submission from ${type}`,
                _captcha: 'false',
                ...data
            })
        });

        const result = await response.json();
        return {
            ok: result.success === "true" || response.ok,
            status: response.status
        };
    } catch (error) {
        console.error("FormSubmit Error:", error);
        return { ok: false, status: 500 };
    }
};

const submitWithWeb3Forms = async (type, data) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey.includes('YOUR_WEB3FORMS')) {
        console.error("VITE_WEB3FORMS_ACCESS_KEY is not configured.");
        return { ok: false, status: 500 };
    }

    try {
        const response = await fetch(`https://api.web3forms.com/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `New submission from ${type}`,
                ...data
            })
        });

        const result = await response.json();
        return {
            ok: response.ok && result.success,
            status: response.status
        };
    } catch (error) {
        console.error("Web3Forms Error:", error);
        return { ok: false, status: 500 };
    }
};

const submitWithGoogleSheets = async (type, data) => {
    const scriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;
    
    if (!scriptUrl) {
        console.error("VITE_GOOGLE_APPS_SCRIPT_URL is not configured. Please add it to your .env file.");
        return { ok: false, status: 500 };
    }

    try {
        const payload = {
            formType: type,
            ...data
        };

        // We send the data as a simple text string (JSON stringified).
        // Sending as text/plain avoids the CORS preflight (OPTIONS) request entirely.
        // Google Apps Script will receive this in e.postData.contents.
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=utf-8'
            },
            body: JSON.stringify(payload)
        });

        let result = null;
        try {
            result = await response.json();
        } catch {
            result = null;
        }

        return {
            ok: response.ok && (!result || result.result === "success"),
            status: response.status,
            data: result
        };
    } catch (error) {
        console.error("Google Sheets Error:", error);
        return { ok: false, status: 500, data: null };
    }
};
