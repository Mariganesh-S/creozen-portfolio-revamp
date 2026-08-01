import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FiArrowRight, FiLinkedin, FiLink, FiCheck, FiBriefcase, FiUser, FiMail, FiPhone, FiFileText } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { submitForm } from '../services/emailService';

export const CareersForm = () => {
    const [searchParams] = useSearchParams();
    const [step, setStep] = useState(1);
    const [selectedRole, setSelectedRole] = useState("");

    // Pre-select role from URL
    useEffect(() => {
        const roleParam = searchParams.get('role');
        if (roleParam) {
            const roleMap = {
                "ai-engineer": "Senior AI Engineer",
                "frontend-dev": "Frontend Developer",
                "sales-manager": "Enterprise Sales Manager",
                "product-designer": "Product Designer (UI/UX)",
                "ml-instructor": "Machine Learning Instructor",
                "marketing-specialist": "Marketing Specialist"
            };
            setSelectedRole(roleMap[roleParam] || roleParam);
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = {
            fullName: e.target.fullName.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            role: selectedRole,
            linkedIn: e.target.linkedIn.value,
            portfolio: e.target.portfolio.value,
            resumeLink: e.target.resumeLink.value,
            coverLetter: e.target.coverLetter.value
        };

        try {
            const response = await submitForm({ 
                type: 'Careers Form', 
                endpoint: '/api/apply', 
                data: formData 
            });

            if (response.ok) {
                setStep(2);
            } else {
                alert("Failed to submit application. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Server error.");
        }
    };

    return (
        <section className="animate-in fade-in duration-700 bg-(--bg-primary) max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            
            <SEO 
                title="Submit Job Application - Creozen Careers"
                description="Apply to join the Creozen team. Submit your resume, portfolio, and details for open positions in AI and software engineering."
                canonical="/careers/apply"
            />

            {/* --- Hero Section --- */}
            <div className="relative py-24 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden text-center">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h5 className="text-blue-400 font-medium tracking-wide text-sm uppercase mb-4 inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 px-3 py-1 rounded-full">
                        <BsStars /> Join the team
                    </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Submit Application
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed text-balance">
                        Ready to build the future of AI? Send us your details.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- Form Section --- */}
            <div className="border-x border-b border-(--guide-color) flex justify-center bg-(--bg-primary)">
                <div className="w-full max-w-4xl border-x border-(--guide-color) bg-black">
                    <div className="p-8 md:p-12 lg:p-16">
                        
                        {step === 1 && (
                            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                
                                {/* 1. Personal Info */}
                                <div>
                                    <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-(--color-gray-800) text-xs flex items-center justify-center border border-(--guide-color)">1</span>
                                        Personal Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Full Name <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="fullName" required type="text" className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="John Doe" />
                                                <FiUser className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Email Address <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="email" required type="email" className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="john@example.com" />
                                                <FiMail className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Phone Number <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input name="phone" required type="tel" className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" />
                                                <FiPhone className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Applying For <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <select 
                                                    required 
                                                    value={selectedRole}
                                                    onChange={(e) => setSelectedRole(e.target.value)}
                                                    className="w-full appearance-none bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors cursor-pointer"
                                                >
                                                    <option value="" disabled>Select a role</option>
                                                    <option value="Machine Learning Instructor">Machine Learning Instructor</option>
                                                    <option value="Marketing Specialist">Marketing Specialist</option>
                                                    <option value="General Application">General Application</option>
                                                </select>
                                                <FiBriefcase className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. Links & Resume */}
                                <div>
                                    <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-(--color-gray-800) text-xs flex items-center justify-center border border-(--guide-color)">2</span>
                                        Profile & Resume
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">LinkedIn Profile</label>
                                            <div className="relative">
                                                <input name="linkedIn" type="url" className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="https://linkedin.com/in/..." />
                                                <FiLinkedin className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-(--color-gray-400)">Portfolio / GitHub</label>
                                            <div className="relative">
                                                <input name="portfolio" type="url" className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" placeholder="https://github.com/..." />
                                                <FiLink className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- UPDATED: Resume Link Input --- */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-(--color-gray-400) flex justify-between">
                                            <span>Resume Link *</span>
                                            <span className="text-xs text-(--color-gray-500) font-normal">Google Drive / Dropbox (Ensure Public Access)</span>
                                        </label>
                                        <div className="relative">
                                            <input 
                                                name="resumeLink"
                                                required 
                                                type="url" 
                                                className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 pl-10 text-white text-sm focus:border-white focus:outline-none transition-colors" 
                                                placeholder="https://drive.google.com/file/d/..." 
                                            />
                                            <FiFileText className="absolute left-3.5 top-3.5 text-(--color-gray-600)" />
                                        </div>
                                    </div>
                                </div>

                                {/* 3. Additional Info */}
                                <div>
                                    <h3 className="text-white font-medium mb-6 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-(--color-gray-800) text-xs flex items-center justify-center border border-(--guide-color)">3</span>
                                        Additional Info
                                    </h3>
                                    <div className="space-y-2">
                                        <label className="text-sm text-(--color-gray-400)">Cover Letter (Optional)</label>
                                        <textarea 
                                            name="coverLetter"
                                            rows="4" 
                                            className="w-full bg-(--bg-primary) border border-(--guide-color) p-3 text-white text-sm focus:border-white focus:outline-none transition-colors resize-none" 
                                            placeholder="Tell us why you're a great fit..."
                                        ></textarea>
                                    </div>
                                </div>

                                {/* Submit */}
                                <div className="pt-4 flex justify-end border-t border-(--guide-color)">
                                    <button 
                                        type="submit"
                                        className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-(--color-gray-200) transition-colors flex items-center gap-2 cursor-pointer"
                                    >
                                        Submit Application <FiArrowRight />
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Success State */}
                        {step === 2 && (
                            <div className="flex flex-col items-center justify-center text-center py-12 animate-in zoom-in-95 duration-500">
                                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center text-green-500 mb-6">
                                    <FiCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-2">Application Received!</h3>
                                <p className="text-(--color-gray-400) max-w-sm mb-8 text-balance">
                                    Thank you for applying. We will review your profile and reach out if there's a match.
                                </p>
                                <div className="flex gap-4">
                                    <Link to="/">
                                        <button className="text-white border border-(--guide-color) px-6 py-2 rounded hover:bg-white hover:text-black transition-all text-sm cursor-pointer">
                                            Back to Home
                                        </button>
                                    </Link>
                                    <Link to="/careers">
                                        <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition-all text-sm cursor-pointer">
                                            View More Jobs
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};