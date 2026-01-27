# MACC Website - Restart Prompt
**Last Updated:** January 27, 2026
**Commit:** `22d7cf6`
**Live Site:** https://macc-website-2.vercel.app/

---

## Quick Resume Prompt

Copy and paste this to resume work:

```
I'm continuing work on the Murray Area Chamber of Commerce (MACC) website.

**Project Location:** `/Users/brettlechtenberg/Documents/agent-girl/macc-website-2`
**Live Site:** https://macc-website-2.vercel.app/
**GitHub:** https://github.com/BrettLechtenbrerg/MACC-Website.git
**Tech Stack:** Next.js 16, Tailwind CSS, Framer Motion, TypeScript

**Current State (Jan 27, 2026):**
- Homepage Events section matches Chamber Events hub page
- Member Directory links to /directory
- Professional Development uses correct badge text
- Youth Internship Program page is live
- All trainer cards (Brett & Manny) are in place
- NEW: Community dropdown added with 3 pages (Friday Connections, Business Spotlight, Love Local)

**Key Files:**
- `/components/Navigation.tsx` - Main nav with Community dropdown
- `/components/Events.tsx` - Homepage events section (4 categories)
- `/app/community/friday-connections/page.tsx` - Weekly networking event
- `/app/community/business-spotlight/page.tsx` - Featured business page
- `/app/community/love-local/page.tsx` - Community celebration event
- `/app/events/professional-development/page.tsx` - Professional Dev with trainer cards

**Deploy Commands:**
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2
npm run build && vercel --prod --yes
# Then: vercel alias [deployment-url] macc-website-2.vercel.app
```

What would you like me to work on?
```

---

## Project Overview

### About
Murray Area Chamber of Commerce website - a modern, glassmorphic design featuring:
- Event management (Weekly, Monthly, Annual, Professional Development)
- Community pages (Friday Connections, Business Spotlight, Love Local)
- Member directory with 500+ businesses
- Youth Internship Program (Murray School District partnership)
- Ribbon cutting requests
- Business resources and sponsorships

### Tech Stack
| Component | Technology |
|-----------|------------|
| Framework | Next.js 16.0.10 with App Router |
| Styling | Tailwind CSS v3.4.18 |
| Animations | Framer Motion |
| Language | TypeScript |
| Hosting | Vercel |
| Repo | GitHub |

### Design System
- **Colors:** Purple (#7c3aed) and Orange (#f97316) gradients
- **Style:** Glassmorphic cards with `glass-card` class
- **Buttons:** `btn-glow`, `btn-primary`, `btn-secondary`
- **Inputs:** `input-glass`, `select-glass`

---

## Site Structure

### Pages (33 total)
```
/                           - Homepage
/about                      - About the Chamber
/board                      - Board of Directors
/join                       - Membership signup
/directory                  - Member Directory
/contact                    - Contact form
/ambassadors                - Ambassador program
/sponsors                   - Sponsorship info
/ribbon-cutting             - Request ribbon cutting
/resources                  - Business resources
/deals                      - Member deals
/certificate-of-origin      - Export certificates
/good-things-utah           - Media feature

/events/chamber             - Chamber Events hub (4 categories)
/events/weekly              - Weekly - The Referral Community
/events/monthly             - Monthly - Women in Business
/events/annual              - Annual signature events
/events/professional-development - Training with Brett & Manny
/events/community           - Community calendar

/community/friday-connections  - Friday networking event (NEW)
/community/business-spotlight  - Featured local business (NEW)
/community/love-local          - Community celebration (NEW)

/youth-internship           - Youth Internship Program
/mycc                       - MYCC redirect/placeholder

/news/chamber               - Chamber news
/news/community             - Community news

