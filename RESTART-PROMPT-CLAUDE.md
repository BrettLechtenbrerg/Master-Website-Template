# MACC Website - Ultimate Restart Prompt

Copy and paste everything below this line to get Claude back up to speed:

---

## Project: Murray Area Chamber of Commerce Website

**Live URL:** https://macc-website-2.vercel.app/
**GitHub Repo:** https://github.com/BrettLechtenbrerg/MACC-Website
**Vercel Project:** https://vercel.com/bretts-projects-3e254e58/macc-website-2

### Local Project Location
```
/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website/
```

**IMPORTANT:** Always work in the path above.

---

## Tech Stack
- **Framework:** Next.js 16.0.10 with App Router
- **Styling:** Tailwind CSS 3.4.18
- **Language:** TypeScript
- **Deployment:** Vercel CLI (`vercel --prod --yes`)
- **Forms:** Go High Level (GHL) integration
- **UI Components:** Framer Motion, Lucide React icons

---

## Project Structure
```
MACC-Website/
├── app/                    # Next.js App Router pages (28 pages total)
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── board/             # Board of Directors & Staff
│   ├── contact/           # Contact form (GHL integration)
│   ├── directory/         # Business directory
│   ├── events/            # Chamber & Community events
│   ├── join/              # Membership signup
│   ├── login/             # Member portal access
│   ├── privacy/           # Privacy Policy (Jan 1, 2026)
│   ├── terms/             # Terms of Service (Jan 1, 2026)
│   └── ...
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main nav with Join Now button
│   ├── PageHeader.tsx     # Page headers with breadcrumbs
│   ├── Footer.tsx         # Links to /privacy and /terms
│   └── animations/        # StaggerChildren, FadeIn, etc.
├── lib/                   # Utility functions
│   ├── ghl-config.ts      # Go High Level configuration
│   └── utils.ts           # Helper functions
├── public/
│   └── images/            # All website images
│       ├── board/         # Board member photos
│       ├── directory/     # Business logos
│       └── ...
└── docs/                  # Documentation
```

---

## Common Commands
```bash
# Navigate to project
cd "/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website"

# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod --yes

# Set alias after deployment
vercel alias [deployment-url] macc-website-2.vercel.app

# Check git status
git status

# Push changes to GitHub
git add -A && git commit -m "Your message" && git push
```

---

## Current Status (v2.6.0 - January 26, 2026)

### What's Working:
- Full website deployed and live at https://macc-website-2.vercel.app/
- All 28 pages rendering correctly
- Contact form with GHL webhook integration
- Clickable contact info cards (Email, Phone, Maps)
- **Ribbon Cutting page** - YouTube video, benefits, gallery, request form
- **Good Things Utah page** - YouTube video, how it works, recent segments
- **Certificate of Origin page** - Image, benefits, pricing, request form
- Member directory with tier system
- Board of Directors page with real member info
- Privacy Policy and Terms of Service pages
- Mobile optimizations in place

### Recent Changes (v2.6.0):
1. **Ribbon Cutting page** - Restored with YouTube video (F_VdvVmJcWw), gallery, request form
2. **Good Things Utah page** - Restored with YouTube video (Dq7agUEBr6I), how it works, segments
3. **Certificate of Origin page** - Restored with image, pricing ($25/$50), request form
4. **YouTube thumbnails** - Fixed to use hqdefault.jpg for reliability

### Pages Status:
| Page | Status |
|------|--------|
| `/ribbon-cutting` | ✅ Full page with YouTube video & request form |
| `/good-things-utah` | ✅ Full page with YouTube video & CTA |
| `/certificate-of-origin` | ✅ Full page with image & request form |
| `/privacy` | ✅ Chamber-branded, Jan 1 2026 date |
| `/terms` | ✅ Chamber-branded, Jan 1 2026 date |
| `/contact` | ✅ GHL integration, clickable info cards |
| `/directory` | ✅ All images display correctly |
| `/board` | ✅ Real board members with photos |
| `/join` | ✅ Actual membership tiers |
| `/login` | ⏳ GHL Community ready (Coming Soon state) |

---

## Key Files
- `components/Navigation.tsx` - Join Now button linked to /join
- `components/Footer.tsx` - Links to /privacy and /terms
- `app/contact/page.tsx` - GHL form integration, clickable cards
- `app/privacy/page.tsx` - Privacy Policy (Jan 1, 2026)
- `app/terms/page.tsx` - Terms of Service (Jan 1, 2026)
- `lib/ghl-config.ts` - GHL webhook configuration

---

## Git Info
- **Branch:** main
- **Remote:** origin -> https://github.com/BrettLechtenbrerg/MACC-Website.git

---

## Vercel Info
- **Project:** macc-website-2
- **Team:** bretts-projects-3e254e58
- **Domain:** macc-website-2.vercel.app
- **Deploy Command:** `vercel --prod --yes`
- **Alias Command:** `vercel alias [url] macc-website-2.vercel.app`

---

## Brand Guidelines
- **Purple (Primary):** #4B2E83 / purple-600
- **Orange (Accent):** #F27A21 / orange-500
- **Background:** Dark with glassmorphism effects
- **Cards:** glass-card, glass-strong classes
- **Icons:** Lucide React
- **Animations:** Framer Motion

---

## GHL Configuration
Contact form submissions go to Go High Level CRM:
- Webhook URL configured in `lib/ghl-config.ts`
- Demo mode when webhook not configured
- Tags: `website-contact`, `inquiry-{type}`

---

## What I Need You To Do
[Describe your task here]

---

## Chamber Contact Info
- **Address:** 141 E 5600 S #300, Murray, UT 84107 (Independence Square)
- **Phone:** (801) 263-2632
- **Email:** info@themurraychamber.com
- **Website:** themurraychamber.com

---

**End of restart prompt**
