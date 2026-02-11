# Murray Area Chamber of Commerce Website

A modern, responsive website for the **Murray Area Chamber of Commerce** - supporting and promoting businesses in Murray, Utah.

🌐 **Live Site**: [macc-website-2.vercel.app](https://macc-website-2.vercel.app)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to production
vercel --prod --yes
vercel alias [deployment-url] macc-website-2.vercel.app
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework with App Router |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS 3.4 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Vercel | Hosting & deployment |
| Go High Level | CRM & Form integration |

---

## Pages (28 Total)

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, services overview, member spotlights |
| `/about` | About the Chamber, mission, history |
| `/board` | Board of Directors & Staff |
| `/ambassadors` | Ambassador program |
| `/members` | Membership benefits overview |
| `/join` | Membership tiers & signup |
| `/login` | Member portal access |
| `/directory` | Business directory with search |
| `/events/chamber` | Chamber events calendar |
| `/events/community` | Community events calendar |
| `/news/chamber` | Chamber news & announcements |
| `/news/community` | Community news |
| `/resources` | Business resources & tools |
| `/legalshield` | LegalShield partner benefit |
| `/deals` | Member-to-member deals |
| `/ribbon-cutting` | Ribbon cutting request |
| `/certificate-of-origin` | Certificate service |
| `/good-things-utah` | Good Things Utah features |
| `/mycc` | Murray Community Calendar |
| `/services` | Chamber services |
| `/portfolio` | Sponsorship portfolio |
| `/contact` | Contact form & info |
| `/privacy` | Privacy Policy (Jan 1, 2026) |
| `/terms` | Terms of Service (Jan 1, 2026) |

---

## Brand Colors

```
Purple (Primary):  #4B2E83 / purple-600
Orange (Accent):   #F27A21 / orange-500
Background:        Dark with glassmorphism effects
Text:              White with opacity variations
```

---

## Project Structure

```
MACC-Website/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About the Chamber
│   ├── board/             # Board & Staff
│   ├── contact/           # Contact form (GHL integration)
│   ├── directory/         # Business directory
│   ├── events/            # Chamber & Community events
│   ├── join/              # Membership signup
│   ├── login/             # Member portal
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   └── ...
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation
│   ├── PageHeader.tsx     # Page headers with breadcrumbs
│   ├── Footer.tsx         # Site footer
│   └── animations/        # Animation components
├── lib/                   # Utilities
│   ├── ghl-config.ts      # Go High Level configuration
│   └── utils.ts           # Helper functions
├── public/
│   └── images/            # Static assets
│       ├── board/         # Board member photos
│       ├── directory/     # Business logos/photos
│       ├── events/        # Event images
│       └── ...
├── docs/                  # Documentation
│   ├── GHL-SETUP.md      # GHL integration guide
│   ├── SETUP-GUIDE.md    # Development setup
│   └── ...
├── CHANGELOG.md           # Version history
├── CONTRIBUTING.md        # Team guidelines
└── README.md              # This file
```

---

## Key Features

### Member Directory
- Search and filter businesses by category
- Tier-based display (Sponsors, Ambassadors, Members)
- Business logos and contact information

### Contact Form (GHL Integration)
- Form submissions go to Go High Level CRM
- Configurable via environment variables
- Demo mode when webhook not configured

### Membership System
- Multiple membership tiers based on business size
- Free first year for new Murray businesses
- Premium tier options (Champion, Pioneer, etc.)

### Events Integration
- Chamber and community event calendars
- Ready for Google Calendar integration

---

## Environment Variables

Create `.env.local` with:

```env
# Go High Level Configuration
NEXT_PUBLIC_GHL_LOCATION_ID=your_location_id
NEXT_PUBLIC_GHL_WEBHOOK_CONTACT=your_contact_webhook_url
NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP=your_membership_webhook_url
NEXT_PUBLIC_GHL_COMMUNITY_URL=your_community_url
NEXT_PUBLIC_GHL_COMMUNITY_CONFIGURED=false
```

---

## Deployment

Use Vercel CLI for deployments:

```bash
# Deploy to production
vercel --prod --yes

# Set alias to main domain
vercel alias [deployment-url] macc-website-2.vercel.app
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Development guidelines |
| [RESTART-PROMPT-CLAUDE.md](RESTART-PROMPT-CLAUDE.md) | AI assistant context |
| [docs/GHL-SETUP.md](docs/GHL-SETUP.md) | Go High Level setup |
| [docs/SETUP-GUIDE.md](docs/SETUP-GUIDE.md) | Development setup |

---

## Contact

**Murray Area Chamber of Commerce**
- Address: 141 E 5600 S #300, Murray, UT 84107
- Phone: (801) 263-2632
- Email: support@murrayareachamber.com
- Website: [themurraychamber.com](https://themurraychamber.com)

---

## Repository

- **GitHub**: [github.com/BrettLechtenbrerg/MACC-Website](https://github.com/BrettLechtenbrerg/MACC-Website)
- **Vercel**: [vercel.com/bretts-projects-3e254e58/macc-website-2](https://vercel.com/bretts-projects-3e254e58/macc-website-2)

---

© 2026 Murray Area Chamber of Commerce. All rights reserved.
