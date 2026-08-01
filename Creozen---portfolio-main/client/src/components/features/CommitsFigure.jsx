import rainbowArrowLarge from '../../assets/images/rainbow-arrow-large.svg'; // Decorative arrow for large screens
import rainbowArrowSmall from '../../assets/images/rainbow-arrow-small.svg'; // Decorative arrow for small screens
import { FiGitCommit } from 'react-icons/fi'; // Icon for a Git commit
import { LuHistory } from 'react-icons/lu'; // Icon for rollback/history
import { ProgressCircle_1 } from './ProgressCircle_1'; // Child component for the first commit's status (likely complete)
import { ProgressCircle_2 } from './ProgressCircle_2'; // Child component for the second commit's status (likely in progress)

/**
 * CommitsFigure: Visually represents two commits in a deployment pipeline,
 * illustrating the ability to roll back to a previous state.
 */
export const CommitsFigure = () => {
    return (
        <div>
            {/* --- 1. Top Commit Card (The Successful/Older Deploy) --- */}
            <div
                className="mt-8 px-3 py-2 border border-(--guide-color) bg-(--color-black-900) 
                    flex items-center rounded-xl gap-4 w-fit"
            >
                {/* Commit Details Text Container */}
                <div className="text-sm space-y-1 min-w-[12rem] sm:min-w-[14rem]">
                    {/* Top line: Project Path and Time */}
                    <div className="flex items-center justify-between ">
                        {/* Project Path (Hidden on mobile/small screens, shown on desktop) */}
                        <p className="hidden lg:block">
                            <span className="text-(--color-gray-500)">
                                vercel-site/
                            </span>
                            jvjb4ynna
                        </p>
                        {/* Time/Age of Commit */}
                        <span className="text-(--color-gray-500) text-xs">
                            1d ago
                        </span>
                    </div>
                    {/* Bottom line: Commit Hash and Message */}
                    <div className="flex items-center gap-2">
                        <FiGitCommit />
                        {/* Commit Hash (Shown on MD/Desktop, hidden on SM) */}
                        <span className="block sm:hidden md:block">
                            ba5f55f
                        </span>
                        {/* Short Commit Message (Shown on small screens) */}
                        <span className="lg:hidden">Update bento</span>
                        {/* Long Commit Message (Shown on large screens) */}
                        <span className="hidden lg:block">
                            Update bento box design
                        </span>
                    </div>
                </div>

                {/* Progress Indicator for Commit 1 */}
                <div className="w-8">
                    <ProgressCircle_1 />
                </div>
            </div>

            {/* --- 2. Connection Line & Rollback Indicator --- */}
            <div className="relative">
                {/* Rainbow Arrow (Large/Desktop) - Uses art direction for performance */}
                <img
                    src={rainbowArrowLarge}
                    className="mx-auto hidden md:block mt-2"
                    alt="Rainbow Arrow Large"
                />
                {/* Rainbow Arrow (Small/Mobile) */}
                <img
                    src={rainbowArrowSmall}
                    className="md:hidden mx-auto mt-2"
                    alt="Rainbow Arrow Small"
                />

                {/* Central Rollback Icon (Overlays the arrow line) */}
                <div
                    className="bg-(--bg-primary) w-8 h-8 rounded-full border
                    border-(--guide-color) flex items-center justify-center
                    absolute top-1/2 left-1/2 -translate-x-1/2 -mt-1 -translate-y-1/2"
                >
                    <LuHistory className="text-(--color-gray-500)" />
                </div>
            </div>

            {/* --- 3. Bottom Commit Card (The Failed/Newer Deploy) --- */}
            <div
                className="px-3 py-2 border border-dashed border-(--guide-color) bg-(--color-black-900) 
                    flex items-center rounded-xl gap-4 w-fit ml-auto"
            >
                {/* ml-auto: Pushes the card to the right to create a zig-zag flow. */}
                {/* border-dashed: Visually suggests this is the "newest" or currently processing commit. */}

                {/* Commit Details Text Container (Structure identical to the top card) */}
                <div className="text-sm space-y-1 min-w-[12rem] sm:min-w-[14rem] ">
                    <div className="flex items-center justify-between ">
                        <p className="hidden lg:block">
                            <span className="text-(--color-gray-500)">
                                vercel-site/
                            </span>
                            gigj178pv
                        </p>
                        <span className="text-(--color-gray-500) text-xs">
                            10m ago
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiGitCommit />
                        <span className="block sm:hidden md:block">
                            bx012mm
                        </span>
                        <span className="lg:hidden">Fix Eslint error</span>
                        <span className="hidden lg:block">
                            Fix Eslint error on query
                        </span>
                    </div>
                </div>

                {/* Progress Indicator for Commit 2 */}
                <div className="relative">
                    <ProgressCircle_2 />
                    {/* Status/Time overlay on the circle */}
                    <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        text-xs"
                    >
                        55
                    </span>
                </div>
            </div>
        </div>
    );
};
