import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { FiArrowRight, FiHelpCircle, FiLoader, FiMail, FiMapPin, FiMessageSquare, FiMinus, FiPhone, FiPlus } from 'react-icons/fi';
import { toast } from 'sonner';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { submitForm } from '../services/emailService';

/* --- FAQ DATA --- */
const FAQS = [
    {
        question: "How quickly can I expect a response?",
        answer: "We typically respond to all inquiries within 24 business hours. For existing enterprise clients with SLA agreements, response times are immediate via your dedicated support channel."
    },
    {
        question: "Do you offer custom AI solutions or just off-the-shelf products?",
        answer: "Both. We have a suite of ready-to-deploy platforms (like Assessly and IntraQuest), but a significant part of our business involves building bespoke Generative AI and Computer Vision solutions tailored to specific industry needs."
    },
    {
        question: "Is my data secure with Creozen?",
        answer: "Security is our priority. We adhere to GDPR and local data protection regulations. Our enterprise solutions offer on-premise deployment options or private cloud instances to ensure your proprietary data never leaves your control."
    },
    {
        question: "Can I request a product demo before purchasing?",
        answer: "Absolutely. You can book a personalized demo for any of our University or Smart Vision products through our 'Forms' page or by scheduling a meeting directly."
    },
    {
        question: "Do you provide post-deployment support?",
        answer: "Yes, we offer various support tiers ranging from standard maintenance to 24/7 critical support. You can view our Service Level Agreements (SLA) page for detailed options."
    }
];

/* --- ACCORDION COMPONENT --- */
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-(--guide-color)">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="
    w-full
    py-6
    flex
    items-center
    justify-between
    text-left
    group
    cursor-pointer
    transition-all
    duration-300
    hover:px-3
