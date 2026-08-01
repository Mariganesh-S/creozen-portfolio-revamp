import plus from '../../assets/icons/plus.svg';

/**
 * GridSeparator: A visual divider that mimics the grid layout of the Hero section.
 * It renders a single row of square cells (8 on mobile, 12 on desktop) with decorative corners.
 */
export const GridSeparator = () => {
    return (
        <div className="relative w-full border-y border-(--guide-color)">
            {/* Decorative Plus Icon - Top Left */}
            <img
                className="absolute -top-[10px] -left-[10px] z-10"
                src={plus}
                alt="plus decoration"
            />
            
            {/* The Grid Row */}
            <div className="grid grid-cols-8 md:grid-cols-12">
                {/* First 8 cells: Visible on all screens */}
                {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                        key={`cell-sm-${i}`} 
                        className="aspect-square border-r border-(--guide-color)"
                    ></div>
                ))}
                
                {/* Remaining 4 cells: Visible only on desktop (md+) to complete the 12-column row */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div 
                        key={`cell-md-${i}`} 
                        className="hidden md:block aspect-square border-r border-(--guide-color)"
                    ></div>
                ))}
            </div>

            {/* Decorative Plus Icon - Bottom Right */}
            <img
                className="absolute -bottom-[9px] -right-[9px] z-10"
                src={plus}
                alt="plus decoration"
            />
        </div>
    );
};