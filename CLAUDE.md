# Total Success AI Website

## Project Overview
Company website for **Total Success AI** - an AI consulting, implementation, and training company founded by Brett Lechtenberg and Manny Torres.

- **Live Site**: Deployed on Vercel
- **Vercel Project**: `bretts-projects-3e254e58/tsai-site`
- **GitHub Repo**: `BrettLechtenbrerg/TSAI-Site`

## Tech Stack
- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (via CLI)

## Brand Colors
```
Navy Blue:    #0A1F44  (primary)
Navy Light:   #1E3A8A  (accent/interactive)
Silver:       #C0C0C0  (metallic accents)
Silver Light: #E8E8E8  (backgrounds)
Black:        #000000  (text)
White:        #FFFFFF  (backgrounds)
```

## Project Structure
```
TSAI-Site/
├── app/
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # Team profiles (Brett & Manny)
│   ├── services/page.tsx   # Service offerings
│   ├── portfolio/page.tsx  # Projects & recommendations
│   ├── contact/page.tsx    # Booking calendars & contact form
│   ├── terms/page.tsx      # Terms and Conditions
│   ├── privacy/page.tsx    # Privacy Policy
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Responsive nav with hamburger menu
│   ├── Footer.tsx          # Site footer
│   ├── Testimonials.tsx    # Testimonials carousel
│   └── FAQ.tsx             # FAQ component
├── public/
│   └── images/             # Static images
│       ├── projects/       # Portfolio images
│       └── recommendations/ # Recommendation letters
└── [config files]
```

## Deployment Workflow

**IMPORTANT**: Do NOT rely on Vercel's GitHub auto-deploy - it has been unreliable. Use the Vercel CLI instead.

### Standard Deploy Process:
```bash
# 1. Make code changes

# 2. Commit and push to GitHub (for version control)
git add .
git commit -m "Description of changes"
git push origin main

# 3. Deploy directly via Vercel CLI
vercel --prod
```

### Preview Deployments:
```bash
# Create a preview URL before going to production
vercel
```

### Useful Vercel Commands:
```bash
vercel --prod          # Deploy to production
vercel                 # Create preview deployment
vercel ls              # List deployments
vercel logs            # View deployment logs
vercel env pull        # Pull environment variables
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `app/contact/page.tsx` | Booking links → speaktobrett.com |
| `app/about/page.tsx` | Brett & Manny bios |
| `components/Testimonials.tsx` | Client testimonials |
| `components/Footer.tsx` | Contact info & social links |
| `components/Navigation.tsx` | Nav menu items |
| `tailwind.config.ts` | Brand colors & theme |
| `app/layout.tsx` | Meta tags & SEO |

## Development Commands
```bash
npm install      # Install dependencies
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run linter
```

## Recent Work (Dec 14, 2025)
- **TSAI logo** added to Navigation header and Footer (all pages)
- **Manny's photo** updated with proper framing (white background, object-contain)
- **All booking links** now go to `www.speaktobrett.com`
- **Next.js security vulnerability** fixed (updated packages)
- Documentation reorganization (CHANGELOG, CONTRIBUTING, moved docs to /docs)

### Previous Work
- Mobile optimization for iPhone 15 Pro
- Hamburger menu fixes
- Terms & Conditions / Privacy Policy pages
- Additional Services section on portfolio
- Recommendation letters section

## Content Guidelines
- Keep copy professional but approachable
- Focus on AI consulting, implementation, and training
- Highlight Brett and Manny's expertise
- Emphasize practical business value

## Notes
- Images go in `public/images/` directory
- **Booking URL**: All "Book a Call" buttons link to `www.speaktobrett.com`
- **Logo**: `public/images/TSAI-logo-final.jpg` (in nav header & footer)
- Mobile-first responsive design
- Framer Motion for smooth animations
