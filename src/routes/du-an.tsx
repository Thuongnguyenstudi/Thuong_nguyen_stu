import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/du-an")({
  head: () => ({
    meta: [
      { title: "Dự án — Thượng Nguyên Studio" },
      { name: "description", content: "Danh mục dự án mẫu: landing page, website, dashboard/web app, mobile app, automation tool và đồ án CNTT." },
      { property: "og:title", content: "Dự án — Thượng Nguyên Studio" },
      { property: "og:description", content: "Một số hạng mục sản phẩm số đã thực hiện." },
      { property: "og:url", content: "/du-an" },
    ],
    links: [{ rel: "canonical", href: "/du-an" }],
  }),
  component: ProjectsPage,
});

type Category = "all" | "landing" | "website" | "webapp" | "mobile" | "automation" | "student";

const FILTERS: { key: Category; label: string }[] = [
  { key: "all", label: "Tất cả" },
  { key: "landing", label: "Landing Page" },
  { key: "website", label: "Website" },
  { key: "webapp", label: "Web App" },
  { key: "mobile", label: "Mobile App" },
  { key: "automation", label: "Automation" },
  { key: "student", label: "Đồ án CNTT" },
];

type Project = {
  title: string;
  category: Exclude<Category, "all">;
  tag: string;
  desc: string;
  gradient: string;
  mock: "web" | "dashboard" | "mobile" | "flow";
};

const PROJECTS: Project[] = [
  { title: "Chiến dịch ra mắt SaaS", category: "landing", tag: "Landing Page", desc: "Trang đích với section pricing ẩn CTA, form nhận demo.", gradient: "from-violet-500 to-fuchsia-500", mock: "web" },
  { title: "Landing ra mắt khoá học", category: "landing", tag: "Landing Page", desc: "Trang bán khoá học với lộ trình, testimonial và form đăng ký.", gradient: "from-pink-500 to-rose-500", mock: "web" },
  { title: "Website thương hiệu F&B", category: "website", tag: "Website", desc: "Website đa trang cho chuỗi quán, cập nhật menu và câu chuyện thương hiệu.", gradient: "from-amber-500 to-orange-500", mock: "web" },
  { title: "Website phòng khám", category: "website", tag: "Website", desc: "Trang dịch vụ, lịch làm việc, đặt lịch online và blog kiến thức.", gradient: "from-cyan-500 to-sky-500", mock: "web" },
  { title: "Dashboard vận hành nội bộ", category: "webapp", tag: "Web App", desc: "Quản trị đơn hàng, tồn kho, phân quyền theo vai trò.", gradient: "from-emerald-500 to-teal-500", mock: "dashboard" },
  { title: "Portal khách hàng SaaS", category: "webapp", tag: "Web App", desc: "Đăng nhập, gói cước, hoá đơn và trung tâm hỗ trợ.", gradient: "from-indigo-500 to-blue-500", mock: "dashboard" },
  { title: "App đặt lịch dịch vụ", category: "mobile", tag: "Mobile App", desc: "Ứng dụng đặt lịch, thông báo đẩy, đánh giá kỹ thuật viên.", gradient: "from-orange-500 to-pink-500", mock: "mobile" },
  { title: "App cộng đồng học tập", category: "mobile", tag: "Mobile App", desc: "Feed bài viết, nhóm học, thông báo và hồ sơ cá nhân.", gradient: "from-purple-500 to-indigo-500", mock: "mobile" },
  { title: "Bot đồng bộ đơn hàng", category: "automation", tag: "Automation", desc: "Đồng bộ đơn từ nhiều sàn về Google Sheets, cảnh báo Telegram.", gradient: "from-lime-500 to-emerald-500", mock: "flow" },
  { title: "Workflow duyệt tài liệu", category: "automation", tag: "Automation", desc: "Tự động chuyển bước, gửi email, ghi log duyệt tài liệu nội bộ.", gradient: "from-teal-500 to-cyan-500", mock: "flow" },
  { title: "Đồ án quản lý thư viện", category: "student", tag: "Đồ án CNTT", desc: "Web app CRUD, phân quyền, báo cáo mượn/trả cho môn học.", gradient: "from-sky-500 to-indigo-500", mock: "dashboard" },
  { title: "Đồ án AI phân loại ảnh", category: "student", tag: "Đồ án CNTT", desc: "Ứng dụng minh hoạ model phân loại ảnh với giao diện demo.", gradient: "from-fuchsia-500 to-purple-500", mock: "web" },
];

