"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { GlassCard } from "@/components/shared/glass-card";
import { skillCategories } from "@/data/skills";
import { fadeIn, revealOnScroll, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-muted/20">
      <SectionHeader
        label="Skills"
        title="Technical expertise"
        description="A curated stack for building premium web experiences."
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        variants={staggerContainer(0.08)}
        {...revealOnScroll}
        initial="hidden"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.id} variants={fadeIn()}>
            <GlassCard
              hover
              className="group h-full transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="mb-4 text-lg font-semibold tracking-tight">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "rounded-lg border border-border/40 bg-background/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200",
                      "group-hover:border-primary/20 group-hover:text-foreground",
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
