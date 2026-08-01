import styles from './Toolbox.module.css';
import { RESOURCES_TOOLBOX_DATA } from './data/resourcesData'; // 1. Import the data object
import { ToolboxItem } from './ToolboxItem'; // 2. Import the reusable item component

export const ResourcesToolbox = () => {
    return (
        // Main two-column flex container
        <div className="flex gap-12">
            {/* --- Column 1: Tools (Dynamically mapped) --- */}
            <div>
                <h5 className={styles['section-title']}>Tools</h5>

                <div className={styles['tools-container']}>
                    {/* Maps over the 'tools' array in the data structure to render each item */}
                    {RESOURCES_TOOLBOX_DATA.tools.map((item, index) => (
                        <ToolboxItem
                            key={index}
                            item={item} // Pass the item data object as a prop
                        />
                    ))}
                </div>
            </div>

            {/* --- Column 2: Company (Dynamically mapped) --- */}
            <div>
                <h5 className={styles['section-title']}>Company</h5>

                <div className={styles['tools-container']}>
                    {/* Maps over the 'company' array in the data structure */}
                    {RESOURCES_TOOLBOX_DATA.company.map((item, index) => (
                        <ToolboxItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
