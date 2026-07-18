# Kết nối form website với Google Sheet

Google Sheet đích:

- Tên: `Thượng Nguyên Studio – Quản lý khách hàng website`
- ID: `1NLGU-wTLKL0e1WTb87Q92CgaRFTTXh1b95U3t4_YpaU`
- Tab dữ liệu: `LEADS`

## 1. Tạo Apps Script

1. Mở Google Sheet.
2. Chọn **Tiện ích mở rộng → Apps Script**.
3. Xóa code mặc định trong `Code.gs`.
4. Dán toàn bộ nội dung file `Code.gs` trong thư mục này.
5. Mở **Project Settings → Script properties**.
6. Tạo property `WEBHOOK_SECRET` và đặt một chuỗi bí mật dài.

Có thể tạo secret trên Mac bằng:

```bash
openssl rand -hex 32
```

## 2. Triển khai Web app

1. Chọn **Deploy → New deployment**.
2. Loại: **Web app**.
3. Execute as: **Me**.
4. Who has access: **Anyone**.
5. Deploy và cấp quyền.
6. Sao chép URL kết thúc bằng `/exec`.

## 3. Chạy local

Tạo `.env.local` ở thư mục gốc:

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/.../exec
GOOGLE_SHEETS_WEBHOOK_SECRET=CHUOI_BI_MAT_GIONG_TRONG_SCRIPT_PROPERTIES
```

Sau đó khởi động lại:

```bash
bun run dev
```

## 4. Cấu hình Cloudflare

Trong Worker/Pages project, thêm hai biến server-side:

- `GOOGLE_SHEETS_WEBHOOK_URL`
- `GOOGLE_SHEETS_WEBHOOK_SECRET`

Không thêm tiền tố `VITE_`. Sau khi lưu, redeploy website.

## 5. Kiểm tra

Mở `/api/contact` trên website. Phản hồi đúng:

```json
{"ok":true,"service":"contact-form","configured":true}
```

Sau đó gửi một yêu cầu thử tại `/lien-he` và kiểm tra dòng mới trong tab `LEADS`.
