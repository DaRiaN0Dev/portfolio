"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/shared/scroll-indicator";
import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";
import { fadeIn, slideUp } from "@/lib/animations";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-24">
      <div className="relative h-[40vh] min-h-[280px] w-full overflow-hidden md:h-[50vh]">
        <Image
          src={profile.bannerImage}
          alt="Banner"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="container relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-32 right-0 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" aria-hidden />
        <div className="absolute top-20 left-0 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px]" aria-hidden />

        <motion.div
          className="relative -mt-24 pb-24 md:-mt-32"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
        >
          <motion.div variants={fadeIn()} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for freelance
            </span>
          </motion.div>

          <motion.h1
            variants={slideUp(0.1)}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={slideUp(0.2)}
            className="mt-4 text-xl font-medium text-muted-foreground md:text-2xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={slideUp(0.3)}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {profile.bio}
          </motion.p>

          <motion.div variants={slideUp(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          <motion.div variants={slideUp(0.5)} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
