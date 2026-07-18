import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, Globe, AppWindow, Smartphone, Wrench, Rocket, CheckCircle2 } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";

export const Route = createFileRoute("/dich-vu")({
  head: () => ({
    meta: [
      { title: "Dịch vụ — Thượng Nguyên Studio" },
      { name: "description", content: "Landing page, website, web app, mobile app, custom tool và MVP — mỗi dịch vụ đều được cá nhân hoá theo nhu cầu và ngân sách." },
      { property: "og:title", content: "Dịch vụ — Thượng Nguyên Studio" },
      { property: "og:description", content: "Sáu nhóm dịch vụ sản phẩm số cho cá nhân, startup và doanh nghiệp nhỏ." },
      { property: "og:url", content: "/dich-vu" },
    ],
    links: [{ rel: "canonical", href: "/dich-vu" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Trang đích tập trung một mục tiêu chuyển đổi: đăng ký, mua hàng, tải tài liệu, ra mắt sản phẩm.",
    outputs: ["Thiết kế responsive", "Hiệu ứng cuộn tinh gọn", "Form thu lead + tracking cơ bản", "Tối ưu tốc độ & SEO on-page"],
    audience: "Chiến dịch marketing, sự kiện, ra mắt sản phẩm mới.",
  },
  {
    icon: Globe,
    title: "Website giới thiệu / bán hàng",
    desc: "Website đa trang cho thương hiệu, dịch vụ hoặc cửa hàng nhỏ, dễ cập nhật nội dung.",
    outputs: ["Kiến trúc trang chuẩn SEO", "Trang sản phẩm / dịch vụ", "Blog hoặc CMS đơn giản", "Tích hợp form và chat"],
    audience: "Doanh nghiệp nhỏ, freelancer, cửa hàng, phòng khám, trung tâm.",
  },
  {
    icon: AppWindow,
    title: "Web App",
    desc: "Ứng dụng web có luồng nghiệp vụ: quản trị, dashboard, hệ thống nội bộ, portal khách hàng.",
    outputs: ["Đăng nhập & phân quyền", "CRUD nghiệp vụ", "Báo cáo / biểu đồ", "Tích hợp API bên thứ ba"],
    audience: "Doanh nghiệp cần số hoá quy trình, startup xây sản phẩm SaaS.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    desc: "Ứng dụng di động cross-platform cho iOS & Android với trải nghiệm gần với native.",
    outputs: ["UI/UX mobile-first", "Đăng nhập, thông báo đẩy", "Kết nối API backend", "Đóng gói phát hành store"],
    audience: "Sản phẩm hướng người dùng cuối, dịch vụ đặt lịch, cộng đồng, thương mại.",
  },
  {
    icon: Wrench,
    title: "Custom Tool & Automation",
    desc: "Công cụ nội bộ, script, tự động hoá quy trình lặp — tiết kiệm thời gian và giảm sai sót.",
    outputs: ["Bảng điều khiển nội bộ", "Đồng bộ dữ liệu giữa hệ thống", "Bot / workflow tự động", "Tích hợp Google Sheets, API"],
    audience: "Đội vận hành, marketing, sales cần tự động hoá tác vụ lặp.",
  },
  {
    icon: Rocket,
    title: "MVP cho Startup",
    desc: "Sản phẩm khả dụng tối thiểu để kiểm chứng thị trường trong thời gian và ngân sách hạn chế.",
    outputs: ["Bản đồ tính năng cốt lõi", "Prototype tương tác", "Bản MVP có thể onboard người dùng", "Định hướng lộ trình mở rộng"],
    audience: "Founder, nhóm khởi nghiệp cần validate ý tưởng nhanh.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dịch vụ"
        title={<>Sáu nhóm dịch vụ, một tiêu chuẩn <span className="text-gradient">dùng được ngay</span></>}
        description="Không có giá niêm yết vì mỗi dự án khác nhau. Nhắn Zalo để nhận tư vấn phạm vi và báo giá phù hợp với nhu cầu của bạn."
      />
      <section className="pb-16">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group h-full glass-card p-7 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex size-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-accent text-brand-foreground">
                      <s.icon className="size-5" />
                    </div>
                    <h2 className="text-xl font-bold">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{s.desc}</p>
                  <div className="mt-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Đầu ra</h3>
                    <ul className="mt-2 grid gap-1.5">
                      {s.outputs.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-4 text-sm">
                    <span className="font-semibold">Phù hợp: </span>
                    <span className="text-muted-foreground">{s.audience}</span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <ZaloButton label={`Trao đổi về ${s.title}`} />
                    <Link to="/lien-he" className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-card/60 px-4 text-sm font-semibold hover:bg-accent">
                      Gửi yêu cầu
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>
    </>
  );
}
