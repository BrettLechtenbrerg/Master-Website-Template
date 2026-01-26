# Murray Area Chamber of Commerce Website

## Project Overview
Official website for the **Murray Area Chamber of Commerce** - serving Murray, Utah businesses since 1948.

- **Live Site**: https://macc-website-2.vercel.app
- **Vercel Project**: `bretts-projects-3e254e58/macc-website-2`
- **GitHub Repo**: `BrettLechtenbrerg/MACC-Website`

## Tech Stack
- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.18 (NOT v4 - had spacing issues)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (via CLI)

## Brand Colors
```
Purple (Primary):  #4B2E83
Purple Light:      #7A59B5
Orange (Accent):   #F27A21
Orange Light:      #F9A45A
Charcoal (BG):     #1C1C1C
```

## Project Structure
```
MACC-Website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout (metadata, fonts, icons)
│   ├── globals.css           # Global styles + glassmorphic design
│   ├── icon.png              # Favicon (MACC logo)
│   ├── apple-icon.png        # Apple touch icon
│   ├── about/                # About the Chamber
│   ├── board/                # Board of Directors
│   ├── ambassadors/          # Ambassador program
│   ├── mycc/                 # Murray Youth Community Council
│   ├── contact/              # Contact form
│   ├── join/                 # Membership signup
│   ├── members/              # Member directory
│   ├── directory/            # Business directory
│   ├── deals/                # Member-to-member deals
│   ├── resources/            # Small business resources (govt links)
│   ├── ribbon-cutting/       # Ribbon cutting requests
│   ├── certificate-of-origin/ # Certificate services
│   ├── good-things-utah/     # GTU partnership
│   ├── legalshield/          # LegalShield partner page
│   ├── events/
│   │   ├── chamber/          # Chamber events
│   │   └── community/        # Community calendar
│   ├── news/
│   │   ├── chamber/          # Chamber news
│   │   └── community/        # Community news
│   ├── login/                # Member login
│   ├── privacy/              # Privacy policy
│   └── terms/                # Terms of service
├── components/
│   ├── Navigation.tsx        # Main nav with dropdowns
│   ├── Hero.tsx              # Homepage hero
│   ├── Features.tsx          # Service cards
│   ├── Events.tsx            # Events section
│   ├── Testimonials.tsx      # Member testimonials
│   ├── ContactForm.tsx       # Contact form (GHL integration)
│   ├── Footer.tsx            # Site footer
│   ├── PageHeader.tsx        # Page headers
│   └── animations/           # FadeIn, ScaleIn, StaggerChildren
├── lib/
│   ├── ghl.ts                # Go High Level utilities
│   └── ghl-config.ts         # GHL webhook configuration
├── public/
│   └── images/               # Static images
│       ├── macc-logo.png     # Official MACC logo
│       ├── hero/             # Hero backgrounds
│       ├── features/         # Feature card images
│       ├── events/           # Event images
│       ├── testimonials/     # Member photos
│       └── team/             # Staff/board photos
└── [config files]
```

## Deployment Workflow

**IMPORTANT**: Always use Vercel CLI - do NOT rely on GitHub auto-deploy.

```bash
# Navigate to project
cd "/Users/brettlechtenberg/Desktop/Claude Projects/MACC-Website"

# Build and test locally
npm run build

# Commit and push to GitHub
git add -A && git commit -m "Description" && git push origin main

# Deploy to Vercel production
vercel --prod --yes

# Update alias if needed
vercel alias [deployment-url] macc-website-2.vercel.app
```

## Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Metadata, fonts, favicon, root layout |
| `app/resources/page.tsx` | Business resources (govt links + LegalShield) |
| `app/about/page.tsx` | Chamber history, mission, timeline |
| `components/Navigation.tsx` | Nav menu + MACC logo |
| `components/Hero.tsx` | Homepage stats (75+ years, 500+ members) |
| `components/Footer.tsx` | Contact info, "since 1948" tagline |
| `lib/ghl-config.ts` | GHL webhook URLs (need to be configured) |
| `tailwind.config.ts` | MACC brand colors |

## Chamber Facts
- **Founded**: 1948
- **Years of Service**: 75+
- **Member Businesses**: 500+
- **Annual Events**: 100+
- **Address**: 141 E. 5600 S., Suite 300, Murray, UT 84107
- **Phone**: 801-263-2632

## Recent Work (January 2026)

### Session: macc-website-4
- Updated resources page with content from old Murray Chamber website
- Added Murray City, Salt Lake County, State of Utah, Federal resource links
- Added MACC logo as favicon for all pages
- Updated LegalShield link to external shieldbenefits.com URL
- Standardized hover effects on Chamber Services cards
- Updated founding year from 1985 to 1948 throughout site
- Changed "40+ years" to "75+ years" across all pages
- Updated mission statement with official Chamber language
- Revised timeline milestones on About page

## Go High Level Integration

GHL webhooks are configured in `lib/ghl-config.ts` but need actual webhook URLs:

| Form | Status |
|------|--------|
| Contact Form | Ready (needs webhook URL) |
| Membership Application | Ready (needs webhook URL) |
| Ribbon Cutting Request | Ready (needs webhook URL) |
| Newsletter Signup | Ready (needs webhook URL) |
| Event Registration | Ready (needs webhook URL) |
| Certificate of Origin | Ready (needs webhook URL) |

## Design System

**CSS Classes** (in globals.css):
- `.glass` / `.glass-strong` - Frosted glass backgrounds
- `.glass-card` - Hoverable glass cards with borders
- `.btn-glow` - Orange glowing CTA button
- `.btn-secondary` - Secondary outline button
- `.nav-glass` - Navigation background when scrolled
- `.dropdown-menu` / `.dropdown-item` - Nav dropdowns
- `.aurora-bg` - Animated background gradient

## Notes
- **Tailwind v3** - Do NOT upgrade to v4 (had CSS variable spacing issues)
- **Vercel CLI** - Always deploy via CLI, not GitHub auto-deploy
- **Mobile-first** - Responsive design with hamburger menu on mobile
- **Framer Motion** - Smooth animations throughout
