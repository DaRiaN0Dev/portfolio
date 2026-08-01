"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/shared/brand-icons";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { projects } from "@/data/projects";
import { fadeIn, revealOnScroll, staggerContainer } from "@/lib/animations";
import type { ProjectCategory, ProjectStatus } from "@/types";
import { cn } from "@/lib/utils";

const TABS: { value: ProjectCategory; label: string }[] = [
  { value: "personal", label: "Personal Projects" },
  { value: "client", label: "Client Projects" },
  { value: "organizational", label: "Organizational Projects" },
];

const statusVariant: Record<ProjectStatus, "success" | "warning" | "muted"> = {
  live: "success",
  "in-progress": "warning",
  archived: "muted",
};

const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In Progress",
  archived: "Archived",
};

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.article
      variants={fadeIn()}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-glass-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={750}
          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <Badge
          variant={statusVariant[project.status]}
          className="absolute top-3 right-3"
        >
          {statusLabel[project.status]}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          {project.links.map((link) => (
            <a
              key={`${link.label}-${link.href}`}
              href={link.href}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80",
              )}
            >
              {link.label.toLowerCase().includes("github") ? (
                <GitHubIcon className="h-3.5 w-3.5" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("personal");

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.category === activeTab),
    [activeTab],
  );

  return (
    <SectionWrapper id="projects" className="bg-muted/20">
      <SectionHeader
        label="Projects"
        title="Selected work"
        description="Personal builds, client deliverables, and organizational contributions."
      />

      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as ProjectCategory)}>
        <TabsList className="flex w-full flex-wrap justify-start gap-1 sm:w-auto">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-xs sm:text-sm">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer(0.08)}
              {...revealOnScroll}
              initial="hidden"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </SectionWrapper>
  );
}
