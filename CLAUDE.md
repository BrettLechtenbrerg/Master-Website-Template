# Master Website Template - Power Hub CMS

## Project Overview
Master template for building client websites with the **Power Hub CMS** system. Clone this repo to start a new client build.

- **Template Repo**: https://github.com/BrettLechtenbrerg/Master-Website-Template
- **Based On**: Murray Area Chamber of Commerce Website

## Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.18 (NOT v4 - had spacing issues)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL + Storage)
- **Deployment**: Vercel

## Quick Start for New Client

### 1. Clone Template
```bash
git clone https://github.com/BrettLechtenbrerg/Master-Website-Template.git [client-name]-website
cd [client-name]-website
rm -rf .git
git init
git remote add origin [new-client-repo-url]
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment
```bash
cp .env.example .env.local
# Edit .env.local with client's credentials
```

### 4. Set Up Supabase
- Create new Supabase project
- Run SQL from `supabase/migrations/001_initial_schema.sql`
- Create `member-logos` storage bucket (if using Members feature)

### 5. Customize Branding
- Update colors in `tailwind.config.ts`
- Replace logo in `public/images/`
- Update company name throughout

### 6. Configure Features
Edit `components/power-hub/Sidebar.tsx` to include/exclude features:
```typescript
const menuItems = [
  { name: 'Dashboard', href: '/power-hub/dashboard', icon: LayoutDashboard },
  { name: 'Content', href: '/power-hub/dashboard/content', icon: FileJson },
  { name: 'Media', href: '/power-hub/dashboard/media', icon: ImageIcon },
  // Comment out features client doesn't need:
  // { name: 'Members', href: '/power-hub/dashboard/members', icon: Users },
  // { name: 'Scripts', href: '/power-hub/dashboard/scripts', icon: Code },
  // { name: 'Calendar', href: '/power-hub/dashboard/calendar', icon: Calendar },
  { name: 'AI Assist', href: '/power-hub/dashboard/ai', icon: Sparkles },
  { name: 'Settings', href: '/power-hub/dashboard/settings', icon: Settings },
];
```

## Project Structure
```
project-root/
├── app/
│   ├── power-hub/           # Admin CMS portal
│   │   ├── page.tsx         # Login page
│   │   └── dashboard/       # All admin pages
│   ├── api/                 # API routes
│   └── (public pages)/      # Public website pages
├── components/
│   ├── power-hub/           # Admin components (Sidebar, Header)
│   └── (public components)/ # Navigation, Footer, etc.
├── content/                 # JSON content files (editable via CMS)
├── lib/
│   └── supabase.ts          # Supabase client
├── supabase/
│   └── migrations/          # Database setup SQL
└── public/images/           # Static assets
```

## Power Hub Features

### Core (Always Include)
- **Dashboard**: Overview and quick stats
- **Content Editor**: Edit JSON content files via GitHub
- **Media Library**: Upload/manage images via GitHub
- **Settings**: Change login credentials
- **Login**: Secure admin access

### Optional (Client Choice)
- **AI Assist**: Claude-powered content improvement (needs API key)
- **Members**: Member/client directory (needs Supabase)
- **Scripts**: Tracking code manager (needs Supabase)
- **Calendar**: Embedded Google Calendar

## Environment Variables

**Required:**
```
GITHUB_TOKEN=ghp_xxxx           # For content/media via GitHub
NEXT_PUBLIC_SUPABASE_URL=       # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anon key
```

**Optional:**
```
GCAL_API_KEY=                   # Google Calendar API
GCAL_CALENDAR_ID=               # Calendar ID
VERCEL_DEPLOY_HOOK=             # Auto-redeploy trigger
```

## Deployment (CLI ONLY - Disable GitHub Auto-Deploy)

**IMPORTANT**: After linking Vercel, disconnect GitHub auto-deploy:
```bash
vercel git disconnect --yes
```

**Deploy workflow (Vercel builds remotely - no local build needed):**
```bash
# Deploy to production
vercel --prod --yes

# Git commit (do AFTER successful deploy)
git add -A && git commit -m "Description" && git push origin main
```

**Why CLI only:**
- Avoids port conflicts from local builds
- More reliable than GitHub auto-deploy
- Vercel builds remotely (faster, no local issues)

**Do NOT run locally unless debugging:**
- `npm run dev` - Only if you need to test locally
- `npm run build` - Not needed, Vercel builds remotely

## Reference Documents
- `BUILD-GUIDE.txt` - Complete build checklist and pricing
- `POWER_HUB_REFERENCE.md` - Client documentation template
- `POWER_HUB_SETUP.md` - Detailed setup instructions

## Reference Project
- **Murray Chamber**: /Users/brettlechtenberg/Desktop/Claude Projects/Chamber-Website
- **Live Site**: https://web-seven-beta-31.vercel.app/
- **Power Hub**: https://web-seven-beta-31.vercel.app/power-hub
