import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiPlay, FiImage, FiVideo, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import { SMART_VISION_SUITE, UNIVERSITY_ECOSYSTEM, RESEARCH_INITIATIVE } from '../data/productsData';
import { GridSeparator } from '../components/separator/GridSeperator';
import { SEO } from '../components/utils/SEO';
import { BsGem } from 'react-icons/bs';

export const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [activeMedia, setActiveMedia] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Load product and initialize media
    useEffect(() => {
        const found = [RESEARCH_INITIATIVE, ...SMART_VISION_SUITE, ...UNIVERSITY_ECOSYSTEM].find(p => p.id === id);
        setProduct(found);

        if (found) {
            if (found.gallery && found.gallery.length > 0) {
                setActiveMedia(found.gallery[0]);
            } else {
                setActiveMedia({ type: 'image', src: found.image, caption: found.title });
            }
        }
    }, [id]);

    // --- Navigation Logic ---

    const handleNext = useCallback((e) => {
        if (e) e.stopPropagation();
        if (!product?.gallery || product.gallery.length <= 1) return;

        const currentIndex = product.gallery.findIndex(item => item.src === activeMedia.src);
        const nextIndex = (currentIndex + 1) % product.gallery.length; // Loop to start
        setActiveMedia(product.gallery[nextIndex]);
    }, [product, activeMedia]);

    const handlePrev = useCallback((e) => {
        if (e) e.stopPropagation();
        if (!product?.gallery || product.gallery.length <= 1) return;

        const currentIndex = product.gallery.findIndex(item => item.src === activeMedia.src);
        const prevIndex = (currentIndex - 1 + product.gallery.length) % product.gallery.length; // Loop to end
        setActiveMedia(product.gallery[prevIndex]);
    }, [product, activeMedia]);

    // --- Keyboard Event Listeners ---
    useEffect(() => {
        const handleKey = (e) => {
            if (!isModalOpen) return;
            
            if (e.key === 'Escape') setIsModalOpen(false);
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isModalOpen, handleNext, handlePrev]);

    if (!product || !activeMedia) {
        return <div className="min-h-screen bg-black" />;
    }

    const hasMultipleImages = product.gallery && product.gallery.length > 1;

    return (
        <section className="animate-in fade-in duration-700 bg-black min-h-screen max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            
            <SEO 
                title={`${product.title} - ${product.subtitle}`}
                description={product.desc}
                canonical={`/products/${product.id}`}
            />

            {/* --- Hero Section --- */}
            <div className="relative pt-32 pb-16 px-6 md:px-12 border-x border-(--guide-color)">
                
                <Link to="/products" className="inline-flex items-center gap-2 text-(--color-gray-500) hover:text-white mb-8 transition-colors">
                    <FiArrowLeft /> Back to Products
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center">
                        <div className={`inline-block px-3 py-1 mb-4 border ${product.isResearch ? 'border-purple-500/30 bg-purple-500/10 text-purple-400' : 'border-blue-500/30 bg-blue-500/10 text-blue-400'} text-xs font-mono uppercase tracking-widest w-fit`}>
                            {product.isResearch ? "Research Initiative Overview" : "Product Overview"}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {product.title}
                        </h1>
                        <p className="text-xl text-(--color-gray-400) mb-8">
                            {product.subtitle}
                        </p>
                        <p className="text-lg text-(--color-gray-500) leading-relaxed mb-6">
                            {product.fullDesc}
                        </p>
                        {product.fullDesc2 && (
                            <p className="text-lg text-(--color-gray-500) leading-relaxed mb-8">
                                {product.fullDesc2}
                            </p>
                        )}
                        
                        {!product.isResearch && (
                            <div className="flex gap-4">
                                <Link to="/forms">
                                    <button className="px-6 sm:px-2 py-3 bg-white text-black font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                                        Book a Demo
                                    </button>
                                </Link>
                                <Link to="/contact">
                                    <button className="px-6 sm:px-2 py-3 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors cursor-pointer">
                                        Contact Sales
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right: Media Gallery Display */}
                    <div className="flex flex-col gap-4">
                        
                        {/* 1. Main Media Preview Window */}
                        <div 
                            className="relative aspect-video w-full border border-(--guide-color) bg-(--color-black-900) overflow-hidden group cursor-zoom-in"
                            onClick={() => setIsModalOpen(true)}
                        >
                            {activeMedia.type === 'video' ? (
                                <video 
                                    key={activeMedia.src} 
                                    src={activeMedia.src} 
                                    className="w-full h-full object-cover"
                                    autoPlay 
                                    muted 
                                    loop 
                                    playsInline
                                />
                            ) : (
                                <img 
                                    src={activeMedia.src} 
                                    alt={activeMedia.caption || product.title} 
                                    className="w-full h-full object-cover"
                                />
                            )}

                            {/* Caption Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white text-sm font-medium flex items-center gap-2">
                                    {activeMedia.type === 'video' ? <FiVideo className="text-red-500"/> : <FiImage className="text-blue-400"/>}
                                    {activeMedia.caption || product.title}
                                </p>
                            </div>
                        </div>

                        {/* 2. Thumbnail Strip (Only if gallery exists) */}
                        {hasMultipleImages && (
                            <div className="grid grid-cols-4 gap-3">
                                {product.gallery.map((item, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setActiveMedia(item)}
                                        className={`
                                            relative aspect-video overflow-hidden border transition-all duration-200 cursor-pointer
                                            ${activeMedia.src === item.src 
                                                ? 'border-white opacity-100 ring-1 ring-white' 
                                                : 'border-(--guide-color) opacity-60 hover:opacity-100'}
                                        `}
                                    >
                                        {item.type === 'video' ? (
                                            <div className="w-full h-full bg-black flex items-center justify-center relative">
                                                <video src={item.src} className="w-full h-full object-cover opacity-50" muted /> 
                                                <FiPlay className="absolute text-white text-xl z-10" />
                                            </div>
                                        ) : (
                                            <img src={item.src} className="w-full h-full object-cover" alt="" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {product.isResearch && product.researchAreas && (
                <>
                    <GridSeparator />
                    <div className="p-8 md:p-12 border-x border-b border-(--guide-color) bg-(--bg-primary)">
                        <h3 className="text-xl font-medium text-white mb-6">Current Research Areas</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.researchAreas.map((area, index) => (
                                <span 
                                    key={index}
                                    className="px-4 py-2 border border-purple-500/20 bg-purple-500/5 text-purple-300 text-sm font-mono hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>
                </>
            )}

            <GridSeparator />

            {/* --- Details Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-x border-b border-(--guide-color) bg-(--bg-primary)">
                
                {/* Features */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-(--guide-color)">
                    <h3 className="text-xl font-medium text-white mb-6">
                        {product.isResearch ? "Research Objectives" : "Key Features"}
                    </h3>
                    <ul className="space-y-4">
                        {(product.isResearch ? product.objectives : product.features)?.map((item, index) => (
                            <li key={index} className="flex items-start gap-3 text-(--color-gray-400)">
                                <FiCheck className={`${product.isResearch ? 'text-purple-500' : 'text-blue-500'} mt-1 shrink-0`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Benefits / Outcomes */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-(--guide-color)">
                    <h3 className="text-xl font-medium text-white mb-6">
                        {product.isResearch ? "Potential Applications" : "Impact & Benefits"}
                    </h3>
                    <div className="space-y-4">
                        {(product.isResearch ? product.potentialApplications : product.benefits)?.map((item, i) => (
                            <p key={i} className="text-(--color-gray-400) leading-relaxed">• {item}</p>
                        ))}
                        {product.outcome && (
                            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-white">
                                <p className="text-green-400 font-medium text-xs uppercase mb-1">Proven Outcome</p>
                                <p>{product.outcome}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Use Case */}
                <div className="p-8 md:p-12">
                    <h3 className="text-xl font-medium text-white mb-6">
                        {product.isResearch ? "Development Status" : "Real-World Use Case"}
                    </h3>
                    {product.isResearch ? (
                        <ul className="space-y-4">
                            {product.developmentStatus?.map((status, index) => (
                                <li key={index} className="flex items-start gap-3 text-(--color-gray-400)">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0 animate-pulse" />
                                    <span>{status}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-6 bg-(--color-black-900) border border-(--guide-color)">
                            <p className="text-(--color-gray-400) italic leading-relaxed">
                                "{product.useCase || "Contact us to learn how this solution can apply to your specific industry needs."}"
                            </p>
                        </div>
                    )}
                </div>

            </div>

            {/* --- Image/Video Modal (Lightbox) --- */}
            {isModalOpen && (
                <div 
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[10000] p-4 backdrop-blur-sm"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center">
                        
                        {/* --- Main Content --- */}
                        {activeMedia.type === 'video' ? (
                            <video 
                                src={activeMedia.src} 
                                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl" 
                                controls 
                                autoPlay
                                onClick={(e) => e.stopPropagation()} 
                            />
                        ) : (
                            <img 
                                src={activeMedia.src} 
                                alt={activeMedia.caption || product.title} 
                                className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
                                onClick={(e) => e.stopPropagation()} 
                            />
                        )}

                        {/* --- Navigation Buttons --- */}
                        {hasMultipleImages && (
                            <>
                                {/* Previous Button */}
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all backdrop-blur-md z-50 cursor-pointer"
                                    aria-label="Previous image"
                                >
                                    <FiChevronLeft size={24} />
                                </button>

                                {/* Next Button */}
                                <button
                                    onClick={handleNext}
                                    className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full transition-all backdrop-blur-md z-50 cursor-pointer"
                                    aria-label="Next image"
                                >
                                    <FiChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {/* --- Close Button --- */}
                        <button 
                            className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors p-2 cursor-pointer flex items-center gap-2"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <FiX size={24} />
                        </button>

                        {/* --- Caption / Counter --- */}
                        {hasMultipleImages && (
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-sm font-mono">
                                {product.gallery.findIndex(item => item.src === activeMedia.src) + 1} / {product.gallery.length}
                            </div>
                        )}
                    </div>
                </div>
            )}

        </section>
    );
};