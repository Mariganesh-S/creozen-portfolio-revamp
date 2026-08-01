import { 
    FiUsers, FiMapPin, FiBox, FiEye, FiActivity, FiVideo, 
    FiHeadphones, FiTerminal, FiDatabase, FiAward, FiCheckSquare, 
    FiCpu, FiTruck, FiLayers 
} from 'react-icons/fi';
import { 
    PiStudent, PiChalkboardTeacher, PiFingerprint, 
    PiChatTeardropText, PiGraph 
} from 'react-icons/pi';
import { MdOutlineAssessment } from 'react-icons/md';

import pqintelimg1 from '../assets/images/products-3d/pqintel.png';
import pqintelimg2 from '../assets/images/products/pqintel4.gif';
import pqintelimg3 from '../assets/images/products/pqintel1.png';
import pqintelimg4 from '../assets/images/products/pqintel2.png';
import pqintelimg5 from '../assets/images/products/pqintel3.png';

import heatmapimg1 from '../assets/images/products-3d/heatmap.png';
import heatmapimg2 from '../assets/images/products/heatmap4.gif';
import heatmapimg3 from '../assets/images/products/heatmap1.png';
import heatmapimg4 from '../assets/images/products/heatmap2.png';
import heatmapimg5 from '../assets/images/products/heatmap3.png';

import shelfengagementimg1 from '../assets/images/products-3d/shelf.png';
import shelfengagementimg2 from '../assets/images/products/shelf1.png';
import shelfengagementimg3 from '../assets/images/products/shelf2.png';
import shelfengagementimg4 from '../assets/images/products/shelf3.png';

import industrialsafetyimg1 from '../assets/images/products-3d/industrialsafety.png';
import industrialsafetyimg2 from '../assets/images/products/industrialsafety1.png';
import industrialsafetyimg3 from '../assets/images/products/industrialsafety2.png';
import industrialsafetyimg4 from '../assets/images/products/industrialsafety3.png';

import productqualityimg1 from '../assets/images/products-3d/productcount.png';
import productqualityimg2 from '../assets/images/products/productcount1.png';
import productqualityimg3 from '../assets/images/products/productcount2.png';
import productqualityimg4 from '../assets/images/products/productcount3.png';

import assesslyimg1 from '../assets/images/products-3d/assessly.png';
import assesslyimg2 from '../assets/images/products/assessly1.png';

import skillsyncimg1 from '../assets/images/products-3d/skillsync.png';
import skillsyncimg2 from '../assets/images/products/skillsync1.png';
import skillsyncimg3 from '../assets/images/products/skillsync2.png';
import skillsyncimg4 from '../assets/images/products/skillsync3.png';

import intraquestimg1 from '../assets/images/products-3d/intraquest.png';
import intraquestimg2 from '../assets/images/products/intraquest1.png';

import mockbridgeimg1 from '../assets/images/products-3d/mockbridge.png';
import mockbridgeimg2 from '../assets/images/products/mockbridge1.png';

import attendeaseimg1 from '../assets/images/products-3d/attendease.png';
import attendeaseimg2 from '../assets/images/products/attendease1.png';

import videoximg1 from '../assets/images/products-3d/videox.png';
import videoximg2 from '../assets/images/products/videox1.png';

import customercareimg1 from '../assets/images/products-3d/customercare.png';
import customercareimg2 from '../assets/images/products/customercare1.png';

import genjewelsImg from '../assets/images/products/gen-jewels.png';
import { BsGem } from 'react-icons/bs';

/* -------------------------------------------------------------------------- */
/*                        SMART VISION ANALYTICS SUITE                        */
/* -------------------------------------------------------------------------- */

