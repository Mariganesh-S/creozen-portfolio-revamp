import { useState, useRef, useEffect } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { getBotResponse } from './botLogic';

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 I'm the Creozen Assistant. Ask me about our services, products, or careers.", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    // --- 1. Track Screen Size for Conditional Animations ---
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isTyping, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        
        setMessages(prev => [...prev, { id: Date.now(), text: userText, sender: 'user' }]);
        setInputValue("");
        setIsTyping(true);

        setTimeout(() => {
            const botReply = getBotResponse(userText);
            setMessages(prev => [...prev, { id: Date.now() + 1, text: botReply, sender: 'bot' }]);
            setIsTyping(false);
        }, 800);
    };

    const handleChipClick = (text) => {
        setInputValue(text);
    };

    // --- 2. Animation Variants ---
    
    // Desktop: Scale up from bottom-right
    const desktopVariants = {
        initial: { opacity: 0, y: 20, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 }
    };

    // Mobile: Slide up from bottom (Sheet)
    const mobileVariants = {
        initial: { y: "100%", opacity: 0 },
        animate: { y: "0%", opacity: 1 },
        exit: { y: "100%", opacity: 0 }
    };

    return (
        <>
            {/* --- Launcher Button --- */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className={`
                    fixed bottom-6 right-6 z-[10000] 
                    w-14 h-14 rounded-full bg-white text-black 
                    flex items-center justify-center shadow-lg
                    hover:scale-110 transition-transform duration-200
                    ${isOpen ? 'hidden' : 'flex'}
                `}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
                <FiMessageSquare size={24} />
            </motion.button>

            {/* --- Chat Window --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Mobile Backdrop (dim background) */}
                        {isMobile && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/60 z-[9999] md:hidden backdrop-blur-sm"
                            />
                        )}

                        <motion.div
                            variants={isMobile ? mobileVariants : desktopVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            
                            // Enable Drag-to-dismiss on Mobile
                            drag={isMobile ? "y" : false}
                            dragConstraints={{ top: 0, bottom: 0 }}
                            dragElastic={{ top: 0, bottom: 0.5 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                // If dragged down more than 100px or flicked fast, close it
                                if (offset.y > 100 || velocity.y > 200) {
                                    setIsOpen(false);
                                }
                            }}

                            className={`
                                fixed z-[10000] bg-black border border-(--guide-color) shadow-2xl flex flex-col overflow-hidden font-sans
                                
                                /* Mobile Styles (Bottom Sheet) */
                                bottom-0 left-0 right-0 w-full h-[85vh] rounded-t-2xl border-b-0
                                
                                /* Desktop Styles (Popover) */
                                md:bottom-6 md:right-6 md:left-auto md:w-[380px] md:h-[500px] md:max-h-[80vh] md:rounded-xl md:border-b
                            `}
                        >
                            {/* --- Mobile Drag Handle --- */}
                            <div className="md:hidden w-full flex justify-center pt-3 pb-1 bg-(--bg-primary) cursor-grab active:cursor-grabbing">
                                <div className="w-12 h-1.5 bg-(--color-gray-800) rounded-full"></div>
                            </div>

                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-(--guide-color) bg-(--bg-primary)">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="font-medium text-white text-sm">Creozen AI</span>
                                </div>
                                <button 
                                    onClick={() => setIsOpen(false)}
                                    className="text-(--color-gray-500) hover:text-white transition-colors"
                                >
                                    <FiX size={20} />
                                </button>
                            </div>

                            {/* Messages Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
                                {messages.map((msg) => (
                                    <div 
                                        key={msg.id} 
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div 
                                            className={`
                                                max-w-[85%] p-3 text-sm rounded-lg leading-relaxed
                                                ${msg.sender === 'user' 
                                                    ? 'bg-white text-black rounded-tr-none' 
                                                    : 'bg-(--color-black-900) border border-(--guide-color) text-(--color-gray-200) rounded-tl-none'}
                                            `}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                                
                                {/* Typing Indicator */}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-(--color-black-900) border border-(--guide-color) px-4 py-3 rounded-lg rounded-tl-none flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-(--color-gray-500) rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-(--color-gray-500) rounded-full animate-bounce delay-75"></span>
                                            <span className="w-1.5 h-1.5 bg-(--color-gray-500) rounded-full animate-bounce delay-150"></span>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Quick Suggestions */}
                            <div className="px-4 py-2 border-t border-(--guide-color) bg-(--bg-primary) flex gap-2 overflow-x-auto no-scrollbar">
                                {['Services?', 'Pricing', 'Book Demo', 'Careers'].map(chip => (
                                    <button
                                        key={chip}
                                        onClick={() => handleChipClick(chip)}
                                        className="whitespace-nowrap px-3 py-1 text-xs border border-(--guide-color) rounded-full text-(--color-gray-400) hover:text-white hover:border-white transition-colors"
                                    >
                                        {chip}
                                    </button>
                                ))}
                            </div>

                            {/* Input Area */}
                            <form onSubmit={handleSend} className="p-3 border-t border-(--guide-color) bg-black flex gap-2 pb-6 md:pb-3">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-(--color-black-900) border border-(--guide-color) rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button 
                                    type="submit"
                                    className="p-2 bg-white text-black rounded-md hover:bg-(--color-gray-200) transition-colors"
                                >
                                    <FiSend />
                                </button>
                            </form>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};