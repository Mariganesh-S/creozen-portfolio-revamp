import { Link } from "react-router-dom";

/**
 * CTA: Renders the primary call-to-action content.
 */
export const CTA = () => {
    return (
        <div
            // Removed: bg-(--bg-primary) and borders. 
            // Now purely transparent to blend with the grid/gradient behind it.
            className="
              p-6 md:p-10 lg:p-12
              flex flex-col
              items-center
              justify-center
              gap-y-6
              lg:justify-evenly
              h-full
              w-full
              rounded-3xl
              bg-white/5
              backdrop-blur-md
              border border-white/10
              shadow-2xl
              "
        >
            {/* --- Headline --- */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-balance tracking-tighter text-white drop-shadow-md">
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm text-sm sm:text-base font-medium z-20">

                <Link
                    to="forms"
                    className="bg-(--color-gray-200) hover:opacity-90 text-(--color-black-900)
                    px-4 py-2.5 sm:py-3 rounded-full cursor-pointer duration-200 whitespace-nowrap shadow-lg flex items-center justify-center"
                >
                    <span className="hidden sm:inline">Book a Demo</span>
                    <span className="sm:hidden">Book Demo</span>
                </Link>

                <Link
                    to="products"
                    className="bg-(--color-black-900) hover:bg-(--color-black-600) text-(--color-gray-200)
                    border border-(--color-gray-alpha-200)
                    px-4 py-2.5 sm:py-3 rounded-full duration-200 whitespace-nowrap shadow-lg backdrop-blur-sm flex items-center justify-center"
                >
                    Learn more
                </Link>

            </div>
        </div>
    );
};