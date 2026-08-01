import styles from './Toolbox.module.css';

/**
 * ToolboxItem: Renders a single, clickable entry within the desktop toolbox dropdown.
 * * @param {object} item - An object containing the data for this item.
 * @param {React.Component} item.icon - The React component for the icon (e.g., SolutionsIcons.BsStars).
 * @param {string} item.title - The main heading for the link.
 * @param {string} item.description - The supporting text/tagline.
 * @param {string} item.link - The destination path.
 */
export const ToolboxItem = ({ item }) => {
    // Professional Tip: Use an <a> tag for navigation items for correct semantics and accessibility.
    return (
        <a href={item.link} className={styles['tool-item']}>
            {/* Icon Wrapper */}
            <div className={styles['tool-icon-container']}>
                {/* The icon is passed as a React component, so we render it like this: */}
                <item.icon />
            </div>

            {/* Text Content */}
            <div>
                {/* Title */}
                <h6 className={styles['tool-title']}>{item.title}</h6>
                {/* Description */}
                <p className={styles['tool-description']}>{item.description}</p>
            </div>
        </a>
    );
};
