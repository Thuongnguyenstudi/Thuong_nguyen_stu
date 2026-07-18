import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ZaloButton } from "./ZaloButton";
import { ThemeToggle } from "./ThemeToggle";
import { NAV_LINKS } from "@/lib/contact";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Về trang chủ Thượng Nguyên Studio" className="shrink-0">
          <Logo size={44} />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-foreground bg-accent/60" }}
                  inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                  className="rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent/60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ZaloButton className="hidden sm:inline-flex" />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-7xl border-t border-border bg-background/95 px-4 py-4 backdrop-blur-xl sm:px-6">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-accent text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <ZaloButton className="w-full" size="lg" />
          </div>
        </div>
      </div>
    </header>
  );
}
