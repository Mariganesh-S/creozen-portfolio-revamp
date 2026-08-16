import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsStars } from 'react-icons/bs';
import { FiArrowRight, FiCheck, FiLoader, FiCalendar, FiClock, FiMonitor, FiChevronDown, FiChevronUp, FiAlertCircle, FiPlus, FiMinus } from 'react-icons/fi';
import { FaWhatsapp, FaBrain, FaDatabase, FaRobot, FaNetworkWired } from 'react-icons/fa';
import { toast } from 'sonner';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { submitFormWithHandler } from '../services/emailService';

// Courses Data according to the images provided
const COURSES = [
    {
        id: 'course_1',
        title: 'Generative AI Foundations',
        date: '5 July 2026',
        time: '2:00 PM – 5:00 PM',
        fee: 499,
        icon: FaBrain,
        color: 'from-blue-500/20 to-indigo-500/5',
        borderColor: 'group-hover:border-blue-500/30',
        textColor: 'text-blue-400',
        syllabus: [
            'AI & NLP Fundamentals: ML, DL, GenAI, and conceptual overview of NLP, tokens, and embeddings',
            'Large Language Models (LLMs): How LLMs work, Transformers, Attention Mechanism, Context Windows, and Training vs Inference',
            'GenAI Ecosystem: OpenAI, Claude, Gemini, and open-source models (Llama, Mistral, Qwen, DeepSeek)',
            'Working with LLM APIs: Sending prompts, receiving responses, and understanding API token usage',
            'Prompt Engineering: Effective Prompting, Zero-Shot, Few-Shot, Chain of Thought, and Role-Based Prompting',
            'Building Reliable AI Apps: Structured Output (JSON), Function Calling, and external tool integration',
            'Hands-on Activities: First LLM API Call, Structured Output experiments, and Mini chatbot/summarizer project'
        ]
    },
    {
        id: 'course_2',
        title: 'Retrieval-Augmented Generation (RAG) Fundamentals',
        date: '12 July 2026',
        time: '2:00 PM – 5:00 PM',
        fee: 499,
        icon: FaDatabase,
        color: 'from-purple-500/20 to-indigo-500/5',
        borderColor: 'group-hover:border-purple-500/30',
        textColor: 'text-purple-400',
        syllabus: [
            'Why RAG?: Overcoming LLM limitations such as Hallucinations, knowledge cutoffs, and accessing private/domain data',
            'RAG Architecture: End-to-end RAG workflow, components, and general data flow systems',
            'Ingestion Pipeline: Data extraction, document processing, intelligent chunking, embeddings, indexing, and storage',
            'Inference Pipeline: Processing user queries, retrieval matching, context augmentation, and response generation',
            'Vector Databases: Core concepts and hands-on overview of Pinecone, Weaviate, Chroma, Milvus, Qdrant, and pgvector',
            'Hands-on Project: Build a fully functional RAG-powered assistant to query custom uploaded documents'
        ]
    },
    {
        id: 'course_3',
        title: 'AI Agents & Agentic AI',
        date: '19 July 2026',
        time: '2:00 PM – 5:00 PM',
        fee: 499,
        icon: FaRobot,
        color: 'from-pink-500/20 to-rose-500/5',
        borderColor: 'group-hover:border-pink-500/30',
        textColor: 'text-pink-400',
        syllabus: [
            'Introduction to Agentic AI: Understanding Agentic concepts and how AI Agents differ from standard LLM applications',
            'AI Agent Fundamentals: Agent architectures, memory systems, tools, and autonomous loops',
            'Agent Intelligence: In-depth reasoning frameworks, task planning, and decision-making workflows',
            'Actions & Integrations: Implement function calling, complex tool usage, and external system interaction',
            'Popular Agent Frameworks: Reviewing and comparing LangChain, CrewAI, AutoGen, and PydanticAI',
            'Hands-on Activities: Build a simple AI agent, add cognitive memory & custom tools, and execute real-world tasks'
        ]
    },
    {
        id: 'course_4',
        title: 'Model Context Protocol (MCP): Connecting AI with Real-World Systems',
        date: '26 July 2026',
        time: '2:00 PM – 5:00 PM',
        fee: 499,
        icon: FaNetworkWired,
        color: 'from-cyan-500/20 to-blue-500/5',
        borderColor: 'group-hover:border-cyan-500/30',
        textColor: 'text-cyan-400',
        syllabus: [
            'Introduction to MCP: What is Model Context Protocol, why it matters, and architectural overview',
            'Core Components: Detailed host, client, and server interactions, and core capabilities (tools, resources, prompts)',
            'Building MCP Servers: Step-by-step custom server creation, integrating external APIs and databases',
            'MCP Security: Security considerations, sandboxing, and enterprise best practices',
            'Agent Integration: Connecting MCP servers to LLM agents and orchestrators for real-time external tool actions',
            'Hands-on Project: Run an MCP host and build a custom server that acts as a real-time data plugin'
        ]
    }
];

