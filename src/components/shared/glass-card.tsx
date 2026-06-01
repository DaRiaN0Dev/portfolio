import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5",
        hover &&
          "transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-glass-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
