export const site = {
  name: "WEBPI",
  legalName: "WEBPI",
  tagline: "Designed to stand apart. Built to perform.",
  headline: "WE BUILD WHAT'S NEXT.",
  description:
    "WEBPI is an independent digital studio creating thoughtfully designed websites, e-commerce experiences and digital products for ambitious businesses.",
  philosophy: "We don't just build websites. We build digital experiences.",
  supporting:
    "From the first idea to the final interaction, we combine thoughtful design, technology and strategy to create digital experiences that move businesses forward.",
  location: "India",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "",
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "",
    x: process.env.NEXT_PUBLIC_X ?? "",
    dribbble: process.env.NEXT_PUBLIC_DRIBBBLE ?? "",
    behance: process.env.NEXT_PUBLIC_BEHANCE ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB ?? "",
  },
  ogImage: "/og.png",
  copyrightYear: 2026,
} as const;

export type NavItem = {
  href: string;
  label: string;
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export const utilityNav: NavItem[] = [
  { href: "/contact", label: "Contact" },
];

export const ctaNav: NavItem = {
  href: "/start",
  label: "Start a Project",
};

export const footerNav = {
  studio: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/insights", label: "Insights" },
  ],
  services: [
    { href: "/services#websites", label: "Websites" },
    { href: "/services#ecommerce", label: "E-commerce" },
    { href: "/services#ux", label: "UI/UX Design" },
    { href: "/services#applications", label: "Web Applications" },
    { href: "/services#maintenance", label: "Maintenance" },
    { href: "/services#strategy", label: "Digital Strategy" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/cookies", label: "Cookies" },
  ],
};

export const projectTypes = [
  { value: "business-website", label: "Business website" },
  { value: "ecommerce", label: "E-commerce store" },
  { value: "web-application", label: "Web application" },
  { value: "ui-ux", label: "UI/UX design" },
  { value: "redesign", label: "Website redesign" },
  { value: "maintenance", label: "Maintenance" },
  { value: "other", label: "Other" },
] as const;

export const budgetOptions = [
  { value: "under-50k", label: "Under ₹50,000" },
  { value: "50k-150k", label: "₹50,000 – ₹1,50,000" },
  { value: "150k-400k", label: "₹1,50,000 – ₹4,00,000" },
  { value: "400k-800k", label: "₹4,00,000 – ₹8,00,000" },
  { value: "800k-plus", label: "₹8,00,000+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

export const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "2-4-weeks", label: "2–4 weeks" },
  { value: "1-2-months", label: "1–2 months" },
  { value: "3-plus-months", label: "3+ months" },
  { value: "flexible", label: "Flexible" },
] as const;

export function absoluteUrl(path = "/") {
  if (!site.url) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function configured(value: string | undefined | null): value is string {
  return Boolean(value && value.trim());
}

export function socialLinks() {
  const entries = [
    { label: "Instagram", href: site.social.instagram },
    { label: "LinkedIn", href: site.social.linkedin },
    { label: "X", href: site.social.x },
    { label: "Dribbble", href: site.social.dribbble },
    { label: "Behance", href: site.social.behance },
    { label: "GitHub", href: site.social.github },
  ];
  return entries.filter((item) => configured(item.href));
}

export function whatsappHref() {
  if (!configured(site.contact.whatsapp)) return "";
  const number = site.contact.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${number}`;
}
