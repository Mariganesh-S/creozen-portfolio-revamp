import { BsStars, BsLightningCharge } from 'react-icons/bs';
import { LuScanEye, LuAppWindow, LuGraduationCap, LuCrosshair, LuLeaf, LuMapPin, LuGlobe, LuServer, LuLayers, LuUsers, LuLock, LuShieldCheck } from 'react-icons/lu';
import { FiCheckCircle, FiShield, FiCpu, FiTrendingUp } from 'react-icons/fi';
import plus from '../assets/icons/plus.svg';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';


export const About = () => {
    return (
        <section className="animate-in fade-in duration-700 max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            
            <SEO 
                title="About Us - AI Engineering & Global R&D"
                description="Creozen is a deep-tech company bridging AI hype and business value. With hubs in London and Chennai, we engineer precise systems for global enterprises."
                canonical="/about"
            />

            {/* --- 1. Hero Section --- */}
            <div className="relative py-20 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden">
                 {/* Background Gradient Effect (Subtle) */}
                 <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                <div className="max-w-4xl">
                    <h5 className="text-blue-400 font-medium tracking-wide text-sm uppercase mb-4 flex items-center gap-2">
                        <BsStars /> About Creozen
                    </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 text-balance">
                        Building applied AI systems <span className="text-(--color-gray-500)">that solve real operational problems.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-(--color-gray-400) leading-relaxed max-w-3xl text-balance">
                        Creozen designs AI solutions with clarity, discipline, and purpose.
                        Guided by a Zen-inspired engineering mindset, we focus on simplicity, precision, and measurable impact. By combining Generative AI, Computer Vision, and intelligent automation, we help organisations streamline workflows, improve decisions, and scale efficiently — without unnecessary complexity.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- 2. Proven Impact Section (E-E-A-T: Authority) --- */}
            <div className="border-x border-b border-(--guide-color) bg-(--bg-primary)">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    
                    {/* Header Side */}
                    <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-(--guide-color)">
                        <h2 className="text-3xl font-semibold text-white mb-4">
                            Proven Impact <br /> Across Industries.
                        </h2>
                        <p className="text-(--color-gray-500) leading-relaxed">
                            We don't just build prototypes; we deliver robust, production-grade ecosystems that power core business operations globally. Our diverse client base is a testament to the versatility of our engineering.
                        </p>
                    </div>

                    {/* Data Points Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <ImpactItem 
                            icon={LuGlobe}
                            number="10+"
                            text="Global clients across retail, logistics, education, and enterprise sectors in UK & India."
                        />
                        <ImpactItem 
                            icon={LuServer}
                            number="6+"
                            text="Proprietary AI platforms deployed in live, high-load production environments."
                        />
                        <ImpactItem 
                            icon={LuMapPin}
                            number="2"
                            text="Strategic Global Hubs (London & Chennai) ensuring 24/7 R&D and support coverage."
                        />
                        <ImpactItem 
                            icon={LuLayers}
                            number="7"
                            text="Verticals served, tackling challenges from industrial safety to university automation."
                        />
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- 3. Engineering Standards (E-E-A-T: Trust & Expertise) --- */}
            <div className="border-x border-b border-(--guide-color) bg-black p-8 md:p-20">
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-4">Why Global Enterprises Trust Us</h2>
                    <p className="text-(--color-gray-500)">
                        In a world of generic AI wrappers, we engineer deep-tech solutions.
                        We bridge the gap between "AI Hype" and "Business Value" through rigorous standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <WhyCard 
                        icon={FiCpu}
                        title="Deep-Tech Engineering"
                        desc="We aren't just integrators. We build custom models, fine-tune architectures, and optimize hardware performance (Edge AI) for specific industrial use cases."
                    />
                    <WhyCard 
                        icon={FiTrendingUp}
                        title="ROI-Driven Methodology"
                        desc="Every line of code we write is tied to a metric: reducing wait times, automating manual entry, or increasing conversion rates. If it doesn't add value, we don't ship it."
                    />
                    <WhyCard 
                        icon={FiShield}
                        title="Enterprise-Grade Security"
                        desc="Your data is your asset. We offer on-premise deployments, private cloud instances, and strict compliance with GDPR and global data standards."
                    />
                </div>
            </div>

            <GridSeparator />

            {/* --- 4. Philosophy Section --- */}
            <div className="border-x border-b border-(--guide-color) p-8 md:p-20 bg-(--bg-primary)">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <PhilosophyCard 
                        icon={LuLeaf} 
                        title="Simplicity" 
                        desc="Technology should be seamless. We strip away complexity to reveal potential." 
                    />
                    <PhilosophyCard 
                        icon={LuCrosshair} 
                        title="Precision" 
                        desc="Intelligent solutions must be accurate. We engineer for exactness in every algorithm." 
                    />
                    <PhilosophyCard 
                        icon={BsLightningCharge} 
                        title="Innovation" 
                        desc="Continuously pushing the boundaries of AI & ML to deliver the future, today." 
                    />
                </div>
            </div>

            <GridSeparator />

            {/* --- 5. Core Focus Areas --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-x border-(--guide-color) divide-y md:divide-y-0 md:divide-x divide-(--guide-color)">
                <FocusCard 
                    icon={BsStars}
                    title="Generative AI"
                    desc="Next-gen content, assistants, and productivity tools that augment human creativity."
                />
                <FocusCard 
                    icon={LuScanEye}
                    title="Computer Vision"
                    desc="Real-time video analytics and object tracking for industrial and security applications."
                />
                <FocusCard 
                    icon={LuAppWindow}
                    title="Web & App Development"
                    desc="Building scalable, AI-powered applications with robust architectures."
                />
                <FocusCard 
                    icon={LuGraduationCap}
                    title="AI for Education"
                    desc="Revolutionizing assessments, personalized learning paths, and student engagement."
                />
            </div>

            <GridSeparator />

            {/* --- 6. Locations --- */}
            <div className="border-x border-b border-(--guide-color) grid grid-cols-1 md:grid-cols-2 bg-black">
                {/* London */}
                <LocationCard 
                    city="London, UK" 
                    role="HQ & Global Clients Hub" 
                    align="left"
                />
                {/* Chennai */}
                <LocationCard 
                    city="Chennai, India" 
                    role="AI R&D Hub" 
                    align="right"
                />
            </div>
        </section>
    );
};

