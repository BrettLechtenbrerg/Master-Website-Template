# 🔄 RESTART PROMPT - TSAI Website (Production Ready)

## 📍 Current Status: ✅ COMPLETE & DEPLOYED

The TSAI (Total Success AI) website is **live in production** with the v2.0 "3-Pronged Messaging Framework" fully implemented.

**Last Updated:** December 30, 2024
**Status:** Production-ready, all updates deployed

---

## 🌐 Live Production Site

**URL:** https://tsai-site.vercel.app
**Branch:** `main`
**Repository:** https://github.com/BrettLechtenbrerg/TSAI-Site

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.10 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | Latest | Type safety |
| Tailwind CSS | 4 | Styling |
| Framer Motion | Latest | Animations |
| React Icons | Latest | Icon library (FaFacebook, FaEnvelope, etc.) |
| Vercel | Latest | Hosting & deployment |
| Go High Level | - | Contact form integration |

---

## 🎯 Core Messaging Framework

### The 3-Pronged Approach (Utah AI Summit Values)

Every major copy block follows this structure:

1. **People/Individuals** → Empowerment, growth, confidence, capability
2. **Teams** → Collaboration, synergy, effectiveness, working smarter
3. **Business** → Success, impact, mission, serving society

### Key Philosophy
- AI promotes betterment of mankind at all levels
- **People first** - AI helps people focus on building better solutions for other people
- **AI is a companion, not a substitute** for humans
- "Enhancing humanity, not replacing it"

### Signature Phrases Used Throughout
- "Empower your people, strengthen your teams, elevate your business"
- "AI as companion, not replacement"
- "Keeping people at the center"

---

## 📂 Repository Structure

```
TSAI-Site/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page (Brett & Manny bios)
│   ├── services/page.tsx     # Services page (3 main services)
│   ├── portfolio/page.tsx    # Portfolio/case studies
│   ├── contact/page.tsx      # Contact form (GHL embedded)
│   ├── privacy/page.tsx      # Privacy Policy (Updated: Jan 1, 2026)
│   ├── terms/page.tsx        # Terms of Service (Updated: Jan 1, 2026 + GHL form)
│   └── layout.tsx            # Root layout with metadata
├── components/
│   ├── Header.tsx            # Navigation header
│   ├── Footer.tsx            # Footer (dynamic year, Facebook link)
│   ├── Testimonials.tsx      # Testimonials carousel
│   └── FAQ.tsx               # FAQ accordion
├── public/
│   └── images/
│       ├── TSAI-Header.png           # Hero background
│       ├── TSAI-Home-page-image-Nano-1.png  # Why Choose Us image
│       ├── AI-Consulting-Nano-1.png  # Consulting service image
│       ├── AI-Implementation-Nano-1.png  # Implementation service image
│       ├── AI-Training-Nano-1.png    # Training service image
│       ├── ai-consulting-bg.png      # Service card background
│       ├── ai-implementation-bg.png  # Service card background
│       └── ai-training-bg.png        # Service card background
├── RESTART-PROMPT.md         # This file
└── package.json
```

---

## 📄 Key Pages Overview

### Home Page (`/app/page.tsx`)
- **Hero:** "Empower Your People, Elevate Your Teams, Transform Your Business"
- **Services Section:** 3 cards with background images (Consulting, Implementation, Training)
- **Why Choose Us:** Featured image + benefits checklist
- **Testimonials:** Client testimonials carousel
- **FAQ:** Common questions accordion
- **CTA:** "Ready to Empower Your People, Teams & Business?"

### Services Page (`/app/services/page.tsx`)
- **3 Main Services** with unique images each:
  - AI Consulting (index 0) → `AI-Consulting-Nano-1.png`
  - AI Implementation (index 1) → `AI-Implementation-Nano-1.png`
  - AI Training (index 2) → `AI-Training-Nano-1.png`
