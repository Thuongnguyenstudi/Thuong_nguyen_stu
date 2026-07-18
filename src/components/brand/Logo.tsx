import { cn } from "@/lib/utils";

type LogoProps = {
  withWordmark?: boolean;
  className?: string;
  size?: number;
};

type LogoMarkProps = {
  className?: string;
  size?: number;
};

const MARK_ASPECT_RATIO = 791 / 938;

export function LogoMark({ className, size = 44 }: LogoMarkProps) {
  return (
    <img
      src="/brand-mark.webp"
      alt=""
      aria-hidden="true"
      width={Math.round(size * MARK_ASPECT_RATIO)}
      height={size}
      className={cn("shrink-0 object-contain", className)}
      style={{ height: size, width: "auto" }}
      decoding="async"
    />
  );
}

export function Logo({ withWordmark = true, className, size = 44 }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark size={size} />
      {withWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="font-display whitespace-nowrap bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-clip-text text-[15px] font-bold tracking-tight text-transparent sm:text-[16px]">
            THƯỢNG NGUYÊN
          </span>
          <span className="mt-1 font-display text-[10px] font-semibold tracking-[0.34em] text-muted-foreground sm:text-[11px]">
            STUDIO
          </span>
        </span>
      )}
    </span>
  );
}
