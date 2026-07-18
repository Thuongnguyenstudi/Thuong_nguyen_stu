import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ZaloButton } from "./ZaloButton";
import { CONTACT, NAV_LINKS } from "@/lib/contact";

const SERVICES = [
  { to: "/dich-vu", label: "Landing Page" },
  { to: "/dich-vu", label: "Website" },
  { to: "/dich-vu", label: "Web App" },
  { to: "/dich-vu", label: "Mobile App" },
  { to: "/dich-vu", label: "Custom Tool" },
  { to: "/startup-mvp", label: "MVP cho Startup" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size={52} />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Studio phát triển sản phẩm số: website, web app, mobile app, custom tool, MVP và hỗ
              trợ kỹ thuật đồ án CNTT.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border hover:bg-accent"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={CONTACT.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border hover:bg-accent"
              >
                <Youtube className="size-4" />
              </a>
              <a
                href={CONTACT.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border hover:bg-accent"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Điều hướng</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Dịch vụ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s, i) => (
                <li key={i}>
                  <Link to={s.to} className="text-muted-foreground hover:text-foreground">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Liên hệ</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={CONTACT.telHref}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="size-4" /> {CONTACT.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="size-4" /> {CONTACT.email}
                </a>
              </li>
              <li className="text-muted-foreground">{CONTACT.domain}</li>
            </ul>
            <div className="mt-5">
              <ZaloButton />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Thượng Nguyên Studio. Mọi quyền được bảo lưu.</p>
          <p>Biến yêu cầu thành sản phẩm số có thể vận hành.</p>
        </div>
      </div>
    </footer>
  );
}