export const SMART_VISION_SUITE = [
    {
        id: "people-queue-intel",
        title: "People & Queue Intelligence",
        subtitle: "Footfall, Occupancy & Wait Times",
        desc: "See every visitor. Track every movement. Camera becomes your footfall counter + queue manager.",
        fullDesc: "People & Queue Intelligence uses your existing CCTV cameras to monitor footfall, occupancy, and queue times in real-time. Advanced AI detects every individual, tracks their movement, and calculates crowd density and waiting times. The system triggers instant alerts for overcrowded areas or bottlenecks, helping staff intervene promptly.",
        features: [
            "Real-Time Footfall Counting: Track entering/exiting traffic.",
            "Queue Management: Measure wait times automatically.",
            "Crowd Density Analysis: Detect congested areas.",
            "Occupancy Compliance: Ensure safe limits."
        ],
        benefits: [
            "Retailers optimize staffing based on live traffic.",
            "Prevent overcrowding in public spaces.",
            "Zero bottleneck service."
        ],
        useCase: "A mall tracks peak hours; security gets automated alerts when crowding exceeds thresholds.",
        icon: FiUsers,
        image: pqintelimg1,
        gallery: [
            { type: 'image', src: pqintelimg1 },
            { type: 'image', src: pqintelimg2 },
            { type: 'image', src: pqintelimg3 },
            { type: 'image', src: pqintelimg4 },
            { type: 'image', src: pqintelimg5 }
        ]
    },
    {
        id: "heatmaps-behavior",
        title: "Heatmaps & Customer Behavior",
        subtitle: "Store Layout Optimization",
        desc: "Find hot spots vs. ignored zones. Convert underperforming areas into profit generators.",
        fullDesc: "Using computer vision on CCTV feeds, Heatmaps & Customer Flow tracks movement patterns, identifies hot/cold zones, and visualizes attention areas. AI shows where customers stop, linger, or bypass, allowing businesses to place high-value products in high-traffic zones and optimize layouts.",
        features: [
            "Foot Traffic Maps: Visualize high-density paths.",
            "Stop & Dwell Analysis: Identify areas of high engagement.",
            "Path Optimization: Track customer journeys.",
            "Data-Driven Layout: Place displays for max impact."
        ],
        benefits: [
            "Boost sales by positioning products in hot zones.",
            "Identify and redesign underperforming areas.",
            "Real behavioral science insights."
        ],
        useCase: "A fashion store uses heatmaps to place premium shoes near high-traffic areas, increasing sales by 20%.",
        icon: FiMapPin,
        image: heatmapimg1,
        gallery: [
            { type: 'image', src: heatmapimg1 },
            { type: 'image', src: heatmapimg2 },
            { type: 'image', src: heatmapimg3 },
            { type: 'image', src: heatmapimg4 },
            { type: 'image', src: heatmapimg5 }
        ]
    },
    {
        id: "shelf-engagement",
        title: "Shelf Engagement Analysis",
        subtitle: "Product Interaction Metrics",
        desc: "Know what customers love and what they ignore. Fix conversion drop-offs instantly.",
        fullDesc: "CCTV cameras combined with AI track product interaction, including how long a customer examines an item, touches it, or leaves it untouched. Insights help optimize promotions, displays, and SKU placement based on real human interaction data.",
        features: [
            "Pick-up & Interaction Metrics.",
            "Dwell Time Measurement.",
            "Conversion Insights (Attention vs. Purchase).",
            "Promotional Effectiveness tracking."
        ],
        benefits: [
            "Maximize ROI on promotions.",
            "Reduce wasted inventory.",
            "Drive higher conversion rates."
        ],
        useCase: "Electronics retail tracks which smartphone models get picked up but not purchased, prompting a pricing adjustment.",
        icon: FiActivity,
        image: shelfengagementimg1,
        gallery: [
            { type: 'image', src: shelfengagementimg1 },
            { type: 'image', src: shelfengagementimg2 },
            { type: 'image', src: shelfengagementimg3 },
            { type: 'image', src: shelfengagementimg4 }
        ]
    },
    {
        id: "industrial-safety",
        title: "Industrial Safety Monitoring",
        subtitle: "24/7 Automated Safety Officer",
        desc: "AI checks helmet, vest & zone-safety. Instant violation alerts to stop accidents.",
        fullDesc: "Industrial Safety Monitoring uses cameras to detect PPE compliance, track restricted zones, and send instant violation alerts. AI ensures workers wear helmets, vests, or other safety gear, reducing accidents and compliance risks automatically.",
        features: [
            "Helmet & Vest Detection.",
            "Restricted Zone Alerts.",
            "Compliance Reporting for audits.",
            "Proactive Incident Prevention."
        ],
        benefits: [
            "Minimize workplace injuries and insurance costs.",
            "Reduce manual monitoring efforts.",
            "Ensure 100% safety compliance."
        ],
        useCase: "A factory tracks PPE compliance; violations trigger instant alerts to supervisors.",
        icon: FiEye,
        image: industrialsafetyimg1,
        gallery: [
            { type: 'image', src: industrialsafetyimg1 },
            { type: 'image', src: industrialsafetyimg2 },
            { type: 'image', src: industrialsafetyimg3 },
            { type: 'image', src: industrialsafetyimg4 }
        ]
    },
    {
        id: "product-quality-vision",
        title: "Product Counting & Quality",
        subtitle: "Automated Production Vision",
        desc: "Count products, measure sizes, and detect defects on-the-go. Zero manual errors.",
        fullDesc: "Cameras combined with AI track product quantity, dimensions, and quality on conveyors, shelves, or production lines. Live alerts for missing parts or defects ensure high-quality outputs with minimal waste.",
        features: [
            "Real-Time Counting on conveyors.",
            "Dimension & Defect Analysis.",
            "Inventory Verification.",
            "Production Optimization."
        ],
        benefits: [
            "Maintain top-quality standards automatically.",
            "Save labor hours.",
            "Detect issues early to minimize waste."
        ],
        useCase: "A bottling plant tracks bottles; defective bottles are flagged automatically.",
        icon: FiBox,
        image: productqualityimg1,
        gallery: [
            { type: 'image', src: productqualityimg1 },
            { type: 'image', src: productqualityimg2 },
            { type: 'image', src: productqualityimg3 },
            { type: 'image', src: productqualityimg4 }
        ]
    }
];

