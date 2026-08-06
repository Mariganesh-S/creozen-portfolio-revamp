import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { 
    WebDevFigure, 
    AnalyticsFigure, 
    ProductDevFigure, 
    AiTrainingFigure, 
    AutomationFigure, 
    IotFigure 
} from '../components/features/ServicePageFigures';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SiExpertsexchange } from 'react-icons/si';
import { GrUserExpert } from 'react-icons/gr';
import { BsLightning, BsStarFill, BsThunderbolt } from 'react-icons/bs';
import { IoThunderstorm } from 'react-icons/io5';
import { GoVerified } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { SEO } from '../components/utils/SEO';

// Data Structure mapping content to specific Figures
const SERVICES = [
    {
        title: "Web and App Development",
        intro: "We build high-performance, scalable, and secure web and mobile applications tailored to your business needs.",
        description: "Our development process is collaborative and transparent. From initial concept to final deployment, we work closely with you to ensure the end product not only meets but exceeds your expectations. We utilize modern frameworks and agile methodologies to deliver robust applications that drive user engagement and provide tangible business value.",
        features: [
            "Custom UI/UX Design & Prototyping",
            "Responsive Web & Mobile Applications",
            "E-commerce & CMS Solutions",
            "API Integration & Development",
            "Ongoing Maintenance & Support"
        ],
        Figure: WebDevFigure
    },
    {
        title: "AI-Based Smart Analytics",
        intro: "Unlock the power of your data with our advanced AI analytics solutions to gain actionable insights and predict trends.",
        description: "We specialize in developing custom machine learning models that integrate seamlessly into your existing workflows. Our solutions cover everything from real-time data processing and predictive event management to computer vision for quality control and customer behavior analysis, helping you optimize operations and uncover new opportunities.",
        features: [
            "Real-Time Data Monitoring & Dashboards",
            "Predictive Modeling & Forecasting",
            "Computer Vision for Inspection & Monitoring",
            "Natural Language Processing (NLP)",
            "Custom Machine Learning Model Development"
        ],
        Figure: AnalyticsFigure
    },
    {
        title: "Custom Product Development",
        intro: "From idea to launch, we are your dedicated partner in building bespoke AI, software, and IoT products.",
        description: "Our end-to-end product development service covers market research, strategy, UI/UX design, agile development, and successful deployment. We focus on creating innovative, market-ready solutions that are scalable, reliable, and perfectly aligned with your long-term business goals.",
        features: [
            "Full-Cycle Product Development",
            "MVP & PoC Creation",
            "Scalable Cloud Architecture",
            "IoT Product & Firmware Development",
            "Go-to-Market Strategy & Support"
        ],
        Figure: ProductDevFigure
    },
    {
        title: "AI-Based Training",
        intro: "Empower your team with tailored corporate training programs and hands-on workshops led by industry experts.",
        description: "Our training modules are designed to be practical and impactful, bridging the gap between theoretical knowledge and real-world application. We cover a wide range of topics, from foundational AI concepts to advanced machine learning techniques, ensuring your team is equipped to drive innovation from within.",
        features: [
            "Customized Corporate Workshops",
            "Hands-On AI & Machine Learning Sessions",
            "Executive & Leadership AI Briefings",
            "Specialized Training in NLP & Computer Vision",
            "Certification & Skill Assessment"
        ],
        Figure: AiTrainingFigure
    },
    {
        title: "Enterprise-Level Automations",
        intro: "Streamline workflows, reduce costs, and enhance productivity with our intelligent automation solutions.",
        description: "By leveraging AI-powered chatbots, robotic process automation (RPA), and intelligent document processing, we help you automate repetitive tasks and optimize complex business processes. Our solutions are built to be robust, scalable, and secure, freeing up your team to focus on high-value strategic initiatives.",
        features: [
            "Intelligent Chatbot & Voice Assistant Development",
            "Robotic Process Automation (RPA)",
            "Automated Workflow Optimization",
            "Internal Knowledge Management Systems",
            "AI-Powered Invoice & Document Processing"
        ],
        Figure: AutomationFigure
    },
    {
        title: "Smart IoT & Connected Solutions",
        intro: "We build intelligent, connected ecosystems that bridge the physical and digital worlds for real-time control.",
        description: "Our IoT solutions integrate custom hardware, embedded software, and cloud platforms to create a seamless network of connected devices. From smart sensors for industrial monitoring to consumer-facing connected products, we deliver end-to-end solutions that enhance efficiency and create new user experiences.",
        features: [
            "Custom IoT Device & Sensor Development",
            "Firmware & Embedded Systems Engineering",
            "IoT Cloud Platform Integration",
            "Real-Time Data Visualization & Control",
            "Web & Mobile App Integration"
        ],
        Figure: IotFigure
    }
];