function Mock({ type, gradient }: { type: Project["mock"]; gradient: string }) {
  return (
    <div className={cn("relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br", gradient)}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white, transparent 55%)" }} />
      <div className="absolute inset-4 rounded-xl bg-white/15 p-3 backdrop-blur-sm ring-1 ring-white/20">
        {type === "web" && (
          <div className="space-y-2">
            <div className="flex gap-1"><span className="size-1.5 rounded-full bg-white/70" /><span className="size-1.5 rounded-full bg-white/70" /><span className="size-1.5 rounded-full bg-white/70" /></div>
            <div className="h-3 w-2/3 rounded bg-white/70" />
            <div className="h-2 w-full rounded bg-white/40" />
            <div className="h-2 w-4/5 rounded bg-white/40" />
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded bg-white/50" />
              <div className="h-8 rounded bg-white/50" />
              <div className="h-8 rounded bg-white/50" />
            </div>
          </div>
        )}
        {type === "dashboard" && (
          <div className="flex h-full gap-2">
            <div className="w-1/4 space-y-1.5">
              <div className="h-2 rounded bg-white/60" />
              <div className="h-2 rounded bg-white/40" />
              <div className="h-2 rounded bg-white/40" />
              <div className="h-2 rounded bg-white/40" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="grid grid-cols-3 gap-1.5">
                <div className="h-6 rounded bg-white/60" />
                <div className="h-6 rounded bg-white/60" />
                <div className="h-6 rounded bg-white/60" />
              </div>
              <div className="h-14 rounded bg-white/40" />
              <div className="h-6 rounded bg-white/40" />
            </div>
          </div>
        )}
        {type === "mobile" && (
          <div className="mx-auto flex h-full w-1/2 flex-col gap-1.5 rounded-xl bg-white/25 p-2 ring-1 ring-white/30">
            <div className="mx-auto h-1 w-6 rounded-full bg-white/70" />
            <div className="h-2 w-3/4 rounded bg-white/70" />
            <div className="h-10 rounded bg-white/50" />
            <div className="h-10 rounded bg-white/40" />
            <div className="mt-auto h-4 rounded bg-white/60" />
          </div>
        )}
        {type === "flow" && (
          <div className="flex h-full items-center justify-around">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <div className="size-8 rounded-lg bg-white/60" />
                <div className="h-1 w-8 rounded bg-white/50" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<Category>("all");
  const items = useMemo(() => filter === "all" ? PROJECTS : PROJECTS.filter(p => p.category === filter), [filter]);

  return (
    <>
      <PageHeader
        eyebrow="Dự án"
        title={<>Danh mục <span className="text-gradient">dự án tiêu biểu</span></>}
        description="Một số nhóm sản phẩm chúng tôi từng thực hiện. Bạn có thể lọc theo loại dự án gần với nhu cầu của mình."
      />
      <section className="pb-16">
        <PageShell>
          <div role="tablist" aria-label="Lọc dự án" className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "inline-flex h-9 items-center rounded-full border px-4 text-sm font-medium transition-all",
                  filter === f.key
                    ? "border-transparent bg-gradient-to-r from-brand to-cyan-accent text-brand-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.title} delay={(i % 6) * 60}>
                <article className="group h-full overflow-hidden glass-card transition-all hover:-translate-y-1">
                  <Mock type={p.mock} gradient={p.gradient} />
                  <div className="p-5">
                    <span className="text-xs font-medium text-muted-foreground">{p.tag}</span>
                    <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {items.length === 0 && (
            <p className="mt-10 text-center text-sm text-muted-foreground">Chưa có dự án trong nhóm này.</p>
          )}

          <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-brand/15 to-cyan-accent/15 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Bạn muốn xem thêm case cụ thể?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Nhắn Zalo cho biết bạn quan tâm loại dự án nào — chúng tôi gửi hồ sơ phù hợp riêng cho bạn.
            </p>
            <div className="mt-6 flex justify-center">
              <ZaloButton size="lg" />
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
