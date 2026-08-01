import { FiFileText, FiCalendar } from 'react-icons/fi';
import { GridSeparator } from '../separator/GridSeperator';

export const LegalLayout = ({ title, subtitle, lastUpdated, children }) => {
    return (
        <section className="animate-in fade-in duration-700 bg-(--bg-primary) min-h-screen max-w-(--content-max-width) mx-auto my-12 md:my-20 border border-(--guide-color)">
            
            {/* --- Hero Section --- */}
            <div className="relative py-20 px-6 md:px-12 border-x border-(--guide-color) text-center">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 border border-(--guide-color) bg-black px-3 py-1 text-xs font-mono uppercase text-(--color-gray-500) mb-6">
                        <FiFileText /> Legal Document
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                        {title}
                    </h1>
                    <p className="text-lg text-(--color-gray-400) leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2 text-sm text-(--color-gray-600)">
                        <FiCalendar /> Last Updated: <span className="text-(--color-gray-400)">{lastUpdated}</span>
                    </div>
                </div>
            </div>

            <GridSeparator />

            {/* --- Content Section --- */}
            <div className="border-x border-b border-(--guide-color) bg-(--bg-primary)">
                <div className="max-w-3xl mx-auto py-16 px-6 md:px-12">
                    <div className="prose prose-invert prose-headings:font-medium prose-p:text-(--color-gray-400) prose-li:text-(--color-gray-400) max-w-none space-y-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};