import { CONTACT } from "@/lib/contact";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
};

export function ZaloButton({ className, size = "md", label = "Nhắn Zalo" }: Props) {
  const sizes = {
    sm: "h-9 px-3 text-sm gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2",
  } as const;
  return (
    <a
      href={CONTACT.zaloHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Nhắn Zalo ${CONTACT.phone}`}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-brand-foreground bg-gradient-to-r from-brand to-cyan-accent btn-glow transition-transform hover:scale-[1.03] active:scale-[0.98]",
        sizes[size],
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </a>
  );
}
