# Chef Kams

Static marketing site for **Chef Kams**, a premium catering business in Botswana.

Exceptional food. Unforgettable experiences.
Bookings: [osekile52@gmail.com](mailto:osekile52@gmail.com) · +267 74537995

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, trust strip, service area, service and gallery previews, booking form |
| `services.html` | The four services in detail |
| `bush-safari.html` | Off-grid catering, including the location video |
| `gallery.html` | Full gallery (13 images, click to enlarge) |
| `about.html` | The team and the kitchen |
| `contact.html` | Booking form, contact methods and service area |

## Structure

```
assets/
  tailwind.config.js   design tokens (must load after the Tailwind CDN script)
  site.css             arched frame, reveal animation, focus styles
  site.js              nav toggle, lightbox, staggered scroll reveals
  booking.js           booking form -> pre-filled WhatsApp message
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
2. **Replace every `TODO` token.** The site ships with placeholders where a
   real fact is needed. Nothing invented is published, but these must be
   filled in (or the surrounding markup deleted) before the site goes live.
   Run `grep -rn "_TODO" *.html` to find them all.

   | Token | Where | Replace with |
   |---|---|---|
   | `YEARS_TODO` | `index.html` hero stats | Years catering, e.g. `8+` |
   | `EVENTS_TODO` | `index.html` hero stats | Events served, e.g. `200+` |
   | `COUNTRIES_TODO` | `index.html`, `contact.html`, `about.html` | Countries served across the border, e.g. `South Africa and Namibia` |
   | `QUOTE_TODO` / `NAME_TODO` / `EVENT_TODO` | `index.html` testimonials | Real client quotes — see below |

   The `YEARS_TODO` / `EVENTS_TODO` row and the `COUNTRIES_TODO` clauses are
   the only tokens that **render on the page**. Fill them in or delete the
   markup around them; each is marked with a `REPLACE BEFORE DEPLOY` comment.

3. **Publish testimonials when you have them.** The "What clients say"
   section in `index.html` is fully built but wrapped in an HTML comment, so
   it renders nothing until real quotes exist. Follow the `TO PUBLISH` steps
   in that comment. Do not invent quotes.
4. **Consider a pinned Tailwind build.** The pages load Tailwind from the
   CDN, which is convenient but fetches on every visit.

## Editing notes

- Header and footer markup is repeated in each page; behaviour and tokens
  are shared through `assets/`, so update those in one place.
- Elements with `class="reveal"` fade in on scroll. Wrap siblings in a
  `data-reveal-group` container to make them cascade.
- Gallery tiles live in a `data-gallery-grid` list; each `<button>` carries
  `data-full` and `data-caption` for the lightbox.
- Booking forms are marked `data-booking-form`. `assets/booking.js` composes
  the field values into a WhatsApp message and opens `wa.me`. The form's own
  `action` is a `mailto:` fallback, so with JavaScript off it still submits.
  To change the number, edit `WHATSAPP_NUMBER` at the top of `booking.js`.
- Animations are progressive enhancement: with JavaScript off, or with
  `prefers-reduced-motion: reduce` set, all content is visible immediately.
