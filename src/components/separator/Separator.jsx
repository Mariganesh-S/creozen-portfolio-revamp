/**
 * Separator: Renders a horizontal divider element with padding and guide borders.
 * This component is designed to visually separate sections of content.
 */
export const Separator = () => {
    return (
        // Styling Breakdown:
        // p-2: Adds padding (top/bottom) to give the line some vertical space.
        // border-y: Applies a border to the top and bottom edges.
        // border-(--guide-color): Uses a custom variable for the border color, ensuring it matches the theme.
        <div className="p-2 border-y border-(--guide-color)"></div>
    );
};
