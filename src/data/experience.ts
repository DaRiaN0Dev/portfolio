import type { CompanyExperience, FreelanceExperience } from "@/types";

export const companyExperience: CompanyExperience[] = [
  {
    id: "trueflow",
    company: "TrueFlow",
    role: "Co-Founder And Frontend Engineer",
    duration: "Nov 2025 - July 2026",
    location: "Qazvin (Remote)",
    achievements: [
      "Developed the front-end of a Human Resource Management System (HRMS) using Next.js, TypeScript, and Tailwind CSS.",
      "Built a modular dashboard including leave management, finance, tasks, departments, daily routines, team chat, and settings.",
      "Applied Feature-First architecture, i18n, and an RBAC-ready structure to improve scalability and maintainability.",
      "Created reusable, type-safe components and implemented a modern UI with Glassmorphism design.",
    ],
  },
  {
    id: "toppira",
    company: "Toppira",
    role: "Co-Founder And Frontend Engineer",
    duration: "Sep 2025 - July 2026",
    location: "Qazvin (Remote)",
    achievements: [
      "Developed the front-end of an open-source AI-powered productivity platform using Next.js, React.js, TypeScript, and TailwindCSS.",
      "Built and shipped core productivity modules including task management, reminders, notes, and AI-assisted workflow features.",
      "Designed reusable UI components, scalable application architecture, and responsive interfaces to support future platform growth.",
      "Integrated AI-driven interactions into existing productivity workflows, enabling smarter task management and contextual user experiences.",
      "Collaborated with developers and contributors in an open-source environment, participating in feature development, code reviews, and product discussions.",
      "Optimized application performance, accessibility, and user experience through modern front-end best practices and efficient state management.",
      "Contributed to the platform's vision of combining traditional productivity applications with artificial intelligence to deliver faster and more effective communication.",
    ],
  },
  {
    id: "qbify",
    company: "Nikan Project (Qbify)",
    role: "Junior Frontend Developer",
    duration: "July 2025 - Dec 2025",
    location: "Qazvin",
    achievements: [
      "Built and shipped major front-end features of Qbify using Next.js, TypeScript, TailwindCSS.",
      "Implemented dashboards, CRUD modules, forms, charts, reusable components, and complex data-driven interfaces.",
      "Integrated APIs with React Query, optimized data fetching strategies, and improved application performance and user experience.",
      "Developed responsive and accessible UI components while maintaining scalability, code quality, and design consistency across the platform.",
      "Worked closely with designers and backend engineers in an agile environment to translate business requirements into production-ready features.",
      "Contributed to code reviews, debugging, testing, and performance optimization initiatives to ensure a reliable and maintainable codebase.",
    ],
  },
  {
    id: "horton",
    company: "Horton App",
    role: "Junior Frontend Developer",
    duration: "Nov 2024 - June 2025",
    location: "Tehran (Remote)",
    achievements: [
      "Developed the front-end of a language learning website using Next.js, React.js, TypeScript, TailwindCSS, React Query, and MUI.",
      "Collaborated effectively with the development team, including a senior front-end engineer, following Agile methodologies.",
      "Designed and implemented a vocabulary management system to identify and display words that users need to review again.",
      "Built reusable UI components and optimized overall user experience and performance.",
      "Integrated and managed data using React Query, improving data flow across different parts of the project.",
    ],
  },
];

export const freelanceExperience: FreelanceExperience[] = [
  {
    id: "f1",
    client: "BoardLand Cafe",
    project: "Cafe & Restaurant Management System",
    duration: "2026",
    description:
      "Modern digital platform for board game cafés with food ordering, menu management, board game discovery and requests, customer dashboards, order tracking, admin panel for products, categories, orders, games staff, announcements and fully responsive dark-theme UI, built using React.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
  },
  {
    id: "f2",
    client: "Iran MTA Game Server",
    project: "Gaming Dashboard Pannel",
    duration: "2025",
    description:
      "Modern gaming control panel with player management, progression tracking, licenses, businesses, properties, battle pass systems, real-time data integration, and scalable dashboard architecture built using React.js, TypeScript, and Tailwind CSS.",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind"],
  },
];
