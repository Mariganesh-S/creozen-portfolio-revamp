import { BiCode } from 'react-icons/bi';
import { FiSidebar, FiActivity, FiCpu, FiSmartphone, FiDatabase, FiCheckCircle, FiVideo, FiUser, FiCalendar } from 'react-icons/fi';
import { LuWorkflow, LuZap, LuPenTool } from 'react-icons/lu';
import { PiGraph, PiChalkboardTeacher, PiCertificate } from 'react-icons/pi';
import { TbBrandPython } from 'react-icons/tb';

/* --- 1. Web & App Development Figure --- */
export const WebDevFigure = () => {
    return (
        <div className="relative w-full h-48 md:h-56 overflow-hidden border border-(--guide-color) rounded-xl flex items-center justify-center p-4">
            {/* Browser Window */}
            <div className="absolute top-8 left-8 right-[-20px] bottom-[-20px] bg-black border border-(--guide-color) rounded-tl-lg shadow-2xl flex flex-col">
                <div className="h-8 border-b border-(--guide-color) flex items-center gap-1.5 px-3 bg-(--color-black-600) rounded-tl-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
                <div className="p-4 grid grid-cols-4 gap-4 h-full">
                    <div className="col-span-1 h-full bg-(--guide-color) rounded-md opacity-20 animate-pulse"></div>
                    <div className="col-span-3 space-y-3">
                        <div className="h-20 w-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-md"></div>
                        <div className="h-4 w-3/4 bg-(--guide-color) rounded opacity-30"></div>
                        <div className="h-4 w-1/2 bg-(--guide-color) rounded opacity-30"></div>
                    </div>
                </div>
            </div>
            {/* Mobile Floating Overlay */}
            <div className="absolute bottom-4 left-4 w-20 h-36 bg-black border border-(--guide-color) rounded-[1.5rem] shadow-xl flex flex-col items-center pt-2">
                <div className="w-8 h-1 bg-(--guide-color) rounded-full mb-2"></div>
                <div className="w-full h-full px-2 space-y-2">
                     <div className="h-8 w-full bg-blue-500/20 rounded-md"></div>
                     <div className="h-2 w-full bg-(--guide-color) opacity-20 rounded"></div>
                     <div className="h-2 w-2/3 bg-(--guide-color) opacity-20 rounded"></div>
                </div>
            </div>
        </div>
    );
};

/* --- 2. AI-Based Smart Analytics Figure --- */
export const AnalyticsFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-6 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start z-10">
                <div>
                    <p className="text-xs text-(--color-gray-500)">Total Requests</p>
                    <h4 className="text-2xl font-medium text-white">2.4M <span className="text-xs text-green-500 font-normal">↑ 14%</span></h4>
                </div>
                <div className="p-2 bg-(--guide-color) rounded-md">
                    <FiActivity className="text-(--color-gray-400)" />
                </div>
            </div>
            
            {/* CSS Bar Chart */}
            <div className="flex items-end gap-2 h-24 mt-4 z-10">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-(--guide-color) hover:bg-blue-500/50 duration-300 rounded-sm relative group" style={{ height: `${h}%` }}>
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black border border-(--guide-color) px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Value: {h}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Background Grid Lines */}
            <div className="absolute inset-0 pointer-events-none grid grid-rows-4">
                <div className="border-b border-dashed border-(--guide-color) opacity-30"></div>
                <div className="border-b border-dashed border-(--guide-color) opacity-30"></div>
                <div className="border-b border-dashed border-(--guide-color) opacity-30"></div>
            </div>
        </div>
    );
};

