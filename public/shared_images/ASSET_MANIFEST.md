Shared asset manifest for build agents.

Use this folder as the single source of truth for reusable site imagery.

Rules:
- Prefer assets from `shared_images/` over copies in version-specific `public/` folders.
- Treat files in `placeholders/`, `badges/`, and `og/` as temporary unless noted otherwise.
- Treat files in `brand/` as canonical brand assets.
- Treat files in `shine/` as client-provided real-person assets.
- Treat files in `communication/` as business communication assets.
- Use `competitor_reference/` folders only for inspiration, never as production assets.

## Canonical Assets

### Brand
- `brand/shine-and-speak-logo-horizontal-transparent.png`
  - Status: canonical
  - Use: default header/logo placement
- `brand/shine-and-speak-logo-stacked-transparent.png`
  - Status: canonical
  - Use: footer, narrow cards, stacked lockups
- `brand/shine-and-speak-logo-mark-transparent.png`
  - Status: canonical
  - Use: icon-only placements
- `brand/shine-and-speak-favicon-mark-transparent.png`
  - Status: canonical
  - Use: favicon/app icon source
- `brand/shine-and-speak-favicon.ico`
  - Status: canonical
  - Use: browser favicon

### Shine
- `shine/shine-headshot-original-2048x2048.png`
  - Status: canonical source
  - Source: repo-provided professional image `shine-professional-pic.png`
  - Use: master source for future exports/crops
- `shine/shine-headshot-2048x2048.webp`
  - Status: canonical production asset
  - Use: highest-resolution web-ready version
- `shine/shine-headshot-1200x1200.webp`
  - Status: preferred default
  - Use: homepage/about/profile headshot placements
- `shine/shine-headshot-800x800.webp`
  - Status: supported variant
  - Use: medium-size cards and profile sections
- `shine/shine-headshot-400x400.webp`
  - Status: supported variant
  - Use: smaller UI placements
- `shine/shine-headshot-thumbnail-150x150.webp`
  - Status: legacy fallback
  - Source: earlier repo-provided thumbnail
  - Use: only where a tiny image is specifically needed

### Communication
- `communication/wechat-qr-placeholder.webp`
  - Status: placeholder provided by user
  - Use: temporary WeChat QR until a final preferred version is supplied

## Temporary Assets

### Placeholder photos
- `placeholders/hero-stock-placeholder-unsplash.jpg`
  - Status: temporary stock placeholder
  - Source: Unsplash `ObIW_W6jnXg`
  - Use: temporary hero/context image only
- `placeholders/coordinator-stock-placeholder-unsplash.jpg`
  - Status: temporary stock placeholder
  - Source: Unsplash `XjpH81N6rDc`
  - Use: temporary coordinator/referrer section image only

### Placeholder trust badges
- `badges/hanen-placeholder.svg`
  - Status: temporary text placeholder
- `badges/sounds-write-placeholder.svg`
  - Status: temporary text placeholder
- `badges/lidcombe-placeholder.svg`
  - Status: temporary text placeholder

### Placeholder OG/social
- `og/og-card-placeholder.png`
  - Status: temporary generated asset
  - Use: social share image placeholder
  - Note: replace with a polished final 1200x630 OG card later

## Still Missing
- Real Shine hero/working photo
- Official training/certification badge artwork
- Final designed OG/social card

## Build-Agent Guidance
- If an image slot needs the Shine therapist photo, use `shine/shine-headshot-1200x1200.webp` by default.
- If a larger source is needed for cropping, use `shine/shine-headshot-original-2048x2048.png`.
- Use `shine/shine-headshot-thumbnail-150x150.webp` only as a legacy fallback.
- If an image slot needs a non-Shine temporary visual, prefer the matching file in `placeholders/`.
- If a page needs a QR image, use `communication/wechat-qr-placeholder.webp`.
- If a page needs logos or favicon files, use the assets in `brand/`.
- Do not invent new filenames for shared assets unless replacing the manifest too.
