# KRYPTONITE ASSET RECOVERY SLEUTHS — Next.js Clone

A pixel-accurate Next.js 14 clone built with:

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Playfair Display + DM Sans** fonts (via Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Services, About, Stats, Testimonials, CTA |
| `/about` | About Us |
| `/services` | All Services (expanded detail) |
| `/testimonials` | Client Testimonials |
| `/contact` | Contact Form + Info |
| `/hire-an-expert` | Redirects → `/contact` |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Design Notes

- Dark luxury aesthetic with gold (#C9A84C) accent palette
- Playfair Display for headings, DM Sans for body copy
- Fully responsive (mobile-first)
- CSS grid background overlay for depth
- Hover micro-interactions throughout
- Contact form with client-side state (no backend required for demo)
