import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsGem } from 'react-icons/bs';
import { RESEARCH_INITIATIVE } from '../../data/productsData';
import genjewelsImg from '../../assets/images/products-3d/genjewels.png'

export const ResearchSpotlightBanner = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div 
            className="relative group bg-black min-h-[400px] md:min-h-[460px] overflow-hidden flex items-center w-full"
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight hover effect with purple glow */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        800px circle at ${mouseX}px ${mouseY}px,
                        rgba(168,85,247,0.07),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Complete Background Image & Gradients */}
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <img 
                    src={genjewelsImg} 
                    alt={RESEARCH_INITIATIVE.title} 
                    className="w-full h-full object-cover opacity-25 grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.03] group-hover:opacity-40"
                />
                {/* Visual overlays for readability and smooth mesh blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10"></div>
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
            </div>

            {/* Content Container (Overlay) */}
            <div className="relative z-30 px-8 md:px-16 py-16 max-w-3xl">
                <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 border border-purple-500/30 bg-purple-500/15 text-purple-400 text-[10px] font-mono uppercase tracking-widest w-fit rounded-sm">
                        Research & Innovation Phase
                    </span>
                </div>

                <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <BsGem className="text-purple-400 text-lg animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-purple-300/80">
                        {RESEARCH_INITIATIVE.subtitle}
                    </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    {RESEARCH_INITIATIVE.title}
                </h3>

                <p className="text-base text-gray-300 max-w-xl leading-relaxed mb-8">
                    Exploring how generative AI models can adapt Design DNA, textures, and signatures to transform luxury jewellery conceptualization.
                </p>

                <Link to={`/products/${RESEARCH_INITIATIVE.id}`}>
                    <button className="px-8 py-3.5 bg-white text-black font-semibold hover:bg-gray-200 transition-all cursor-pointer flex items-center gap-3 border border-white">
                        Explore Research Lab <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </Link>
            </div>
        </div>
    );
};
