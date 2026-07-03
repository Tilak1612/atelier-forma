# Atelier Forma

Static marketing site for Atelier Forma — a global interior architecture studio.

**Live:** https://atelier-forma-site.vercel.app

## Stack
- Static HTML (11 pages: home, 5 project case studies, 2 journal essays, privacy, terms, 404)
- Tailwind CSS — **compiled** to `assets/app.css` (no CDN runtime)
- GSAP + ScrollTrigger + Lenis (home page motion), Lucide icons
- Deployed on Vercel (static), auto-deploy from `main`

## Build
The Tailwind stylesheet is pre-built and committed. To regenerate after changing markup:

```bash
npx tailwindcss@3 -c tailwind.config.js -i assets/tw-input.css -o assets/app.css --minify
```

## Structure
- `index.html` — home
- `projects/*.html` — project case studies
- `journal/*.html` — journal essays
- `privacy.html`, `terms.html`, `404.html` — utility pages
- `sitemap.xml`, `robots.txt` — SEO
- `vercel.json` — clean URLs, security headers (CSP/HSTS), asset caching
