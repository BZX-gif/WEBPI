import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Cursor } from "@/components/ui/Cursor";
import { defaultMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/json-ld";
import { configured } from "@/lib/site";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist",
  display: "swap",
  weight: "100 900",
});

const instrument = localFont({
  src: [
    { path: "./fonts/instrument-serif.woff2", weight: "400", style: "normal" },
    { path: "./fonts/instrument-serif-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/geist-mono.woff2",
  variable: "--font-geist-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#f1ede4",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        {/* Without JavaScript, scroll-driven content rests in its final state. */}
        <noscript>
          <style>{`:root{--p:1}.reveal{opacity:1;transform:none}.reveal-clip{clip-path:none}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Cursor />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        {configured(plausible) ? (
          <script
            defer
            data-domain={plausible}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {configured(ga) ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
