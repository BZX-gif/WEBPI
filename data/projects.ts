export type Project = {
  slug: string;
  title: string;
  client?: string;
  category: string;
  year: string;
  summary: string;
  overview: string;
  context: string;
  objective: string;
  direction: string;
  features: string[];
  responsive: string;
  technical: string[];
  liveUrl: string;
  cover: string;
  images: { src: string; alt: string }[];
  role: string;
};

export const projects: Project[] = [
  {
    slug: "memory-makers",
    title: "Memory Makers",
    category: "E-commerce / Fashion",
    year: "2026",
    summary:
      "An editorial shopping experience for a graphic T-shirt brand — product discovery, collection storytelling and customer ordering, designed to feel like a lookbook that sells.",
    overview:
      "Memory Makers is a streetwear label built around photographed character graphics on tees, polos and stand-collar styles. The website needed to present a real collection with the composure of a fashion house, while still making it straightforward to browse, choose and order.",
    context:
      "The brand already had a photographed collection and a point of view: wear your memories. What it did not have was a digital storefront equal to that idea. The work was to give the collection a home that felt considered on first glance and useful on the second — a place to explore styles, read the offer clearly, and begin an order.",
    objective:
      "Build an online shopping experience that presents the collection with editorial care, organises products so they can be found, and supports customer ordering without pretending to be a larger operation than it is.",
    direction:
      "The visual language is dark, typographic and restrained. Large photography leads. Type is used editorially. Commerce details — price, stock, shipping, the four-tee offer — are stated plainly rather than hidden in banners. The site is structured as a lookbook that can sell, not a theme with pictures dropped in.",
    features: [
      "Editorial homepage with collection storytelling",
      "Product catalogue organised by style: graphic tees, polos and stand-collar pieces",
      "Product pages with photography, pricing and availability",
      "Collection browsing and product discovery",
      "Customer ordering flow with confirmation before commitment",
      "Mobile-first shopping layout",
      "Clear commercial terms: pricing, shipping and offer structure",
    ],
    responsive:
      "Every primary journey — landing, catalogue, product, order — was designed to hold on a phone first. Photography scales without crowding the type. Navigation stays out of the way until it is needed. Touch targets and reading length were treated as design constraints, not afterthoughts.",
    technical: [
      "Next.js application",
      "Responsive image delivery",
      "Semantic, SEO-ready page structure",
      "Custom storefront interface rather than a generic theme",
    ],
    liveUrl: "https://memory-makers-nine.vercel.app/",
    cover: "/images/work/memory-makers/cover.jpg",
    images: [
      {
        src: "/images/work/memory-makers/cover.jpg",
        alt: "Memory Makers — black graphic tee photographed in a dark studio",
      },
      {
        src: "/images/work/memory-makers/detail-rack.jpg",
        alt: "Memory Makers — hanging collection of dark streetwear tees",
      },
    ],
    role: "Design and development by WEBPI",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return projects[(index + 1) % projects.length];
}
