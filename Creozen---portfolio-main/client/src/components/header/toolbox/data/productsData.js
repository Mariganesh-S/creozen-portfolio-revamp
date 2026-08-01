import { ProductsIcons } from '../icons/productsICons';

// Data structure for the entire Products Toolbox
export const PRODUCTS_TOOLBOX_DATA = {
    frameworks: [
        {
            title: 'Next.js',
            description: 'The native Next.js platform',
            icon: ProductsIcons.RiNextjsFill,
            link: '/products/nextjs',
        },
        {
            title: 'Turborepo',
            description: 'Speed with Entreprise scale',
            icon: ProductsIcons.SiTurborepo,
            link: '/products/turborepo',
        },
        {
            title: 'AI SDK',
            description: 'The AI toolkit for TypeScript',
            icon: ProductsIcons.HiOutlineCube,
            link: '/products/ai-sdk',
        },
    ],
    infrastructure: [
        {
            title: 'CI/CD',
            description: 'Helping teams ship 6x faster',
            icon: ProductsIcons.FiLayout,
            link: '/products/ci-cd',
        },
        {
            title: 'Delivery Network',
            description: 'Fast, scalable, and reliable',
            icon: ProductsIcons.TbWorld,
            link: '/products/delivery-network',
        },
        {
            title: 'Fluid Compute',
            description: 'Servers, in serverless form',
            icon: ProductsIcons.BiChip,
            link: '/products/fluid-compute',
        },
        {
            title: 'AI Infrastructure',
            description: 'AI Gateway, Sandbox, and more',
            icon: ProductsIcons.BsStars,
            link: '/products/ai-infra',
        },
        {
            title: 'Observability',
            description: 'Trace every step',
            icon: ProductsIcons.FiBarChart2,
            link: '/products/observability',
        },
    ],
    security: [
        {
            title: 'Platform Security',
            description: 'DDos Protection, Firewall',
            icon: ProductsIcons.LuShield,
            link: '/products/security',
        },
        {
            title: 'Web Application Firewall',
            description: 'Granular, custom protection',
            icon: ProductsIcons.LuGrid2X2Check,
            link: '/products/waf',
        },
        {
            title: 'Bot Management',
            description: 'Scalable bot protection',
            icon: ProductsIcons.GrRobot,
            link: '/products/bot-management',
        },
        {
            title: 'BotID',
            description: 'Invisible CAPTCHA',
            icon: ProductsIcons.LuScanLine,
            link: '/products/bot-id',
        },
    ],
};
