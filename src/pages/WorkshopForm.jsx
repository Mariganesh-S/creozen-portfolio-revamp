import { motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BsStars } from 'react-icons/bs';
import { FiArrowRight, FiCheck, FiLoader, FiDownload, FiCalendar, FiClock, FiMonitor } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { submitFormWithHandler } from '../services/emailService';

import workshopPdf from "../assets/workshop/Free Workshop - RAG.pdf";

export const WorkshopForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [occupation, setOccupation] = useState('');
    const WHATSAPP_LINK = "https://chat.whatsapp.com/B8neQSwR1qSGTPCmBA2IvI?s=sw&p=a&ilr=1&amv=1";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = {
            timestamp: new Date().toLocaleString(),
            name: e.target.name.value,
            email: e.target.email.value,
            mobile: e.target.mobile.value,
            occupation: e.target.occupation.value,
        };

        if (occupation === 'Student') {
            formData.college = e.target.college.value;
        } else if (occupation === 'Professional') {
            formData.company = e.target.company.value;
            formData.designation = e.target.designation.value;
        } else if (occupation === 'Business') {
            formData.businessType = e.target.businessType.value;
        } else if (occupation === 'Others') {
            formData.otherOccupation = e.target.otherOccupation.value;
        }

        try {
            const response = await submitFormWithHandler({
                handler: 'google_sheets',
                type: 'Free Workshop Registration',
                endpoint: '/api/workshop',
                data: formData
            });

            if (response.ok) {
                toast.success("Workshop registration successful!");
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsSuccess(true);
            } else {
                toast.error("Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server error. Please try later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color) min-h-[60vh] flex items-center justify-center p-6 text-center">
                <Helmet>
                    <script>{`fbq('track', 'CompleteRegistration');`}</script>
                </Helmet>
                <div className="flex flex-col items-center justify-center text-center py-12 animate-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6 mx-auto">
                        <FiCheck size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Registration Successful!</h3>
                    <p className="text-(--color-gray-400) max-w-sm mb-8 text-balance mx-auto">
                        Thank you for registering for our workshop. Please join our WhatsApp Community Group for updates.
                    </p>
                    <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded text-sm font-medium transition-colors justify-center cursor-pointer"
                    >
                        <FaWhatsapp className="text-lg text-green-600" /> Join WhatsApp Group
                    </a>
                </div>
            </section>
        );
    }

    return (
            <section
    className="
        animate-in fade-in duration-700
        bg-(--bg-primary)
        max-w-(--content-max-width)
        mx-auto
        my-12 md:my-20
        border border-(--guide-color)
        rounded-3xl
        overflow-hidden
    "
>
            
            <SEO 
                title="Workshop Registration | Creozen"
                description="Register for the Creozen Workshop and join our exclusive community."
                keywords="creozen workshop, AI workshop, tech community"
                canonical="/workshop-form"
            />

            {/* --- Hero Section --- */}
            <div
    className="
        relative
        py-24
        px-6 md:px-12
        border-b border-(--guide-color)
        overflow-hidden
        text-center
        rounded-t-3xl
    "
>
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h5 className="text-blue-400 font-medium tracking-wide text-sm uppercase mb-4 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full">
                        <BsStars /> Join Us
                    </h5>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        Workshop Registration
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance mb-6">
                        Join us for a hands-on workshop where you'll learn how to build a <span className="text-white font-medium">complete AI-powered application</span> using <span className="text-purple-400 font-medium">RAG Pipelines (Ingestion and Inference)</span>.
                    </p>
                    
                    <div
    className="
        flex flex-wrap
        items-center
        justify-center
        gap-4 md:gap-8
        text-sm md:text-base
        p-5
        mb-8
        max-w-3xl
        mx-auto
        bg-black/40
        border border-(--guide-color)
        rounded-2xl
        shadow-[0_0_30px_-10px_rgba(59,130,246,0.1)]
    "
>
                        <span className="flex items-center gap-2 text-white/90 font-medium">
                            <FiCalendar className="text-blue-400 text-lg" /> 13 July 2026
                        </span>
                        <span className="hidden md:inline text-gray-500/30">|</span>
                        <span className="flex items-center gap-2 text-white/90 font-medium">
                            <FiClock className="text-blue-400 text-lg" /> 07:00 PM – 09:00 PM (IST)
                        </span>
                        <span className="hidden md:inline text-gray-500/30">|</span>
                        <span className="flex items-center gap-2 text-white/90 font-medium">
                            <FiMonitor className="text-blue-400 text-lg" /> Online Event
                        </span>
                    </div>
                    
                    <a 
                        href={workshopPdf}
                        download="Workshop_Notice_Creozen.pdf"
                        className="
    inline-flex
    items-center
    gap-2
    bg-white/10
    hover:bg-white/20
    border border-white/20
    text-white
    px-6 py-3
    rounded-xl
    text-sm
    font-medium
    transition-all duration-200
    cursor-pointer
"
                    >
                        <FiDownload className="text-lg" /> Download Full Syllabus & Notice
                    </a>
                </div>
            </div>

            <GridSeparator />

            {/* --- Main Content Form --- */}
            <div className="p-8 md:p-12 lg:p-16 bg-(--bg-primary)">
                <form className="max-w-2xl mx-auto space-y-8" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-white">
                                Name *
                            </label>
                            <input 
                                type="text" 
                                id="name"
                                required
                                placeholder="Your full name"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white">
                                Email ID *
                            </label>
                            <input 
                                type="email" 
                                id="email"
                                required
                                placeholder="name@domain.com"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Mobile Number Input */}
                        <div className="space-y-2">
                            <label htmlFor="mobile" className="text-sm font-medium text-white">
                                Mobile Number *
                            </label>
                            <input 
                                type="tel" 
                                id="mobile"
                                required
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </div>

                        {/* Occupation Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="occupation" className="text-sm font-medium text-white">
                                Occupation *
                            </label>
                            <select 
                                id="occupation"
                                required
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200 appearance-none"
                            >
                                <option value="" disabled>Select your occupation</option>
                                <option value="Student">Student</option>
                                <option value="Professional">Professional</option>
                                <option value="Business">Business</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                    </div>

                    {/* Dynamic Fields based on Occupation */}
                    {occupation === 'Student' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                            <label htmlFor="college" className="text-sm font-medium text-white">
                                College / University Name (Optional)
                            </label>
                            <input 
                                type="text" 
                                id="college"
                                placeholder="Enter your institution"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </motion.div>
                    )}

                    {occupation === 'Professional' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-white">
                                    Company Name (Optional)
                                </label>
                                <input 
                                    type="text" 
                                    id="company"
                                    placeholder="Enter your company"
                                    className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="designation" className="text-sm font-medium text-white">
                                    Designation (Optional)
                                </label>
                                <input 
                                    type="text" 
                                    id="designation"
                                    placeholder="e.g. Software Engineer"
                                    className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                                />
                            </div>
                        </motion.div>
                    )}

                    {occupation === 'Business' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                            <label htmlFor="businessType" className="text-sm font-medium text-white">
                                What kind of business? (Optional)
                            </label>
                            <input 
                                type="text" 
                                id="businessType"
                                placeholder="Describe your business"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </motion.div>
                    )}

                    {occupation === 'Others' && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="space-y-2">
                            <label htmlFor="otherOccupation" className="text-sm font-medium text-white">
                                Please specify (Optional)
                            </label>
                            <input 
                                type="text" 
                                id="otherOccupation"
                                placeholder="Enter details"
                                className="w-full bg-black border border-(--guide-color) p-3 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all duration-200"
                            />
                        </motion.div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4 flex justify-end">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className={`
    group
    flex
    items-center
    gap-2
    bg-white
    text-black
    px-8
    py-3.5
    rounded-xl
    text-sm
    font-semibold
    transition-all duration-200
    shadow-lg shadow-white/5
    ${
        isSubmitting
            ? 'opacity-70 cursor-not-allowed'
            : 'hover:bg-(--color-gray-200) hover:scale-[1.02] cursor-pointer'
    }
`}
                        >
                            {isSubmitting ? (
                                <>
                                    <FiLoader className="animate-spin" /> Submitting...
                                </>
                            ) : (
                                <>
                                    Register 
                                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
