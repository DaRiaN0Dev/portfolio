"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  LayoutDashboard,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { services } from "@/data/services";
import { fadeIn, revealOnScroll, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  code: Code2,
  "layout-dashboard": LayoutDashboard,
  "graduation-cap": GraduationCap,
  palette: Palette,
  rocket: Rocket,
};

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        label="Services"
        title="What I offer"
        description="Freelance expertise for teams that demand premium quality."
        align="center"
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer(0.08)}
        {...revealOnScroll}
        initial="hidden"
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Code2;
          return (
            <motion.div key={service.id} variants={fadeIn()}>
              <GlassCard hover className="group h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/5 transition-colors group-hover:bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
