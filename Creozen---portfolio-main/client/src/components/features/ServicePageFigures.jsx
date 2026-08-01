import { motion } from 'framer-motion';
import { FiSidebar, FiActivity, FiCode, FiLayers, FiZap, FiDatabase, FiCheckCircle, FiSmartphone, FiServer, FiCpu, FiVideo, FiCalendar } from 'react-icons/fi';
import { LuWorkflow } from 'react-icons/lu';
import { BiChip } from 'react-icons/bi';
import { PiChalkboardTeacher } from 'react-icons/pi';

/* --- 1. Web & App Development Figure (Typing & UI Building) --- */
export const WebDevFigure = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.9 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" }
        })
    };

    return (
        <div className="w-full h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl overflow-hidden flex items-center justify-center relative">
            {/* SEO Description for CSS Figure */}
            <span className="sr-only">Animation showing responsive code architecture and modern React UI development framework.</span>
            
            {/* Background Code Rain Effect */}
            <div className="absolute inset-0 opacity-10 flex justify-between px-4 pointer-events-none overflow-hidden">
                {[0, 1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100 }}
                        animate={{ y: 300 }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: 3 + (i % 3), 
                            ease: "linear",
                            delay: i * 0.5 
                        }}
                        className="w-px bg-blue-500 h-20"
                    />
                ))}
            </div>

            {/* Browser Window */}
            <div className="relative w-64 h-40 bg-black border border-(--guide-color) rounded-lg shadow-2xl flex flex-col overflow-hidden z-10">
                {/* Header */}
                <div className="h-6 bg-(--color-black-600) border-b border-(--guide-color) flex items-center px-2 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                
                {/* Content Body */}
                <div className="flex-1 p-3 flex gap-3">
                    {/* Sidebar */}
                    <motion.div 
                        custom={0}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-12 h-full bg-(--guide-color) rounded-md opacity-30" 
                    />
                    
                    {/* Main Content */}
                    <div className="flex-1 space-y-2">
                        {/* Hero Block */}
                        <motion.div 
                            custom={1}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full h-16 rounded-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30" 
                        />
                        {/* Text Lines */}
                        <motion.div 
                            custom={2}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-3/4 h-2 bg-(--guide-color) rounded opacity-40" 
                        />
                         <motion.div 
                            custom={3}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-1/2 h-2 bg-(--guide-color) rounded opacity-40" 
                        />
                    </div>
                </div>

                {/* Floating "Code" Badge */}
                <motion.div 
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute bottom-2 right-2 px-2 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-[10px] text-blue-400 flex items-center gap-1"
                >
                    <FiCode /> React
                </motion.div>
            </div>
        </div>
    );
};

