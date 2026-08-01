import { SolutionsIcons } from '../icons/solutionsIcons';

// Data structure for the entire Solutions Toolbox
export const SOLUTIONS_TOOLBOX_DATA = {
    useCases: [
        {
            title: 'AI Apps',
            description: 'Deploy at the speed of AI',
            icon: SolutionsIcons.BsStars,
            link: '/solutions/ai-apps', 
        },
        {
            title: 'Composable Commerce',
            description: 'Power storefronts that convert',
            icon: SolutionsIcons.MdStorefront,
            link: '/solutions/commerce',
        },
        {
            title: 'Marketing sites',
            description: 'Launch campaigns fast',
            icon: SolutionsIcons.FaChartLine,
            link: '/solutions/marketing',
        },
        {
            title: 'Multi-tenant Platforms',
            description: 'Scale apps with one codebase',
            icon: SolutionsIcons.MdKeyboardCommandKey,
            link: '/solutions/multi-tenant',
        },
        {
            title: 'Web Apps',
            description: 'Ship features, not infrastructure',
            icon: SolutionsIcons.MdWebAsset,
            link: '/solutions/web-apps',
        },
    ],
    users: [
        {
            title: 'Platform Engineers',
            description: 'Deploy at the speed of AI',
            icon: SolutionsIcons.HiOutlineWrench,
            link: '/users/platform-engineers',
        },
        {
            title: 'Design Engineers',
            description: 'Deploy for every idea',
            icon: SolutionsIcons.TbTriangleSquareCircleFilled,
            link: '/users/design-engineers',
        },
    ],
};
