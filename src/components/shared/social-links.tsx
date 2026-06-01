"use client";

import { Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/shared/brand-icons";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  twitter: TwitterIcon,
  send: Send,
};

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.icon] ?? GitHubIcon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:bg-primary/5 hover:text-foreground",
              iconClassName,
            )}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
