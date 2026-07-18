import { z } from "zod";

export const NEED_OPTIONS = [
  "Hỗ trợ đồ án CNTT",
  "Landing Page",
  "Website",
  "Web App",
  "Mobile App",
  "Custom Tool / Automation",
  "MVP cho Startup",
  "Khác",
] as const;

export const BUDGET_OPTIONS = [
  "Dưới 5 triệu",
  "5 – 15 triệu",
  "15 – 30 triệu",
  "30 – 60 triệu",
  "Trên 60 triệu",
  "Trao đổi riêng",
] as const;

export const TIMELINE_OPTIONS = [
  "Càng sớm càng tốt",
  "Trong 2 tuần",
  "Trong 1 tháng",
  "1 – 3 tháng",
  "Chưa xác định",
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s.]{8,20}$/, "Số điện thoại/Zalo không hợp lệ"),
  email: z.string().trim().email("Email không hợp lệ").max(120),
  need: z.string().trim().min(1, "Chọn loại nhu cầu").max(120),
  description: z
    .string()
    .trim()
    .min(10, "Mô tả tối thiểu 10 ký tự")
    .max(1500),
  budget: z.string().trim().min(1, "Chọn khoảng ngân sách").max(120),
  timeline: z
    .string()
    .trim()
    .min(1, "Chọn thời gian mong muốn")
    .max(120),
});

const optionalShortText = z.string().trim().max(200).optional().default("");

export const contactSubmissionSchema = contactFormSchema.extend({
  sourceUrl: z.string().trim().max(700).optional().default(""),
  utmSource: optionalShortText,
  utmMedium: optionalShortText,
  utmCampaign: optionalShortText,
  // Trường bẫy bot. Người dùng thật không nhìn thấy và không điền trường này.
  website: z.string().max(0).optional().default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
