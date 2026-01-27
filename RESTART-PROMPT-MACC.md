# MACC Website - Ultimate Restart Prompt
**Last Updated:** January 26, 2026 @ 5:30 PM MST

---

## CRITICAL: READ THIS FIRST

**DO NOT** make changes without understanding the current state. This project has 118 real businesses in the directory - DO NOT overwrite with sample data.

**ALWAYS** sync with GitHub before making changes:
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2
git fetch origin && git status
```

---

## PROJECT OVERVIEW

**Murray Area Chamber of Commerce (MACC) Website**
- Next.js site with glassmorphic purple/orange design
- Founded in 1948, serving Murray, Utah businesses for 75+ years
- 118 real member businesses in directory

---

## PROJECT LOCATIONS

### Primary Location (USE THIS ONE):
```
/Users/brettlechtenberg/Documents/agent-girl/macc-website-2
```

### Backup Location (also synced):
```
/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website
```

### Remote:
- **GitHub:** https://github.com/BrettLechtenbrerg/MACC-Website
- **Live URL:** https://macc-website-2.vercel.app
- **Vercel Project:** bretts-projects-3e254e58/macc-website-2

### WARNING:
Both local folders deploy to the SAME Vercel project and GitHub repo. Always run `git pull` before working to avoid conflicts.

---

## TECH STACK

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | 16.0.10 | App Router |
| Tailwind CSS | 3.4.18 | **USE v3, NOT v4** (v4 had spacing issues) |
| Framer Motion | Latest | Animations |
| Lucide React | Latest | Icons |
| Deployment | Vercel | **CLI workflow only** |

---

## CURRENT STATE (as of Jan 26, 2026)

### Directory Page (`/directory`)
- **118 real Murray businesses** with tiers (sponsor/ambassador/member)
- ALL business boxes show MACC logo (`/images/macc-logo.png`)
- Search, filter by category, filter by tier all working
- Grid and list view modes

### Navigation
- **Business Resources dropdown** → "Business Directory" → `/directory`
- **Membership dropdown** → "Member Directory" → `/directory`
- Both links go to the SAME good directory page

### Board Page (`/board`)
**Real Board Members:**
- Brett Lechtenberg - Chair of the Board; Education Chair (has photo)
- Kristen Latimer - Vice Chair; Marketing Chair
- Amber Miller - Treasurer
- Elvon Farrell - Chair of Bylaws; Parliamentarian
- Lenny Leslie - Advisor to the Board
- Dorie Olds - Secretary; Women in Business; Ribbon Cutting Committee
- 2 placeholder "John Doe" positions

**Staff:**
- Kathy White - President & CEO; Ambassador Chair
- Page - Executive Assistant
- 1 placeholder position

### YouTube Videos
- **Ribbon Cutting Page:** Video ID `F_VdvVmJcWw`
- **Good Things Utah Page:** Video ID `Dq7agUEBr6I`

### Forms (GHL Integration Ready)
All forms are built but need webhook URLs:
- Contact Form
- Membership Application
- Ribbon Cutting Request
- Newsletter Signup
- Event Registration
- Certificate of Origin

---

## KEY FILES

```
macc-website-2/
├── app/
│   ├── layout.tsx                # Root layout, metadata, favicon
│   ├── page.tsx                  # Homepage
│   ├── directory/page.tsx        # ⭐ Business Directory (118 businesses)
│   ├── board/page.tsx            # Board of Directors + Staff
│   ├── ambassadors/page.tsx      # Ambassador program
│   ├── ribbon-cutting/page.tsx   # Ribbon Cutting + YouTube video
│   ├── good-things-utah/page.tsx # Good Things Utah + YouTube video
│   ├── certificate-of-origin/page.tsx
│   ├── about/page.tsx            # Chamber history (founded 1948)
│   ├── resources/page.tsx        # Business resources + govt links
│   ├── contact/page.tsx          # Contact form
│   ├── join/page.tsx             # Membership form
│   ├── deals/page.tsx            # Member to Member Deals
│   ├── legalshield/page.tsx      # LegalShield partner page
│   ├── events/
│   │   ├── chamber/page.tsx
│   │   └── community/page.tsx
│   ├── news/
│   │   ├── chamber/page.tsx
│   │   └── community/page.tsx
│   ├── mycc/page.tsx             # Murray Youth Community Council
│   ├── login/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── icon.png                  # Favicon (MACC logo)
├── components/
│   ├── Navigation.tsx            # Main nav with dropdowns
│   ├── Footer.tsx                # "since 1948" tagline
│   ├── Hero.tsx                  # Homepage hero
│   ├── PageHeader.tsx            # Reusable page headers
│   └── ContactForm.tsx
├── public/images/
│   ├── macc-logo.png             # Chamber logo (used everywhere)
│   └── board/
│       └── brett-lechtenberg.png # Brett's photo
├── lib/
│   ├── ghl.ts                    # GHL submission utilities
│   └── ghl-config.ts             # Webhook URL configuration
├── app/globals.css               # Glassmorphic design system
└── tailwind.config.ts            # MACC brand colors
```

---

## CHAMBER FACTS

- **Founded:** 1948
- **Years of Service:** 75+
- **Member Businesses:** 500+ (118 in directory)
- **Annual Events:** 100+
- **Address:** 141 E. 5600 S., Suite 300, Murray, UT 84107
- **Phone:** 801-263-2632
- **Email:** info@themurraychamber.com

### Brand Colors
- **Purple (Primary):** #4B2E83
- **Orange (Accent):** #F27A21

---

## DEPLOYMENT WORKFLOW

### Step 1: Navigate to project
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2
```