export const PaidWorkshop = () => {
    const [selectedCourses, setSelectedCourses] = useState(['course_1']); // Default to 1 selection
    const [expandedCourses, setExpandedCourses] = useState([]);
    const [occupation, setOccupation] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [paymentId, setPaymentId] = useState('');
    const [registeredCoursesList, setRegisteredCoursesList] = useState([]);
    const [paidAmount, setPaidAmount] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    
    // Promo Code State
    const [promoInput, setPromoInput] = useState('');
    const [appliedPromo, setAppliedPromo] = useState({ code: '', discount: 0 });
    const [promoError, setPromoError] = useState('');

    const PROMO_CODES = {
        'CREOZEN8383-TEST-MODE': 473,
    };

    const handleApplyPromo = () => {
        const code = promoInput.trim().toUpperCase();
        if (code === '') return;
        setPromoError(''); // Clear any previous error

        // Percentage-based coupons now apply across all selected courses.
        // The discount is calculated as a percentage of the subtotal, so it
        // effectively applies the same percentage off to every course in the cart.
        if (code === 'B3SAVE40' || code === 'B2SAVE15') {
            setAppliedPromo({ code, discount: 0 }); // Percentage discount calculated later
            toast.success(
                `Promo code applied: ${code === 'B3SAVE40' ? '40%' : '15%'} off on all selected courses!`
            );
            return;
        }

        if (PROMO_CODES[code]) {
            setAppliedPromo({ code, discount: PROMO_CODES[code] });
            toast.success(`Promo code applied: ₹${PROMO_CODES[code]} off!`);
        } else {
            setAppliedPromo({ code: '', discount: 0 });
            setPromoError("Invalid or expired promo code.");
        }
    };

    const WHATSAPP_LINK = "https://chat.whatsapp.com/JiqTuRdv9bV4XsxvisQ4aC";

    // Toggle course selection
    const handleCourseToggle = (courseId) => {
        if (selectedCourses.includes(courseId)) {
            // Prevent deselecting if it's the only one left
            if (selectedCourses.length === 1) {
                toast.warning("Please select at least one course to register.");
                return;
            }
            setSelectedCourses(selectedCourses.filter(id => id !== courseId));
        } else {
            setSelectedCourses([...selectedCourses, courseId]);
        }
    };

    // Quick select all courses
    const selectAllCourses = () => {
        setSelectedCourses(COURSES.map(c => c.id));
    };

    // Toggle course syllabus expansion
    const toggleSyllabus = (e, courseId) => {
        e.stopPropagation(); // Prevent toggling the course selection
        if (expandedCourses.includes(courseId)) {
            setExpandedCourses(expandedCourses.filter(id => id !== courseId));
        } else {
            setExpandedCourses([...expandedCourses, courseId]);
        }
    };

    // Calculate prices
    const isAllSelected = selectedCourses.length === COURSES.length;
    const subtotal = selectedCourses.reduce((acc, courseId) => {
        const course = COURSES.find(c => c.id === courseId);
        return acc + (course ? course.fee : 0);
    }, 0);

    const promoDiscount =
        appliedPromo.code === 'B3SAVE40'
            ? Math.round((subtotal * 40) / 100)
            : appliedPromo.code === 'B2SAVE15'
            ? Math.round((subtotal * 15) / 100)
            : appliedPromo.discount;
    
    const discountAmount = promoDiscount;
    const totalAmount = Math.max(0, subtotal - discountAmount);

    const handlePaymentAndRegistration = async (e) => {
        e.preventDefault();
        
        if (selectedCourses.length === 0) {
            toast.error("Please select at least one course.");
            return;
        }

        const name = e.target.name.value;
        const email = e.target.email.value;
        const mobile = e.target.mobile.value;
        const occ = e.target.occupation.value;

        // Dynamic validation
        let dynamicData = {};
        if (occ === 'Student') {
            dynamicData.college = e.target.college.value;
            if (!dynamicData.college.trim()) {
                toast.error("Please enter your College/University name.");
                return;
            }
        } else if (occ === 'Professional') {
            dynamicData.company = e.target.company.value;
            dynamicData.designation = e.target.designation.value;
            if (!dynamicData.company.trim() || !dynamicData.designation.trim()) {
                toast.error("Please fill in your company name and designation.");
                return;
            }
        } else if (occ === 'Business') {
            dynamicData.businessType = e.target.businessType.value;
            if (!dynamicData.businessType.trim()) {
                toast.error("Please specify your business type.");
                return;
            }
        } else if (occ === 'Others') {
            dynamicData.otherOccupation = e.target.otherOccupation.value;
            if (!dynamicData.otherOccupation.trim()) {
                toast.error("Please specify details about your occupation.");
                return;
            }
        }

        // Razorpay key check
        const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID;
        if (!razorpayKey) {
            console.error("VITE_RAZORPAY_KEY_ID environment variable is missing.");
            toast.error("Payment configuration error. Please contact the administrator.");
            return;
        }

        if (!window.Razorpay) {
            toast.error("Razorpay SDK failed to load. Please refresh and check your internet connection.");
            return;
        }

        setIsSubmitting(true);

        const selectedCourseObjects = COURSES.filter(c => selectedCourses.includes(c.id));
        const courseNamesText = selectedCourseObjects.map(c => c.title).join(', ');
        const orderAmountInPaise = Math.round(Number(totalAmount) * 100);

        if (!Number.isFinite(orderAmountInPaise) || orderAmountInPaise < 100) {
            console.error("Invalid order amount calculated:", { totalAmount, orderAmountInPaise });
            toast.error("Invalid payment amount. Please review the selected courses and promo code.");
            setIsSubmitting(false);
            return;
        }

        // STEP 1: Request backend to create an order
        let orderData;
        try {
            const orderResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/create-order`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: orderAmountInPaise,
                    currency: 'INR',
                    receipt: `receipt_${Date.now()}`
                })
            });

            if (!orderResponse.ok) {
                if (orderResponse.status === 401) {
                    throw new Error("Authentication failed on the server. Please check backend Razorpay credentials.");
                }
                const errJson = await orderResponse.json();
                throw new Error(errJson.error || `Server returned status ${orderResponse.status}`);
            }

            orderData = await orderResponse.json();
        } catch (err) {
            console.error("Backend order generation failed:", err);
            toast.error(`Order initiation failed: ${err.message || 'Server error.'}`);
            setIsSubmitting(false);
            return;
        }

        // STEP 2: Configure Razorpay Checkout options with the generated order_id
        const options = {
            key: razorpayKey,
            amount: orderData.amount, // from backend order (paise)
            currency: orderData.currency,
            name: 'Creozen',
            description: `Registration: ${selectedCourseObjects.length} Course(s)`,
            order_id: orderData.order_id, // Order ID from backend
            image: '/favicon-48.png',
            prefill: {
                name: name,
                email: email,
                contact: mobile
            },
            notes: {
                selected_courses: courseNamesText,
                occupation: occ,
                ...dynamicData
            },
            theme: {
                color: '#6366f1' // Sleek Indigo accent
            },
            modal: {
                ondismiss: function() {
                    setIsSubmitting(false);
                    toast.info("Payment cancelled. Feel free to try again.");
                }
            },
            handler: async function (response) {
                // Payment was successful!
                const transactionId = response.razorpay_payment_id;
                
                toast.success("Payment authorized. Verifying payment signature...");

                // STEP 3: Request backend to verify the signature
                try {
                    const verifyResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature
                        })
                    });

                    if (!verifyResponse.ok) {
                        const errJson = await verifyResponse.json();
                        throw new Error(errJson.error || 'Signature verification failed.');
                    }

                    // Verification success! Now submit details to Google Sheets
                    toast.success("Signature verified. Saving registration details...");

                    const finalData = {
                        timestamp: new Date().toLocaleString(),
                        name,
                        email,
                        mobile,
                        occupation: occ,
                        course_count: selectedCourseObjects.length,
                        course_1: selectedCourses.includes('course_1') ? 'Yes' : 'No',
                        course_2: selectedCourses.includes('course_2') ? 'Yes' : 'No',
                        course_3: selectedCourses.includes('course_3') ? 'Yes' : 'No',
                        course_4: selectedCourses.includes('course_4') ? 'Yes' : 'No',
                        selectedCourses: courseNamesText,
                        amount: `INR ${totalAmount}`,
                        paymentId: transactionId,
                        paymentStatus: 'Paid',
                        ...dynamicData
                    };

                    const submitResponse = await submitFormWithHandler({
                        handler: 'google_sheets',
                        type: 'Paid Workshop Registration',
                        endpoint: '/api/paid-workshop',
                        data: finalData
                    });

                    if (submitResponse.ok) {
                        const emailResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/send-paid-confirmation`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(finalData)
                        });

                        let emailResult = null;
                        try {
                            emailResult = await emailResponse.json();
                        } catch {
                            emailResult = null;
                        }

                        setPaymentId(transactionId);
                        setRegisteredCoursesList(selectedCourseObjects);
                        setPaidAmount(totalAmount);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsSuccess(true);
                        toast.success("Registration completed successfully!");

                        if (!emailResponse.ok || emailResult?.emailSent === false) {
                            toast.warning("Registration was saved, but the paid confirmation email was not sent.");
                        }
                    } else {
                        console.error("Failed to write to sheets: status", submitResponse.status);
                        toast.error("Payment verified but sheets logging failed. Please join the WhatsApp group and share your Payment ID.");
                        setPaymentId(transactionId);
                        setRegisteredCoursesList(selectedCourseObjects);
                        setPaidAmount(totalAmount);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setIsSuccess(true);
                    }
                } catch (error) {
                    console.error("Payment Verification Error:", error);
                    toast.error(`Verification Failed: ${error.message || 'Please check your connection.'}`);
                } finally {
                    setIsSubmitting(false);
                }
            }
        };

        try {
            const rzp = new window.Razorpay(options);
            
            rzp.on('payment.failed', function (resp) {
                console.error("Payment failed", resp.error);
                toast.error(`Payment failed: ${resp.error.description || 'Please try again.'}`);
                setIsSubmitting(false);
            });

            rzp.open();
        } catch (err) {
            console.error("Razorpay initiation failed:", err);
            toast.error("Could not initiate payment. Please try again.");
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
           <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color) rounded-2xl overflow-hidden">
                <Helmet>
                    <script>{`fbq('track', 'CompleteRegistration');`}</script>
                </Helmet>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-8">
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                        <FiCheck size={40} />
                    </div>
                    
                    <h2 className="text-3xl font-semibold text-white tracking-tight mb-3">Registration & Payment Confirmed!</h2>
                    <p className="text-(--color-gray-400) mb-8 leading-relaxed">
                        Your payment of <span className="text-white font-semibold">₹{paidAmount}</span> was processed successfully. 
                        We've registered you for the selected courses in our Masterclass Series.
                    </p>

                    {/* Receipt Details */}
                    <div className="w-full inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all justify-center cursor-pointer shadow-lg shadow-green-950/20">
                        <h4 className="text-white font-medium border-b border-(--guide-color) pb-2 text-sm uppercase tracking-wider">Registration Receipt</h4>
                        <div className="grid grid-cols-2 gap-y-2 text-sm">
                            <span className="text-gray-500">Transaction ID:</span>
                            <span className="text-white font-mono text-right truncate">{paymentId}</span>
                            
                            <span className="text-gray-500">Amount Paid:</span>
                            <span className="text-green-400 font-semibold text-right">₹{paidAmount}</span>
                            
                            <span className="text-gray-500">Status:</span>
                            <span className="text-green-500 text-right font-medium">SUCCESS / PAID</span>
                        </div>
                        <div className="pt-2 border-t border-(--guide-color)">
                            <p className="text-xs text-gray-500 mb-2 font-medium">REGISTERED COURSES:</p>
                            <ul className="space-y-1">
                                {registeredCoursesList.map((course) => (
                                    <li key={course.id} className="text-white text-xs flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                                        <span>{course.title} ({course.date})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4 w-full max-w-sm">
                        <a 
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-md text-sm font-semibold transition-all justify-center cursor-pointer shadow-lg shadow-green-950/20"
                        >
                            <FaWhatsapp className="text-xl" /> Join Live Workshop WhatsApp Group
                        </a>
                        <p className="text-xs text-(--color-gray-500) leading-relaxed">
                            Join the WhatsApp group immediately to receive the calendar invites, syllabus PDFs, preparation notes, and meeting links.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            <SEO 
                title="AI Masterclass Registration | Creozen"
                description="Select AI courses and register for the exclusive paid hands-on workshop series."
                keywords="AI masterclass, Generative AI, RAG, AI Agents, MCP, live training"
                canonical="/paid-workshop"
            />

            {/* --- Hero / Header Section --- */}
            <div  className="  relative  py-24  px-6 md:px-12 border-b border-(--guide-color) overflow-hidden text-center rounded-t-2xl">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <h5 className="text-blue-400 font-medium tracking-wide text-xs uppercase mb-4 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 rounded-full">
                      <BsStars /> Live Intensive Training
                    </h5>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                        AI Masterclass Series
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance mb-8 max-w-2xl mx-auto">
                        Elevate your engineering skills. Register for our hands-on, live interactive workshops. 
                        Build, optimize, and deploy actual production-grade AI applications from scratch.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm p-4 bg-black/40 border border-(--guide-color) rounded-lg max-w-xl mx-auto">
                        <span className="flex items-center gap-2 text-white/90">
                            <FiCalendar className="text-indigo-400" /> July 2026 (Every Sunday)
                        </span>
                        <span className="text-gray-700">|</span>
                        <span className="flex items-center gap-2 text-white/90">
                            <FiClock className="text-indigo-400" /> 2:00 PM – 5:00 PM (IST)
                        </span>
                        <span className="text-gray-700">|</span>
                        <span className="flex items-center gap-2 text-white/90">
                            <FiMonitor className="text-indigo-400" /> Live Virtual Interactive
                        </span>
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- Course Selection Area --- */}
            <div className="p-8 md:p-12 lg:p-16 border-b border-(--guide-color)">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                                1. Choose Your Masterclasses
                            </h2>
                            <p className="text-sm text-(--color-gray-500)">
                                Check the workshops you wish to attend. Get access to session recordings, code templates, and notes.
                            </p>
                        </div>

                        {!isAllSelected && (
                            <button
                                type="button"
                                onClick={selectAllCourses}
                                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 px-5 py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
                            >
                                Select All 4 Courses
                            </button>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {COURSES.map((course) => {
                            const isSelected = selectedCourses.includes(course.id);
                            const IconComponent = course.icon;
                            
                            const isExpanded = expandedCourses.includes(course.id);
                            const visibleSyllabus = isExpanded ? course.syllabus : course.syllabus.slice(0, 2);

                            return (
                                <div
                                    key={course.id}
                                    onClick={() => handleCourseToggle(course.id)}
                                    className={`
                                        group relative p-6 bg-black/60 border rounded-xl transition-all duration-300 cursor-pointer flex flex-col justify-between h-full select-none
                                        ${isSelected 
                                            ? 'border-indigo-500 shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)] bg-gradient-to-br ' + course.color 
                                            : 'border-(--guide-color) hover:border-white/20'
                                        }
                                    `}
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`p-2.5 rounded-lg bg-white/5 border border-white/10 ${course.textColor}`}>
                                                    <IconComponent className="text-xl" />
                                                </div>
                                                <h3 className="text-base font-semibold text-white leading-snug group-hover:text-indigo-300 transition-colors">
                                                    {course.title}
                                                </h3>
                                            </div>

                                            <div className={`
                                                w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0
                                                ${isSelected 
                                                    ? 'bg-indigo-500 border-indigo-500 text-white' 
                                                    : 'border-(--guide-color) group-hover:border-white/40'
                                                }
                                            `}>
                                                {isSelected ? <FiCheck className="text-xs stroke-[3]" /> : <FiPlus className="text-gray-500 text-sm opacity-0 group-hover:opacity-100" />}
                                            </div>
                                        </div>

                                        {/* Date and Time Info */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-(--color-gray-400) font-medium mb-5 bg-black/40 border border-white/5 py-2 px-3 rounded-md">
                                            <span className="flex items-center gap-1.5">
                                                <FiCalendar className="text-gray-500" /> {course.date}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <FiClock className="text-gray-500" /> {course.time}
                                            </span>
                                        </div>

                                        {/* Syllabus Outline */}
                                        <div className="space-y-2 mb-4">
                                            <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">What you'll learn:</p>
                                            <ul className="space-y-2">
                                                {visibleSyllabus.map((item, idx) => (
                                                    <li key={idx} className="text-xs text-(--color-gray-400) flex items-start gap-2 leading-relaxed">
                                                        <span className="mt-1 w-1 h-1 rounded-full bg-gray-600 shrink-0"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {course.syllabus.length > 2 && (
                                                <button 
                                                    onClick={(e) => toggleSyllabus(e, course.id)}
                                                    className="flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 mt-2"
                                                >
                                                    {isExpanded ? (
                                                        <><FiChevronUp /> Show Less</>
                                                    ) : (
                                                        <><FiChevronDown /> View Full Syllabus (+{course.syllabus.length - 2} more)</>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Cost Line */}
                                    <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <span className="text-xs text-gray-500">Live 3-Hour Masterclass</span>
                                        <span className="text-sm font-semibold text-white">₹{course.fee}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- Registration Form & Summary --- */}
            <div className="p-8 md:p-12 lg:p-16 bg-(--bg-primary)">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Form Column */}
                        <div className="lg:col-span-7 space-y-8">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
                                    2. Participant Details
                                </h2>
                                <p className="text-sm text-(--color-gray-500)">
                                    Please enter the contact details of the person attending the training.
                                </p>
                            </div>

                            <form id="paid-registration-form" className="space-y-6" onSubmit={handlePaymentAndRegistration}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Full Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Email Address *
                                        </label>
                                        <input 
                                            type="email" 
                                            id="email"
                                            required
                                            placeholder="john.doe@company.com"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Mobile Number Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="mobile" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Mobile / Whatsapp Number *
                                        </label>
                                        <input 
                                            type="tel" 
                                            id="mobile"
                                            required
                                            placeholder="e.g. +91 9876543210"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </div>

                                    {/* Occupation Dropdown */}
                                    <div className="space-y-2">
                                        <label htmlFor="occupation" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Occupation *
                                        </label>
                                        <div className="relative">
                                            <select 
                                                id="occupation"
                                                required
                                                value={occupation}
                                                onChange={(e) => setOccupation(e.target.value)}
                                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 appearance-none pr-10 cursor-pointer"
                                            >
                                                <option value="" disabled>Select your role</option>
                                                <option value="Student">Student</option>
                                                <option value="Professional">Professional</option>
                                                <option value="Business">Business Owner / Founder</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                {/* Dynamic Fields based on Occupation */}
                                {occupation === 'Student' && (
                                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                                        <label htmlFor="college" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            College / University Name *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="college"
                                            required
                                            placeholder="e.g. IIT Madras, MIT, Delhi University"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </motion.div>
                                )}

                                {occupation === 'Professional' && (
                                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="company" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                                Company Name *
                                            </label>
                                            <input 
                                                type="text" 
                                                id="company"
                                                required
                                                placeholder="e.g. Google, TCS, Startup Corp"
                                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="designation" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                                Designation *
                                            </label>
                                            <input 
                                                type="text" 
                                                id="designation"
                                                required
                                                placeholder="e.g. Software Engineer, Tech Lead"
                                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {occupation === 'Business' && (
                                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                                        <label htmlFor="businessType" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Type of Business / Domain *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="businessType"
                                            required
                                            placeholder="e.g. E-commerce, AI SaaS Agency, Consulting"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </motion.div>
                                )}

                                {occupation === 'Others' && (
                                    <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                                        <label htmlFor="otherOccupation" className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                                            Briefly Describe Your Role / Motivation *
                                        </label>
                                        <input 
                                            type="text" 
                                            id="otherOccupation"
                                            required
                                            placeholder="Tell us what you do"
                                            className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                                        />
                                    </motion.div>
                                )}
                            </form>
                        </div>

                        {/* Summary & Pricing Column */}
                        <div className="lg:col-span-5 space-y-6 bg-black/40 border border-(--guide-color) p-6 md:p-7 rounded-2xl">
                            <h3 className="text-lg font-semibold text-white border-b border-(--guide-color) pb-3">
                                Order Summary
                            </h3>

                            {/* List Selected Items */}
                            <div className="space-y-3">
                                {selectedCourses.map((courseId) => {
                                    const course = COURSES.find(c => c.id === courseId);
                                    if (!course) return null;
                                    return (
                                        <div key={course.id} className="flex justify-between items-start gap-4 text-xs">
                                            <div>
                                                <p className="text-white font-medium">{course.title}</p>
                                                <p className="text-gray-500">{course.date}</p>
                                            </div>
                                            <span className="text-white font-mono shrink-0">₹{course.fee}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="border-t border-(--guide-color) pt-4 space-y-3">
                                {/* Subtotal */}
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Selected Classes ({selectedCourses.length})</span>
                                    <span className="font-mono">₹{subtotal}</span>
                                </div>

                                {/* Promo Code Input */}
                                <div className="flex flex-col gap-1 pt-1">
                                    <div className="flex gap-2">
                                        <input 
                                            type="text" 
                                            value={promoInput}
                                            onChange={(e) => {
                                                setPromoInput(e.target.value);
                                                if (promoError) setPromoError('');
                                            }}
                                            placeholder="Promo Code" 
                                            className="w-full bg-black border border-(--guide-color) p-2 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 rounded transition-colors uppercase"
                                        />
                                        <button 
                                            type="button"
                                            onClick={handleApplyPromo}
                                            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-xs font-medium rounded transition-colors cursor-pointer"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                    {promoError && (
                                        <span className="text-red-500 text-[10px] leading-tight px-1">{promoError}</span>
                                    )}
                                </div>
                                
                                {/* Promo Code Applied */}
                                {promoDiscount > 0 && appliedPromo.code && (
                                    <div className="flex justify-between text-xs text-indigo-400 font-medium bg-indigo-950/20 border border-indigo-500/10 p-2.5 rounded">
                                        <span>Promo: {appliedPromo.code}{appliedPromo.code === 'B3SAVE40' ? ' (40%)' : appliedPromo.code === 'B2SAVE15' ? ' (15%)' : ''}</span>
                                        <span className="font-mono">-₹{promoDiscount}</span>
                                    </div>
                                )}

                                {/* Total Price */}
                                <div className="flex justify-between items-end pt-2 border-t border-(--guide-color)">
                                    <span className="text-sm font-semibold text-white">Total Amount</span>
                                    <span className="text-xl font-bold text-white font-mono">₹{totalAmount}</span>
                                </div>
                            </div>

                            {/* Trust Badges / Notice */}
                            <div className="flex items-start gap-3 text-xs text-gray-500 bg-white/[0.02] border border-white/5 p-3 rounded leading-relaxed">
                                <FiAlertCircle className="text-indigo-400 text-base shrink-0 mt-0.5" />
                                <p>
                                    Secure payments via Razorpay. Support for UPI, cards, Netbanking, and wallets. Session schedules are in Indian Standard Time (IST).
                                </p>
                            </div>

                            {/* Main Pay Button */}
                            <button
                                type="submit"
                                form="paid-registration-form"
                                disabled={isSubmitting}
                                className={` w-full group flex items-center justify-center gap-3 bg-white text-black px-6 py-4  text-sm font-bold rounded-xl transition-all duration-300 shadow-lg shadow-white/5
                                ${isSubmitting
                                   ? 'opacity-70 cursor-not-allowed'
                                   : 'hover:bg-blue-50 hover:scale-[1.01] cursor-pointer'
                                 }
                               `}
                            >
                                {isSubmitting ? (
                                    <>
                                        <FiLoader className="animate-spin text-lg" /> Loading Razorpay...
                                    </>
                                ) : (
                                    <>
                                        Register & Pay ₹{totalAmount}
                                        <FiArrowRight className="group-hover:translate-x-1 transition-transform text-lg" />
                                    </>
                                )}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