- **Additional Services:** Performance Optimization, Innovation Workshops, Change Management, Technical Audits

### Portfolio Page (`/app/portfolio/page.tsx`)
- **Custom Solutions heading:** "Here is a Sample of Custom Solutions / We Have Built For Clients" (two lines)
- **6 Custom Solutions** with logos and descriptions
- **Sample Videos** section with YouTube embeds
- **Letters of Recommendation** with PDF viewers
- **AI Solutions** section
- **Additional Services** section

### About Page (`/app/about/page.tsx`)
- Company story (3 paragraphs)
- Brett Lechtenberg bio
- Manny Torres bio

### Contact Page (`/app/contact/page.tsx`)
- 3 consultation types with descriptions (15-min, 30-min, 60-min)
- **Go High Level embedded form** (Form ID: `9XweWVfbhcfTSXcEVgRK`)
- Submissions go directly to GHL subaccount

### Legal Pages
- **Privacy Policy** (`/app/privacy/page.tsx`) - Last Updated: January 1, 2026
- **Terms of Service** (`/app/terms/page.tsx`) - Last Updated: January 1, 2026 + GHL contact form embedded

---

## 📱 Go High Level Integration

Contact forms on the site are connected to Go High Level for lead management:

```typescript
// GHL Form Embed (used on Contact and Terms pages)
<iframe
  src="https://api.leadconnectorhq.com/widget/form/9XweWVfbhcfTSXcEVgRK"
  style={{ width: '100%', height: '600px', border: 'none', borderRadius: '8px' }}
  data-form-id="9XweWVfbhcfTSXcEVgRK"
  title="TSAI Website Contact Form"
/>
<Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
```

**Form Locations:**
- `/contact` - Main contact page
- `/terms` - Section 12 (Contact Information)

**Button Colors for GHL Form Styling:**
- Background: `#0A1F44` (Navy)
- Hover: `#1E3A8A` (Navy Light)
- Text: `#FFFFFF` (White)

---

## 🖼 Image Conditional Rendering Pattern

In `/app/services/page.tsx`, images are conditionally rendered based on array index:

```typescript
<Image
  src={index === 0 ? "/images/AI-Consulting-Nano-1.png" : index === 1 ? "/images/AI-Implementation-Nano-1.png" : "/images/AI-Training-Nano-1.png"}
  alt={index === 0 ? "AI Consulting Services" : index === 1 ? "AI Implementation Services" : "AI Training Services"}
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

---

## 📅 Footer Details

```typescript
// In /components/Footer.tsx
const currentYear = new Date().getFullYear();
// Dynamic year: <p>&copy; {currentYear} Total Success AI. All rights reserved.</p>
```

**Social Links:**
- Facebook: https://www.facebook.com/totalsuccessbusinesssolutions (FaFacebook icon)
- ~~Twitter~~ (removed)
- ~~LinkedIn~~ (removed)

---

## 🚀 Common Commands

```bash
# Navigate to project
cd /Users/brettlechtenberg/Documents/agent-girl/tsai-upgrades/TSAI-Site

# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production

# Git
git status           # Check current state
git branch           # Check current branch
git log --oneline    # View commit history

# Deploy to Vercel
vercel --prod --yes  # Deploy to production

