import styles from './Toolbox.module.css';
import { PRODUCTS_TOOLBOX_DATA } from './data/productsData';
import { ToolboxItem } from './ToolboxItem';

/**
 * ProductsToolbox: Renders content dynamically using data mapping.
 * This large toolbox is now highly readable and easily scalable across three columns.
 */
export const ProductsToolbox = () => {
    return (
        // Main container with fixed width (w-[800px]) and three-column layout (flex gap-12)
        <div className="w-[800px] flex gap-12">
            {/* --- Column 1: Frameworks --- */}
            <div>
                <h5 className={styles['section-title']}>Frameworks</h5>
                <div className={styles['tools-container']}>
                    {/* Maps over the 'frameworks' array */}
                    {PRODUCTS_TOOLBOX_DATA.frameworks.map((item, index) => (
                        <ToolboxItem key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* --- Column 2: Infrastructure --- */}
            <div>
                <h5 className={styles['section-title']}>Infrastructure</h5>
                <div className={styles['tools-container']}>
                    {/* Maps over the 'infrastructure' array */}
                    {PRODUCTS_TOOLBOX_DATA.infrastructure.map((item, index) => (
                        <ToolboxItem key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* --- Column 3: Security --- */}
            <div>
                <h5 className={styles['section-title']}>Security</h5>
                <div className={styles['tools-container']}>
                    {/* Maps over the 'security' array */}
                    {PRODUCTS_TOOLBOX_DATA.security.map((item, index) => (
                        <ToolboxItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
