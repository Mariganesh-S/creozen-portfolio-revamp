import { ResourcesIcons } from '../icons/resourcesIcons';

// Data structure for the entire Resources Toolbox
export const RESOURCES_TOOLBOX_DATA = {
    tools: [
        {
            title: 'Resource Center',
            description: "Today's best practices",
            icon: ResourcesIcons.HiOutlineCube,
            link: '/resources/center',
        },
        {
            title: 'Marketplace',
            description: 'Extend and automate workflows',
            icon: ResourcesIcons.PiPuzzlePiece,
            link: '/resources/marketplace',
        },
        {
            title: 'Templates',
            description: 'Jump start app development',
            icon: ResourcesIcons.GoProjectTemplate,
            link: '/resources/templates',
        },
        {
            title: 'Guides',
            description: 'Find help quickly',
            icon: ResourcesIcons.IoBookOutline,
            link: '/resources/guides',
        },
        {
            title: 'Partner Finder',
            description: 'Get Help from solution partners', 
            icon: ResourcesIcons.CiCompass1,
            link: '/resources/partners',
        },
    ],
    company: [
        {
            title: 'Customers',
            description: 'Trusted by the best teams',
            icon: ResourcesIcons.RiEmotionHappyLine,
            link: '/company/customers',
        },
        {
            title: 'Blog',
            description: 'The latest posts and changes',
            icon: ResourcesIcons.RiPenNibLine,
            link: '/company/blog',
        },
        {
            title: 'Changelog',
            description: 'See what shipped',
            icon: ResourcesIcons.BiBookContent,
            link: '/company/changelog',
        },
        {
            title: 'Press',
            description: 'Read the latest news',
            icon: ResourcesIcons.PiSuitcaseSimple,
            link: '/company/press',
        },
        {
            title: 'Events',
            description: 'Join us at an event',
            icon: ResourcesIcons.TbCalendarEvent,
            link: '/company/events',
        },
    ],
};
