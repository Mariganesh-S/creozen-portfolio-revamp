// src/components/chatbot/botLogic.js

const KNOWLEDGE_BASE = [
    {
        keywords: ["hello", "hi", "hey", "greetings"],
        response: "Hello! Welcome to Creozen. How can I assist you with our AI ecosystems today?"
    },
    {
        keywords: ["service", "offer", "what do you do"],
        response: "We provide end-to-end technology solutions including Web/App Development, AI-Based Analytics, Custom Product Development, and Smart IoT Solutions."
    },
    {
        keywords: ["product", "assessly", "intraquest", "skillsync", "attendease"],
        response: "Our University & Office ecosystem includes Assessly (Exams), SkillSync (Coding), IntraQuest (Knowledge AI), and AttendEase (Attendance). Check the Products page for details."
    },
    {
        keywords: ["vision", "analytics", "camera", "cctv"],
        response: "Our Smart Vision Analytics Suite transforms CCTV feeds into actionable insights like Footfall Counting, Heatmaps, and Industrial Safety Monitoring."
    },
    {
        keywords: ["career", "job", "hiring", "work"],
        response: "We are always looking for talent! Please visit our Careers page to view open positions and submit your application."
    },
    {
        keywords: ["contact", "email", "phone", "support", "reach"],
        response: "You can reach us at creozen@creozen.co.uk or call +44 7586 393443 (UK) / +91 6381738184 (IN)."
    },
    {
        keywords: ["demo", "pricing", "cost"],
        response: "To get a custom quote or see a demo, please fill out the form on our 'Forms' page or schedule a meeting."
    },
    {
        keywords: ["location", "address", "office"],
        response: "Our HQ is located at 124 City Road, London EC1V 2NX. We also have an R&D hub in Chennai, India."
    }
];

export const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // 1. Check for keyword matches
    for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(keyword => lowerInput.includes(keyword))) {
            return entry.response;
        }
    }

    // 2. Default fallback
    return "I'm not sure about that yet. You can ask me about our 'Services', 'Products', 'Careers', or 'Contact' info.";
};