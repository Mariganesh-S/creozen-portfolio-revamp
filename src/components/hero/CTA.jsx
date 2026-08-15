import { Link } from "react-router-dom";

/**
 * CTA: Renders the primary call-to-action content.
 */
export const CTA = () => {
    return (
        <div
            // Removed: bg-(--bg-primary) and borders. 
            // Now purely transparent to blend with the grid/gradient behind it.
           className=" p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center gap-y-6 lg:justify-evenly h-full w-full rounded-3xl
           bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            {/* --- Headline --- */}
            <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-semibold  text-center text-balance tracking-tighter text-white drop-shadow-md">
                Ignite Your Vision.
            </h1>

            {/* --- Tagline --- */}
            <div className="max-w-[90%] md:max-w-2xl">
                <p
                    className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-(--color-gray-500)
                    text-balance leading-relaxed"
                >
                    Creozen turns intelligent design into effortless performance. Simple, precise, and ready to elevate your workflow.
                </p>
            </div>

            {/* --- Buttons --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full  max-w-xs  sm:max-w-sm text-sm sm:text-base font-medium z-20">

                <Link
                    to="forms"
                   className=" w-full bg-white hover:bg-(--color-gray-200)  text-black  px-5 py-3 rounded-full cursor-pointer  transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center">
                    <span className="hidden sm:inline">Book a Demo</span>
                    <span className="sm:hidden">Book Demo</span>
                </Link>

                <Link
                    to="products"
                  className="
                         w-full bg-(--color-black-900) hover:bg-(--color-black-600) text-white border border-(--guide-color) hover:border-white/30
                         px-5 py-3 rounded-full cursor-pointer  transition-all  duration-300  whitespace-nowrap  shadow-lg  hover:shadow-xl  hover:-translate-y-0.5  flex  items-center
                         justify-center"
                >
                    Learn more
                </Link>

            </div>
        </div>
    );
};