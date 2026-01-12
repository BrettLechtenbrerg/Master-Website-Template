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
- **Deployment:** Vercel CLI (`vercel --prod --yes`)
- **Forms:** Go High Level (GHL) integration
- **UI Components:** Framer Motion, Lucide React icons

---

## Project Structure
```
macc-website-2/
├── app/                    # Next.js App Router pages (26 pages total)
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── ribbon-cutting/    # Ribbon cutting request page (VIDEO PLAYER)
│   ├── certificate-of-origin/  # Certificate service page
│   ├── directory/         # Business directory (IMAGES WORK HERE)
│   ├── good-things-utah/  # Good Things Utah (VIDEO PLAYER REFERENCE)
│   ├── events/            # Events pages
│   ├── news/              # News pages
│   ├── join/              # Membership signup
│   └── ...
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main nav with Join Now button linked to /join
│   ├── PageHeader.tsx
│   ├── Footer.tsx         # Murray City link REMOVED
│   ├── animations/        # StaggerChildren, FadeIn, etc.
│   └── ...
├── lib/                   # Utility functions
│   └── ghl.ts            # Go High Level form submissions
├── public/
│   └── images/           # All website images
│       ├── ribbon-cuttings/
│       ├── certificates/
│       ├── businesses/   # Directory images (WORKING)
│       ├── events/
│       └── news/
├── app/globals.css       # Mobile-optimized CSS
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

# Deploy to Vercel (USE THIS - GitHub auto-deploy may not work)
vercel --prod --yes

# Check git status
git status

# Push changes to GitHub
git add -A && git commit -m "Your message" && git push
```

---

## Current Status (as of January 12, 2026)

### What's Working:
- Full website deployed and live at https://macc-website-2.vercel.app/
- All 26 pages rendering correctly
- "Join Now" button links to /join page (desktop + mobile)
- Video player on ribbon-cutting page (ready for video content)
- Directory page images working perfectly
- Mobile optimizations in place
- GHL form integration set up

### Recent Session Fixes:
1. **Join Now button** - Now properly links to `/join` (was just a button before)
2. **Murray City link** - Removed from footer
3. **Mobile optimization** - Added responsive CSS for touch targets, buttons, forms
4. **Ribbon-cutting page** - Hero replaced with video player (images weren't working)
5. **Video player** - Uses gradient + Play icon (same pattern as Good Things Utah)

### Pages Status:
| Page | Status |
|------|--------|
| `/ribbon-cutting` | Video player works, gallery has Image components |
| `/certificate-of-origin` | Shipping image section present |
| `/directory` | All images display correctly (REFERENCE) |
| `/good-things-utah` | Video player pattern (REFERENCE) |

---

## Key Files
- `components/Navigation.tsx` - Join Now button linked to /join
- `components/Footer.tsx` - Murray City link removed
- `app/globals.css` - Mobile optimizations added
- `app/ribbon-cutting/page.tsx` - Video player + gallery
- `app/directory/page.tsx` - REFERENCE: Working image pattern
- `app/good-things-utah/page.tsx` - REFERENCE: Video player pattern

---

## Git Info
- **Branch:** main
- **Remote:** origin -> https://github.com/BrettLechtenbrerg/MACC-Website.git
- **Latest commit:** 0838f50 "Fix navigation, remove Murray City link, add mobile optimizations"

---

## Vercel Info
- **Project:** macc-website-2
- **Team:** bretts-projects-3e254e58
- **Domain:** macc-website-2.vercel.app
- **Deploy Command:** `vercel --prod --yes`

---

## What I Need You To Do
[Describe your task here]

---

## Additional Context
- Dark theme with purple/orange gradient accents
- Glass-card styling (glassmorphism)
- Aurora background effect on homepage
- Mobile responsive with 44px touch targets
- Chamber serves Murray, Utah area businesses
- Video player ready for ribbon cutting video content

---

**End of restart prompt**
