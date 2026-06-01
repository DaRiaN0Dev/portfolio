import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative py-24 md:py-32", className)}>
      <div className={cn("container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
