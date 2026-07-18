import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageShell({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
      <PageShell>
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>}
      </PageShell>
    </section>
  );
}
