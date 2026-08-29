# Chef Kams

Static marketing site for **Chef Kams**, a premium catering business in Botswana.

Exceptional food. Unforgettable experiences.
Bookings: [osekile52@gmail.com](mailto:osekile52@gmail.com) · +267 74537995

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, trust strip, service and gallery previews |
| `services.html` | The four services in detail |
| `bush-safari.html` | Off-grid catering, including the location video |
| `gallery.html` | Full gallery (13 images, click to enlarge) |
| `about.html` | The team and the kitchen |
| `contact.html` | Booking details and what to include in an enquiry |

## Structure

```
assets/
  tailwind.config.js   design tokens (must load after the Tailwind CDN script)
  site.css             arched frame, reveal animation, focus styles
  site.js              nav toggle, lightbox, staggered scroll reveals
images/                web-optimised photos (all under 500KB)
images/originals/      untouched originals of every image that was resized
videos/                chef-kams-clip.mp4 (web-ready), chef-kams-full.mov
premium_culinary_excellence.md   the design system this site implements
reference/             the original design mock
```

No build step. The pages are plain HTML and can be edited directly or
uploaded to any static host.

## Before deploying

1. **Set absolute URLs for social sharing.** Each page's `og:image` and
   `og:url` use relative paths; most social scrapers need absolute ones.
   Search for the `NOTE:` comment in each page's `<head>`.
2. **Add real figures if you want them.** The design mock showed
   "10+ Years Experience" and "500+ Events Catered". Those were placeholder
   numbers and are deliberately not published. `index.html` marks the spot.
3. **Consider a pinned Tailwind build.** The pages load Tailwind from the
   CDN, which is convenient but fetches on every visit.

## Editing notes

- Header and footer markup is repeated in each page; behaviour and tokens
  are shared through `assets/`, so update those in one place.
- Elements with `class="reveal"` fade in on scroll. Wrap siblings in a
  `data-reveal-group` container to make them cascade.
- Gallery tiles live in a `data-gallery-grid` list; each `<button>` carries
  `data-full` and `data-caption` for the lightbox.
- Animations are progressive enhancement: with JavaScript off, or with
  `prefers-reduced-motion: reduce` set, all content is visible immediately.
