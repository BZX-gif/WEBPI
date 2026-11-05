export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] };

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  category: string;
  content: InsightBlock[];
};

export const insights: Insight[] = [
  {
    slug: "a-website-is-a-business-decision",
    title: "A website is a business decision",
    excerpt:
      "Most sites fail quietly: not because they look dated, but because nobody decided what they were for. Purpose first, pixels second.",
    date: "2026-10-12",
    dateLabel: "12 Oct 2026",
    readTime: "6 min",
    category: "Strategy",
    content: [
      {
        type: "p",
        text: "A website is often treated as a decoration that a business eventually gets around to. In practice it is one of the few assets that works while you sleep: explaining the offer, answering the obvious questions, and inviting a serious enquiry. That makes it a business decision, not a design errand.",
      },
      {
        type: "p",
        text: "When a site underperforms, the cause is rarely a missing animation. It is usually that nobody agreed what the site was supposed to do. Attract local clients? Sell a product? Recruit? Collect a waitlist? Each of those jobs produces a different structure, a different homepage, and a different measure of success.",
      },
      {
        type: "h2",
        text: "Start with the job, not the layout",
      },
      {
        type: "p",
        text: "Before typefaces and colour, write one sentence: when this site is working, a visitor will… Then be unkind to that sentence. If it contains the word “engage” or “presence” and nothing else, it is not finished. Prefer verbs a founder can observe: book a call, request a quote, place an order, read a case study, join a list.",
      },
      {
        type: "p",
        text: "That sentence decides the homepage. It decides what is above the fold, what can live deeper, and which pages are worth writing well. A site with a clear job can be simple and still feel expensive. A site with no job can be ornate and still feel lost.",
      },
      {
        type: "h2",
        text: "What actually belongs on the first screen",
      },
      {
        type: "ul",
        items: [
          "Who it is for, in language they use themselves",
          "What you do, without a metaphor that needs decoding",
          "Why you are a reasonable choice — evidence, not adjectives",
          "A next step that matches the visitor’s temperature",
        ],
      },
      {
        type: "p",
        text: "Everything else is supporting material. Supporting material can be beautiful. It should not delay the point.",
      },
      {
        type: "quote",
        text: "If a stranger cannot tell what you do in the first few seconds, the rest of the page is asking them to work for the privilege of giving you money.",
      },
      {
        type: "h2",
        text: "Build for the conversation you want",
      },
      {
        type: "p",
        text: "The enquiry form, the WhatsApp link, the project page — these are not afterthoughts. They are the product. A considered form with honest budget ranges will produce better conversations than a “Contact us” box that asks for a name and a prayer.",
      },
      {
        type: "p",
        text: "This is the work WEBPI takes on: not inventing a personality for a business that already has one, but giving that business a digital surface that can do a job. Design and engineering matter. They matter most when they are in service of a decision someone already needed to make.",
      },
    ],
  },
  {
    slug: "what-an-online-store-actually-needs",
    title: "What an online store actually needs",
    excerpt:
      "A store is not a gallery with a price. It is a sequence of decisions. Design the decisions, and the rest becomes easier to judge.",
    date: "2026-10-28",
    dateLabel: "28 Oct 2026",
    readTime: "7 min",
    category: "E-commerce",
    content: [
      {
        type: "p",
        text: "It is tempting to judge an online store by its hero image. Customers do not. They judge it by whether they can find a thing, trust it, and complete an order without wondering if anyone is behind the curtain.",
      },
      {
        type: "p",
        text: "For a young brand, the useful question is not “how do we look like a large retailer?” It is “what does a first-time buyer need in order to say yes?” The answer is usually smaller, and more specific, than a feature list from a platform brochure.",
      },
      {
        type: "h2",
        text: "The decisions a shopper is making",
      },
      {
        type: "ul",
        items: [
          "Is this the kind of thing I want?",
          "Can I see it clearly enough to judge quality?",
          "What will it cost, including the unwelcome surprises?",
          "What happens after I ask for one?",
          "If something is wrong, who do I talk to?",
        ],
      },
      {
        type: "p",
        text: "A store that answers those questions in the order they arise will outperform a store that only looks expensive. Photography still matters — it is often the only way to answer the first two. So does the unglamorous writing under the product: fabric, fit, shipping, the fact that an order is confirmed before payment, if that is how you work.",
      },
      {
        type: "h2",
        text: "Catalogue before campaign",
      },
      {
        type: "p",
        text: "Many brands start with a campaign homepage and a thin catalogue. That is backwards if the business is the collection. Give each product a real page. Group things the way a person shops — by style, not by internal SKU logic. Make the path from “I like this” to “I would like one” short.",
      },
      {
        type: "p",
        text: "If you cannot yet offer instant checkout, say so. An honest ordering conversation is better than a basket that pretends to charge a card and then goes quiet. People forgive a small operation. They do not forgive confusion.",
      },
      {
        type: "quote",
        text: "Commerce design is the craft of removing doubt in the right order.",
      },
      {
        type: "h2",
        text: "What we refuse to fake",
      },
      {
        type: "p",
        text: "Urgency badges, invented reviews and stock counters that are not connected to anything are not strategy. They are a short-term tax on trust. A young store earns more by being exact: real photographs, real prices, real terms, a real person on the other side of the enquiry.",
      },
      {
        type: "p",
        text: "That is the standard we held for Memory Makers, and it is the standard we bring to e-commerce work: an experience that can sell without performing a larger company than the one that exists.",
      },
    ],
  },
  {
    slug: "the-case-for-restraint",
    title: "The case for restraint",
    excerpt:
      "Luxury on the web is rarely more. It is the feeling that someone decided, and then stopped.",
    date: "2026-11-04",
    dateLabel: "4 Nov 2026",
    readTime: "5 min",
    category: "Design",
    content: [
      {
        type: "p",
        text: "There is a look that has become the default of ambitious websites: glow, glass, a gradient that never quite settles, motion that announces itself before the sentence has finished. It photographs well in a Dribbble shot. It is exhausting to live with.",
      },
      {
        type: "p",
        text: "Restraint is not the absence of taste. It is taste with an editor. A limited colour field, a serious type hierarchy, space that is allowed to remain space — these are not minimal for the sake of a trend. They are how you keep a visitor’s attention on the thing you actually want them to understand.",
      },
      {
        type: "h2",
        text: "What restraint is not",
      },
      {
        type: "p",
        text: "It is not a licence to be bland. A restrained site can be memorable: a wordmark with a point of view, a headline that takes the whole width, a single image given enough room to work. The difference is that the memorable thing is chosen, not accumulated.",
      },
      {
        type: "ul",
        items: [
          "One accent, used like punctuation",
          "Motion that explains or delights, then gets out of the way",
          "Photography that has been directed, not stocked",
          "Copy that would still work if you stripped the styling off it",
        ],
      },
      {
        type: "h2",
        text: "Performance is part of the aesthetic",
      },
      {
        type: "p",
        text: "A heavy page cannot feel expensive for long. The pause before the type appears, the image that pops in late, the menu that misses the first tap — the body registers these as cheap even when the palette is black and gold. Building lightly is a visual decision.",
      },
      {
        type: "quote",
        text: "The most confident thing a layout can do is leave something out.",
      },
      {
        type: "p",
        text: "This is the design language we are building WEBPI around. Not because austerity is virtuous, but because businesses are asking strangers for attention, and strangers are not obliged to be impressed by effort. They are obliged only to themselves. Make it easy for them. Make it exact. Then stop.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function getNextInsight(slug: string) {
  const index = insights.findIndex((insight) => insight.slug === slug);
  if (index === -1) return undefined;
  return insights[(index + 1) % insights.length];
}
