// Guarded so an unreachable CDN degrades quietly instead of throwing.
window.tailwind = window.tailwind || {};
tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* Premium Culinary Excellence — token set, verbatim */
        "surface": "#fcf8f7", "surface-dim": "#ddd9d8", "surface-bright": "#fcf8f7",
        "surface-container-lowest": "#ffffff", "surface-container-low": "#f6f3f2",
        "surface-container": "#f1edec", "surface-container-high": "#ebe7e6",
        "surface-container-highest": "#e5e2e1",
        "on-surface": "#1c1b1b", "on-surface-variant": "#444845",
        "inverse-surface": "#313030", "inverse-on-surface": "#f4f0ef",
        "outline": "#747875", "outline-variant": "#c4c7c3", "surface-tint": "#5d5f5d",
        "primary": "#5d5f5d", "on-primary": "#ffffff", "primary-container": "#fafaf7",
        "on-primary-container": "#727371", "inverse-primary": "#c6c7c4",
        "secondary": "#5d5f5b", "on-secondary": "#ffffff", "secondary-container": "#e0e0db",
        "on-secondary-container": "#62635f",
        "tertiary": "#615e5b", "on-tertiary": "#ffffff", "tertiary-container": "#fff9f5",
        "on-tertiary-container": "#76726f",
        "error": "#ba1a1a", "on-error": "#ffffff", "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#e2e3e0", "primary-fixed-dim": "#c6c7c4",
        "on-primary-fixed": "#1a1c1b", "on-primary-fixed-variant": "#454745",
        "secondary-fixed": "#e3e3de", "secondary-fixed-dim": "#c6c7c2",
        "on-secondary-fixed": "#1a1c19", "on-secondary-fixed-variant": "#464744",
        "tertiary-fixed": "#e7e1de", "tertiary-fixed-dim": "#cbc5c2",
        "on-tertiary-fixed": "#1d1b19", "on-tertiary-fixed-variant": "#494644",
        "background": "#fcf8f7", "on-background": "#1c1b1b", "surface-variant": "#e5e2e1",
        "accent-orange": "#E8722C"
      },
      borderRadius: { "sm": "0.5rem", "DEFAULT": "1rem", "md": "1.5rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
      spacing: {
        "unit": "8px", "gutter": "24px", "container-max": "1200px",
        "margin-mobile": "20px", "margin-tablet": "32px", "margin-desktop": "64px"
      },
      maxWidth: { "container-max": "1200px" },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"','system-ui','-apple-system','Segoe UI','Roboto','sans-serif'],
        "display-lg": ['"Plus Jakarta Sans"'], "display-lg-mobile": ['"Plus Jakarta Sans"'],
        "headline-md": ['"Plus Jakarta Sans"'], "headline-sm": ['"Plus Jakarta Sans"'],
        "body-lg": ['"Plus Jakarta Sans"'], "body-md": ['"Plus Jakarta Sans"'],
        "label-bold": ['"Plus Jakarta Sans"'], "label-md": ['"Plus Jakarta Sans"']
      },
      fontSize: {
        "display-lg":        ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["36px", { lineHeight: "42px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "headline-md":       ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "headline-sm":       ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg":           ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md":           ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-bold":        ["14px", { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "700" }],
        "label-md":          ["14px", { lineHeight: "20px", fontWeight: "500" }]
      },
      boxShadow: {
        /* Large blur, low opacity, warm tint derived from the brand rather than pure black */
        "ambient":    "0 20px 40px -10px rgba(74, 58, 48, 0.06)",
        "ambient-lg": "0 28px 56px -12px rgba(74, 58, 48, 0.10)",
        "accent":     "0 16px 32px -12px rgba(232, 114, 44, 0.38)"
      }
    }
  }
}