/legalshield                - LegalShield info
/portfolio                  - Project portfolio
/services                   - Services offered
/members                    - Legacy members page
/login                      - Login page
/privacy                    - Privacy policy
/terms                      - Terms of service
```

### Key Components
```
/components/
├── Hero.tsx                - Homepage hero section
├── Events.tsx              - Homepage events (4 categories)
├── Features.tsx            - Homepage feature cards
├── Testimonials.tsx        - Member testimonials
├── ContactForm.tsx         - GHL-integrated contact form
├── Navigation.tsx          - Main navigation (with Community dropdown)
├── Footer.tsx              - Site footer
├── PageHeader.tsx          - Reusable page headers
└── animations/
    ├── FadeIn.tsx
    └── StaggerChildren.tsx
```

---

## Navigation Structure

```
Business Resources → Directory, Resources, Ribbon Cutting, Certificate, Good Things Utah, LegalShield
Events → Chamber Events, Weekly, Monthly, Annual, Community, Professional Development
Membership → Directory, Join, Sponsors, Deals
News → Chamber News, Community News
Community → Friday Connections, Business Spotlight, Love Local (NEW)
About Us → About, Board, Ambassadors, Youth Internship
Contact (direct link)
```

---

## Community Pages (NEW)

### Friday Connections
- **URL:** `/community/friday-connections`
- **Purpose:** Weekly community networking event
- **Placeholders:** Event photo, Google Maps, address, schedule, description

### Business Spotlight
- **URL:** `/community/business-spotlight`
- **Purpose:** Feature a local Murray business
- **Placeholders:** Storefront photo, owner photo, map, contact info, hours, bio

### Love Local
- **URL:** `/community/love-local`
- **Purpose:** Community celebration event
- **Placeholders:** Event photo, map, venue, date/time, vendor info

---

## Recent Work Completed

### Session: January 27, 2026
1. ✅ Updated PageHeader description on Professional Development page
2. ✅ Changed AI Implementation Lab heading to "Learn More About..."
3. ✅ Removed placeholder training sections (kept trainer cards)
4. ✅ Rewrote homepage Events.tsx to show 4 event categories
5. ✅ Fixed Member Directory link (/members → /directory)
6. ✅ Changed Professional Development badge from "Master's Edge Training"
7. ✅ Added Community dropdown to navigation
8. ✅ Created Friday Connections page
9. ✅ Created Business Spotlight page
10. ✅ Created Love Local page
11. ✅ Committed and pushed to GitHub
12. ✅ Deployed to Vercel production

---

## Event Categories

| ID | Title | Subtitle | Schedule |
|----|-------|----------|----------|
| weekly | Weekly Events | The Referral Community | Every Thursday 11:30 AM |
| monthly | Monthly Events | Women in Business | 3rd Wednesday |
| annual | Annual Events | Signature Celebrations | Throughout Year |
| professional-development | Professional Development | Professional Development | Bi-Monthly |

---

## Trainers (Professional Development)

### Brett Lechtenberg
- Role: Co-Founder & Training Facilitator
- Title: Chair of the Board, Education Chair
- Website: brettlechtenberg.com
- Image: `/images/brett.png`

### Manny Torres
- Role: Co-Founder & AI Implementation Specialist
- Title: Technical AI Expert
- Website: totalsuccessai.com/about
- Image: `/images/manny.png`

---

## Deployment Workflow

```bash
# 1. Navigate to project
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2

# 2. Build and verify
npm run build

# 3. Deploy to Vercel
vercel --prod --yes

# 4. Set alias (use URL from step 3)
vercel alias [deployment-url] macc-website-2.vercel.app

# 5. Git commit and push
git add -A
git commit -m "Your commit message"
git push origin main
```

---

## Useful Commands

```bash
# Check status
git status
git log -3 --oneline

# Search for content
grep -r "search term" --include="*.tsx" .

# Find files
find . -name "*.tsx" | head -20

# Check build
npm run build 2>&1 | tail -30
```

---

## Common Issues & Solutions

### Build Fails
- Check for TypeScript errors: `npm run build`
- Missing imports: Check lucide-react icons exist
- Image paths: Ensure images exist in `/public/images/`

### Vercel Deployment
- Always run `npm run build` locally first
- Set alias after each deploy for consistent URL
- Check Vercel dashboard for build logs

### Git Issues
- Pull before pushing: `git pull origin main`
- Check remote: `git remote -v`
