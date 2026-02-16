# Murray Area Chamber of Commerce - Power Hub Reference

**Last Updated:** February 16, 2026
**Status:** Fully Operational

---

## Quick Links

| Resource | URL |
|----------|-----|
| **Live Site** | https://web-seven-beta-31.vercel.app/ |
| **Power Hub Login** | https://web-seven-beta-31.vercel.app/power-hub |
| **GitHub Repo** | https://github.com/BoardChairIs1/web |
| **Vercel Dashboard** | https://vercel.com/board-chairs-projects/web |
| **Supabase Dashboard** | https://supabase.com/dashboard |

---

## Login Credentials

**Power Hub Admin:**
- Username: `chamberadmin`
- Password: `chamber2026`

**Supabase Account:**
- Email: `boardchair@themurraychamber.com`
- Password: `Cheesefrogs24!`
- Project Name: `Murray Chamber`
- Database Password: `Cheesefrogs24!`
- GitHub: `BoardChairIs1`

---

## Environment Variables (Vercel)

These must be set in **Vercel → Project Settings → Environment Variables**:

### Required (Currently Set)

| Variable | Description | Status |
|----------|-------------|--------|
| `GITHUB_TOKEN` | GitHub Personal Access Token with `repo` scope | ✅ Set |

### Supabase Variables (Required for Members/Scripts)

| Variable | Description | How to Get |
|----------|-------------|------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Supabase Dashboard → Settings → API → Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Supabase Dashboard → Settings → API → anon public |

**To get these values:**
1. Log in to https://supabase.com with `boardchair@themurraychamber.com`
2. Open the "Murray Chamber" project
3. Go to **Settings** (gear icon) → **API**
4. Copy "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
5. Copy "anon public" key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Add both to Vercel: Project Settings → Environment Variables

### Optional Variables

| Variable | Description | Status |
|----------|-------------|--------|
| `VERCEL_DEPLOY_HOOK` | Auto-rebuild after content changes | Optional |

### GitHub Token Note

Your current GitHub token (for reference, last 4 chars): `...GIqY`

If you need to regenerate:
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `repo` scope
4. Add to Vercel environment variables

---

## Power Hub Features

### Working Now
- ✅ **Dashboard** - Overview of site
- ✅ **Content** - Edit 10 JSON content files (about, board, contact, events, home, join, members, resources, services, sponsors)
- ✅ **Media** - Upload and manage images (stored in GitHub)
- ✅ **AI Assist** - Claude-powered content improvement (uses your API key, saved in browser)

### Requires Supabase Database Tables
- ⏳ **Members** - Member directory management (needs `members` table)
- ⏳ **Scripts** - Custom scripts management (needs `custom_scripts` table)

---

## Supabase Database Setup

**Run this SQL in Supabase to create the required tables:**

1. Log in to https://supabase.com with `boardchair@themurraychamber.com`
2. Open "Murray Chamber" project
3. Go to **SQL Editor** (left sidebar)
4. Paste and run this SQL:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CUSTOM SCRIPTS TABLE
CREATE TABLE IF NOT EXISTS public.custom_scripts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL CHECK (location IN ('header', 'footer')),
  scope TEXT NOT NULL CHECK (scope IN ('sitewide', 'page')),
  page_path TEXT,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.custom_scripts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to custom_scripts" ON public.custom_scripts
  FOR ALL USING (true) WITH CHECK (true);

-- MEMBERS TABLE
CREATE TABLE IF NOT EXISTS public.members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  image_url TEXT,
  tier TEXT NOT NULL DEFAULT 'member' CHECK (tier IN ('sponsor', 'ambassador', 'member')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public access to members" ON public.members
  FOR ALL USING (true) WITH CHECK (true);
```

5. Click **Run** (or Cmd+Enter)
6. You should see "Success. No rows returned"

### Storage Bucket (For Member Logos)

1. Go to **Storage** in the left sidebar
2. Click **New Bucket**
3. Name: `member-logos`
4. Check **Public bucket**
5. Click **Create bucket**

---

## File Structure

```
Chamber-Website/
├── app/
│   ├── api/power-hub/
│   │   ├── ai/route.ts          # Claude AI integration
│   │   ├── auth/route.ts        # Login authentication
│   │   ├── content/route.ts     # Content JSON read/write
│   │   ├── deploy/route.ts      # Vercel deploy trigger
│   │   ├── media/route.ts       # List uploaded media
│   │   └── upload/route.ts      # Upload new media
│   └── power-hub/
│       ├── page.tsx             # Login page
│       └── dashboard/
│           ├── page.tsx         # Dashboard
│           ├── content/         # Content editor
│           ├── media/           # Media manager
│           ├── ai/              # AI Assist
│           ├── members/         # Member directory (Supabase)
│           └── scripts/         # Scripts manager (Supabase)
├── components/power-hub/
│   ├── Header.tsx               # Page header
│   └── Sidebar.tsx              # Navigation with Murray logo
├── content/                     # JSON content files
│   ├── about.json
│   ├── board.json
│   ├── contact.json
│   ├── events.json
│   ├── home.json
│   ├── join.json
│   ├── members.json
│   ├── resources.json
│   ├── services.json
│   └── sponsors.json
├── public/images/uploads/       # Uploaded media files
└── lib/supabase.ts              # Supabase client
```

---

## Git Information

- **Repository:** BoardChairIs1/web
- **Branch:** main
- **Latest Commit:** f8ac1d9 (Update Claude model to claude-sonnet-4-20250514)

All changes are committed and pushed. Nothing to lose!

---

## Troubleshooting

### Content/Media not loading?
→ Check that `GITHUB_TOKEN` is set in Vercel environment variables

### AI Assist not working?
→ Verify your Claude API key is entered in the AI Assist page
→ Key is saved in browser localStorage

### Members/Scripts showing "table not found" error?
→ The database tables haven't been created yet
→ Run the SQL in the "Supabase Database Setup" section above

### Members/Scripts showing "could not find table" error?
→ Same as above - run the SQL to create tables

### Supabase connection error?
→ Need `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel
→ Get from Supabase Dashboard → Settings → API

### Need to redeploy?
1. Make any change and push to GitHub, OR
2. Go to Vercel dashboard → Deployments → Redeploy

---

## Contact/Support

This Power Hub was built for Murray Area Chamber of Commerce.
GitHub: https://github.com/BoardChairIs1/web
