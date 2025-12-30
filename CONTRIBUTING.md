# Contributing to TSAI-Site

Guidelines for the Total Success AI team when working on this project.

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
git clone https://github.com/BrettLechtenbrerg/TSAI-Site.git
cd TSAI-Site

# Install dependencies
npm install

# Link to Vercel project
vercel link --yes --project tsai-site

# Pull environment variables
vercel env pull
```

---

## Development Workflow

### Making Changes

1. **Pull latest changes**
   ```bash
   git pull origin main
   ```

2. **Make your code changes**

3. **Test locally** (optional)
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

4. **Commit changes**
   ```bash
   git add .
   git commit -m "Brief description of changes"
   ```

5. **Push to GitHub**
   ```bash
   git push origin main
   ```

6. **Deploy via Vercel CLI**
   ```bash
   vercel --prod
   ```

> **Note**: Do NOT rely on Vercel's GitHub auto-deploy - use the CLI for reliable deployments.

---

## Deployment Commands

| Command | Purpose |
|---------|---------|
| `vercel` | Create preview deployment |
| `vercel --prod` | Deploy to production |
| `vercel ls` | List recent deployments |
| `vercel logs` | View deployment logs |
| `vercel rollback` | Rollback to previous deployment |

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
- Use brand colors from `tailwind.config.ts`:
  - `navy` / `navy-light` for primary colors
  - `silver` / `silver-light` for accents

### Components
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use Framer Motion for animations

---

## Commit Messages

Write clear, descriptive commit messages:

```
# Good
Add contact form validation
Fix mobile menu not closing on navigation
Update testimonials with new client quotes

# Bad
fix stuff
updates
wip
```

---

## Project Structure

```
TSAI-Site/
├── app/                    # Next.js pages
│   ├── page.tsx           # Home
│   ├── about/page.tsx     # About
│   ├── services/page.tsx  # Services
│   ├── portfolio/page.tsx # Portfolio
│   ├── contact/page.tsx   # Contact
│   ├── terms/page.tsx     # Terms
│   ├── privacy/page.tsx   # Privacy
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── public/images/         # Static assets
├── docs/                  # Documentation & work logs
└── [config files]
```

---

## Adding Content

### New Testimonials
Edit `components/Testimonials.tsx` - add to the testimonials array.

### New Portfolio Projects
Edit `app/portfolio/page.tsx` - add to the projects array.

### New Images
1. Add to `public/images/` (or subdirectory)
2. Reference as `/images/filename.jpg`

### Updating Bios
Edit `app/about/page.tsx` - modify `shortBio` and `fullBio` fields.

---

## Troubleshooting

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Vercel Not Linked
```bash
vercel link --yes --project tsai-site
```

### Port 3000 in Use
```bash
npm run dev -- -p 3001
```

---

## Questions?

- Check existing docs in `/docs` folder
- Review `CLAUDE.md` for AI assistant context
- Contact Brett or Manny
