import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import motion
import styles from './Header.module.css';

/**
 * Animation Variants
 * Slides down slightly and fades in on open.
 * Slides up slightly and fades out on exit.
 */
const menuVariants = {
    initial: { 
        opacity: 0, 
        y: -10, // Start 10px higher
    },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0, 
        y: -10, // Retreat 10px higher
        transition: {
            duration: 0.15,
            ease: "easeIn"
        }
    }
};

export const SmallScreensNav = ({ closeNav }) => {
    return (
        // 2. Change to motion.section and add animation props
        <motion.section 
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            // Removed the CSS 'animate-in...' classes to let Framer handle it
            className="w-[100vw] absolute inset-x-0 top-full xl:hidden bg-(--bg-primary) z-[9998] border-b border-(--guide-color)"
        >
            <nav
                className="h-[calc(100vh-64px)] w-full overflow-y-auto py-6 flex flex-col"
            >
                {/* --- 1. Main Navigation Links --- */}
                <ul className="px-6 flex flex-col gap-6 text-lg text-(--color-gray-500) font-medium">
                    {/* Added staggered animation for list items for extra polish */}
                    {['About', 'Services', 'Products', 'Careers'].map((item, i) => (
                        <motion.li 
                            key={item}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + (i * 0.05) }}
                            className="hover:text-white transition-colors duration-200"
                        >
                            <Link to={`/${item.toLowerCase()}`} onClick={closeNav}>
                                {item}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Separator Line */}
                <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    className="mx-6 my-8 border-t border-(--guide-color) origin-left"
                ></motion.div>

                {/* --- 2. Action Buttons --- */}
                <div className="px-6 grid grid-cols-1 gap-4">
                    <Link to="/schedule-meeting" onClick={closeNav}>
                        <button className={`${styles['header-btn-primary']} w-full py-3 justify-center text-base`}>
                            Schedule a meeting
                        </button>
                    </Link>
                    <Link to="/contact" onClick={closeNav}>
                        <button className={`${styles['header-btn-secondary']} w-full py-3 justify-center text-base`}>
                            Contact
                        </button>
                    </Link>
                </div>
            </nav>
        </motion.section>
    );
};