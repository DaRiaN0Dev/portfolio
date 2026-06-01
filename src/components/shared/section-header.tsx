"use client";

import { motion } from "framer-motion";
import { fadeIn, revealOnScroll, slideUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("mb-16", align === "center" && "text-center", className)}
      variants={staggerContainer()}
      {...revealOnScroll}
    >
      <motion.p
        variants={fadeIn()}
        className="mb-3 text-sm font-medium uppercase tracking-widest text-primary"
      >
        {label}
      </motion.p>
      <motion.h2
        variants={slideUp(0.1)}
        className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={slideUp(0.2)}
          className={cn(
            "mt-4 max-w-2xl text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
