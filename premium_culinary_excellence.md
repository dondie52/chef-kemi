---
name: Premium Culinary Excellence
colors:
  surface: '#fcf8f7'
  surface-dim: '#ddd9d8'
  surface-bright: '#fcf8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444845'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747875'
  outline-variant: '#c4c7c3'
  surface-tint: '#5d5f5d'
  primary: '#5d5f5d'
  on-primary: '#ffffff'
  primary-container: '#fafaf7'
  on-primary-container: '#727371'
  inverse-primary: '#c6c7c4'
  secondary: '#5d5f5b'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0db'
  on-secondary-container: '#62635f'
  tertiary: '#615e5b'
  on-tertiary: '#ffffff'
  tertiary-container: '#fff9f5'
  on-tertiary-container: '#76726f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e3e0'
  primary-fixed-dim: '#c6c7c4'
  on-primary-fixed: '#1a1c1b'
  on-primary-fixed-variant: '#454745'
  secondary-fixed: '#e3e3de'
  secondary-fixed-dim: '#c6c7c2'
  on-secondary-fixed: '#1a1c19'
  on-secondary-fixed-variant: '#464744'
  tertiary-fixed: '#e7e1de'
  tertiary-fixed-dim: '#cbc5c2'
  on-tertiary-fixed: '#1d1b19'
  on-tertiary-fixed-variant: '#494644'
  background: '#fcf8f7'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
---

## Brand & Style

The design system is rooted in the intersection of professional corporate structure and the warmth of premium hospitality. It targets high-end clientele in Botswana who value reliability, culinary artistry, and meticulous service.

The visual style is a blend of **Minimalism** and **Modern Corporate**, utilizing expansive whitespace to evoke a sense of "fine dining" breathing room. The interface maintains a sophisticated, understated presence, allowing the vibrant colors of the food photography to remain the focal point. Key stylistic signatures include arched imagery frames—a nod to architectural elegance—and a generous use of soft, tactile shadows that suggest depth without clutter. The tone is authoritative yet welcoming, reflecting a service that is both world-class and deeply rooted in personal care.

## Colors

The palette is intentionally restrained to maintain a "clean-plate" aesthetic.

- **Primary (Background):** A warm off-white that feels softer and more premium than pure white, providing a comfortable canvas for reading.
- **Secondary (Surface):** A very light gray used for section backgrounds to create subtle visual separation and hierarchy between content blocks.
- **Accent (Warm Orange):** Reserved strictly for high-priority actions (CTAs), statistical data, and specific badges. This color represents the heat of the kitchen and the warmth of the hospitality.
- **Text:** A near-black for high legibility and a grounded, professional feel.

## Typography

The design system utilizes **Plus Jakarta Sans** for all levels of communication. This rounded geometric typeface strikes the perfect balance between corporate precision and friendly approachability.

- **Headlines:** Use heavy weights (Bold/Extra Bold) with slight negative letter spacing to create a commanding, editorial feel.
- **Body Text:** Maintained at a Regular weight with generous line heights to ensure readability in long-form menu descriptions or service explanations.
- **Labels:** Small caps or bold weights are used for utilitarian text (badges, categories) to provide contrast against body copy.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain a premium, centered composition, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid is used for desktop. Content should be grouped in 3, 4, or 6 column spans to maintain a clean, balanced rhythm.
- **Rhythm:** An 8px base unit drives all padding and margin decisions. 
- **Whitespace:** Emphasize vertical rhythm with large section gaps (often 120px - 160px) to give each service category its own moment of focus.
- **Adaptation:** On mobile, margins reduce significantly, and multi-column card layouts collapse into a single-column vertical stack to maintain legibility and touch-target size.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

- **Level 0 (Base):** The off-white background (#FAFAF7).
- **Level 1 (Subtle):** Secondary background sections (#F0F0EB) used to group related content.
- **Level 2 (Cards):** White surfaces (#FFFFFF) elevated with a soft, diffused shadow. Shadows should have a large blur radius (32px+) and low opacity (4-6%), using a slightly warm tint derived from the brand colors rather than pure black.
- **Interaction:** Upon hover, cards may increase their elevation slightly to provide tactile feedback, mimicking a physical menu being lifted.

## Shapes

The shape language is soft and organic, echoing the presentation of fine cuisine.

- **General Elements:** A high roundedness (Pill-shaped/XL) is applied to buttons, input fields, and chips.
- **Images:** Hero images and gallery featured pieces use an **Arched Frame** (rounded top, flat bottom) to create a distinctive, sophisticated signature.
- **Cards:** Standard cards utilize the `rounded-xl` (1.5rem) token to maintain the friendly yet high-end aesthetic.

## Components

- **Buttons:** Primary buttons are pill-shaped with the Accent (#E8722C) background and white text. Secondary buttons use a thick 2px stroke in the Text color with no fill.
- **Cards:** White background, XL corner radius, and soft ambient shadows. Content inside cards should have generous padding (at least 32px).
- **Badges:** Used for "Signature Dish" or "New" labels. One specific badge style uses the Accent color to draw immediate attention.
- **Input Fields:** Large, rounded fields with subtle 1px light gray borders. On focus, the border transitions to a soft shadow rather than a high-contrast color change.
- **Arched Frames:** A custom component for imagery that applies a 50% width radius to the top corners, creating the "cloche" or "archway" effect.
- **Stat Numbers:** Large, bold typography in the Accent color used to highlight years of experience or guest counts.