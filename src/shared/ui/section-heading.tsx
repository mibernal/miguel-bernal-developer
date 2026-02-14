import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("space-y-4", align === "center" && "text-center", className)}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.35rem]">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
