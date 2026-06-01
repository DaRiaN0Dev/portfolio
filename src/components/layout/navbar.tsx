"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants/navigation";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const scrollTo = useSmoothScroll();

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 sm:px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-3 shadow-glass backdrop-blur-xl dark:border-white/10"
        aria-label="Main navigation"
      >
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
          className="text-sm font-semibold tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="glass" size="sm" className="hidden sm:inline-flex" asChild>
            <a href={profile.resumeUrl} download>
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-background/95 p-4 shadow-glass backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button variant="glass" className="w-full" asChild>
                <a href={profile.resumeUrl} download>
                  Resume
                </a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
