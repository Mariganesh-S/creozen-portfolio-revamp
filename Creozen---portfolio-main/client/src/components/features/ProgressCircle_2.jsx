import styles from './ProgressCircle_2.module.css';

/**
 * ProgressCircle_2: Renders a visual progress indicator using a CSS Module for
 * complex styling, indicating a status (failure/rollback) with a red accent.
 */
export const ProgressCircle_2 = () => {
    return (
        <div
            // --- Accessibility (ARIA) Attributes ---
            aria-valuemax="100"
            aria-valuemin="0"
            aria-valuenow="55" // Current value
            role="progressbar"
            // --- CSS Module & Custom Properties ---
            className={styles['gauge-circle']} // Primary class for containing/styling the circle
            data-version="v1" // Data attribute, potentially for versioning the gauge style
            style={{
                '--circle-size': '100px',
                '--circumference': '282.7433388230814', // 2*PI*R where R=45
                '--percent-to-px': '2.827433388230814px', // Circumference / 100
                '--gap-percent': '6',
                '--offset-factor': '0',
            }}
        >
            {/* --- SVG Container --- */}
            <svg
                aria-hidden="true"
                fill="none"
                height="32" // Final rendered height
                strokeWidth="2" // Default stroke width (overridden by circle elements)
                viewBox="0 0 100 100"
                width="32" // Final rendered width
            >
                {/* 1. Secondary/Background Arc (Optional/Decorative Track) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="10"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles['gauge-arcSecondary']} // CSS Module class for secondary arc
                    stroke="var(--guide-color)" // Uses the guide color for the track/secondary part
                    style={{ opacity: 1, '--stroke-percent': 33 }} // Custom property for module logic
                />

                {/* 2. Foreground Progress Arc (The Main Progress/Status) */}
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    strokeWidth="10"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles['gauge-arc']} // CSS Module class for main arc
                    stroke="var(--bg-red-accent)" // Uses a RED accent for failure/issue
                    style={{ opacity: 1, '--stroke-percent': 55 }} // Custom property for module logic
                />
            </svg>
        </div>
    );
};
