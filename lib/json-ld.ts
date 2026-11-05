import { services } from "@/data/services";
import { configured, site } from "@/lib/site";

export function organizationJsonLd() {
  const sameAs = [
    site.social.instagram,
    site.social.linkedin,
    site.social.x,
    site.social.dribbble,
    site.social.behance,
    site.social.github,
  ].filter((value) => configured(value));

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "WEBPI",
    description: site.description,
    url: site.url || undefined,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: services.map((service) => service.title),
    knowsAbout: [
      "Website design",
      "Website development",
      "E-commerce",
      "UI/UX design",
      "Web applications",
    ],
    slogan: site.tagline,
    ...(configured(site.contact.email)
      ? { email: site.contact.email }
      : {}),
    ...(configured(site.contact.phone)
      ? { telephone: site.contact.phone }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}
