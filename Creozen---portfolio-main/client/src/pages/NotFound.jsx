import { Link } from 'react-router-dom';
import { FiArrowLeft, FiAlertTriangle, FiHome } from 'react-icons/fi';
import { GridSeparator } from '../components/separator/GridSeperator';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
    return (
        <section className="animate-in fade-in duration-700 max-w-(--content-max-width) mx-auto my-12 md:my-20 bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            
            <Helmet>
                <title>404 - Page Not Found | Creozen</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>
            {/* Top separator removed for a cleaner rounded layout */}
                
            <div className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 overflow-hidden rounded-2xl">
                
                {/* Background: Subtle Grid Pattern */}
                <div
                 className="absolute inset-0 pointer-events-none opacity-[0.015] rounded-2xl"
                  style={{
                    backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                      backgroundSize: '50px 50px',
                          }}
                ></div>

                {/* Background: Glow Effect behind the text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 text-center flex flex-col items-center">
                    
                    {/* Status Code Chip */}
                    <div className="mb-3 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-(--color-gray-800) bg-(--color-black-900) text-xs font-mono text-(--color-gray-500)">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        ERR_404_NOT_FOUND
                    </div>

                    {/* Main 404 Heading */}
                    <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none">
                        404
                    </h1>

                    {/* Message */}
                    <h2 className="text-2xl text-white font-medium mb-3">
                        This page could not be found.
                    </h2>
                    <p className="text-(--color-gray-500) max-w-md text-center text-balance mb-10 leading-relaxed">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link to="/">
                            <button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-sm font-medium hover:bg-(--color-gray-200) transition-colors rounded-md flex items-center justify-center gap-2 cursor-pointer">
                                <FiHome /> Return Home
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="w-full sm:w-auto px-6 py-3 border border-(--guide-color) text-white text-sm font-medium hover:bg-(--color-black-900) hover:text-white transition-colors rounded-md flex items-center justify-center gap-2 cursor-pointer">
                                <FiAlertTriangle /> Report Issue
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Separator */}
            <GridSeparator />

        </section>
    );
};