/* --- 2. AI-Based Smart Analytics Figure (Live Data Charts) --- */
export const AnalyticsFigure = () => {
    return (
        <div className="w-full h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-6 flex flex-col justify-end relative overflow-hidden">
             {/* SEO Description for CSS Figure */}
             <span className="sr-only">Data visualization showing real-time AI metrics, growth charts, and predictive analytics dashboards.</span>

             {/* Header */}
             <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 mb-1">
                    <FiActivity className="text-green-400" />
                    <span className="text-xs text-(--color-gray-500) uppercase tracking-wider">Live Metrics</span>
                </div>
                <div className="text-2xl font-bold text-white">98.4%</div>
            </div>

            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10 pointer-events-none">
                {[...Array(24)].map((_, i) => (
                    <div key={i} className="border-[0.5px] border-(--guide-color)" />
                ))}
            </div>

            {/* Animated Bars */}
            <div className="flex items-end justify-between gap-2 h-32 z-10 px-2">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => {
                    const baseHeight = 30 + (i * 10) % 50; 
                    const peakHeight = 60 + (i * 5) % 30;
                    return (
                        <motion.div
                            key={i}
                            initial={{ height: `${baseHeight}%` }}
                            animate={{ height: [`${baseHeight}%`, `${peakHeight}%`, `${baseHeight}%`] }}
                            transition={{
                                repeat: Infinity,
                                duration: 2 + (i * 0.2), 
                                ease: "easeInOut"
                            }}
                            className="w-full bg-gradient-to-t from-blue-600/50 to-blue-400 rounded-t-sm relative overflow-hidden"
                        >
                            <motion.div 
                                animate={{ top: ["100%", "-100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                                className="absolute left-0 right-0 h-full bg-white/20"
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Running Line Graph (SVG) */}
            <svg className="absolute bottom-0 left-0 right-0 h-full w-full pointer-events-none z-0 opacity-30">
                <motion.path
                    d="M0 100 Q 50 50 100 80 T 200 60 T 300 90 T 400 40 T 500 70"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

/* --- 3. Custom Product Development Figure (Blueprint to Reality Scan) --- */
export const ProductDevFigure = () => {
    return (
        <div className="w-full h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl relative flex items-center justify-center overflow-hidden">
            <span className="sr-only">Diagram of product lifecycle showing transition from wireframe blueprints to deployed software application.</span>
            
            <div className="relative w-64 h-32">
                
                {/* Layer 1: The Blueprint (Wireframe) */}
                <div className="absolute inset-0 bg-[#0a0a0a] border border-(--guide-color) rounded-lg p-3 flex gap-3">
                    <div className="w-1/3 h-full border border-dashed border-(--guide-color) rounded opacity-50 flex items-center justify-center">
                        <FiLayers className="text-(--color-gray-600)" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="w-full h-4 border border-dashed border-(--guide-color) rounded opacity-50" />
                        <div className="w-2/3 h-4 border border-dashed border-(--guide-color) rounded opacity-50" />
                        <div className="w-full h-12 border border-dashed border-(--guide-color) rounded opacity-50 mt-2" />
                    </div>
                </div>

                {/* Layer 2: The Final Product (Colored) - Masked */}
                <motion.div 
                    className="absolute inset-0 bg-[#050505] border border-purple-500/30 rounded-lg p-3 flex gap-3 z-10 overflow-hidden"
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 100% 0 0)"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }}
                >
                    <div className="absolute inset-0 bg-purple-500/5 pointer-events-none" />
                    <div className="w-1/3 h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded shadow-lg flex items-center justify-center text-white">
                        <FiZap />
                    </div>
                    <div className="flex-1 space-y-2">
                        <div className="w-full h-4 bg-(--guide-color) rounded opacity-80" />
                        <div className="w-2/3 h-4 bg-(--guide-color) rounded opacity-60" />
                        <div className="w-full h-12 bg-(--color-black-600) rounded border border-(--guide-color) mt-2 flex items-center justify-center">
                             <span className="text-[10px] text-purple-400 font-mono">deployed</span>
                        </div>
                    </div>
                </motion.div>

                {/* The Scanning Line */}
                <motion.div
                    className="absolute top-[-10%] bottom-[-10%] w-0.5 bg-purple-400 z-20"
                    initial={{ left: "0%" }}
                    animate={{ left: ["0%", "100%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatDelay: 1 }}
                    style={{ 
                        boxShadow: "0 0 15px 2px rgba(192, 132, 252, 0.6)" 
                    }}
                />
            </div>
            
            <div className="absolute bottom-4 text-xs text-(--color-gray-500) font-mono animate-pulse">
                Building...
            </div>
        </div>
    );
};

/* --- 4. AI-Based Training Figure (Workshops & Students) --- */
export const AiTrainingFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-4 flex flex-col relative overflow-hidden">
            <span className="sr-only">Interactive schedule of AI workshops, live training sessions, and student progress tracking.</span>
            
            {/* Header: Course Info */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-(--guide-color)">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-500/10 rounded text-blue-400">
                        <PiChalkboardTeacher />
                    </div>
                    <div>
                        <h5 className="text-xs font-medium text-white">AI for Enterprise</h5>
                        <p className="text-[10px] text-(--color-gray-500)">Workshop Series</p>
                    </div>
                </div>
                <div className="text-[10px] px-2 py-1 bg-(--guide-color) rounded-full text-(--color-gray-400) flex items-center gap-1">
                    <FiCalendar /> Nov 2024
                </div>
            </div>

            {/* Curriculum List */}
            <div className="space-y-2.5 flex-1">
                {/* Module 1: Done */}
                <div className="flex items-center gap-3 opacity-50">
                    <div className="w-4 h-4 rounded-full bg-(--color-gray-800) flex items-center justify-center text-green-500">
                        <FiCheckCircle size={10} />
                    </div>
                    <span className="text-xs text-(--color-gray-400) line-through">Intro to LLMs</span>
                </div>

                {/* Module 2: LIVE */}
                <div className="flex items-center gap-3 p-2 bg-(--color-black-600) border border-(--guide-color) rounded-lg">
                    <div className="relative w-4 h-4 flex items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-25 animate-ping"></span>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    <div className="flex-1">
                        <span className="text-xs font-medium text-white block">Prompt Engineering</span>
                        <span className="text-[10px] text-red-400 flex items-center gap-1">
                            <FiVideo size={8}/> Live Session
                        </span>
                    </div>
                    <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-gray-600 border border-black"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-500 border border-black"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-400 border border-black text-[6px] flex items-center justify-center text-black font-bold">+12</div>
                    </div>
                </div>

                {/* Module 3: Upcoming */}
                <div className="flex items-center gap-3 opacity-60">
                    <div className="w-4 h-4 rounded-full border border-(--guide-color) flex items-center justify-center">
                        <span className="w-1 h-1 rounded-full bg-(--color-gray-600)"></span>
                    </div>
                    <span className="text-xs text-(--color-gray-400)">RAG Systems Implementation</span>
                </div>
            </div>
        </div>
    );
};

/* --- 5. Enterprise Automations Figure (Infinite Pipeline) --- */
export const AutomationFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-4 flex items-center justify-center overflow-hidden">
            <span className="sr-only">Diagram illustrating automated enterprise workflow: database trigger, processing logic, and approval action.</span>
            
            <div className="relative w-full max-w-xs flex items-center justify-between">
                
                {/* Step 1: Trigger */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-10 h-10 rounded-lg border border-(--guide-color) bg-black flex items-center justify-center text-(--color-gray-400)">
                        <FiDatabase />
                    </div>
                    <span className="text-[10px] text-(--color-gray-500)">New Entry</span>
                </div>

                {/* Connecting Line 1 */}
                <div className="flex-1 h-px bg-(--guide-color) relative mx-2">
                     <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--color-gray-600)"></div>
                </div>

                {/* Step 2: Process (Active) */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]">
                        <LuWorkflow className="animate-spin-slow" />
                    </div>
                    <span className="text-xs text-blue-400 font-medium">Processing</span>
                </div>

                 {/* Connecting Line 2 */}
                 <div className="flex-1 h-px bg-(--guide-color) relative mx-2">
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-(--color-gray-600)"></div>
                </div>

                {/* Step 3: Action */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-10 h-10 rounded-lg border border-(--guide-color) bg-black flex items-center justify-center text-(--color-gray-400)">
                        <FiCheckCircle />
                    </div>
                    <span className="text-[10px] text-(--color-gray-500)">Approved</span>
                </div>
            </div>
        </div>
    );
};

/* --- 6. Smart IoT Figure (Radar & Connectivity) --- */
export const IotFigure = () => {
    return (
        <div className="w-full h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl relative flex items-center justify-center overflow-hidden">
            <span className="sr-only">Animation of a central IoT hub connecting to orbiting smart devices, sensors, and servers.</span>

            {/* Background Map/Grid */}
            <div className="absolute inset-0 opacity-10" style={{ 
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }} />

            {/* Expanding Radar Rings */}
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-green-500/30 rounded-full"
                    style={{ width: '100px', height: '100px' }}
                    animate={{ 
                        scale: [1, 3], 
                        opacity: [0.5, 0],
                        borderWidth: ["1px", "0px"]
                    }}
                    transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        delay: i * 1,
                        ease: "easeOut" 
                    }}
                />
            ))}

            {/* Central Hub */}
            <div className="relative z-20 w-16 h-16 bg-black border border-green-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                <BiChip className="text-2xl text-green-500" />
            </div>

            {/* Orbiting Devices (Counter-Rotating Icons) */}
            {[0, 1, 2].map((i) => {
                const duration = 12 + i * 4;
                const direction = i % 2 === 0 ? 1 : -1;

                return (
                    <motion.div
                        key={i}
                        className="absolute w-full h-full flex items-center justify-center pointer-events-none"
                        animate={{ rotate: direction * 360 }}
                        transition={{ 
                            repeat: Infinity, 
                            duration: duration, 
                            ease: "linear",
                        }}
                    >
                        {/* Device Container: Offset from center */}
                        <div className="absolute top-10" style={{ transform: `translateY(-${60 + i * 25}px)` }}>
                            {/* Icon Wrapper: Counter-rotates to stay upright */}
                            <motion.div 
                                className="w-8 h-8 bg-black border border-(--guide-color) rounded-full flex items-center justify-center text-(--color-gray-400) shadow-lg"
                                animate={{ rotate: direction * -360 }} // Counter rotation
                                transition={{ 
                                    repeat: Infinity, 
                                    duration: duration, 
                                    ease: "linear",
                                }}
                            >
                                {i === 0 && <FiSmartphone size={12} />}
                                {i === 1 && <FiServer size={12} />}
                                {i === 2 && <FiCpu size={12} />}
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};