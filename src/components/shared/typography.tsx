import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight text-foreground md:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("text-lg font-semibold tracking-tight text-foreground", className)}>
      {children}
    </h3>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-base leading-relaxed text-muted-foreground", className)}>
      {children}
    </p>
  );
}

export function Label({ children, className }: TypographyProps) {
  return (
    <span
      className={cn(
        "text-sm font-medium uppercase tracking-widest text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
