# WEBPI

Independent digital studio website.

**Designed to stand apart. Built to perform.**

WEBPI creates thoughtfully designed websites, e-commerce experiences and digital products for ambitious businesses.

This repository is the official WEBPI website — a production-ready Next.js application, not a template.

## Pages

- `/` — Homepage
- `/services` — Services
- `/work` — Selected work
- `/work/memory-makers` — Memory Makers case study
- `/about` — About the studio
- `/insights` — Journal
- `/insights/[slug]` — Article
- `/contact` — Contact
- `/start` — Project enquiry
- `/privacy` `/terms` `/cookies` — Legal
- Custom `404`

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS 4
- React 19
- Zod (enquiry validation)
- Lucide icons
- Resend HTTP API for enquiry email (optional, free tier)

No paid fonts, paid templates or paid APIs are required to run the site.

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
npm run lint
```

## Environment variables

See `.env.example`. None are required to browse the site.

### Required before production launch

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph absolute image URLs |
| `RESEND_API_KEY` | Deliver enquiry emails ([Resend](https://resend.com) free tier) |
| `ENQUIRY_TO_EMAIL` | Inbox that receives enquiries |
| `ENQUIRY_FROM_EMAIL` | From address, must be verified in Resend |

Until email is configured, enquiries are still **validated, rate-limited and stored** as JSON files in `data/enquiries/` on hosts that allow filesystem writes. On serverless hosts (Vercel) the filesystem is not durable — **configure Resend before launch** or submissions cannot be delivered.

### Optional public details

Leave empty to hide the corresponding UI.

- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_CONTACT_PHONE`
- `NEXT_PUBLIC_WHATSAPP` (digits with country code, no `+` required)
- `NEXT_PUBLIC_INSTAGRAM` `LINKEDIN` `X` `DRIBBBLE` `BEHANCE` `GITHUB`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`

Never put secrets in `NEXT_PUBLIC_*` variables.

## Enquiry form

`POST /api/enquire`

- Client and server validation (Zod)
- Honeypot field + minimum fill time
- IP rate limit (5 / 15 minutes, in-memory)
- Optional Resend email
- Local JSON persistence when the filesystem allows it

The form does not fake success. If neither storage nor email succeeds, the visitor sees an error.

## Content model

Editable without rewriting layouts:

- `lib/site.ts` — brand, navigation, contact, budget ranges
- `data/services.ts`
- `data/projects.ts`
- `data/insights.ts`
- `data/process.ts`
- `data/principles.ts`

Do not invent clients, testimonials, statistics or team biographies.

## Deploy

The app is ready for [Vercel](https://vercel.com) or any Node host that can run `next start`.

1. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
2. Set Resend keys so enquiries arrive by email.
3. Add contact and social values when they are confirmed.
4. Connect the domain.
5. Verify Open Graph with [opengraph.xyz](https://www.opengraph.xyz) after deploy.

## Remaining before public launch

- Production domain and `NEXT_PUBLIC_SITE_URL`
- Enquiry email delivery (Resend)
- Studio email / phone / WhatsApp if you want them public
- Legal entity, registered address and GST when they exist
- Founder profile when verified copy is ready
- Analytics, if desired

## Brand

- Wordmark: WEBPI
- Mark: constructed W with a square point
- Field: deep black `#050505`
- Paper: `#F3F0E7`
- Signal: `#C9B896`
- Type: Syne, Instrument Serif, Inter, Geist Mono
