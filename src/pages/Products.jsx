import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiArrowUpRight, FiBox, FiActivity } from 'react-icons/fi';
import { PiStudent, PiBoundingBox } from 'react-icons/pi';
import { SMART_VISION_SUITE, UNIVERSITY_ECOSYSTEM, RESEARCH_INITIATIVE } from '../data/productsData';
import { GridSeparator } from '../components/separator/GridSeperator';
import { MdOutlineRoundaboutLeft } from 'react-icons/md';
import { GoArrowBoth, GoGraph } from 'react-icons/go';
import { BiSolidUpArrow } from 'react-icons/bi';
import { SEO } from '../components/utils/SEO';
import { BsGem } from 'react-icons/bs';

/* --- STRICT GRID CARD COMPONENT --- */
const ProductGridItem = ({ product, index, accentColor }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Logic for Bento-sizing within a strict grid
    // First item takes 2 columns to create visual hierarchy
    const isLarge = index === 0; 
    const spanClass = isLarge ? "md:col-span-2" : "md:col-span-1";
    
    const hoverVideo = product.gallery?.find(media => media.type === 'video')?.src;

    return (
        <div 
            className={`
                ${spanClass} group relative 
                border-r border-b border-white/10 
                bg-black h-[400px] overflow-hidden
            `}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect (Restricted to Grid Cell) */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.08),
                        transparent 80%
                        )
                    `,
                }}
            />

            <Link to={`/products/${product.id}`} className="block h-full w-full relative z-10">
                
                {/* --- Visual Layer --- */}
                <div className="absolute inset-0 w-full h-full">
                    {/* Base Image */}
                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60"
                    />
                    
                    {/* Video on Hover */}
                    {hoverVideo && (
                        <video
                            src={hoverVideo}
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block"
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                {/* --- Content Layer --- */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    
                    {/* Icon Badge */}
                    <div className="absolute top-8 left-8">
                        <div className={`
                            w-10 h-10 flex items-center justify-center 
                            bg-black/50 border border-white/10 backdrop-blur-md 
                            text-xl text-white transition-colors duration-300
                            ${accentColor === 'green' ? 'group-hover:text-green-400 group-hover:border-green-500/30' : 'group-hover:text-blue-400 group-hover:border-blue-500/30'}
                        `}>
                            <product.icon />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-between items-end mb-2">
                            <h3 className="text-2xl font-semibold text-white">
                                {product.title}
                            </h3>
                            <FiArrowUpRight className={`text-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 ${accentColor === 'green' ? 'text-green-400' : 'text-blue-400'}`} />
                        </div>
                        
                        <p className={`text-xs font-mono uppercase tracking-widest mb-3 ${accentColor === 'green' ? 'text-green-400/80' : 'text-blue-400/80'}`}>
                            {product.subtitle}
                        </p>
                        
                        <p className="text-sm text-gray-400 line-clamp-2 max-w-md">
                            {product.desc}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

/* --- RESEARCH SPOTLIGHT COMPONENT --- */
const ResearchSpotlight = ({ research }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className="border-x border-b border-white/10 bg-[#020202]"
            onMouseMove={handleMouseMove}
        >
            <div className="p-8 md:p-12 border-b border-(--guide-color) bg-(--bg-primary) relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <BsGem className="text-purple-400 text-2xl animate-pulse" />
                    <h2 className="text-2xl md:text-3xl font-semibold text-white">Research & Innovation Spotlight</h2>
                </div>
                <p className="text-base text-(--color-gray-400) max-w-3xl">
                    Exploring next-generation technologies at the intersection of AI, computer vision, and generative design.
                </p>
            </div>

            <div className="relative group border-b border-white/10 bg-black min-h-[400px] overflow-hidden flex flex-col lg:flex-row">
                {/* Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                            800px circle at ${mouseX}px ${mouseY}px,
                            rgba(168,85,247,0.06),
                            transparent 80%
                            )
                        `,
                    }}
                />

                {/* Visual Layer */}
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden cursor-pointer">
                    <img 
                        src={research.image} 
                        alt={research.title} 
                        className="w-full h-full object-cover opacity-40 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent"></div>
                </div>

                {/* Content Layer */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 border-t lg:border-t-0 lg:border-l border-white/10">
                    <div className="absolute top-8 right-8">
                        <span className="px-3 py-1 border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-widest">
                            Research Phase
                        </span>
                    </div>

                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-3">
                            <BsGem className="text-purple-400 text-lg" />
                            <span className="text-xs font-mono uppercase tracking-widest text-purple-400/80">
                                {research.subtitle}
                            </span>
                        </div>
                        
                        <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                            {research.title}
                        </h3>
                        
                        <p className="text-sm text-gray-400 leading-relaxed mb-8">
                            {research.desc}
                        </p>

                        <div className="flex gap-4">
                            <Link to={`/products/${research.id}`}>
                                <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer flex items-center gap-2">
                                    Explore Research Overview <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Products = () => {
    return (
        <section className="bg-black min-h-screen max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            <SEO 
                title="AI Product Suite: Assessly, Smart Vision & IntraQuest"
                description="Explore our ecosystem: Smart Vision Analytics for retail/industry and the University Suite (Assessly, SkillSync, AttendEase) for institutional automation."
                canonical="/products"
            />
            {/* --- 1. HERO SECTION --- */}
            <div className="relative py-24 px-6 md:px-12 border-x border-(--guide-color) overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-4xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 border border-(--guide-color) bg-black flex items-center justify-center text-white">
                            <FiBox />
                        </div>
                        <span className="text-sm font-mono text-(--color-gray-500) uppercase tracking-widest">
                            Product Catalogue
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        One Unified AI Ecosystem.
                    </h1>
                    <p className="text-lg text-(--color-gray-400) max-w-2xl leading-relaxed">
                        From Computer Vision to Institutional Automation. <br/>
                        <span className="text-white">Assess • Train • Automate • Support</span>
                    </p>
                </div>
            </div>

            <GridSeparator />

            {/* --- RESEARCH INITIATIVE SPOTLIGHT --- */}
            <ResearchSpotlight research={RESEARCH_INITIATIVE} />

            <GridSeparator />

            {/* --- 2. VISION AI SECTION --- */}
            <div className="border-x border-b border-white/10 bg-[#020202]">
                {/* Header */}
                <div className="p-8 md:p-12 border-b border-(--guide-color) bg-(--bg-primary) relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <FiActivity className="text-green-400 text-2xl" />
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">Smart Vision Analytics Suite</h2>
                    </div>
                    <p className="text-base text-(--color-gray-400) max-w-3xl">
                        Measure everything with your existing CCTV Cameras. <br /> Plug into existing CCTV → AI Dashboard → Actionable Insights.
                    </p>
                </div>

                {/* STRICT GRID CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/10">
                    {SMART_VISION_SUITE.map((product, index) => (
                        <ProductGridItem 
                            key={product.id} 
                            product={product} 
                            index={index} 
                            accentColor="green"
                        />
                    ))}
                    {/* Filler Block to complete the grid rectangle if needed */}
                    <div className="hidden lg:flex border-r border-b border-white/10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBINDIwVjQwSDBaIiBmaWxsPSIjMDkwOTA5Ii8+Cjwvc3ZnPg==')] opacity-20"></div>
                </div>
            </div>

            <GridSeparator />

            {/* --- 3. UNIVERSITY ECOSYSTEM --- */}
            <div className="border-x border-b border-white/10 bg-black">
                {/* Header Row */}
                <div className="p-8 md:p-12 border-b border-(--guide-color)">
                    <div className="flex items-center gap-3 mb-2">
                        <PiStudent className="text-blue-400 text-2xl" />
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">University & Office Ecosystem</h2>
                    </div>
                    <p className="text-base text-(--color-gray-400) max-w-3xl">
                        A unified suite of tools to digitize institutional & corporate workflows.
                    </p>
                </div>

                {/* STRICT GRID CONTAINER */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-white/10">
                    {UNIVERSITY_ECOSYSTEM.map((product, index) => (
                        <ProductGridItem 
                            key={product.id} 
                            product={product} 
                            index={index} 
                            accentColor="blue"
                        />
                    ))}
                    {/* Filler Block for grid completion */}
                    <div className="hidden lg:flex border-r border-b border-white/10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBINDIwVjQwSDBaIiBmaWxsPSIjMDkwOTA5Ii8+Cjwvc3ZnPg==')] opacity-20"></div>
                    <div className="hidden lg:flex border-r border-b border-white/10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBINDIwVjQwSDBaIiBmaWxsPSIjMDkwOTA5Ii8+Cjwvc3ZnPg==')] opacity-20"></div>
                </div>
            </div>
            
            <GridSeparator />

            {/* --- 4. GRID-ALIGNED FOOTER CTA --- */}
            <div className="border-x border-b border-white/10 bg-black">
                
                {/* Left: Primary Action */}
                <div className="relative p-8 md:p-16 bg-[#050505] flex flex-col justify-center text-center overflow-hidden items-center">                    
                    <div className="relative z-10">
                        <h3 className="text-3xl font-medium text-white mb-4">
                            Ready to modernize?
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            Start transforming your institutional workflows or industrial vision systems today. Get a personalized walkthrough.
                        </p>
                        <div className="flex justify-center gap-4">
                         <Link to="/forms">
                            <button className="px-8 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                                Book a Demo
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="px-8 py-3 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};