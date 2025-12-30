# Total Success AI

A modern, responsive website for **Total Success AI** - an AI consulting, implementation, and training company.

🌐 **Live Site**: [Deployed on Vercel](https://tsai-site.vercel.app)

---

## Quick Start

```bash
# Install dependencies
npm install

# Run locally (optional)
npm run dev

# Deploy to production
vercel --prod
```

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React framework |
| React 19 | UI library |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Vercel | Hosting & deployment |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero, services overview, testimonials |
| `/about` | Team profiles for Brett & Manny |
| `/services` | Detailed service offerings |
| `/portfolio` | Projects & recommendation letters |
| `/contact` | Booking calendars & contact form |
| `/terms` | Terms and Conditions |
| `/privacy` | Privacy Policy |

---

## Brand Colors

```
Navy Blue:    #0A1F44  (primary)
Navy Light:   #1E3A8A  (accent)
Silver:       #C0C0C0  (metallic)
Silver Light: #E8E8E8  (backgrounds)
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| [CONTRIBUTING.md](CONTRIBUTING.md) | Team workflow & guidelines |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [CLAUDE.md](CLAUDE.md) | AI assistant context |
| [docs/SETUP-GUIDE.md](docs/SETUP-GUIDE.md) | Detailed setup instructions |

### Work Logs (in `/docs`)
- [MOBILE-OPTIMIZATION.md](docs/MOBILE-OPTIMIZATION.md) - Mobile optimization details
- [MENU-FIX-REPORT.md](docs/MENU-FIX-REPORT.md) - Hamburger menu fix details
- [SUMMARY.md](docs/SUMMARY.md) - Initial build summary

---

## Deployment

**Important**: Use Vercel CLI for deployments (more reliable than auto-deploy).

```bash
# Link project (first time only)
vercel link --yes --project tsai-site

# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## Project Structure

```
TSAI-Site/
├── app/                # Next.js pages
├── components/         # React components
├── public/images/      # Static assets
├── docs/               # Documentation
├── CLAUDE.md           # AI assistant instructions
├── CONTRIBUTING.md     # Team guidelines
├── CHANGELOG.md        # Version history
└── README.md           # This file
```

---

## Content Updates

| What | Where |
|------|-------|
| Testimonials | `components/Testimonials.tsx` |
| Portfolio projects | `app/portfolio/page.tsx` |
| Team bios | `app/about/page.tsx` |
| Calendly links | `app/contact/page.tsx` |
| Footer info | `components/Footer.tsx` |

---

## Support

- **Brett Lechtenberg**: [brettlechtenberg.com](https://brettlechtenberg.com)
- **Manny Torres**: [mannytorresai.com](https://mannytorresai.com)

---

© 2024 Total Success AI. All rights reserved.
