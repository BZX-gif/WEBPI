import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEBPI",
    short_name: "WEBPI",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