/* -------------------------------------------------------------------------- */
/*                        UNIVERSITY & OFFICE ECOSYSTEM                       */
/* -------------------------------------------------------------------------- */

export const UNIVERSITY_ECOSYSTEM = [
    {
        id: "assessly",
        title: "Assessly",
        subtitle: "AI MCQ Exam Platform",
        desc: "Create & conduct secure exams in minutes. Auto-proctoring and instant analytics.",
        fullDesc: "Assessly enables educational institutions and corporates to conduct online exams in a much faster, fairer, and cost-efficient way. It supports MCQs, numerical questions, and image-based questions with instant evaluation. Security is enforced using auto proctoring, browser lock, and device restrictions.",
        features: ["Auto-proctoring & Browser Lock", "AI-generated questions", "Instant Analytics & Result generation", "Supports 100,000+ candidates"],
        outcome: "Saves 80% staff time, Zero cheating.",
        icon: MdOutlineAssessment,
        image: assesslyimg1,
        gallery: [
            { type: 'image', src: assesslyimg1 },
            { type: 'image', src: assesslyimg2 }
        ]
    },
    {
        id: "skillsync",
        title: "SkillSync",
        subtitle: "AI Coding Evaluation",
        desc: "Auto-grade coding skills with plagiarism alerts + built-in compilers.",
        fullDesc: "SkillSync is built for organizations that depend on tech talent. It lets students or applicants solve coding challenges inside a secure browser IDE, with real-time compilation and multi-language support. The system evaluates submissions automatically by checking outputs, code quality, and plagiarism.",
        features: ["Secure Browser IDE", "Plagiarism Detection", "Multi-language support", "Leaderboards & Strength analysis"],
        outcome: "10x faster hiring decisions.",
        icon: FiTerminal,
        image: skillsyncimg1,
        gallery: [
            { type: 'image', src: skillsyncimg1 },
            { type: 'image', src: skillsyncimg2 },
            { type: 'image', src: skillsyncimg3 },
            { type: 'image', src: skillsyncimg4 }
        ]
    },
    {
        id: "intraquest",
        title: "IntraQuest",
        subtitle: "Knowledge AI Assistant",
        desc: "Chat with your organization: policies, sales data, HR, results — instantly accessible.",
        fullDesc: "Employees can simply chat with IntraQuest to find policy documents, sales figures, or leave balances. AI understands intent, retrieves correct data from PDFs, databases, or ERPs, and shows clean results. No more digging through folders.",
        features: ["Natural Language Queries", "Role-based access control", "Connects to ERP/CRM/HRMS", "Instant answers"],
        outcome: "70% reduction in support queries.",
        icon: PiChatTeardropText,
        image: intraquestimg1,
        gallery: [
            { type: 'image', src: intraquestimg1 },
            { type: 'image', src: intraquestimg2 }
        ]
    },
    {
        id: "mockbridge",
        title: "Mock Bridge",
        subtitle: "Smart Interview Training",
        desc: "Practice interviews with AI + industry mentors & get improvement feedback.",
        fullDesc: "Mock Bridge gives students and job seekers a realistic interview training experience. AI conducts mock interviews—evaluating communication, confidence, technical knowledge, and body language—and shares improvement suggestions instantly.",
        features: ["AI Behavioral Analysis", "Communication scoring", "Video analytics", "Mentor connection"],
        outcome: "3x placement improvement.",
        icon: PiChalkboardTeacher,
        image: mockbridgeimg1,
        gallery: [
            { type: 'image', src: mockbridgeimg1 },
            { type: 'image', src: mockbridgeimg2 }
        ]
    },
    {
        id: "attendease",
        title: "AttendEase",
        subtitle: "Smart Attendance Automation",
        desc: "Geo-fenced, OTP-secure attendance with automated reports — no proxies.",
        fullDesc: "AttendEase transforms traditional classroom attendance into a secure, digital process. Teachers create classes, and students mark presence via OTP, QR code, or geofencing. The system maps attendance to the right staff and class automatically.",
        features: ["OTP/App Check-in", "Geo-fencing", "Real-time Dashboards", "Parent notifications"],
        outcome: "100% accurate, paperless attendance.",
        icon: PiFingerprint,
        image: attendeaseimg1,
        gallery: [
            { type: 'image', src: attendeaseimg1 },
            { type: 'image', src: attendeaseimg2 }
        ]
    },
    {
        id: "videox",
        title: "VideoX",
        subtitle: "AI Meeting & Virtual Class",
        desc: "Meet, teach & collaborate with auto notes, task extraction & searchable recordings.",
        fullDesc: "VideoX is a next-gen conferencing tool where sessions are automatically recorded, transcribed, summarized, and converted into action items. Past discussions become searchable knowledge.",
        features: ["Auto-transcription & Summary", "Searchable Video", "LMS Integration", "Action item extraction"],
        outcome: "Save hours of manual note-taking.",
        icon: FiVideo,
        image: videoximg1,
        gallery: [
            { type: 'image', src: videoximg1 },
            { type: 'image', src: videoximg2 }
        ]
    },
    {
        id: "customer-care-ai",
        title: "Customer Care AI",
        subtitle: "Logistics Support Assistant",
        desc: "Instant tracking, ticketing & status answers via chat/voice — 24/7.",
        fullDesc: "AI automatically reads data from your logistics system and replies with exact shipment status, proof of delivery, and support ticket info via Chat, WhatsApp, Email, or Voice.",
        features: ["Automated Order Tracking", "24/7 Availability", "Multi-language support", "Ticket lifecycle management"],
        outcome: "50% reduction in support workload.",
        icon: FiHeadphones,
        image: customercareimg1,
        gallery: [
            { type: 'image', src: customercareimg1 },
            { type: 'image', src: customercareimg2 }
        ]
    }
];

