import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, Code2, FileText, ShieldCheck } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/ho-tro-sinh-vien")({
  head: () => ({
    meta: [
      { title: "Hỗ trợ sinh viên CNTT — Thượng Nguyên Studio" },
      { name: "description", content: "Tư vấn đề tài, kiến trúc, hỗ trợ code, database, API, báo cáo, slide và chuẩn bị bảo vệ đồ án CNTT — nhấn mạnh hỗ trợ kỹ thuật để bạn hiểu và trình bày được." },
      { property: "og:title", content: "Hỗ trợ sinh viên CNTT" },
      { property: "og:description", content: "Đồng hành cùng sinh viên trong toàn bộ quá trình làm đồ án." },
      { property: "og:url", content: "/ho-tro-sinh-vien" },
    ],
    links: [{ rel: "canonical", href: "/ho-tro-sinh-vien" }],
  }),
  component: StudentPage,
});

const AREAS = [
  { icon: Compass, title: "Chọn & định hình đề tài", desc: "Gợi ý đề tài phù hợp chuyên ngành, mức độ khả thi và tài nguyên hiện có." },
  { icon: BookOpen, title: "Kiến trúc & lộ trình", desc: "Thiết kế kiến trúc hệ thống, chia mốc thời gian rõ ràng để bạn kiểm soát tiến độ." },
  { icon: Code2, title: "Code, debug, database, API", desc: "Hỗ trợ triển khai từng module, xử lý bug, chuẩn hoá dữ liệu và tích hợp API." },
  { icon: FileText, title: "Báo cáo, slide, demo", desc: "Hoàn thiện báo cáo, slide và kịch bản demo mạch lạc, đúng chuẩn nhà trường." },
  { icon: ShieldCheck, title: "Chuẩn bị bảo vệ", desc: "Luyện phản biện, dự đoán câu hỏi và cách trả lời tự tin trước hội đồng." },
];

function StudentPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hỗ trợ sinh viên"
        title={<>Đồng hành cùng sinh viên <span className="text-gradient">CNTT</span> làm đồ án</>}
        description="Chúng tôi hỗ trợ kỹ thuật và giải thích để bạn hiểu, tự trình bày và tự bảo vệ được sản phẩm — không nhận yêu cầu vi phạm liêm chính học thuật."
      />

      <section className="pb-8">
        <PageShell>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <Reveal key={a.title} delay={i * 60}>
                <div className="h-full glass-card p-6 transition-all hover:-translate-y-1">
                  <a.icon className="size-6 text-brand" />
                  <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="py-16">
        <PageShell>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="glass-card p-8">
                <SectionHeading
                  eyebrow="Cam kết học thuật"
                  title="Hỗ trợ kỹ thuật, không làm hộ để nộp"
                  description="Mục tiêu là bạn hiểu bản chất giải pháp, chủ động chỉnh sửa và trình bày được trước hội đồng. Chúng tôi từ chối các yêu cầu chỉ nhằm nộp bài mà không cần hiểu."
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass-card p-8">
                <SectionHeading
                  eyebrow="Phù hợp với"
                  title="Sinh viên năm cuối, đồ án môn học, khoá luận"
                  description="Web, mobile, AI ứng dụng, quản lý dữ liệu, tự động hoá — chúng tôi hỗ trợ được hầu hết đề tài phổ biến của khối CNTT."
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-brand/15 to-cyan-accent/15 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Bạn đang bí ở bước nào?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Nhắn Zalo mô tả đề tài và tình trạng hiện tại — chúng tôi tư vấn hướng đi và phạm vi hỗ trợ phù hợp.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ZaloButton size="lg" label="Nhắn Zalo tư vấn" />
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
