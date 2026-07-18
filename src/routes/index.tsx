import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Rocket, GraduationCap, Sparkles, Layout, Globe,
  AppWindow, Smartphone, Wrench, Lightbulb, Target, Wallet,
  PackageCheck, LifeBuoy, ClipboardList, Search, Handshake,
  Palette, Code2, PartyPopper,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { CONTACT } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thượng Nguyên Studio — Biến yêu cầu thành sản phẩm số vận hành" },
      { name: "description", content: "Studio phát triển website, web app, mobile app, custom tool, MVP và hỗ trợ đồ án CNTT. Ngân sách hợp lý, bàn giao rõ ràng." },
      { property: "og:title", content: "Thượng Nguyên Studio — Biến yêu cầu thành sản phẩm số vận hành" },
      { property: "og:description", content: "Studio phát triển website, web app, mobile app, custom tool, MVP và hỗ trợ đồ án CNTT. Ngân sách hợp lý, bàn giao rõ ràng." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Layout, title: "Landing Page", desc: "Trang đích tối ưu tỉ lệ chuyển đổi cho chiến dịch marketing." },
  { icon: Globe, title: "Website", desc: "Website giới thiệu, bán hàng, blog với hiệu năng và SEO tốt." },
  { icon: AppWindow, title: "Web App", desc: "Ứng dụng web quản trị, dashboard, hệ thống nội bộ." },
  { icon: Smartphone, title: "Mobile App", desc: "Ứng dụng di động đa nền tảng cho iOS và Android." },
  { icon: Wrench, title: "Custom Tool", desc: "Công cụ nội bộ, tự động hoá quy trình, tích hợp API." },
  { icon: Rocket, title: "MVP cho Startup", desc: "Sản phẩm khả dụng tối thiểu để test thị trường nhanh." },
];

const VALUES = [
  { icon: Target, title: "Đúng nhu cầu", desc: "Phân tích kỹ mục tiêu để xây đúng thứ bạn cần." },
  { icon: Wallet, title: "Tối ưu ngân sách", desc: "Đề xuất phạm vi hợp lý, không phình chi phí." },
  { icon: PackageCheck, title: "Bàn giao rõ ràng", desc: "Tài liệu, mã nguồn, hướng dẫn triển khai đầy đủ." },
  { icon: LifeBuoy, title: "Hỗ trợ sau bàn giao", desc: "Đồng hành sửa lỗi, nâng cấp và tư vấn dài hạn." },
];

const STEPS = [
  { icon: ClipboardList, title: "Tiếp nhận", desc: "Lắng nghe ý tưởng, bối cảnh và ràng buộc thực tế." },
  { icon: Search, title: "Phân tích", desc: "Xác định người dùng, luồng nghiệp vụ và rủi ro chính." },
  { icon: Handshake, title: "Thống nhất phạm vi", desc: "Chốt tính năng, mốc thời gian và cách nghiệm thu." },
  { icon: Palette, title: "Thiết kế", desc: "UX/UI trực quan, có prototype trước khi lập trình." },
  { icon: Code2, title: "Phát triển & kiểm thử", desc: "Xây từng phần, review và kiểm thử theo checklist." },
  { icon: PartyPopper, title: "Bàn giao & hỗ trợ", desc: "Triển khai, hướng dẫn vận hành và bảo trì." },
];

