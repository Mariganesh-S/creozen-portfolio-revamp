import { motion } from 'framer-motion';

const variants = {
    initial: {
        opacity: 0,
        y: 10, // Starts slightly below
        scale: 0.99 // Very subtle zoom effect
    },
    enter: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.61, 1, 0.88, 1], // Custom cubic-bezier for a "snap" feel
        }
    },
    exit: {
        opacity: 0,
        y: -10, // Exits slightly above
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

export const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            className="w-full" // Ensure it takes full width
        >
            {children}
        </motion.div>
    );
};