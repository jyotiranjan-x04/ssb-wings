# SSB WINGS — Website

Modern, animated, SEO-friendly **multi-page** website for **SSB WINGS**, an SSB (Services Selection Board) coaching academy in Noida.

Built with **Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · Resend**.

## Design language

- **Light tricolour + skeuomorphic** theme — warm paper canvas, brass/gold plates, tactile pressable buttons, inset form fields, medal-ringed avatars. No dark overlays, no flat grid patterns.
- **Tri-service inspiration** — Army (olive), Navy (deep blue), Air Force (sky blue) colour-coded throughout.
- **Custom cursor** (dot + easing ring), auto-popup contact modal (once/session), hovering WhatsApp button, sticky tricolour-progress navbar, enlarged Lottie preloader with a large tricolour "SSB WINGS" wordmark.

## Pages

`/` Home · `/about` · `/ssb-process` (5-day SSB) · `/courses` · `/gallery` (Wall of Honour + AIR-1 cards + officer banners) · `/testimonials` (written + YouTube + Instagram) · `/contact` (form + map).

## Content & images

Real content, student photos, mentor photos, testimonials and achievement cards are pulled from the live ssbwings.com Sanity CMS and stored in `public/images/` + `lib/data.ts`. Parade/ceremonial imagery is Government of India (GODL-India) / Wikimedia (CC BY-SA). To refresh, edit `lib/data.ts`.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contact form (Resend)

Form submissions on `#contact` POST to `app/api/contact/route.ts`, which emails the admin via [Resend](https://resend.com).

1. Create an API key at https://resend.com/api-keys
2. Copy `.env.example` → `.env.local` and fill in:

```env
RESEND_API_KEY=re_xxxxxxxx
CONTACT_ADMIN_EMAIL=marketing@ssbwings.com
CONTACT_FROM_EMAIL=SSB Wings <noreply@ssbwings.com>
```

- Until you verify a domain in Resend, use `onboarding@resend.dev` as the from address (already the fallback) — with it, Resend only delivers to the email address that owns the API key.
- The route validates input, escapes HTML, and includes a honeypot field for bots.

## Project map

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | Fonts, SEO metadata, Open Graph, JSON-LD (Organization + Courses) |
| `app/page.tsx` | Section composition |
| `app/globals.css` | Tailwind v4 theme (logo-derived gold + service navy), animations, micro-interactions |
| `app/api/contact/route.ts` | Resend-powered contact endpoint |
| `components/` | Preloader (Lottie + SSB WINGS wordmark), Navbar, Hero, 5-Day Journey, Courses, Mentors, Results, Testimonials, FAQ, Contact, Footer |
| `public/preloader.lottie` | Loading animation (TFU Republic.lottie) |
| `public/logo.webp` | Brand logo |

## Production

```bash
npm run build
npm start
```

Deploys cleanly to Vercel — remember to set the three env vars in the dashboard.
