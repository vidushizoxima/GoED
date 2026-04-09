# GoEd AI Website

Production-ready React website for GoEd AI — the AI-first admissions engine for Indian higher education.

## Tech Stack

- **React 18** + **React Router 6** — component-based, multi-page SPA
- **Vite 5** — fast dev server and optimized production builds
- **DM Sans + DM Serif Display** — Google Fonts (loaded via CDN)
- **Pure CSS** — no Tailwind, no CSS-in-JS, clean and maintainable
- **Calendly** — embedded scheduling on Contact page

## Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
goedai-website/
├── index.html              # HTML entry point
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx            # React entry + router
    ├── App.jsx             # Routes for all 9 pages
    ├── styles/
    │   └── global.css      # Design tokens, typography, buttons, utilities
    ├── components/
    │   ├── Navbar.jsx       # Responsive navigation
    │   ├── Navbar.css
    │   ├── Footer.jsx       # Site footer
    │   ├── Footer.css
    │   ├── ScrollToTop.jsx  # Scroll to top on route change
    │   └── useInView.js     # Intersection Observer hook for animations
    ├── pages/
    │   ├── Home.jsx         # Homepage (hero, dashboard, problem, lifecycle, videos, pillars, proof, event, agent CTA)
    │   ├── Home.css         # Homepage-specific styles
    │   ├── HowItWorks.jsx   # 7-stage lifecycle detail page
    │   ├── Results.jsx      # IMT case study page
    │   ├── LiveDemos.jsx    # 4 channel demos with video placeholders
    │   ├── ForYourRole.jsx  # 4-tab role page (Director, Counsellor, CFO, IT)
    │   ├── Insights.jsx     # Events, innovation updates, blog
    │   ├── Pricing.jsx      # Platform + CPA pricing with FAQ
    │   ├── About.jsx        # Zoxima Solutions credentials & team
    │   └── Contact.jsx      # Contact form + Calendly embed
    └── assets/              # Place images, logos, screenshots here
```

## Pages & Routes

| Route            | Page           | Description                                    |
|------------------|----------------|------------------------------------------------|
| `/`              | Home           | Full homepage with all sections                |
| `/how-it-works`  | How It Works   | 7-stage lifecycle in detail                    |
| `/results`       | Results        | IMT case study with proof stats                |
| `/live-demos`    | Live Demos     | 4 channel demos with video placeholders        |
| `/for-your-role` | For Your Role  | Tabbed: Director, Counsellor, CFO, IT Head     |
| `/insights`      | Insights       | Events, innovation updates, blog               |
| `/pricing`       | Pricing        | Platform + CPA cards with FAQ                  |
| `/about`         | About          | Zoxima Solutions credentials and team           |
| `/contact`       | Contact        | Form + Calendly integration                     |

## Brand Design Tokens (in global.css)

| Token           | Value    | Usage                                    |
|-----------------|----------|------------------------------------------|
| `--navy`        | #0F2044  | Headers, dark sections, CTA backgrounds  |
| `--teal`        | #0D9488  | Accents, highlights, positive indicators |
| `--amber`       | #F59E0B  | Stats, CTAs, attention-drawing elements  |
| `--amber-dark`  | #D97706  | Hover states for amber                   |
| `--off-white`   | #F8FAFC  | Alternating section backgrounds          |
| `--green`       | #10B981  | Success states                           |
| `--red`         | #EF4444  | Alerts, challenges                       |
| `--font-body`   | DM Sans  | Body text                                |
| `--font-display`| DM Serif | Headlines, stats                         |

## TODO for Your Tech Team

### Immediate
- [ ] Replace `https://calendly.com/goedai/demo` in `Contact.jsx` with your actual Calendly URL
- [ ] Add GoEd AI logo SVG/PNG to `src/assets/` and update `Navbar.jsx` and `Footer.jsx`
- [ ] Replace video placeholder sections with actual video embeds (YouTube/Vimeo iframes)
- [ ] Connect contact form to backend (HubSpot, custom API, or email service)

### Short Term
- [ ] Add product screenshots to replace placeholder blocks in ForYourRole.jsx and LiveDemos.jsx
- [ ] Add real blog images to Insights.jsx
- [ ] Add team headshots to About.jsx
- [ ] Set up Vercel/Netlify for deployment with `_redirects` file for SPA routing:
  ```
  /*    /index.html   200
  ```

### SEO & Meta
- [ ] Add per-page `<title>` and `<meta description>` using react-helmet or Vite plugin
- [ ] Add Open Graph and Twitter Card meta tags
- [ ] Add sitemap.xml and robots.txt
- [ ] Add structured data (JSON-LD) for organization and FAQ

### Analytics
- [ ] Add Google Analytics / GA4
- [ ] Add Facebook Pixel for retargeting
- [ ] Add Hotjar or Microsoft Clarity for heatmaps

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy the `dist/` folder
# Set framework preset to "Vite"
# Add rewrite rule: /* → /index.html
```

### Netlify
Add `public/_redirects`:
```
/*    /index.html   200
```

### Any Static Host
The `dist/` folder after `npm run build` is a static site. Upload it anywhere that serves HTML.

## Contact

- Sales: sales@goedai.com
- Phone: +91 9211975869
- Website: goedai.com
# GoED
