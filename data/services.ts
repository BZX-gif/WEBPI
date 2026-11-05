export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  statement: string;
  who: string;
  delivers: string[];
  workflow: string[];
  href: string;
};

export const services: Service[] = [
  {
    id: "websites",
    number: "01",
    title: "Website Design & Development",
    short:
      "Custom websites designed around business objectives, not templates.",
    statement:
      "A business website should explain what you do, who it is for, and why someone should trust you — then make the next step obvious. We design and develop custom websites that are considered in look, clear in structure and dependable in performance.",
    who: "Founders, growing companies and established businesses that need a serious digital presence rather than a placeholder page.",
    delivers: [
      "A clear information architecture based on your offer and audience",
      "Original visual design aligned to your brand",
      "Responsive front-end development",
      "Essential pages, enquiry paths and content structure",
      "SEO foundations: titles, metadata, sitemap and semantic markup",
    ],
    workflow: [
      "Understand the business, audience and goals",
      "Define structure, sitemap and key journeys",
      "Design the visual system and key screens",
      "Develop, refine and test",
      "Launch and hand over with clear next steps",
    ],
    href: "/services#websites",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-commerce Development",
    short:
      "Online stores with product discovery, cart, ordering and the operational details that make selling possible.",
    statement:
      "Selling online is a product problem as much as a visual one. We build shopping experiences that present products with care, make browsing intuitive and take customers through ordering without friction.",
    who: "Brands and retailers who need a store that presents products properly and can take real orders — not a catalogue that stops at a photograph.",
    delivers: [
      "Product catalogue and collection structure",
      "Product pages designed for decision-making",
      "Cart and ordering flows appropriate to the business",
      "Mobile-first shopping experience",
      "Business-ready content and operational handoff",
    ],
    workflow: [
      "Map the catalogue, variants and buying journey",
      "Design the storefront, product and cart experience",
      "Build catalogue, product and ordering flows",
      "Test on real devices and real content",
      "Launch with a clear operating rhythm",
    ],
    href: "/services#ecommerce",
  },
  {
    id: "ux",
    number: "03",
    title: "UI/UX Design",
    short:
      "Interfaces and journeys designed so people can find, understand and act.",
    statement:
      "Good interface design is not decoration. It is the work of making a product understandable, reducing hesitation and giving every screen a job. We design systems, screens and interactions that hold up in use.",
    who: "Teams that need a digital product, website or store to feel clear, consistent and considered before — or alongside — engineering.",
    delivers: [
      "Research-informed information architecture",
      "User flows for the actions that matter",
      "Interface design for key screens",
      "A coherent visual and interaction system",
      "Handoff that engineers can actually build from",
    ],
    workflow: [
      "Clarify users, jobs and constraints",
      "Structure the product and primary journeys",
      "Design the system and key states",
      "Review, refine and prepare for build",
    ],
    href: "/services#ux",
  },
  {
    id: "applications",
    number: "04",
    title: "Custom Web Applications",
    short:
      "Purpose-built web products and tools designed around a specific business problem.",
    statement:
      "Some work cannot be solved with a marketing site. When a business needs a tool, a workflow or a product of its own, we design and develop focused web applications — scoped honestly, built to be maintained.",
    who: "Businesses with a defined operational or product problem that a custom web application can solve better than a generic tool.",
    delivers: [
      "A clearly scoped product definition",
      "Interface design for the actual workflow",
      "Front-end application development",
      "Thoughtful empty, loading and error states",
      "A foundation that can grow without being rewritten immediately",
    ],
    workflow: [
      "Define the problem, users and must-have flows",
      "Agree scope, sequence and success criteria",
      "Design the product surface",
      "Build, test and iterate on the core path",
      "Release with a plan for what comes next",
    ],
    href: "/services#applications",
  },
  {
    id: "maintenance",
    number: "05",
    title: "Website Maintenance & Support",
    short:
      "Updates, fixes, monitoring and improvements under an agreed support arrangement.",
    statement:
      "A launched website is not finished. Content changes, browsers move, and small issues become large ones if nobody is looking. We provide agreed maintenance so the work stays current, secure and useful.",
    who: "Businesses that already have a site — built by us or elsewhere — and want a reliable partner for ongoing care rather than emergency-only help.",
    delivers: [
      "An agreed support scope and response rhythm",
      "Content and small feature updates",
      "Bug investigation and fixes",
      "Dependency and security updates where applicable",
      "Practical recommendations when something larger is needed",
    ],
    workflow: [
      "Review the current site and hosting",
      "Agree what is in scope and how we communicate",
      "Work in a predictable cadence",
      "Report what changed and what should come next",
    ],
    href: "/services#maintenance",
  },
  {
    id: "strategy",
    number: "06",
    title: "Digital Strategy",
    short:
      "Helping a business decide what to build, in what order, and why.",
    statement:
      "Not every project should start in Figma. Sometimes the useful work is deciding the shape of the digital presence: the pages that matter, the offer that needs to be clearer, the product that should wait. We help businesses make those decisions before they spend on the wrong thing.",
    who: "Founders and operators who know they need a stronger digital presence but want a considered plan before a full build.",
    delivers: [
      "A clear reading of the current digital presence",
      "Recommended site or product structure",
      "Prioritised scope for a first release",
      "Content and messaging direction",
      "A practical path from now to launch",
    ],
    workflow: [
      "Listen to the business and review what exists",
      "Define audience, offer and constraints",
      "Propose structure, sequence and scope",
      "Leave you with a plan you can act on — with us or independently",
    ],
    href: "/services#strategy",
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
