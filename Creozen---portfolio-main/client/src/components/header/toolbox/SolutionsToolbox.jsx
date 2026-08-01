// SolutionsToolbox.jsx
import React from 'react';
import styles from './Toolbox.module.css';
import { SOLUTIONS_TOOLBOX_DATA } from './data/SolutionsData'; // 1. Import the data
import { ToolboxItem } from './ToolboxItem';

export const SolutionsToolbox = () => {
    return (
        <div className="flex gap-12">
            {/* --- Column 1: Use Cases (Dynamically mapped) --- */}
            <div>
                <h5 className={styles['section-title']}>Use Cases</h5>
                <div className={styles['tools-container']}>
                    {/* Maps over the 'useCases' array in the data structure */}
                    {SOLUTIONS_TOOLBOX_DATA.useCases.map((item, index) => (
                        <ToolboxItem
                            key={index} 
                            item={item}
                        />
                    ))}
                </div>
            </div>

            {/* --- Column 2: Users (Dynamically mapped) --- */}
            <div>
                <h5 className={styles['section-title']}>Users</h5>
                <div className={styles['tools-container']}>
                    {/* Maps over the 'users' array in the data structure */}
                    {SOLUTIONS_TOOLBOX_DATA.users.map((item, index) => (
                        <ToolboxItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};
