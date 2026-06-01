"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { companyExperience, freelanceExperience } from "@/data/experience";
import { fadeIn, revealOnScroll, slideUp, staggerContainer } from "@/lib/animations";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        label="Experience"
        title="Professional journey"
        description="Company roles and independent client work."
      />

      <div className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <Building2 className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Company Experience</h3>
        </div>

        <motion.div
          className="relative space-y-0"
          variants={staggerContainer(0.12)}
          {...revealOnScroll}
          initial="hidden"
        >
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border/60 md:left-[23px]" aria-hidden />
          {companyExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={slideUp(index * 0.05)}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 md:h-12 md:w-12">
                <span className="text-xs font-bold text-primary">{index + 1}</span>
              </div>
              <GlassCard className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="mt-1 text-primary">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2 text-sm text-muted-foreground before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-primary"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div>
        <div className="mb-8 flex items-center gap-3">
          <Briefcase className="h-5 w-5 text-primary" />
          <h3 className="text-xl font-semibold">Freelance Experience</h3>
        </div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={staggerContainer(0.08)}
          {...revealOnScroll}
          initial="hidden"
        >
          {freelanceExperience.map((exp) => (
            <motion.div key={exp.id} variants={fadeIn()}>
              <GlassCard hover className="h-full">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-semibold">{exp.project}</h4>
                    <p className="text-sm text-primary">{exp.client}</p>
                  </div>
                  <Badge variant="glass">{exp.duration}</Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
