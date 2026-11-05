import type { Metadata } from "next";
import { absoluteUrl, site } from "@/lib/site";

const defaultTitle = "WEBPI | Digital Experiences Built for What's Next";
const defaultDescription = site.description;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(site.url || "http://localhost:3000"),
  title: {
    default: defaultTitle,
    template: "%s | WEBPI",
  },
  description: defaultDescription,
  applicationName: "WEBPI",
  authors: [{ name: "WEBPI" }],
  creator: "WEBPI",
  publisher: "WEBPI",
  keywords: [
    "WEBPI",
    "digital studio",
    "website design",
    "website development",
    "e-commerce",
    "UI UX design",
    "web applications",
    "India",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "WEBPI",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: "WEBPI — Digital Experiences Built for What's Next",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  category: "technology",
};

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = site.url ? absoluteUrl(path) : undefined;
  const ogTitle = title.includes("WEBPI") ? title : `${title} | WEBPI`;
  const ogImage = image ?? site.ogImage;

  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      siteName: "WEBPI",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}
