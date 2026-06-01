import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "p1",
    title: "TrueFlow",
    description:
      "Enterprise HRMS with finance, leave, tasks, departments, team chat, and RBAC.",
    image: "/projects/project-1.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostCSS", "Vitest"],
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
      "Personal project for real-time web analytics with privacy-first tracking and beautiful dashboards.",
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
    title: "Meridian Commerce",
    description:
      "Headless e-commerce storefront with optimized checkout flow and sub-second page loads.",
    image: "/projects/project-3.png",
    technologies: ["Next.js", "Shopify", "Stripe", "Tailwind"],
    links: [{ label: "Live", href: "#" }],
    status: "live",
    category: "client",
  },
  {
    id: "p4",
    title: "CloudVault Admin",
    description:
      "Enterprise SaaS admin panel with complex data tables, permissions, and audit logging.",
    image: "/projects/project-4.png",
    technologies: ["React", "TanStack Table", "Zustand", "REST"],
    links: [{ label: "Case Study", href: "#" }],
    status: "live",
    category: "client",
  },
  {
    id: "p5",
    title: "Qbify",
    description:
      "Community platform for developer events, speaker profiles, and sponsorship management.",
    image: "/projects/project-5.png",
    technologies: ["Next.js", "Sanity", "Vercel", "Framer Motion"],
    links: [
      { label: "GitHub", href: "https://github.com/Qbify-company" },
    ],
    status: "archived",
    category: "organizational",
  },
  {
    id: "p6",
    title: "Horton",
    description:
      "Non-profit learning portal connecting mentors with students through structured curricula.",
    image: "/projects/project-6.png",
    technologies: ["Next.js", "Supabase", "Tailwind", "MDX"],
    links: [{ label: "Live", href: "https://hortonapp.com" }],
    status: "live",
    category: "organizational",
  },
];
