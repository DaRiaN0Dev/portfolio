"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/components/shared/brand-icons";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GlassCard } from "@/components/shared/glass-card";
import { SectionHeader } from "@/components/shared/section-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { fadeIn, revealOnScroll, staggerContainer } from "@/lib/animations";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contact";

const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: socials.find((s) => s.icon === "github")?.href ?? "#", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: socials.find((s) => s.icon === "linkedin")?.href ?? "#",
    icon: LinkedInIcon,
  },
  {
    label: "Telegram",
    href: socials.find((s) => s.icon === "send")?.href ?? "#",
    icon: Send,
  },
  {
    label: "Twitter",
    href: socials.find((s) => s.icon === "twitter")?.href ?? "#",
    icon: TwitterIcon,
  },
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (_data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    reset();
  };

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Let's work together"
        description="Have a project in mind? Reach out and let's discuss how I can help."
      />

      <motion.div
        className="grid gap-12 lg:grid-cols-5"
        variants={staggerContainer(0.1)}
        {...revealOnScroll}
        initial="hidden"
      >
        <motion.div variants={fadeIn()} className="lg:col-span-2">
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-muted/20 p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <link.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {link.label === "Email" ? profile.email : "Connect"}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn()} className="lg:col-span-3">
          <GlassCard>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" {...register("name")} />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" {...register("subject")} />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
