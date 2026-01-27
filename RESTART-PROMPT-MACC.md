# MACC Website - Restart Prompt
**Last Updated:** January 26, 2026

---

## PROJECT OVERVIEW

I'm working on the **Murray Area Chamber of Commerce (MACC) website** - a Next.js site with a glassmorphic purple/orange design. Founded in 1948, serving Murray, Utah businesses for 75+ years.

---

## PROJECT LOCATIONS

**Primary (use this one):**
```
/Users/brettlechtenberg/Documents/agent-girl/macc-website-2
```

**Backup (also synced to same Vercel project):**
```
/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website
```

**GitHub:** https://github.com/BrettLechtenbrerg/MACC-Website
**Live URL:** https://macc-website-2.vercel.app
**Vercel Project:** bretts-projects-3e254e58/macc-website-2

> ⚠️ Both folders deploy to the SAME Vercel project. Keep them in sync with `git pull`.

---

## TECH STACK

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.0.10 | App Router |
| Tailwind CSS | 3.4.18 | **v3, NOT v4** (v4 had spacing issues) |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| Deployment | Vercel | CLI workflow only |

---

## COMPLETED WORK (January 2026)

### Latest Session (Jan 26, 2026 - Evening)
- [x] MACC logo added to ALL 118 business boxes in directory
- [x] Fixed navigation: Both "Business Directory" and "Member Directory" now link to `/directory`
- [x] Directory page shows 118 real Murray businesses with tiers (sponsor/ambassador/member)
- [x] Board page has real board members (Brett, Kristen, Amber, Elvon, Lenny, Dorie)
- [x] Staff page has Kathy White (CEO) and Page (Executive Assistant)
- [x] Ribbon Cutting page has YouTube video (ID: F_VdvVmJcWw)
- [x] Good Things Utah page has YouTube video (ID: Dq7agUEBr6I)

### Session: macc-website-4 (Earlier)
- [x] Resources page updated with content from old Murray Chamber website
- [x] Murray City, Salt Lake County, State, Federal resource links added
- [x] MACC logo added as favicon for all pages
- [x] LegalShield links to https://shieldbenefits.com/murraychamber/overview
- [x] Chamber Services cards have orange hover effects (matching govt resources)
- [x] Founded year updated from 1985 to 1948 throughout site
- [x] "40+ years" changed to "75+ years" across all pages
- [x] Mission statement updated with official Chamber language
- [x] Timeline milestones on About page revised with accurate history
- [x] Footer tagline updated to "since 1948"

### Previous Sessions
- Fresh build with Tailwind v3 (rebuilt from TSAI foundation)
- 20+ pages ported (Homepage, About, Contact, Events, Members, etc.)
- Navigation working with dropdowns and mobile menu
- Complete glassmorphic design system in globals.css
- GHL integration utilities created (awaiting webhook URLs)

---

## KEY INFORMATION

### Chamber Facts
- **Founded:** 1948
- **Years of Service:** 75+
- **Member Businesses:** 500+
- **Annual Events:** 100+
- **Address:** 141 E. 5600 S., Suite 300, Murray, UT 84107
- **Phone:** 801-263-2632

### Brand Colors
- **Purple (Primary):** #4B2E83
- **Orange (Accent):** #F27A21

---

## PENDING: GO HIGH LEVEL INTEGRATION

GHL utilities are ready in `lib/ghl.ts` and `lib/ghl-config.ts`. Need actual webhook URLs:

| Form | Status |
|------|--------|
| Contact Form | Ready (needs webhook URL) |
| Membership Application | Ready (needs webhook URL) |
| Ribbon Cutting Request | Ready (needs webhook URL) |
| Newsletter Signup | Ready (needs webhook URL) |
| Event Registration | Ready (needs webhook URL) |
| Certificate of Origin | Ready (needs webhook URL) |

---

## KEY FILES

```
macc-website-2/
├── app/
│   ├── layout.tsx              # Root layout, metadata, favicon
│   ├── page.tsx                # Homepage
│   ├── directory/page.tsx      # ⭐ Business Directory (118 businesses)
│   ├── board/page.tsx          # Board of Directors + Staff
│   ├── ribbon-cutting/page.tsx # Ribbon Cutting + YouTube video
│   ├── good-things-utah/page.tsx # Good Things Utah + YouTube video
│   ├── about/page.tsx          # Chamber history, mission (1948)
│   ├── resources/page.tsx      # Business resources + govt links
│   ├── contact/page.tsx        # Contact form (GHL ready)
│   ├── join/page.tsx           # Membership form (GHL ready)
│   ├── icon.png                # Favicon (MACC logo)
│   └── [15+ other pages]
├── components/
│   ├── Navigation.tsx          # Main nav + dropdowns
│   ├── Hero.tsx                # Homepage stats (75+ years)
│   ├── Footer.tsx              # "since 1948" tagline
│   └── ContactForm.tsx         # Contact form component
├── public/images/
│   ├── macc-logo.png           # Chamber logo (used in directory)
│   └── board/                  # Board member photos
├── lib/
│   ├── ghl.ts                  # GHL submission utilities
│   └── ghl-config.ts           # Webhook URL configuration
└── tailwind.config.ts          # MACC brand colors
```

---

## DEPLOYMENT

```bash
# Navigate to project (use this path)
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2

# Build
npm run build

# Commit and push
git add -A && git commit -m "Description" && git push origin main

# Deploy to production
vercel --prod --yes

# Update alias if needed
vercel alias [deployment-url] macc-website-2.vercel.app
```

---

## IMPORTANT NOTES

1. **Use Tailwind v3** - v4 had CSS variable spacing issues
2. **Vercel CLI Only** - Don't rely on GitHub auto-deploy
3. **Primary Project Location** - `/Users/brettlechtenberg/Documents/agent-girl/macc-website-2`
4. **Keep Design** - Purple/orange glassmorphic theme is final
5. **Directory Page** - Has 118 real businesses at `/directory` (both nav links point here)
6. **YouTube Videos** - Ribbon Cutting: `F_VdvVmJcWw`, Good Things Utah: `Dq7agUEBr6I`

---

## SAMPLE PROMPTS TO CONTINUE

**To add GHL webhooks:**
> "Connect the contact form to GHL. Here's my webhook URL: [URL]"

**To update content:**
> "Update the events page with the January 2026 Chamber calendar"

**To fix issues:**
> "The join page form isn't submitting correctly"

---

**Ready to continue!** 🚀
