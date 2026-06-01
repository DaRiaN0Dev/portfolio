import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "shadcn/ui",
      "Framer Motion",
      "Chart.js",
    ],
  },
  {
    id: "state-management",
    title: "State Management",
    skills: [
      "Zustand",
      "TanStack Query",
      "Redux Toolkit",
      "React Context",
    ],
  },
  {
    id: "backend",
    title: "Backend Familiarity",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "Prisma",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    id: "testing",
    title: "Testing",
    skills: [
      "Vitest",
      "React Testing Library",
      "Playwright",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Figma",
      "Vercel",
      "Docker",
      "Storybook",
      "CI/CD",
      "Scrum (Agile)",
    ],
  },
  {
  id: "architecture",
  title: "Architecture",
  skills: [
    "Feature-Sliced Design",
    "Component-Driven Development",
    "Accessibility (a11y)",
    "Performance Optimization",
  ],
}
];