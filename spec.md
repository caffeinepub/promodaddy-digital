# PromoDaddy Digital - Celebrities + Kota SEO Page

## Current State
- Dark premium Schbang-style website with: Hero, TrustedBy (marquee with celebrity names), WhatDefinesUs, WorkShowcase, Services, Industries, RealResults, Awards, Testimonials, HowWeWork, ContactSection
- Single-page app (no routing), Admin panel toggle
- Celebrities only shown as text in a marquee strip (TrustedBy)
- No dedicated Kota landing page
- No SEO meta tags

## Requested Changes (Diff)

### Add
- **Celebrities Section** (new full component): Dedicated section after TrustedBy showcasing Sonu Sood (Bollywood Actor), Mohammad Shami (Cricket - India), Rashid Khan (Cricket - Afghanistan), Jaya Kishori (Devotional Singer), Vivek Bindra (Business Coach) with generated portrait images, name, category, and collaboration type. Premium grid/card layout with hover effects.
- **Kota Dedicated Page** (`/kota` route): Full SEO-optimized landing page targeting keyword "digital marketing agency kota". Content: H1 "Best Digital Marketing Agency in Kota", local SEO copy, industries served (Coaching, Healthcare, Real Estate, E-commerce, Restaurants, Jewellery), services list, FAQs, stats (80+ websites, 500+ clients, 8+ years), CTA to contact.
- **React Router** for `/kota` route and main `/` route
- **SEO meta tags** in `index.html`: title, description, keywords, og tags targeting "digital marketing agency kota", canonical URL
- **Structured data** JSON-LD for LocalBusiness schema in index.html
- **Kota page link** in Navbar and SiteFooter under "Our Local Presence"

### Modify
- `index.html`: Add comprehensive SEO meta tags
- `Navbar.tsx`: Add Kota page link
- `SiteFooter.tsx`: Add "Our Local Presence" section with Kota link
- `App.tsx`: Add React Router with routes for `/` and `/kota`

### Remove
- Nothing removed

## Implementation Plan
1. Install react-router-dom if not present
2. Update `index.html` with SEO meta tags and LocalBusiness JSON-LD
3. Create `src/frontend/src/components/Celebrities.tsx` with 5 celebrity cards using generated images
4. Create `src/frontend/src/pages/KotaPage.tsx` with full SEO content
5. Update `App.tsx` to use BrowserRouter with routes
6. Update `Navbar.tsx` to include Kota link
7. Update `SiteFooter.tsx` with local presence links
8. Insert `<Celebrities />` in main page after `<TrustedBy />`
