import { Link } from 'react-router-dom';
import plus from '../../assets/icons/plus.svg';

/**
 * GetStartedBanner: Renders a Call-to-Action section with dual paths:
 * starting a free deployment and exploring enterprise options.
 */
export const GetStartedBanner = () => {
    return (
        <div className="relative border-t border-(--guide-color) bg-(--color-black-900)">

            {/* --- Main Content Grid (1-column on mobile, 3-column on large screens) --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 overflow-hidden">
                {/* --- Primary CTA Section (Col-span 2 on large screens) --- */}
                <div
                    className="p-(--padding-sm) py-12 lg:p-(--padding-lg) col-span-2 
                               flex flex-col items-center gap-6 lg:items-start 
                               border-b border-dashed border-(--guide-color) lg:border-0"
                >
                    {/* Main Headline & Text */}
                    <p className="text-xl lg:text-2xl text-balance text-center lg:text-start">
                        <span className="font-semibold">Ready to build the future?</span>{' '}
                        <span className="text-(--color-gray-500)">
                            Let's turn your vision into a reality. Contact us today to discuss your project and discover how our {' '}
                            {/* Differentiated text for pricing tiers */}
                            <span className="text-[#528AFF]">innovative solutions </span> can drive your {' '}
                            <span className="text-[#BF7AF0]">success</span>.{' '}
                        </span>
                    </p>

                    {/* CTA Buttons (Flex row for horizontal alignment) */}
                    <div className="flex items-center gap-4 text-xs sm:text-sm">
                        {/* Primary Button */}
                        <Link to='contact'>
                            <button
                                className="px-4 py-2.5 border rounded-full bg-(--color-gray-50) text-black
                                            hover:opacity-90 duration-200 min-w-[8rem]"
                            >
                                Contact us
                            </button>
                        </Link>
                        {/* Secondary Button */}
                        <Link to='schedule-meeting'>
                            <button className="px-4 py-2.5 border border-(--color-gray-alpha-200) rounded-full cursor-pointer bg-(--color-black-900) hover:bg-(--color-gray-900) duration-200 min-w-[8rem]">
                                Schedule a meeting
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