const PROJECTS = [
  { tag: "Landing", title: "Chiến dịch ra mắt SaaS", color: "from-violet-500 to-fuchsia-500" },
  { tag: "Website", title: "Website thương hiệu F&B", color: "from-cyan-500 to-blue-500" },
  { tag: "Web App", title: "Dashboard vận hành nội bộ", color: "from-emerald-500 to-teal-500" },
  { tag: "Mobile", title: "App đặt lịch dịch vụ", color: "from-orange-500 to-pink-500" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <PageShell>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
                <Sparkles className="size-3.5 text-brand" />
                Thượng Nguyên Studio
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                Biến yêu cầu thành <span className="text-gradient">sản phẩm số</span> có thể vận hành
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                Chúng tôi hỗ trợ kỹ thuật đồ án CNTT và phát triển website, web app, mobile app, custom tool, MVP cho startup — nhanh gọn, đúng nhu cầu và tối ưu ngân sách.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/ho-tro-sinh-vien"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
                >
                  <GraduationCap className="size-4" /> Hỗ trợ đồ án CNTT
                </Link>
                <Link
                  to="/startup-mvp"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-cyan-accent px-6 py-3 text-sm font-semibold text-brand-foreground btn-glow transition-transform hover:scale-[1.02]"
                >
                  <Rocket className="size-4" /> Xây dựng sản phẩm / MVP
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-xs text-muted-foreground">
                Muốn báo giá? Nhắn Zalo <a href={CONTACT.zaloHref} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline underline-offset-4">{CONTACT.phone}</a> để trao đổi riêng.
              </p>
            </Reveal>
          </div>
        </PageShell>
      </section>

      {/* Hai hướng */}
      <section className="py-16">
        <PageShell>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: GraduationCap,
                title: "Hỗ trợ đồ án CNTT",
                desc: "Đồng hành cùng sinh viên từ khâu chọn đề tài, kiến trúc, code, database, đến báo cáo và chuẩn bị bảo vệ — giúp bạn hiểu và trình bày được sản phẩm của mình.",
                to: "/ho-tro-sinh-vien",
                cta: "Xem hỗ trợ",
              },
              {
                icon: Rocket,
                title: "Phát triển sản phẩm số",
                desc: "Website, web app, mobile app, custom tool và MVP — từ ý tưởng đến sản phẩm có thể vận hành cho startup và doanh nghiệp nhỏ.",
                to: "/dich-vu",
                cta: "Xem dịch vụ",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <Link
                  to={b.to}
                  className="group relative block h-full glass-card p-8 transition-all hover:-translate-y-1 hover:btn-glow"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-cyan-accent text-brand-foreground">
                    <b.icon className="size-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold">{b.title}</h3>
                  <p className="mt-3 text-muted-foreground">{b.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                    {b.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Dịch vụ nổi bật */}
      <section className="py-16">
        <PageShell>
          <SectionHeading
            eyebrow="Dịch vụ"
            title="Chúng tôi làm gì cho bạn"
            description="Sáu nhóm sản phẩm số phổ biến, cùng một tiêu chuẩn: đúng yêu cầu, dùng được ngay và mở rộng được về sau."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group h-full glass-card p-6 transition-all hover:-translate-y-1">
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-foreground">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Giá trị */}
      <section className="py-16">
        <PageShell>
          <SectionHeading
            eyebrow="Vì sao chọn chúng tôi"
            title="Bốn cam kết xuyên suốt từng dự án"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="h-full glass-card p-6">
                  <v.icon className="size-6 text-brand" />
                  <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      {/* Quy trình */}
      <section className="py-16">
        <PageShell>
          <SectionHeading eyebrow="Quy trình" title="6 bước từ ý tưởng đến bàn giao" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="relative h-full glass-card p-6">
                  <span className="absolute right-5 top-5 font-display text-3xl font-bold text-brand/30">{String(i + 1).padStart(2, "0")}</span>
                  <s.icon className="size-6 text-brand" />
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link to="/quy-trinh" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              Xem quy trình chi tiết <ArrowRight className="size-4" />
            </Link>
          </div>
        </PageShell>
      </section>

      {/* Dự án tiêu biểu */}
      <section className="py-16">
        <PageShell>
          <SectionHeading eyebrow="Dự án tiêu biểu" title="Một số hạng mục đã thực hiện" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="group h-full overflow-hidden glass-card">
                  <div className={`aspect-[4/3] w-full bg-gradient-to-br ${p.color} relative`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 60%)" }} />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-muted-foreground">{p.tag}</span>
                    <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/du-an" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline">
              Xem toàn bộ dự án <ArrowRight className="size-4" />
            </Link>
          </div>
        </PageShell>
      </section>

      {/* CTA cuối */}
      <section className="py-20">
        <PageShell>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand/15 via-transparent to-cyan-accent/15 p-10 text-center sm:p-16">
            <Lightbulb className="mx-auto size-8 text-brand" />
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Có ý tưởng? Kể chúng tôi nghe.</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Nhắn Zalo để trao đổi riêng về nhu cầu và ngân sách. Chúng tôi phản hồi nhanh trong ngày.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ZaloButton size="lg" />
              <Link
                to="/lien-he"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/60 px-6 text-base font-semibold hover:bg-accent"
              >
                Gửi yêu cầu qua form
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
