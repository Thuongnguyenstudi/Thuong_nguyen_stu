import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardList, Search, Handshake, Palette, Code2, PartyPopper } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/quy-trinh")({
  head: () => ({
    meta: [
      { title: "Quy trình làm việc — Thượng Nguyên Studio" },
      { name: "description", content: "Quy trình 6 bước rõ ràng từ tiếp nhận yêu cầu đến bàn giao và hỗ trợ sau bàn giao." },
      { property: "og:title", content: "Quy trình — Thượng Nguyên Studio" },
      { property: "og:description", content: "6 bước làm việc minh bạch giữa khách hàng và studio." },
      { property: "og:url", content: "/quy-trinh" },
    ],
    links: [{ rel: "canonical", href: "/quy-trinh" }],
  }),
  component: ProcessPage,
});

const STEPS = [
  { icon: ClipboardList, title: "Tiếp nhận", desc: "Bạn mô tả nhu cầu qua Zalo hoặc form. Chúng tôi ghi nhận thông tin và xác nhận buổi trao đổi." },
  { icon: Search, title: "Phân tích", desc: "Cùng làm rõ mục tiêu, đối tượng người dùng, nghiệp vụ chính và các ràng buộc về ngân sách, thời gian." },
  { icon: Handshake, title: "Thống nhất phạm vi", desc: "Chốt danh sách tính năng, mốc tiến độ, cách nghiệm thu và mức đầu tư phù hợp — tất cả trên văn bản." },
  { icon: Palette, title: "Thiết kế", desc: "Xây wireframe và giao diện UI. Bạn xem, phản hồi và duyệt trước khi bước sang phát triển." },
  { icon: Code2, title: "Phát triển & kiểm thử", desc: "Triển khai theo lát cắt, review nội bộ, kiểm thử chức năng và hiệu năng, mời bạn dùng thử ở môi trường staging." },
  { icon: PartyPopper, title: "Bàn giao & hỗ trợ", desc: "Triển khai chính thức, bàn giao mã nguồn/tài khoản/tài liệu, hướng dẫn vận hành và hỗ trợ sau bàn giao." },
];

const FAQ = [
  { q: "Thời gian trung bình cho một dự án?", a: "Landing page thường 1–2 tuần, website 2–4 tuần, web app / mobile app / MVP từ 4 tuần trở lên tuỳ phạm vi. Sau bước phân tích chúng tôi sẽ chốt mốc cụ thể." },
  { q: "Có báo giá cụ thể trên website không?", a: "Không. Mỗi dự án có phạm vi khác nhau, chúng tôi ưu tiên trao đổi riêng qua Zalo để đưa ra mức phù hợp và minh bạch." },
  { q: "Có ký hợp đồng và xuất hoá đơn không?", a: "Có thể ký thoả thuận rõ ràng bằng văn bản. Việc xuất hoá đơn sẽ trao đổi tuỳ theo hình thức thanh toán khách chọn." },
  { q: "Sau khi bàn giao có được hỗ trợ không?", a: "Có. Chúng tôi có giai đoạn hỗ trợ sau bàn giao để sửa lỗi phát sinh và hướng dẫn vận hành. Nâng cấp tiếp theo sẽ trao đổi riêng." },
  { q: "Tôi có sở hữu mã nguồn không?", a: "Có. Bạn nhận toàn bộ mã nguồn, tài khoản và tài liệu triển khai của phần thuộc phạm vi dự án." },
];

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quy trình"
        title={<>Sáu bước làm việc <span className="text-gradient">minh bạch</span></>}
        description="Chúng tôi tin quy trình rõ ràng giúp cả hai phía tiết kiệm thời gian, kiểm soát được rủi ro và tránh phát sinh ngoài mong đợi."
      />

      <section className="pb-8">
        <PageShell>
          <ol className="relative border-l border-border pl-6 sm:pl-10">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="mb-8 last:mb-0">
                  <span className="absolute -left-4 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-cyan-accent text-xs font-bold text-brand-foreground sm:-left-5 sm:size-10 sm:text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="glass-card p-6">
                    <div className="flex items-center gap-3">
                      <s.icon className="size-5 text-brand" />
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </PageShell>
      </section>

      <section className="py-16">
        <PageShell>
          <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
          <div className="mt-8 glass-card p-2 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((f, i) => (
                <AccordionItem key={i} value={`q-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 rounded-3xl border border-border bg-gradient-to-br from-brand/15 to-cyan-accent/15 p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Sẵn sàng bắt đầu?</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Nhắn Zalo để đặt buổi trao đổi 15–30 phút, không mất phí và không ràng buộc.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ZaloButton size="lg" />
              <Link to="/lien-he" className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card/60 px-6 text-base font-semibold hover:bg-accent">
                Điền form yêu cầu
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
