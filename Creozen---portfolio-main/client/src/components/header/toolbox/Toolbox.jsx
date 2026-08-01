import styles from './Toolbox.module.css';
import { motion, AnimatePresence } from 'framer-motion';
// Import the content components for each dropdown category
import { ProductsToolbox } from './ProductsToolbox';
import { SolutionsToolbox } from './SolutionsToolbox';
import { ResourcesToolbox } from './ResourcesToolbox';

/**
 * slideFromRight: Framer Motion variants for content entering/exiting from the right.
 * Used primarily for the 'Products' and 'Resources' toolboxes.
 */
const slideFromRight = {
    // Initial state (hidden and moved off-screen to the right)
    initial: { x: 50, opacity: 0 },
    // Animation state (visible and at final position)
    animate: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, damping: 30 }, // Smooth, spring-like entry
    },
    // Exit state (moves off-screen to the right quickly)
    exit: { x: 50, opacity: 0, transition: { duration: 0.1 } }, // Fast exit
};

/**
 * slideFromLeft: Framer Motion variants for content entering/exiting from the left.
 * Used for the 'Solutions' toolbox to provide a different animation feel.
 */
const slideFromLeft = {
    // Initial state (hidden and moved off-screen to the left)
    initial: { x: -50, opacity: 0 },
    // Animation state (visible and at final position)
    animate: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 300, damping: 30 }, // Smooth, spring-like entry
    },
    // Exit state (moves off-screen to the left quickly)
    exit: { x: -50, opacity: 0, transition: { duration: 0.1 } }, // Fast exit
};

/**
 * Toolbox: The main component responsible for rendering the large, animated desktop dropdown menus.
 * It uses Framer Motion to animate both the container size and the content transition.
 * * @param {string} popup - The currently active menu (e.g., 'products', 'solutions', 'resources').
 */
export const Toolbox = ({ popup }) => {
    return (
        // Outer wrapper (uses CSS Module for positioning/sizing if needed)
        <div className={styles['nav-toolbox']}>
            {/* Main Animated Dropdown Container */}
            <motion.div
                className="absolute top-16 left-1/10 bg-(--bg-primary) p-4 border border-(--guide-color) rounded-xl overflow-hidden"
                // Animate the container's width based on the active 'popup'
                animate={{ width: popup === 'products' ? 800 : 550 }}
                // Custom transition settings for the width animation
                transition={{ type: 'spring', stiffness: 250, damping: 30 }}
            >
                {/* AnimatePresence: Required wrapper for animating content when it is removed (unmounted) from the DOM. */}
                <AnimatePresence mode="wait">
                    {/* --- PRODUCTS TOOLBOX --- */}
                    {popup === 'products' && (
                        <motion.div
                            key="products" // Unique key is required by AnimatePresence
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideFromRight} // Uses slide-in-from-right animation
                        >
                            <ProductsToolbox />
                        </motion.div>
                    )}

                    {/* --- SOLUTIONS TOOLBOX --- */}
                    {popup === 'solutions' && (
                        <motion.div
                            key="solutions"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideFromLeft} // Uses slide-in-from-left animation
                        >
                            <SolutionsToolbox />
                        </motion.div>
                    )}

                    {/* --- RESOURCES TOOLBOX --- */}
                    {popup === 'resources' && (
                        <motion.div
                            key="resources"
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={slideFromRight} // Uses slide-in-from-right animation
                        >
                            <ResourcesToolbox />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