/* -------------------------------------------------------------------------- */
/*                        RESEARCH & INNOVATION                               */
/* -------------------------------------------------------------------------- */

export const RESEARCH_INITIATIVE = {
    id: "gen-jewels",
    title: "Gen-Jewels™",
    subtitle: "AI-Driven Jewellery Design Research Initiative",
    desc: "Transforming jewellery design through Artificial Intelligence, Generative Design, and Design DNA Transfer.",
    fullDesc: "Gen-Jewels™ is an ongoing research and innovation project focused on transforming jewellery design through Artificial Intelligence and Generative Design technologies. The initiative explores how advanced AI models can assist jewellery designers, manufacturers, and retailers in creating photorealistic jewellery concepts from simple text descriptions, design parameters, or reference images. The research aims to bridge the gap between creative ideation and digital design visualization by leveraging domain-specific AI models trained to understand jewellery aesthetics, materials, gemstones, and design patterns. A key area of investigation within the project is the concept of 'Design DNA Transfer' — a novel approach that enables the extraction of visual characteristics such as textures, ornamental patterns, and material signatures from existing jewellery references and their intelligent adaptation to entirely new jewellery forms.",
    fullDesc2: "The project combines Large Language Models (LLMs), Vision AI, Diffusion Models, and specialized prompt engineering techniques to study how AI can generate realistic and manufacturing-oriented jewellery visualizations while reducing the technical barriers associated with traditional design workflows. Gen-Jewels™ represents Creozen's ongoing commitment to exploring innovative AI technologies that can redefine digital creativity and design workflows within the jewellery industry.",
    isResearch: true,
    objectives: [
        "Investigate AI-assisted jewellery concept generation.",
        "Develop domain-specific prompt engineering methodologies for jewellery design.",
        "Explore Design DNA extraction and cross-shape style transfer mechanisms.",
        "Improve photorealistic visualization of jewellery concepts.",
        "Enable rapid design exploration without requiring CAD expertise.",
        "Study locally deployable AI systems for secure and cost-effective design generation."
    ],
    researchAreas: [
        "Generative AI for Jewellery Design",
        "Design DNA Extraction and Transfer",
        "AI-Based Design Personalization",
        "Vision Language Models for Design Analysis",
        "Photorealistic Jewellery Visualization",
        "Human-AI Collaborative Design Systems",
        "Local AI Deployment Architectures"
    ],
    developmentStatus: [
        "Research & Development Phase",
        "Patent Filed",
        "Prototype Development Completed",
        "Validation and Performance Evaluation Ongoing"
    ],
    potentialApplications: [
        "Jewellery Design Ideation",
        "Custom Jewellery Visualization",
        "Retail Design Personalization",
        "Product Concept Development",
        "Digital Jewellery Catalog Creation",
        "AI-Assisted Creative Workflows"
    ],
    icon: BsGem,
    image: genjewelsImg,
    gallery: [
        { type: 'image', src: genjewelsImg }
    ]
};
