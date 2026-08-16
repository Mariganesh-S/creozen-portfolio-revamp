import { FiArrowRight, FiLink, FiChevronDown, FiFileText, FiLoader } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { GridSeparator } from '../components/separator/GridSeperator';
import { useState } from 'react';
import { toast } from 'sonner';
import { SEO } from '../components/utils/SEO';
import { submitForm } from '../services/emailService';

export const Forms = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const formData = {
            name: e.target.name.value,
            designation: e.target.designation.value,
            email: e.target.email.value,
            company: e.target.company.value,
            videoLink: e.target.video.value,
            description: e.target.description.value,
        };

        try {
            const response = await submitForm({
                type: 'Demo Application Form',
                endpoint: '/api/demo',
                data: formData
            });

            if (response.ok) {
                toast.success("Application submitted successfully!");
                e.target.reset();
            } else {
                toast.error("Something went wrong. Please check your details.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Server connection failed.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className=" animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color) rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/5">
            
            <SEO 
                title="Book a Product Demo - Smart Vision & University Suite"
                description="Schedule a personalized demo of Creozen's AI platforms. Experience Assessly, IntraQuest, or our Smart Vision Analytics in action."
                canonical="/forms"
            />

            {/* --- 1. Hero Section --- */}
            <div className="  relative  py-24  md:py-28  px-6  md:px-12  border-x  border-(--guide-color)  overflow-hidden text-center   bg-gradient-to-b from-purple-500/5 to-transparent">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto">
                    <h5 className=" text-purple-300 font-medium tracking-wide text-sm uppercase mb-4 inline-flex items-center gap-2 border  border-purple-500/30  bg-purple-500/10  px-4  py-2 rounded-full  transition-all  duration-300  hover:bg-purple-500/20  hover:scale-105">
                        <BsStars /> Early Access
                    </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Apply for Demo
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance">
                        Submit your details below to schedule a personalized walkthrough of our ecosystem. We'll get back to you soon.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- 2. Form Container --- */}
            <div className="border-x border-b border-(--guide-color) flex justify-center bg-(--bg-primary)">
                
                {/* Wrapper to control width and center it */}
                <div className=" w-full max-w-4xl border-x border-(--guide-color) bg-black rounded-2xl overflow-hidden">
                    
                    <div className="p-8 md:p-12 lg:p-16">
                        <form className="space-y-8" onSubmit={handleSubmit}>
                            
                            {/* --- Row 1: Name & Designation --- */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        id="name"
                                        placeholder="Enter your full name"
                                        className=" w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-non focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"required/>
                                </div>

                                {/* Designation (Select) */}
                                <div className="space-y-2 relative">
                                    <label htmlFor="designation" className="text-sm font-medium text-white">
                                        Designation <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select 
                                            id="designation"
                                            className=" w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                                            required
                                            defaultValue=""
                                        >
                                            <option value="" disabled className="text-(--color-gray-600)">Select your role</option>
                                            <option value="student">Student</option>
                                            <option value="employee">Employee</option>
                                            <option value="business_owner">Business Owner</option>
                                            <option value="others">Others</option>
                                        </select>
                                        <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-(--color-gray-500) pointer-events-none" />
                                    </div>
                                </div>
                            </div>

                            {/* --- Row 2: Email & Company --- */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Email ID */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white">
                                        Email ID <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        placeholder="you@company.com"
                                        className="w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-purple-500 focus:ring-2  focus:ring-purple-500/20  transition-all duration-300"
                                        required
                                    />
                                </div>

                                {/* Company Name */}
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium text-white">
                                        Company / Institution Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="company"
                                        placeholder="Acme Corp / University of X"
                                        className="w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-purple-500  focus:ring-2  focus:ring-purple-500/20  transition-all  duration-300"/>
                                </div>
                            </div>

                            {/* --- Row 3: Video Link --- */}
                            <div className="space-y-2">
                                <label htmlFor="video" className="text-sm font-medium text-white flex justify-between">
                                    <span>Sample Video Link <span className="text-red-500">*</span></span>
                                    <span className="text-xs text-(--color-gray-500) font-normal">Google Drive (Access Enabled)</span>
                                </label>
                                <div className="relative">
                                    <input 
                                        type="url" 
                                        id="video"
                                        placeholder="https://drive.google.com/file/d/..."
                                        className=" w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20   transition-all duration-300"
                                    />
                                    <FiLink className="absolute left-3.5 top-1/2 -translate-y-1/2 text-(--color-gray-500)" />
                                </div>
                                <p className="text-[10px] text-(--color-gray-500)">
                                    Please ensure the link permission is set to "Anyone with the link".
                                </p>
                            </div>

                            {/* --- Row 4: Description --- */}
                            <div className="space-y-2">
                                <label htmlFor="description" className="text-sm font-medium text-white">
                                    Description / Use Case
                                </label>
                                <div className="relative">
                                    <textarea 
                                        id="description"
                                        rows="4"
                                        placeholder="Briefly describe how you plan to use our solutions..."
                                        className=" w-full bg-(--bg-primary) border border-(--guide-color) rounded-xl p-3.5 text-sm text-white placeholder:text-(--color-gray-600) focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300">  
                              </textarea>
                                    <FiFileText className="absolute left-3.5 top-4 text-(--color-gray-500)" />
                                </div>
                            </div>

                            {/* --- Submit Button --- */}
                            <div className="pt-4 flex justify-end">
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={` w-full md:w-auto group flex items-center  justify-center gap-3 rounded-full border border-white/20 bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300
                                     ${isSubmitting
                                     ? 'opacity-70 cursor-not-allowed'
                                     : 'hover:bg-transparent hover:text-white hover:border-white hover:scale-105 cursor-pointer'
                                     }
                                       `}>
                                    {isSubmitting ? (
                                        <>
                                            <FiLoader className="animate-spin" /> Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </div>
                            
                            <p className="text-xs text-center text-(--color-gray-600) pt-4">
                                By submitting this form, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};