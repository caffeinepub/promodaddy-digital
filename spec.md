# PromoDaddy Digital – Theme Overhaul

## Current State
Site runs on a pure-black (#0a0a0a) background with orange (#F26A21) accents, Space Grotesk font. All pages exist: Home, /kota, /projects, /admin. Hero has particle animation with orange orbs.

## Requested Changes (Diff)

### Add
- New premium theme: deep midnight navy base with electric gold/amber accents — completely different from both promodaddy.in (white/orange) and current app (black/orange)
- Subtle blue-purple gradient overlays on section dividers for depth
- Gold shimmer/glow effect on key headings

### Modify
- **index.css**: Change background from #0a0a0a → #080D1A (deep navy), accent from #F26A21 (orange) → #FFBA08 (gold), border-top color on body
- **All components**: Replace all #0a0a0a/#0f0f0f/#111/#141414 with navy variants (#080D1A, #0D1426, #111B35, #162040)
- **All components**: Replace all #F26A21 (orange) with #FFBA08 (gold)
- **Hero.tsx**: Update particle colors to gold+blue-white, update orb gradient colors to navy+gold, update CTA button, update text glow shadows
- **Navbar.tsx**: Navy background (#080D1A), gold accent, logo uses gold D letter
- **SiteFooter.tsx**: Navy background, gold accents
- **Celebrities.tsx**: Navy cards, gold badge, gold progress bar, gold glow on active card
- **Services.tsx**: Navy section, gold numbers and hover effect
- **Industries.tsx**: Navy section, gold-border pills
- **RealResults.tsx**: Navy section, gold left-border on stat cards, gold CTA button
- **WhyChoose.tsx**: Navy background (remove the light #F5FAFF), gold check icons
- **HowWeWork.tsx**: Navy section, gold numbered circles
- **Awards.tsx**: Navy section, gold year tags, gold hover effects
- **WorkShowcase.tsx**: Navy section, gold tag badges, gold navigation buttons
- **TrustedBy.tsx**: Navy section, gold-bordered pills for row one
- **WhatDefinesUs.tsx**: Navy section, gold accents
- **ContactSection.tsx**: Navy section, gold accents

### Remove
- Nothing removed — all pages (Home, /kota, /projects, /admin) remain intact

## Implementation Plan
1. Update index.css: new color tokens, background #080D1A, accent #FFBA08, font stays Space Grotesk
2. Update Navbar — navy bg, gold accent
3. Update Hero — navy orbs (replace orange orbs with gold+indigo), gold particles, gold CTA
4. Update all homepage section components with navy backgrounds and gold accents
5. Update SiteFooter
6. KotaPage and ProjectsPage: only update background/accent colors, preserve all content
7. Validate and deploy

## Color Palette Reference
- Background deep: #080D1A
- Background card: #0D1426
- Background surface: #111B35  
- Accent gold: #FFBA08
- Accent gold hover: #E0A800
- Border subtle: rgba(255,186,8,0.12)
- Text primary: #F0F4FF
- Text muted: rgba(240,244,255,0.45)
