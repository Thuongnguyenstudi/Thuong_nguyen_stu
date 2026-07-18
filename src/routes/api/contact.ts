import { createFileRoute } from "@tanstack/react-router";
import { contactSubmissionSchema } from "@/lib/contact-form";

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      GET: async () =>
        Response.json(
          { ok: true, service: "contact-form", configured: Boolean(process.env.GOOGLE_SHEETS_WEBHOOK_URL) },
          { headers: JSON_HEADERS },
        ),
      POST: async ({ request }) => {
        const contentLength = Number(request.headers.get("content-length") ?? "0");
        if (contentLength > 20_000) {
          return Response.json(
            { ok: false, message: "Nội dung gửi lên quá lớn." },
            { status: 413, headers: JSON_HEADERS },
          );
        }

        let input: unknown;
        try {
          input = await request.json();
        } catch {
          return Response.json(
            { ok: false, message: "Dữ liệu gửi lên không hợp lệ." },
            { status: 400, headers: JSON_HEADERS },
          );
        }

        const parsed = contactSubmissionSchema.safeParse(input);
        if (!parsed.success) {
          return Response.json(
            {
              ok: false,
              message: "Vui lòng kiểm tra lại thông tin trong biểu mẫu.",
              issues: parsed.error.flatten().fieldErrors,
            },
            { status: 400, headers: JSON_HEADERS },
          );
        }

        // Honeypot: bot thường tự điền mọi input, kể cả trường ẩn.
        if (parsed.data.website) {
          return Response.json(
            { ok: true, leadId: "accepted" },
            { headers: JSON_HEADERS },
          );
        }

        // Đọc biến môi trường bên trong request handler để hoạt động đúng trên Cloudflare Workers.
        const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
        const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

        if (!webhookUrl || !webhookSecret) {
          console.error("Google Sheets webhook is not configured");
          return Response.json(
            {
              ok: false,
              message: "Hệ thống tiếp nhận đang được cấu hình. Vui lòng nhắn Zalo để được hỗ trợ ngay.",
            },
            { status: 503, headers: JSON_HEADERS },
          );
        }

        const receivedAtUtc = new Date().toISOString();
        const dateCode = receivedAtUtc.slice(0, 10).replaceAll("-", "");
        const leadId = `TN-${dateCode}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;

        const payload = {
          secret: webhookSecret,
          leadId,
          receivedAtUtc,
          fullName: parsed.data.name,
          phone: parsed.data.phone,
          email: parsed.data.email,
          service: parsed.data.need,
          budget: parsed.data.budget,
          timeline: parsed.data.timeline,
          message: parsed.data.description,
          sourceUrl: parsed.data.sourceUrl,
          utmSource: parsed.data.utmSource,
          utmMedium: parsed.data.utmMedium,
          utmCampaign: parsed.data.utmCampaign,
        };

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 12_000);

        try {
          const webhookResponse = await fetch(webhookUrl, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload),
            signal: controller.signal,
            redirect: "follow",
          });

          const responseText = await webhookResponse.text();
          let webhookResult: { ok?: boolean; error?: string } = {};

          try {
            webhookResult = JSON.parse(responseText) as typeof webhookResult;
          } catch {
            // Apps Script phải trả JSON. Không đưa nội dung phản hồi ra client vì có thể chứa chi tiết nội bộ.
          }

          if (!webhookResponse.ok || webhookResult.ok !== true) {
            console.error("Google Sheets webhook rejected a contact submission", {
              status: webhookResponse.status,
              error: webhookResult.error ?? "invalid response",
            });
            return Response.json(
              {
                ok: false,
                message: "Chưa thể lưu yêu cầu lúc này. Vui lòng thử lại hoặc nhắn Zalo để được hỗ trợ ngay.",
              },
              { status: 502, headers: JSON_HEADERS },
            );
          }

          return Response.json(
            { ok: true, leadId, receivedAtUtc },
            { status: 201, headers: JSON_HEADERS },
          );
        } catch (error) {
          console.error("Contact webhook request failed", {
            name: error instanceof Error ? error.name : "UnknownError",
          });
          return Response.json(
            {
              ok: false,
              message: "Kết nối tiếp nhận đang gián đoạn. Vui lòng thử lại hoặc nhắn Zalo.",
            },
            { status: 502, headers: JSON_HEADERS },
          );
        } finally {
          clearTimeout(timeout);
        }
      },
    },
  },
});
