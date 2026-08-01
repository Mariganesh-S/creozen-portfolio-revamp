import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import heatmapimg2 from '../../assets/images/products-3d/heatmap.png';
import pqintelimg2 from '../../assets/images/products-3d/pqintel.png';
import shelfimg from '../../assets/images/products-3d/shelf.png';
import productcountimg from '../../assets/images/products-3d/productcount.png';

const PRODUCTS = [
    {
        id: "people-queue-intel",
        title: "People & Queue Intelligence",
        category: "Computer Vision AI",
        description: 
            "Understand footfall, occupancy, and queues in real time. Turn existing CCTV into a live analytics engine that tracks visitor volumes, wait times, peak congestion, and crowd density automatically.",
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        image: pqintelimg2
    },
    {
        id: "heatmaps-behavior",
        title: "Heatmaps & Customer Behavior",
        category: "Retail Analytics",
        description: 
            "Know exactly where customers go. Visualize customer movement and dwell behavior with AI-powered heatmaps. Identify dead zones, optimize layouts, and increase conversion by placing products where attention exists.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        image: heatmapimg2
    },
    {
        id: "shelf-engagement",
        title: "Shelf Engagement Analysis",
        category: "Behavioral AI",
        description: 
            "Measure shopper intent, not assumptions. Track product interactions, dwell time, and engagement at the shelf level. Instantly identify high-performing SKUs and optimize using real-world data.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        image: shelfimg
    },
    {
        id: "product-quality-vision",
        title: "Product Counting & Quality",
        category: "Industrial Automation",
        description: 
            "Automate counting and defect detection at scale. Replace manual quality checks with AI visual inspection. Count items, detect defects, and reduce human error while increasing throughput.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        image: productcountimg
    }
];

const FeaturedProductCard = ({ product, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const seoAltText = `${product.title} - ${product.category} Dashboard Interface`;

    return (
        <div 
            className={`
                group relative border-b border-(--guide-color) bg-black h-[350px] overflow-hidden flex flex-col justify-end
                ${index % 2 === 0 ? 'md:border-r border-(--guide-color)' : ''}
            `}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(255,255,255,0.06),
                        transparent 80%
                        )
                    `,
                }}
            />

            <Link to={`/products/${product.id}`} className="block h-full w-full relative z-10">
                {/* Visual Background */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={product.image} 
                        alt={seoAltText} 
                        className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-55"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    {/* Top: Category Tag */}
                    <div className="flex justify-between items-start">
                        <span className="px-2.5 py-1 border border-white/10 bg-black/50 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-(--color-gray-400)">
                            {product.category}
                        </span>
                        <div className="w-8 h-8 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <FiArrowUpRight className="text-base" />
                        </div>
                    </div>

                    {/* Bottom: Text Info */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {product.title}
                        </h3>
                        <p className="text-xs text-(--color-gray-400) line-clamp-2 leading-relaxed">
                            {product.description}
                        </p>
                        <span className="inline-block mt-4 text-xs font-mono text-white/80 group-hover:text-blue-400 transition-colors">
                            Learn more →
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export const FeaturedProducts = () => {
    return (
        <section className="pt-12 bg-(--bg-primary)" aria-label="Featured AI Solutions">
            
            {/* Header */}
            <div className="px-6 md:px-12 mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                    Featured Products
                </h2>
                <p className="text-(--color-gray-500) max-w-2xl">
                    Beyond services, we build proprietary platforms to address complex business needs at scale.
                </p>
            </div>

            {/* Product Grid (1 column on mobile, 2 columns on desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-(--guide-color)">
                {PRODUCTS.map((product, index) => (
                    <FeaturedProductCard 
                        key={product.id} 
                        product={product} 
                        index={index} 
                    />
                ))}
            </div>
        </section>
    );
};