/* --- Sub-Components --- */

const ImpactItem = ({ icon: Icon, number, text }) => (
    <div className="p-8 border-b sm:border-b-0 sm:even:border-l border-(--guide-color) group hover:bg-(--color-black-900) transition-colors flex flex-col justify-start">
        <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-(--color-black-900) border border-(--guide-color) rounded-md group-hover:text-white transition-colors">
                <Icon size={18} />
            </div>
            <span className="text-3xl font-medium text-white">{number}</span>
        </div>
        <p className="text-sm text-(--color-gray-500) leading-relaxed text-balance">
            {text}
        </p>
    </div>
);

const WhyCard = ({ icon: Icon, title, desc }) => (
    <div className="p-6 border border-(--guide-color) bg-(--bg-primary)">
        <div className="w-10 h-10 bg-[#0a0a0a] border border-(--guide-color) flex items-center justify-center text-white mb-4 rounded-md">
            <Icon size={20} />
        </div>
        <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
        <p className="text-(--color-gray-500) text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

const PhilosophyCard = ({ icon: Icon, title, desc }) => (
    <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-12 h-12 rounded-full border border-(--guide-color) flex items-center justify-center text-white bg-(--color-black-900)">
            <Icon size={20} />
        </div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <p className="text-(--color-gray-500) text-sm leading-relaxed text-balance">
            {desc}
        </p>
    </div>
);

const FocusCard = ({ icon: Icon, title, desc }) => (
    <div className="p-8 md:p-12 group hover:bg-(--color-black-900) transition-colors duration-300 relative bg-(--bg-primary)">
        <div className="absolute top-6 right-6 text-(--guide-color) group-hover:text-white transition-colors">
            <img src={plus} alt="" aria-hidden="true" className="w-3 h-3 opacity-50" />
        </div>
        <div className="mb-6 text-blue-400">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
        <p className="text-(--color-gray-500) leading-relaxed">
            {desc}
        </p>
    </div>
);

const LocationCard = ({ city, role, align }) => (
    <div className="relative p-12 overflow-hidden group border-b sm:border-b-0 sm:first:border-r border-(--guide-color)">
        <div className={`flex flex-col h-full justify-between ${align === 'right' ? 'md:items-end md:text-right' : 'md:items-start'}`}>
            <div className="mb-8">
                <div className="flex items-center gap-2 text-(--color-gray-500) mb-2">
                    <LuMapPin />
                    <span className="text-xs uppercase tracking-wider font-semibold">Location</span>
                </div>
                <h3 className="text-3xl font-semibold text-white">{city}</h3>
            </div>
            
            <div className="relative z-10">
                <span className="px-4 py-2 rounded-full border border-(--guide-color) bg-(--color-black-900) text-sm text-(--color-gray-400)">
                    {role}
                </span>
            </div>
        </div>
        
         {/* Map Abstract Decoration */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-(--guide-color) rounded-full group-hover:scale-150 transition-transform duration-700"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-(--guide-color) rounded-full group-hover:scale-125 transition-transform duration-700 delay-75"></div>
        </div>
    </div>
);