export const Services = () => {
    return (
        <section className="animate-in fade-in duration-700 max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            <SEO 
                title="Custom AI Development, IoT & Automation Services"
                description="Expert services in Web/App Development, AI-Based Smart Analytics, Custom Product Development, and Enterprise Automation. Scalable tech for modern business."
                canonical="/services"
            />
            {/* --- 1. Hero / Header Section --- */}
            <div className="relative py-20 px-6 md:px-12 border-x border-(--guide-color)">
                <div className="max-w-4xl">
                    <h5 className="text-blue-400 font-medium tracking-wide text-sm uppercase mb-4 flex items-center gap-2">
                        <GoVerified /> Our Expertise
                    </h5>
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 text-balance">
                        End-to-end technology solutions <span className="text-(--color-gray-500)">designed to transform industries.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-(--color-gray-400) leading-relaxed max-w-2xl text-balance">
                        From custom software to intelligent analytics, our services are crafted to drive growth, efficiency, and innovation.
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- 2. Services List --- */}
            <div className="border-x border-b border-(--guide-color) divide-y divide-(--guide-color)">
                {SERVICES.map((service, index) => {
                    const isEven = index % 2 !== 0;
                    
                    return (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 group">
                            
                            {/* TEXT COLUMN */}
                            <div className={`
                                p-8 md:p-12 lg:p-16 flex flex-col justify-center
                                bg-(--bg-primary) 
                                ${isEven ? 'lg:order-last' : 'lg:border-r border-(--guide-color)'}
                            `}>
                                {/* Header */}
                                <div className="mb-6">
                                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-lg text-white mb-4 leading-relaxed">
                                        {service.intro}
                                    </p>
                                    <p className="text-sm text-(--color-gray-500) leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Feature List */}
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-(--color-gray-400)">
                                            <div className="mt-0.5 min-w-[16px] text-blue-500">
                                                <FiCheck size={16} />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <Link to="/contact">
                                    <button className="px-5 py-2 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2 group/btn cursor-pointer">
                                        Start Project <FiArrowRight className="group-hover/btn:translate-x-0.5 transition-transform" />
                                    </button>
                                </Link>

                            </div>

                            {/* VISUAL COLUMN */}
                            <div className={`
                                relative bg-(--color-black-900) flex items-center justify-center p-8 md:p-16 overflow-hidden
                                ${isEven ? 'lg:order-first lg:border-r border-(--guide-color)' : ''}
                            `}>
                                {/* Background Grid Pattern */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                                     style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                                </div>
                                
                                {/* The Feature Figure */}
                                <div className="w-full max-w-md transform transition-transform duration-500">
                                    <service.Figure />
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
            <GridSeparator />
            <div className="border-x border-b border-(--guide-color) bg-[#050505] p-12 md:p-24 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
                        Ready to build the extraordinary?
                    </h2>
                    <p className="text-(--color-gray-500) mb-8 max-w-xl mx-auto">
                        Whether you need a full-scale platform or a specialized AI module, our engineering team is ready to deploy.
                    </p>
                    <div className="flex justify-center gap-4">
                         <Link to="/contact">
                            <button
    className="
        mt-6
        px-6
        py-3
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        text-white
        transition-all
        duration-300
        hover:scale-105
    "
>
                                Talk to Sales
                            </button>
                        </Link>
                        <Link to="/products">
                            <button
    className="
        mt-6
        px-6
        py-3
        rounded-full
        bg-gradient-to-r
        from-purple-600
        to-blue-600
        text-white
        transition-all
        duration-300
        hover:scale-105
    "
>
                                View Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};