# View live site
open https://tsai-site.vercel.app
```

---

## 📋 Recent Commits (December 2024)

| Commit | Description |
|--------|-------------|
| `4841eda` | Update footer social links - replace Twitter/LinkedIn with Facebook |
| `e3da821` | Add GHL contact form to Terms page |
| `42993b4` | Remove personal website links from Terms page contact section |
| `9be86cf` | Split Custom Solutions heading into two lines |
| `ac7d3c9` | Update portfolio page heading for Custom Solutions section |
| `3ccea15` | Replace contact form with Go High Level embed |
| `b44c172` | Update RESTART-PROMPT.md with current project state |
| `c4bb885` | Update year references from 2025 to 2026 for new year |
| `a8f6c6b` | Merge v2.0 3-pronged copy into main |

---

## ⚠️ Build Warnings (Non-Critical)

The build shows metadata viewport warnings. These are non-critical Next.js 16 deprecation notices:

```
⚠ Unsupported metadata viewport is configured in metadata export
⚠ Unsupported metadata themeColor is configured in metadata export
```

**Fix (optional):** Move `viewport` and `themeColor` from `metadata` export to separate `viewport` export in layout.tsx.

---

## 🔗 External Links

| Resource | URL |
|----------|-----|
| Production Site | https://tsai-site.vercel.app |
| GitHub Repository | https://github.com/BrettLechtenbrerg/TSAI-Site |
| Vercel Dashboard | https://vercel.com/dashboard |
| Book Consultation | https://www.speaktobrett.com |
| Facebook Page | https://www.facebook.com/totalsuccessbusinesssolutions |
| Brett's Website | https://brettlechtenberg.com |
| Manny's Website | https://mannytorresai.com |

---

## 🎬 What To Do When You Return

### If Making Content Changes:
1. Navigate to project: `cd /Users/brettlechtenberg/Documents/agent-girl/tsai-upgrades/TSAI-Site`
2. Check current state: `git status && git branch`
3. Make your changes to the appropriate files
4. Test locally: `npm run dev`
5. Commit: `git add . && git commit -m "Your message"`
6. Push: `git push origin main`
7. Deploy: `vercel --prod --yes`

### If Adding New Images:
1. Copy images to `/public/images/`
2. Use Next.js `Image` component with proper imports
3. Reference as `/images/filename.png` in src attribute

### If Updating Legal Pages:
- Privacy Policy: `/app/privacy/page.tsx`
- Terms of Service: `/app/terms/page.tsx`
- Update the "Last Updated" date in the hero section

### If Updating GHL Form:
- Get new embed code from GHL
- Update iframe `src` and `data-form-id` attributes
- Form appears on: `/contact` and `/terms`

---

## 💡 Tips

- **Footer year is automatic** - no need to update annually
- **All CTA buttons** link to https://www.speaktobrett.com
- **Contact forms** go to Go High Level subaccount
- **Images are optimized** via Next.js Image component
- **Animations** use Framer Motion with `whileInView` for scroll-triggered effects
- **Facebook** is the only social link in footer

---

## 🔧 If Something Goes Wrong

```bash
# Check what branch you're on
git branch

# See recent commits
git log --oneline -10

# Restore a file from last commit
git checkout HEAD -- path/to/file.tsx

# Undo last commit (keep changes staged)
git reset --soft HEAD~1

# Force sync with remote (last resort - loses local changes)
git fetch origin
git reset --hard origin/main
```

---

## ✅ Current State Checklist

- [x] v2.0 3-pronged messaging merged to main
- [x] Custom images added to Home page (Why Choose Us section)
- [x] Custom images added to Services page (3 unique per service)
- [x] Year references updated to 2026
- [x] Privacy Policy updated (January 1, 2026)
- [x] Terms of Service updated (January 1, 2026)
- [x] Footer uses dynamic year (auto-updates)
- [x] Go High Level form integrated on Contact page
- [x] Go High Level form integrated on Terms page
- [x] Portfolio page heading split into two lines
- [x] Footer social links: Facebook only (Twitter/LinkedIn removed)
- [x] All changes committed and pushed
- [x] Production deployment live

---

## 🎯 Ready to Go!

Everything is deployed and live. The TSAI website is production-ready with:
- 3-pronged "People • Teams • Business" messaging framework
- Go High Level contact form integration
- Facebook social link
- Updated year references for 2026

Just tell me what you'd like to work on next! 🚀

---

**Created By:** Agent Girl (Claude)
**Last Session:** December 30, 2024
**Working Directory:** `/Users/brettlechtenberg/Documents/agent-girl/tsai-upgrades/TSAI-Site`
