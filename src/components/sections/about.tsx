"use client";

import { motion } from "framer-motion";
import { Globe, Heart, MapPin } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { profile } from "@/data/profile";
import { fadeIn, revealOnScroll, slideUp, staggerContainer } from "@/lib/animations";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About"
        title="Crafting digital excellence"
        description="Engineering premium interfaces with precision and purpose."
      />

      <div className="grid gap-12 lg:grid-cols-2">
        <motion.div variants={slideUp()} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <p className="text-base leading-relaxed text-muted-foreground">{profile.biography}</p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4 text-primary" />
              {profile.languages.map((l) => l.name).join(", ")}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Heart className="h-4 w-4 text-primary" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold">Languages</h3>
            <div className="space-y-2">
              {profile.languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={staggerContainer(0.1)}
          {...revealOnScroll}
          initial="hidden"
        >
          {profile.stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeIn()}>
              <GlassCard hover className="flex h-full flex-col justify-center text-center">
                <p className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-primary">{stat.suffix}</span>
                  )}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
