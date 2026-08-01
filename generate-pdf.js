import fs from 'fs';
import PDFDocument from 'pdfkit';

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('./public/workshop-notice.pdf'));

const content = `🚀 FREE WORKSHOP: Build AI-Powered Applications with Anti Gravity & MCP

Hosted by Creozen Ltd.
Date: 13 June 2025
Time: 10:00 AM – 12:00 PM (UK Time)
Mode: Online

Join us for a hands-on workshop where you'll learn how to build a complete AI-powered application using Anti Gravity and create intelligent chatbot agents using MCP (Model Context Protocol).

Session 1: Introduction to Generative AI & Agentic AI (20 Minutes)
Topics Covered:
- What is Generative AI?
- Evolution from AI -> LLMs -> AI Agents
- Understanding Agentic AI
- Real-world business use cases
- Future opportunities for Developers and Students
- Introduction to MCP (Model Context Protocol)
Learning Outcome: Participants will understand the fundamentals of modern AI systems and how intelligent agents are transforming software development.

Session 2: Building a Full-Stack Application with Anti Gravity (45 Minutes)
Topics Covered:
- Introduction to Anti Gravity Platform
- Application Architecture Overview
- Creating Frontend Components
- Designing Backend Services
- Building and Testing APIs
- Creating Minimum 10 APIs
- Connecting Frontend with Backend
- Application Deployment Walkthrough
Hands-on Demonstration: Build a complete working application from scratch.
Learning Outcome: Participants will learn how to rapidly develop and deploy full-stack applications using Anti Gravity.

Session 3: Creating an AI Chatbot Agent using MCP (35 Minutes)
Topics Covered:
- What is MCP?
- Understanding APIs as Tools
- Connecting MCP with Application APIs
- Building an Intelligent Chatbot Agent
- Context Management
- Tool Calling & Function Execution
- Querying Application Data through Natural Language
Live Demo: Ask business questions about the application and receive intelligent AI-generated responses.
Learning Outcome: Participants will learn how to create AI agents capable of interacting with enterprise applications using APIs as tools.

Session 4: Q&A and Career Guidance (20 Minutes)
Discussion Topics:
- AI Development Roadmap
- Agentic AI Career Opportunities
- Building AI Projects for Portfolio
- Industry Best Practices
- Open Q&A Session

Who Should Attend?
- Students
- Software Developers
- Full-Stack Engineers
- AI Enthusiasts
- Tech Professionals
- Anyone interested in Generative AI and Agentic AI

What You Will Learn:
- Build a full-stack application using Anti Gravity
- Create and consume 10+ APIs
- Develop an AI chatbot agent using MCP
- Use APIs as AI tools
- Understand Generative AI, Agents and Agentic AI
- Learn practical AI application development techniques

Prerequisites:
- Basic programming knowledge
- Laptop/Desktop with internet connection
- Curiosity to learn AI and modern application development
`;

doc.fontSize(12).text(content, {
  align: 'left'
});

doc.end();
