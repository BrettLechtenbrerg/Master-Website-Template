# Contributing to MACC Website

Guidelines for working on the Murray Area Chamber of Commerce website.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm
- Vercel CLI (`npm i -g vercel`)
- Git

### Initial Setup
```bash
# Clone the repository
git clone https://github.com/BrettLechtenbrerg/MACC-Website.git
cd MACC-Website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

---

## Development Workflow

### Making Changes

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Make your code changes**

3. **Test locally**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

4. **Build to check for errors**
   ```bash
   npm run build
   ```

5. **Commit changes**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```

6. **Push to GitHub**
   ```bash
   git push origin main
   ```

7. **Deploy via Vercel CLI**
   ```bash
   vercel --prod --yes
   vercel alias [deployment-url] macc-website-2.vercel.app
   ```

> **Note**: Use Vercel CLI for reliable deployments.

---

## Deployment Commands

| Command | Purpose |
|---------|---------|
| `vercel` | Create preview deployment |
| `vercel --prod --yes` | Deploy to production |
| `vercel alias [url] macc-website-2.vercel.app` | Set main domain alias |
| `vercel ls` | List recent deployments |
| `vercel logs` | View deployment logs |

---

## Code Standards

### File Naming
- React components: `PascalCase.tsx` (e.g., `Navigation.tsx`)
- Pages: `page.tsx` in appropriate folder
- Utilities: `camelCase.ts`

### TypeScript
- Use TypeScript for all new files
- Define types/interfaces for props and data
- Avoid `any` type when possible

### Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Use brand colors:
  - `purple-600` / `purple-700` for primary colors
  - `orange-500` / `orange-600` for accent colors
  - Glass card styling: `glass-card`, `glass-strong`

### Components
- Keep components focused and single-purpose
- Use Framer Motion for animations
- Use Lucide React for icons

---

## Commit Messages

Write clear, descriptive commit messages:

```
# Good
Add contact form GHL integration
Fix mobile menu not closing on navigation
Update membership tiers with actual pricing

# Bad
fix stuff
updates
wip
```

---

## Project Structure

```
MACC-Website/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home
│   ├── about/             # About
│   ├── board/             # Board of Directors
│   ├── contact/           # Contact (GHL integration)
│   ├── directory/         # Business directory
│   ├── events/            # Events pages
│   ├── join/              # Membership
│   ├── login/             # Member portal
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms of Service
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utilities
│   └── ghl-config.ts      # Go High Level config
├── public/images/         # Static assets
└── docs/                  # Documentation
```

---

## Adding Content

### New Board Members
Edit `app/board/page.tsx` - add to the `boardMembers` or `staff` array.

### New Directory Listings
Edit `app/directory/page.tsx` - add to the `businesses` array.

### New Images
1. Add to `public/images/` (or subdirectory like `board/`, `directory/`)
2. Reference as `/images/filename.jpg`

### Legal Page Updates
- Privacy Policy: `app/privacy/page.tsx`
- Terms of Service: `app/terms/page.tsx`
- Update the effective date when making changes

---

## GHL Integration

Contact form submissions go to Go High Level:

```typescript
// Configuration in lib/ghl-config.ts
export const GHL_CONFIG = {
  webhooks: {
    contact: process.env.NEXT_PUBLIC_GHL_WEBHOOK_CONTACT,
    membership: process.env.NEXT_PUBLIC_GHL_WEBHOOK_MEMBERSHIP,
  },
  // ...
};
```

---

## Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 in Use
```bash
npm run dev -- -p 3001
```

### Vercel Deployment Issues
```bash
# Check deployment logs
vercel logs [deployment-url]

# Redeploy
vercel --prod --yes
```

---

## Questions?

- Check docs in `/docs` folder
- Review `RESTART-PROMPT-CLAUDE.md` for AI assistant context
- Contact the Chamber at info@themurraychamber.com
