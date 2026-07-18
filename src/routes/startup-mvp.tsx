import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Layers, Palette, Code2, TestTube, Rocket, TrendingUp } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/startup-mvp")({
  head: () => ({
    meta: [
      { title: "Startup MVP — Thượng Nguyên Studio" },
      { name: "description", content: "Biến ý tưởng thành MVP có thể demo và vận hành: phân tích nhu cầu, phạm vi, UX/UI, phát triển, kiểm thử, triển khai và cải tiến." },
      { property: "og:title", content: "Startup MVP — Thượng Nguyên Studio" },
      { property: "og:description", content: "Xây MVP đúng tính năng cốt lõi, tối ưu ngân sách." },
      { property: "og:url", content: "/startup-mvp" },
    ],
    links: [{ rel: "canonical", href: "/startup-mvp" }],
  }),
  component: StartupPage,
});

const STAGES = [
  { icon: Target, title: "Phân tích nhu cầu", desc: "Làm rõ vấn đề, đối tượng người dùng và giá trị cốt lõi cần chứng minh." },
  { icon: Layers, title: "Xác định phạm vi", desc: "Chọn đúng nhóm tính năng tối thiểu để test giả thuyết, cắt bỏ phần chưa cần." },
  { icon: Palette, title: "UX / UI", desc: "Thiết kế luồng và giao diện đủ trực quan để người dùng thật có thể sử dụng." },
  { icon: Code2, title: "Phát triển", desc: "Xây dựng theo từng lát cắt, ưu tiên phần cốt lõi trước, đảm bảo dễ mở rộng." },
  { icon: TestTube, title: "Kiểm thử", desc: "Kiểm thử chức năng, hiệu năng và trải nghiệm để MVP đủ tin cậy để demo." },
  { icon: Rocket, title: "Triển khai", desc: "Đưa MVP lên môi trường thật, chuẩn bị công cụ đo lường và onboard người dùng đầu tiên." },
  { icon: TrendingUp, title: "Cải tiến", desc: "Thu thập phản hồi, đo lường chỉ số quan trọng và điều chỉnh sản phẩm liên tục." },
];

function StartupPage() {
  return (
    <>
      <PageHeader
        eyebrow="Startup MVP"
        title={<>Từ ý tưởng đến <span className="text-gradient">MVP có thể vận hành</span></>}
        description="Chúng tôi giúp founder và nhóm khởi nghiệp tập trung vào phần cốt lõi, tránh phình phạm vi và tiết kiệm ngân sách trong giai đoạn kiểm chứng thị trường."
      />

      <section className="pb-8">
        <PageShell>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold">Đúng tính năng cốt lõi</h2>
                <p className="mt-3 text-muted-foreground">
                  MVP không phải bản rút gọn của sản phẩm cuối. Nó là phiên bản đủ để trả lời câu hỏi: người dùng có thực sự cần thứ này không, và họ dùng nó như thế nào.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold">Tối ưu ngân sách</h2>
                <p className="mt-3 text-muted-foreground">
                  Chúng tôi ưu tiên tech stack quen thuộc, tái sử dụng module có sẵn và cắt các tính năng chưa cần — để bạn giữ nguồn lực cho vòng lặp học hỏi tiếp theo.
                </p>
              </div>
            </Reveal>
          </div>
        </PageShell>
      </section>

      <section className="py-16">
        <PageShell>
          <SectionHeading eyebrow="Quy trình MVP" title="Bảy giai đoạn xây dựng MVP" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {STAGES.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <li className="relative h-full glass-card p-6">
                  <span className="absolute right-4 top-4 font-display text-2xl font-bold text-brand/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <s.icon className="size-6 text-brand" />
                  <h3 className="mt-4 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-brand/15 to-cyan-accent/15 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Bạn đã có ý tưởng?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Nhắn Zalo để chúng tôi tư vấn phạm vi MVP phù hợp với ngân sách và thời gian ra mắt của bạn.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ZaloButton size="lg" label="Nhắn Zalo trao đổi MVP" />
              <Link to="/lien-he" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/60 px-6 text-base font-semibold hover:bg-accent">
                Gửi form yêu cầu
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
