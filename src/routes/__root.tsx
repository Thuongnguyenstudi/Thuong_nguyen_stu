import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Không tìm thấy trang</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Trang bạn tìm không tồn tại hoặc đã được di chuyển.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">Trang không tải được</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Có lỗi xảy ra. Bạn có thể thử lại hoặc quay về trang chủ.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Thử lại
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-card/60 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
          >
            Trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Thượng Nguyên Studio — Biến yêu cầu thành sản phẩm số vận hành" },
      {
        name: "description",
        content:
          "Studio phát triển website, web app, mobile app, custom tool, MVP và hỗ trợ đồ án CNTT. Ngân sách hợp lý, bàn giao rõ ràng.",
      },
      { name: "author", content: "Thượng Nguyên Studio" },
      { name: "theme-color", content: "#7157e8" },
      { property: "og:site_name", content: "Thượng Nguyên Studio" },
      {
        property: "og:title",
        content: "Thượng Nguyên Studio — Biến yêu cầu thành sản phẩm số vận hành",
      },
      {
        property: "og:description",
        content:
          "Studio phát triển website, web app, mobile app, custom tool, MVP và hỗ trợ đồ án CNTT. Ngân sách hợp lý, bàn giao rõ ràng.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Thượng Nguyên Studio — Biến yêu cầu thành sản phẩm số vận hành",
      },
      {
        name: "twitter:description",
        content:
          "Studio phát triển website, web app, mobile app, custom tool, MVP và hỗ trợ đồ án CNTT. Ngân sách hợp lý, bàn giao rõ ràng.",
      },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84135f5e-ac91-4d2d-8489-3c4d33711fc6/id-preview-f2fff087--3cd01ccf-eec2-452a-9e8f-0611fc42d939.lovable.app-1784340793431.png",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/84135f5e-ac91-4d2d-8489-3c4d33711fc6/id-preview-f2fff087--3cd01ccf-eec2-452a-9e8f-0611fc42d939.lovable.app-1784340793431.png",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('tn-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Bỏ qua điều hướng
        </a>
        <Header />
        <main id="main" className="min-h-[70vh]">
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
