import { CTA } from './CTA';
import { useEffect, useState } from 'react';
import plus from '../../assets/icons/plus.svg';
import styles from './Hero.module.css';
import nvidia from '../../assets/images/nvidia.png';

export const Hero = () => {
    // State to track if the screen is considered "small" (mobile/tablet)
    const [isSmall, setIsSmall] = useState(true);

    useEffect(() => {
        const check = () => setIsSmall(window.innerWidth < 768);
        check(); 
        window.addEventListener('resize', check); 
        return () => window.removeEventListener('resize', check);
    }, []);

    // Dynamic grid size calculations:
    const cols = isSmall ? 8 : 12; // Mobile grid: 8 columns, Desktop grid: 12 columns
    const rows = isSmall ? 12 : 6 ; // Mobile grid: 4 rows, Desktop grid: 8 rows

    // Filler calculation:
    // Mobile: Fills the entire grid (8*8) so lines appear behind text.
    // Desktop: Subtracts 40 cells to create the "hole" for the CTA.
    const filler = cols * rows - (isSmall ? 0 : 40);

    return (
        <section className="relative mt-6" aria-label="Introduction">
            
            {/* Decorative plus icon (top left) - Marked as decorative */}
            <img
                className="absolute -top-[10px] -left-[10px]"
                src={plus}
                alt=""
                aria-hidden="true"
            />

            {/* --- Main Grid Container --- */}
            <div
                className="relative grid grid-cols-8 md:grid-cols-12 auto-rows-fr border-t border-l border-b border-(--guide-color)"
            >
                {/* Dynamic Grid Filler */}
                {Array.from({ length: filler }, (_, i) => (
                    <div
                        key={i}
                        className="
                         border border-(--guide-color)
                          aspect-square
                          transition-all
                           duration-500
                           hover:bg-white/[0.03]
                           hover:border-white/20
                        "
                    ></div>
                ))}

                {/* --- Unified CTA Component --- */}
                <div
                    className="
                        /* Mobile: Absolute overlay to sit ON TOP of gradient */
                        absolute inset-0 z-10 flex items-center justify-center
                        
                        /* Desktop: Grid item that sits IN the grid 'hole' */
                        md:static md:block 
                        md:col-[2/span_10] md:row-[2/span_4]
                    "
                >
                    <CTA />
                </div>

                {/* Background Gradient Effect (Now sits behind the absolute CTA on mobile) */}
                <div className={styles["hero-gradient-bg"]}></div>

                {/* Decorative plus icon (bottom right) */}
              <img
               className="absolute -top-[10px] -left-[10px] transition-transform duration-500 hover:rotate-180"
               src={plus}
               alt=""
               aria-hidden="true"
               />
            </div>

            {/* --- Bottom Section: Partnership (E-E-A-T Trust Signal) --- */}
            <div  className="border border-(--guide-color) rounded-2xl min-h-[160px] md:min-h-56 flex items-center justify-center px-4 md:px-6 py-8 md:py-0 bg-(--bg-primary)">
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                    <span className="text-lg md:text-2xl text-(--color-gray-500) font-medium text-center md:text-left">
                        In partnership with
                    </span>
                    
                    <div className="flex items-center gap-3">
                        {/* SEO FIX: Explicit Alt Text for Trust Authority */}
                        <img 
                            src={nvidia} 
                            alt="Official Technology Partner: NVIDIA Inception Program" 
                            title="Official Technology Partner: NVIDIA Inception Program"
                            className="h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
                            style={{opacity: 0.7}}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};