# MACC Website - Ultimate Restart Prompt

Copy and paste everything below this line to get Claude back up to speed:

---

## Project: Murray Area Chamber of Commerce Website

**Live URL:** https://macc-website-2.vercel.app/
**GitHub Repo:** https://github.com/BrettLechtenbrerg/MACC-Website
**Vercel Project:** https://vercel.com/bretts-projects-3e254e58/macc-website-2

### Local Project Location
```
/Users/brettlechtenberg/Documents/agent-girl/macc-website-2/
```

**IMPORTANT:** Always work in the `macc-website-2` folder, NOT `macc-website-3` or any other folder.

---

## Tech Stack
- **Framework:** Next.js 16.0.10 with App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (connected to GitHub for auto-deploy)
- **Forms:** Go High Level (GHL) integration
- **UI Components:** Framer Motion, Lucide React icons

---

## Project Structure
```
macc-website-2/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── ribbon-cutting/    # Ribbon cutting request page
│   ├── certificate-of-origin/  # Certificate service page
│   ├── events/            # Events pages
│   ├── news/              # News pages
│   ├── directory/         # Business directory
│   ├── join/              # Membership signup
│   └── ...
├── components/            # Reusable React components
│   ├── PageHeader.tsx
│   ├── Footer.tsx
│   └── ...
├── lib/                   # Utility functions
│   └── ghl.ts            # Go High Level form submissions
├── public/
│   └── images/           # All website images
│       ├── ribbon-cuttings/
│       ├── certificates/
│       ├── events/
│       ├── news/
│       └── businesses/
└── next.config.js        # Next.js configuration
```

---

## Common Commands
```bash
# Navigate to project
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod --yes

# Check git status
git status

# Push changes to GitHub (auto-deploys to Vercel)
git add -A && git commit -m "Your message" && git push
```

---

## Current Status (as of January 12, 2026)

### What's Working:
- Full website deployed and live at https://macc-website-2.vercel.app/
- All pages rendering correctly
- GitHub connected to Vercel (deploy via CLI: `vercel --prod --yes`)
- GHL form integration set up
- Video player on ribbon-cutting page (ready for video content)
- Directory page images working perfectly

### Recent Fixes:
- `/ribbon-cutting` - Hero section replaced with video player (works great!)
- Gallery cards use StaggerChildren + motion.div pattern from directory page
- `/certificate-of-origin` - Uses Image component with shipping.jpg

### Pages Status:
1. `/ribbon-cutting` - Video player works, gallery may need video placeholders
2. `/certificate-of-origin` - Shipping image section present
3. `/directory` - All images display correctly (reference for working pattern)

---

## Key Files
- `app/ribbon-cutting/page.tsx` - Video player + gallery with StaggerChildren
- `app/certificate-of-origin/page.tsx` - Image component for shipping visual
- `app/directory/page.tsx` - REFERENCE: Working image pattern
- `app/good-things-utah/page.tsx` - REFERENCE: Video player pattern
- `public/images/` - All images stored here

---

## Git Info
- **Branch:** main
- **Remote:** origin -> https://github.com/BrettLechtenbrerg/MACC-Website.git
- **Latest commit:** 9fef598 "Fix: restore Image import for gallery"

---

## Vercel Info
- **Project:** macc-website-2
- **Team:** bretts-projects-3e254e58
- **Domain:** macc-website-2.vercel.app
- **Status:** Connected to GitHub, auto-deploys on push

---

## What I Need You To Do
[Describe your task here - e.g., "Fix the image display issue on the ribbon-cutting page"]

---

## Additional Context
- The site design is dark theme with purple/orange gradient accents
- Uses glass-card styling (glassmorphism)
- Aurora background effect on homepage
- Mobile responsive
- Chamber serves Murray, Utah area businesses

---

**End of restart prompt**
