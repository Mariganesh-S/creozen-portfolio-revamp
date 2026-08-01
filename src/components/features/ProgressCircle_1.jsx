export const ProgressCircle_1 = () => {
    // The parent div acts as the container and defines the core styles via custom CSS properties.
    return (
        <div
            // --- Accessibility (ARIA) Attributes ---
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="90" // The current value
            role="progressbar" // Identifies the element as a progress bar for screen readers
            // --- Inline Style Variables (CSS Custom Properties) ---
            style={{
                '--size': '35px', // Width/Height of the SVG viewBox
                '--stroke': '10', // Thickness of the circle stroke
                '--percent': '90', // Defines the percentage value
            }}
            className="relative" // Required for absolute positioning of the center text
        >
            {/* --- SVG Container --- */}
            <svg width="var(--size)" height="var(--size)" viewBox="0 0 100 100">
                {/* 1. Background Circle (Track) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="" 
                    strokeWidth="var(--stroke)"
                    fill="none"
                />

                {/* 2. Foreground Progress Circle (Fill) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="var(--bg-green-accent)" // Uses a green accent color for success
                    strokeWidth="var(--stroke)"
                    fill="none"
                    strokeLinecap="round"
                    // These values create the progress effect for 90%:
                    strokeDasharray="282.743" // Full circumference (2*PI*R, where R=45)
                    strokeDashoffset="28.274" // Calculated offset: Circumference * (1 - Percent / 100) -> 282.743 * (1 - 0.90) = 28.274
                    transform="rotate(-90 50 50)" // Starts the progress from the top
                />
            </svg>

            {/* --- Center Text Display --- */}
            <p className="absolute top-1/2 left-1/2 -translate-1/2 text-xs">
                90
            </p>
        </div>
    );
};
