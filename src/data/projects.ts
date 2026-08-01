import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "TrueFlow",
    description:
      "Enterprise HRMS with finance, leave, tasks, departments, team chat, and RBAC.",
    image: "/projects/project-1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostCSS",
      "Vitest",
    ],
    links: [
      { label: "Live", href: "https://trueflow.ir" },
      { label: "GitHub", href: "https://github.com/TrueFlow-Official" },
    ],
    status: "live",
    category: "personal",
  },
  {
    id: "p2",
    title: "Toppira",
    description:
      "Personal project for real-time web analytics with privacy-first dashboards.",
    image: "/projects/project-2.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    links: [
      { label: "Live", href: "https://toppira.com" },
      { label: "GitHub", href: "https://github.com/Toppira-Official" },
    ],
    status: "live",
    category: "personal",
  },
  {
    id: "p3",
    title: "Gaming Pannel",
    description:
      "Modern gaming control panel built with React, TypeScript, and Tailwind CSS UI.",
    image: "/projects/project-3.png",
    technologies: ["React.js", "Typescript", "Vite", "TailwindCSS"],
    links: [
      { label: "Live", href: "gaming-control-panel.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/DaRiaN0Dev/gaming-control-panel",
      },
    ],
    status: "live",
    category: "client",
  },
  {
    id: "p4",
    title: "Authentication Dashboard",
    description:
      "Full-stack auth system with Next.js frontend and NestJS backend.",
    image: "/projects/project-4.png",
    technologies: [
      "Next.js",
      "Nest.js",
      "Typescript",
      "TailwindCSS",
      "PostgreSQL",
    ],
    links: [
      { label: "Live", href: "https://auth-dashboard-mu.vercel.app" },
      {
        label: "GitHub",
        href: "https://github.com/DaRiaN0Dev/auth-dashboard-nextjs",
      },
      {
        label: "GitHub",
        href: "https://github.com/DaRiaN0Dev/auth-backend-nestjs",
      },
    ],
    status: "live",
    category: "personal",
  },
  {
    id: "p5",
    title: "Qbify",
    description:
      "Community platform for dev events, speakers, and sponsorship tools.",
    image: "/projects/project-5.png",
    technologies: ["Next.js", "Typescript", "TailwindCSS", "StoryBook"],
    links: [
      { label: "Live", href: "https://qbify.ir" },
      { label: "GitHub", href: "https://github.com/Qbify-company" },
    ],
    status: "archived",
    category: "organizational",
  },
  {
    id: "p6",
    title: "Horton",
    description:
      "Non-profit learning portal connecting mentors and students via curricula.",
    image: "/projects/project-6.png",
    technologies: ["React.js", "Typescript", "TailwindCSS", "Vite"],
    links: [{ label: "Live", href: "https://hortonapp.com" }],
    status: "live",
    category: "organizational",
  },
  {
    id: "p7",
    title: "Boardland",
    description:
      "Personal project for board game café management with role-based dashboards.",
    image: "/projects/project-7.png",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Zustand"],
    links: [
      { label: "Live", href: "https://boardlandcafe.ir" },
      { label: "GitHub", href: "https://github.com/Gray-Hood/Frontend" },
    ],
    status: "live",
    category: "client",
  },
];
