import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MessageCircle, Facebook, Youtube, CheckCircle2 } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { ZaloButton } from "@/components/site/ZaloButton";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ — Thượng Nguyên Studio" },
      { name: "description", content: "Gửi yêu cầu tư vấn cho Thượng Nguyên Studio qua form hoặc nhắn Zalo 0817 048 983 để trao đổi riêng." },
      { property: "og:title", content: "Liên hệ — Thượng Nguyên Studio" },
      { property: "og:description", content: "Trao đổi riêng qua Zalo, gọi điện, email hoặc gửi form yêu cầu." },
      { property: "og:url", content: "/lien-he" },
    ],
    links: [{ rel: "canonical", href: "/lien-he" }],
  }),
  component: ContactPage,
});

const NEED_OPTIONS = [
  "Hỗ trợ đồ án CNTT",
  "Landing Page",
  "Website",
  "Web App",
  "Mobile App",
  "Custom Tool / Automation",
  "MVP cho Startup",
  "Khác",
];

const BUDGET_OPTIONS = [
  "Dưới 5 triệu",
  "5 – 15 triệu",
  "15 – 30 triệu",
  "30 – 60 triệu",
  "Trên 60 triệu",
  "Trao đổi riêng",
];

const TIMELINE_OPTIONS = [
  "Càng sớm càng tốt",
  "Trong 2 tuần",
  "Trong 1 tháng",
  "1 – 3 tháng",
  "Chưa xác định",
];

const schema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(80),
  phone: z.string().trim().regex(/^[0-9+()\-\s.]{8,20}$/, "Số điện thoại/Zalo không hợp lệ"),
  email: z.string().trim().email("Email không hợp lệ").max(120),
  need: z.string().min(1, "Chọn loại nhu cầu"),
  description: z.string().trim().min(10, "Mô tả tối thiểu 10 ký tự").max(1500),
  budget: z.string().min(1, "Chọn khoảng ngân sách"),
  timeline: z.string().min(1, "Chọn thời gian mong muốn"),
});
type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const inputCls = "w-full rounded-lg border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground shadow-xs outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

function ContactPage() {
  const [values, setValues] = useState<FormValues>({
    name: "", phone: "", email: "", need: "", description: "", budget: "", timeline: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormValues>(key: K, v: FormValues[K]) {
    setValues((s) => ({ ...s, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormValues;
        if (!next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Liên hệ"
        title={<>Nhắn cho <span className="text-gradient">Thượng Nguyên</span></>}
        description="Cách nhanh nhất là nhắn Zalo — chúng tôi phản hồi trong ngày. Bạn cũng có thể để lại yêu cầu qua form dưới đây."
      />

      <section className="pb-20">
        <PageShell>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr]">
            {/* Thông tin */}
            <Reveal>
              <div className="glass-card p-8">
                <h2 className="text-xl font-bold">Kênh liên hệ</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={CONTACT.zaloHref} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-accent">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-cyan-accent text-brand-foreground">
                        <MessageCircle className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">Zalo (ưu tiên)</span>
                        <span className="block font-semibold">{CONTACT.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.telHref} className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-accent">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
                        <Phone className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">Hotline</span>
                        <span className="block font-semibold">{CONTACT.phone}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.emailHref} className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-accent">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
                        <Mail className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">Email</span>
                        <span className="block font-semibold break-all">{CONTACT.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-accent">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
                        <Facebook className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">Facebook</span>
                        <span className="block font-semibold">Thượng Nguyên Studio</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 rounded-lg p-2 -m-2 hover:bg-accent">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-foreground">
                        <Youtube className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-foreground">YouTube</span>
                        <span className="block font-semibold">@ThngNgynStu</span>
                      </span>
                    </a>
                  </li>
                </ul>
                <div className="mt-6">
                  <ZaloButton size="lg" className="w-full" />
                </div>
                <p className="mt-4 text-xs text-muted-foreground">Tên miền thương hiệu: {CONTACT.domain}</p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={100}>
              <div className="glass-card p-8">
                <h2 className="text-xl font-bold">Gửi yêu cầu tư vấn</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Chia sẻ mô tả càng cụ thể càng tốt để chúng tôi tư vấn chính xác. Không có bảng giá cứng — chúng tôi trao đổi phạm vi và mức đầu tư trực tiếp với bạn.
                </p>

                {submitted ? (
                  <div className="mt-6 rounded-2xl border border-brand/40 bg-brand/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto size-10 text-brand" />
                    <h3 className="mt-3 text-lg font-bold">Đã gửi yêu cầu!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất. Để nhanh hơn, bạn có thể nhắn Zalo ngay bây giờ.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      <ZaloButton />
                      <button
                        type="button"
                        onClick={() => { setSubmitted(false); setValues({ name: "", phone: "", email: "", need: "", description: "", budget: "", timeline: "" }); }}
                        className="inline-flex h-10 items-center justify-center rounded-full border border-border bg-card/60 px-4 text-sm font-semibold hover:bg-accent"
                      >
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Họ tên" error={errors.name} required>
                      <input className={inputCls} value={values.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" />
                    </Field>
                    <Field label="Số điện thoại / Zalo" error={errors.phone} required>
                      <input className={inputCls} value={values.phone} onChange={(e) => update("phone", e.target.value)} inputMode="tel" autoComplete="tel" />
                    </Field>
                    <Field label="Email" error={errors.email} required className="sm:col-span-2">
                      <input className={inputCls} value={values.email} onChange={(e) => update("email", e.target.value)} type="email" autoComplete="email" />
                    </Field>
                    <Field label="Loại nhu cầu" error={errors.need} required>
                      <select className={inputCls} value={values.need} onChange={(e) => update("need", e.target.value)}>
                        <option value="">-- Chọn --</option>
                        {NEED_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="Thời gian mong muốn" error={errors.timeline} required>
                      <select className={inputCls} value={values.timeline} onChange={(e) => update("timeline", e.target.value)}>
                        <option value="">-- Chọn --</option>
                        {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="Ngân sách dự kiến" error={errors.budget} required className="sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_OPTIONS.map((o) => {
                          const active = values.budget === o;
                          return (
                            <button
                              type="button"
                              key={o}
                              onClick={() => update("budget", o)}
                              className={cn(
                                "inline-flex h-9 items-center rounded-full border px-3.5 text-sm transition-all",
                                active
                                  ? "border-transparent bg-gradient-to-r from-brand to-cyan-accent text-brand-foreground"
                                  : "border-border bg-background/60 text-muted-foreground hover:bg-accent hover:text-foreground",
                              )}
                            >
                              {o}
                            </button>
                          );
                        })}
                      </div>
                    </Field>
                    <Field label="Mô tả yêu cầu" error={errors.description} required className="sm:col-span-2">
                      <textarea rows={5} className={inputCls} value={values.description} onChange={(e) => update("description", e.target.value)} placeholder="Mục tiêu, đối tượng người dùng, tính năng chính, tham khảo..." />
                    </Field>
                    <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand to-cyan-accent px-6 text-sm font-semibold text-brand-foreground btn-glow transition-transform hover:scale-[1.02]"
                      >
                        Gửi yêu cầu
                      </button>
                      <span className="text-xs text-muted-foreground">Hoặc nhắn Zalo để phản hồi nhanh trong ngày.</span>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </PageShell>
      </section>
    </>
  );
}

function Field({
  label, error, required, className, children,
}: { label: string; error?: string; required?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