"
            >
                <span className={`text-base font-medium transition-colors ${isOpen ? 'text-white' : 'text-(--color-gray-400) group-hover:text-white'}`}>
                    {question}
                </span>
                <span className={`ml-4 text-(--color-gray-500) transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-sm text-(--color-gray-500) leading-relaxed max-w-2xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false); // State for button

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Start loading

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        try {
            const response = await submitForm({
                type: 'Contact Form',
                endpoint: '/api/contact',
                data: formData
            });

            if (response.ok) {
                toast.success("Message sent successfully!"); // Success Notification
                e.target.reset();
            } else {
                toast.error("Failed to send message. Please try again."); // Error Notification
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server error. Please try later.");
        } finally {
            setIsSubmitting(false); // Stop loading regardless of outcome
        }
    };

    return (
        <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color) rounded-3xl overflow-hidden">
            
            <SEO 
                title="Contact Us - AI Consultancy & Support | Creozen"
                description="Get in touch with Creozen. Reach our London or Chennai offices for enterprise AI solutions, partnerships, or support inquiries."
                keywords="contact creozen, AI consultancy london, software support, enterprise AI contact"
                canonical="/contact"
            />

            {/* --- 1. Hero Section --- */}
            <div className="relative py-24 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h5 className="text-(--color-gray-300) font-medium tracking-wide text-sm uppercase mb-4 inline-flex items-center gap-2 border border-(--guide-color) bg-(--color-black-900) px-4 py-2 rounded-full">
                     <BsStars />
                      Get in touch
                     </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance">
                        We're here to help. Reach out to us with any questions or to discuss your project.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- 2. Main Content Grid --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-(--guide-color) min-h-[600px]">
                
                {/* --- LEFT COLUMN: Contact Form (2/3 width) --- */}
                <div className="lg:col-span-2 p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-(--guide-color) bg-(--bg-primary)">
                    <form className="max-w-xl mx-auto space-y-8" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white">
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                placeholder="John Doe"
                                className="
    w-full
    rounded-xl
    bg-black
    border
    border-(--guide-color)
    px-4
    py-3
    text-sm
    text-white
    placeholder:text-(--color-gray-600)
    outline-none
    transition-all
    duration-300
    focus:border-white-500
    focus:ring-2
    focus:ring-white-500/20
"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white">
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                placeholder="john@company.com"
                                className="
    w-full
    rounded-xl
    bg-black
    border
    border-(--guide-color)
    px-4
    py-3
    text-sm
    text-white
    placeholder:text-(--color-gray-600)
    outline-none
    transition-all
    duration-300
    focus:border-white-500
    focus:ring-2
    focus:ring-white-500/20
"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-white">
                                Your Message
                            </label>
                            <textarea 
                                id="message"
                                rows="5"
                                placeholder="Tell us about your project..."
                                className="
    w-full
    rounded-xl
    bg-black
    border
    border-(--guide-color)
    px-4
    py-3
    text-sm
    text-white
    placeholder:text-(--color-gray-600)
    outline-none
    transition-all
    duration-300
    focus:border-white-500
    focus:ring-2
    focus:ring-white-500/20
    resize-none
"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button
    type="submit"
    disabled={isSubmitting}
    className={`group flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold border border-white transition-all duration-300
    ${
        isSubmitting
            ? 'opacity-60 cursor-not-allowed'
            : 'hover:bg-black hover:text-white hover:translate-x-1 cursor-pointer'
    }`}
>
    {isSubmitting ? (
        <>
            <FiLoader className="animate-spin" />
            Sending...
        </>
    ) : (
        <>
            Send Message
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </>
    )}
</button>
                        </div>
                    </form>
                </div>

                {/* --- RIGHT COLUMN: Contact Info (1/3 width) --- */}
                <div className="lg:col-span-1 bg-black flex flex-col">
                    
                    {/* Header */}
                    <div className="p-8 border-b border-(--guide-color)">
                        <h3 className="text-lg font-medium text-white mb-1">Contact Information</h3>
                        <p className="text-sm text-(--color-gray-500)">Direct channels to reach our team.</p>
                    </div>

                    {/* Info List */}
                    <div className="flex-1 divide-y divide-(--guide-color)">
                        
                        {/* Email Block */}
                         <div className="p-8 hover:bg-(--color-black-900) transition-colors group">
                            <div className="flex items-center gap-3 mb-3 text-(--color-gray-400) group-hover:text-white transition-colors">
                                <FiMail className="text-xl" />
                                <span className="text-xs font-mono uppercase tracking-wider">Email</span>
                            </div>
                            <a href="mailto:creozen@creozen.co.uk" className="text-lg text-white hover:text-blue-400 transition-colors">
                                creozen@creozen.co.uk
                            </a>
                        </div>

                        {/* Phone Block */}
                        <div className="p-8 hover:bg-(--color-black-900) transition-colors group">
                            <div className="flex items-center gap-3 mb-3 text-(--color-gray-400) group-hover:text-white transition-colors">
                                <FiPhone className="text-xl" />
                                <span className="text-xs font-mono uppercase tracking-wider">Phone</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--color-gray-500)">UK</span>
                                    <span className="text-white">+44 7586 393443</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-(--color-gray-500)">IN</span>
                                    <span className="text-white">+91 6381738184</span>
                                </div>
                            </div>
                        </div>

                        {/* Address Block */}
                        <div className="p-8 hover:bg-(--color-black-900) transition-colors group">
                            <div className="flex items-center gap-3 mb-3 text-(--color-gray-400) group-hover:text-white transition-colors">
                                <FiMapPin className="text-xl" />
                                <span className="text-xs font-mono uppercase tracking-wider">Address</span>
                            </div>
                            <address className="text-base text-white not-italic leading-relaxed">
                                Creozen Ltd,<br />
                                124 City Road,<br />
                                London EC1V 2NX.
                            </address>
                        </div>

                         {/* Support Block */}
                        <div className="p-8 bg-(--bg-primary) flex-1">
                            <div className="border border-(--guide-color) rounded-2xl p-5 text-center bg-black">
                                <FiMessageSquare className="mx-auto text-(--color-gray-600) mb-2" />
                                <p className="text-xs text-(--color-gray-500)">
                                    We'd love to hear from you. <br />
                                    <span className="text-white">
                                        Send us a message and we'll get back to you soon.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- 3. FAQ SECTION --- */}
            <div className="border-x border-b border-(--guide-color) bg-(--bg-primary) p-8 md:p-16 lg:p-24">
                <div className="max-w-3xl mx-auto">
                    {/* FAQ Header */}
                    <div className="flex items-center gap-3 mb-8">
                        <FiHelpCircle className="text-2xl text-blue-400" />
                        <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>
                    </div>

                    {/* FAQ List */}
                    <div className="border-t border-(--guide-color)">
                        {FAQS.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};