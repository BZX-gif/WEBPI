import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WEBPI",
    short_name: "WEBPI",
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#f1ede4",
    theme_color: "#f1ede4",
    icons: [
      {
        src: "/favicon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  };
}
