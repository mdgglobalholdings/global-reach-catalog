import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Toaster } from "@/components/ui/sonner";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink text-white px-5">
      <div className="max-w-md text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-7xl font-bold text-amber">404</h1>
        <h2 className="mt-6 text-2xl uppercase font-semibold">Page introuvable</h2>
        <p className="mt-4 text-lg text-chrome/70">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 space-y-3">
          <Link
            to="/"
            className="pill block rounded-md bg-gradient-to-b from-amberhot to-amber px-6 py-3 font-bold text-ink ring-1 ring-white/40 hover:shadow-lg transition-all"
          >
            Retourner à l'accueil
          </Link>
          <Link
            to="/catalogue"
            search={{ categorie: "", q: "", tri: "recent", dispo: "" }}
            className="block rounded-md bg-white/5 px-6 py-3 font-semibold ring-1 ring-white/15 hover:bg-white/10"
          >
            Voir le catalogue
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
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
      { name: "author", content: "MDG GLOBAL HOLDINGS" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MDG GLOBAL HOLDINGS" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap",
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
    <html lang="fr">
      <head>
        <HeadContent />
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
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isBackoffice = pathname.startsWith("/admin") || pathname.startsWith("/auth");

  return (
    <QueryClientProvider client={queryClient}>
      {isBackoffice ? null : <Header />}
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      {isBackoffice ? null : (
        <>
          <Footer />
          <MobileCta />
          <div className="h-16 md:hidden" />
        </>
      )}
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