### Step 2: Check status and sync
```bash
git fetch origin
git status
# If behind, run: git pull origin main
```

### Step 3: Make changes and build
```bash
npm run build
```

### Step 4: Commit and push to GitHub
```bash
git add -A
git commit -m "Your commit message"
git push origin main
```

### Step 5: Deploy to Vercel
```bash
vercel --prod --yes
```

### Step 6: Set alias (if needed)
```bash
vercel alias [deployment-url] macc-website-2.vercel.app
```

### Step 7: Sync backup folder (optional but recommended)
```bash
cd "/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website"
git fetch origin && git reset --hard origin/main
```

---

## IMPORTANT WARNINGS

1. **USE TAILWIND v3** - v4 had CSS variable spacing issues that broke the design
2. **VERCEL CLI ONLY** - Don't rely on GitHub auto-deploy, use `vercel --prod --yes`
3. **118 REAL BUSINESSES** - The directory has real data. Never overwrite with sample data.
4. **TWO FOLDERS** - Both folders deploy to same project. Keep them synced.
5. **ALWAYS GIT PULL FIRST** - Check `git status` before making changes

---

## WHAT NOT TO DO

- Don't use Tailwind v4
- Don't delete or replace directory businesses
- Don't deploy from the wrong folder without syncing
- Don't push without building first
- Don't modify the glassmorphic design (purple/orange theme is final)

---

## SAMPLE PROMPTS FOR CONTINUING

**To add GHL webhooks:**
> "Connect the contact form to GHL. Here's my webhook URL: [URL]"

**To update directory:**
> "Add a new business to the directory: [Business Name], [Category], [Address], [Phone]"

**To update board members:**
> "Update the board page - [Name] is no longer on the board, add [New Name] as [Title]"

**To fix issues:**
> "The [page name] isn't working correctly. Here's what I see: [description]"

**To add content:**
> "Add a new event to the chamber events page for [date]: [event details]"

---

## RECENT GIT HISTORY

```
ccef8d0 Update documentation with correct paths and session work
3d4d6db Fix Member Directory link to use good directory page
11404ef Add MACC logo to all business boxes in directory
75b3df4 Update documentation for v2.6.0
218fce5 v2.6.0: Restore Ribbon Cutting, Good Things Utah, Certificate of Origin pages
```

---

## QUICK VERIFICATION COMMANDS

Check businesses in directory:
```bash
grep -c "id:" /Users/brettlechtenberg/Documents/agent-girl/macc-website-2/app/directory/page.tsx
# Should return 119 (118 businesses + 1 for interface)
```

Check current deployment:
```bash
vercel inspect macc-website-2.vercel.app
```

Check both folders are synced:
```bash
cd /Users/brettlechtenberg/Documents/agent-girl/macc-website-2 && git log --oneline -1
cd "/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website" && git log --oneline -1
# Both should show same commit hash
```

---

**Ready to continue!**