/* --- 3. Custom Product Development Figure --- */
/* VISUALIZATION: Blueprint to Reality Split View */
export const ProductDevFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl relative overflow-hidden flex items-center justify-center p-6">
            
            {/* Split Container */}
            <div className="relative w-full max-w-sm h-32 flex rounded-lg overflow-hidden border border-(--guide-color)">
                
                {/* Left Side: Blueprint / Wireframe */}
                <div className="w-1/2 bg-[rgba(30,30,30,0.5)] p-3 relative border-r border-dashed border-(--guide-color)">
                    <div className="absolute top-2 left-2 text-[10px] text-(--color-gray-500) font-mono flex items-center gap-1">
                        <LuPenTool /> PROTOTYPE
                    </div>
                    {/* Wireframe Elements */}
                    <div className="mt-6 space-y-2 opacity-50">
                        <div className="h-8 w-full border border-dashed border-(--guide-color) rounded"></div>
                        <div className="flex gap-2">
                            <div className="h-16 w-1/3 border border-dashed border-(--guide-color) rounded"></div>
                            <div className="h-16 w-2/3 border border-dashed border-(--guide-color) rounded"></div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Finished Product */}
                <div className="w-1/2 bg-black p-3 relative">
                     <div className="absolute top-2 right-2 text-[10px] text-purple-400 font-mono flex items-center gap-1">
                        <BiCode /> RELEASE
                    </div>
                    {/* Finished Elements */}
                    <div className="mt-6 space-y-2">
                        <div className="h-8 w-full bg-purple-500/20 border border-purple-500/30 rounded flex items-center px-2">
                            <div className="h-2 w-12 bg-purple-400/50 rounded-full"></div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-16 w-1/3 bg-(--guide-color) rounded opacity-80"></div>
                            <div className="h-16 w-2/3 bg-gradient-to-br from-purple-900/20 to-black border border-(--guide-color) rounded p-2">
                                <div className="h-2 w-full bg-(--guide-color) rounded mb-1 opacity-40"></div>
                                <div className="h-2 w-2/3 bg-(--guide-color) rounded opacity-40"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Central Connector/Transition Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-(--guide-color) rounded-full flex items-center justify-center z-10 shadow-lg">
                    <span className="text-(--color-gray-400)">➜</span>
                </div>
            </div>
            
            {/* Background Grid for "Technical" feel */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        </div>
    );
};

/* --- 4. AI-Based Training Figure --- */
/* VISUALIZATION: Workshop Schedule & Live Session */
export const AiTrainingFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-4 flex flex-col relative overflow-hidden">
            
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

/* --- 5. Enterprise Automations Figure --- */
export const AutomationFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl p-4 flex items-center justify-center overflow-hidden">
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

/* --- 6. Smart IoT Figure --- */
export const IotFigure = () => {
    return (
        <div className="w-full h-48 md:h-56 bg-(--color-black-900) border border-(--guide-color) rounded-xl relative overflow-hidden flex items-center justify-center">
            
            {/* Radar / Signal Effect */}
            <div className="absolute w-64 h-64 border border-(--guide-color) rounded-full opacity-20"></div>
            <div className="absolute w-44 h-44 border border-(--guide-color) rounded-full opacity-40"></div>
            <div className="absolute w-24 h-24 border border-green-500/20 rounded-full animate-ping"></div>

            {/* Center Node */}
            <div className="relative z-10 w-12 h-12 bg-black border border-green-500/50 text-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)]">
                <LuZap className="text-xl" />
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute top-10 left-16 p-2 rounded-full bg-black border border-(--guide-color) text-(--color-gray-400)">
                <FiSmartphone size={14} />
            </div>
            
            <div className="absolute bottom-12 right-12 p-2 rounded-full bg-black border border-(--guide-color) text-(--color-gray-400)">
                <FiCpu size={14} />
            </div>

            <div className="absolute bottom-10 left-12 p-2 rounded-full bg-black border border-(--guide-color) text-(--color-gray-400)">
                <div className="w-3 h-3 grid grid-cols-2 gap-px">
                    <div className="bg-current rounded-[1px]"></div>
                    <div className="bg-current rounded-[1px]"></div>
                    <div className="bg-current rounded-[1px]"></div>
                    <div className="bg-current rounded-[1px]"></div>
                </div>
            </div>

            {/* Connecting lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-(--guide-color)" strokeWidth="1">
                <line x1="50%" y1="50%" x2="25%" y2="25%" strokeDasharray="4 4" opacity="0.5" />
                <line x1="50%" y1="50%" x2="75%" y2="75%" strokeDasharray="4 4" opacity="0.5" />
                <line x1="50%" y1="50%" x2="25%" y2="75%" strokeDasharray="4 4" opacity="0.5" />
            </svg>
        </div>
    );
};
