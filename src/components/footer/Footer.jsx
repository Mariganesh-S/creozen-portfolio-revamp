import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/C.svg';
import { SMART_VISION_SUITE, UNIVERSITY_ECOSYSTEM } from '../../data/productsData';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
            <footer
    className="
        max-w-(--content-max-width)
        mx-auto
        py-20
        border-t
        border-(--guide-color)
        sm:px-16
        md:px-24
        px-6
        relative
        overflow-hidden
    "
>
            
            <div className="flex flex-col gap-12 lg:flex-row items-start">
                
                {/* Logo & Tagline Section */}
                <div className="w-full lg:w-16 flex flex-col gap-4 lg:order-2 lg:items-end">
                    <Link to="/">
                        <img
    src={logo}
    alt="Creozen Logo"
    className="
        w-10
        h-10
        transition-all
        duration-300
        hover:scale-110
        hover:rotate-3
        hover:opacity-80
    "
/>
                    </Link>
                </div>

                {/* Link Columns Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 justify-between text-(--color-gray-500) text-sm">

                    {/* --- COLUMN 1: SOLUTIONS (Dynamic) --- */}
                    <div>
                            <h4 className="text-white font-medium mb-4">Smart Vision AI</h4>
                            <ul className="space-y-2.5">
                                {SMART_VISION_SUITE.map((product) => (
                                    <li key={product.id}>
                                        <Link to={`/products/${product.id}`} className="hover:text-white transition-colors block">
                                            {product.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-medium mb-4">Enterprise Suite</h4>
                        <ul className="space-y-2.5">
                            {UNIVERSITY_ECOSYSTEM.map((product) => (
                                <li key={product.id}>
                                    <Link to={`/products/${product.id}`} className="hover:text-white transition-colors block">
                                        {product.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* --- COLUMN 2: COMPANY --- */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Company</h4>
                        <ul className="space-y-2.5">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Product Catalogue</Link></li>
                            <li><Link to="/products/gen-jewels" className="hover:text-white transition-colors">Gen-Jewels™ Research</Link></li>
                            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* --- COLUMN 3: RESOURCES --- */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Resources</h4>
                        <ul className="space-y-2.5">
                            <li><Link to="/forms" className="hover:text-white transition-colors">Book a Demo</Link></li>
                            <li><Link to="/schedule-meeting" className="hover:text-white transition-colors">Consultation Call</Link></li>
                            <li><Link to="/careers/apply" className="hover:text-white transition-colors">Job Application</Link></li>
                            {/* Placeholders for future content */}
                            <li className="opacity-40 cursor-not-allowed select-none flex items-center gap-2">
                                Case Studies <span className="text-[10px] border border-(--guide-color) px-1 rounded">Soon</span>
                            </li>
                            <li className="opacity-40 cursor-not-allowed select-none flex items-center gap-2">
                                Blog <span className="text-[10px] border border-(--guide-color) px-1 rounded">Soon</span>
                            </li>
                        </ul>
                    </div>

                    {/* --- COLUMN 4: LEGAL & SOCIAL --- */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Legal</h4>
                        <ul className="space-y-2.5 mb-8">
                            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h4 className="text-white font-medium mb-4">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://www.linkedin.com/company/creozen-ltd" target="_blank" rel="noopener noreferrer" className="p-2 bg-(--color-black-900) border border-(--guide-color) rounded-full text-white hover:bg-white hover:text-black transition-all">
                                <FaLinkedin size={16} />
                            </a>
                            <a href="mailto:creozen@creozen.co.uk" target="_blank" rel="noopener noreferrer" className="p-2 bg-(--color-black-900) border border-(--guide-color) rounded-full text-white hover:bg-white hover:text-black transition-all">
                                <FiMail size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright & Locations */}
            <div className="mt-4 pt-8 border-t border-(--guide-color) text-(--color-gray-500) text-xs flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {currentYear} <span className='text-white font-medium'>Creozen Ltd</span>. All rights reserved.</p>
                <div className="flex gap-6 font-mono text-[10px] tracking-wider opacity-60">
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> LONDON, UK</span>
                    <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-purple-500"></div> CHENNAI, IN</span>
                </div>
            </div>
        </footer>
    );
};