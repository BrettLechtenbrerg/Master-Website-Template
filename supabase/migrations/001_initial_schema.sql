-- ============================================
-- Murray Chamber Power Hub - Database Schema
-- Run this in Supabase SQL Editor
-- ============================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 1. CUSTOM SCRIPTS TABLE
-- For tracking scripts (GTM, Meta Pixel, etc)
-- ============================================
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

-- Enable RLS (Row Level Security)
ALTER TABLE public.custom_scripts ENABLE ROW LEVEL SECURITY;

-- Allow public read/write (for simple CMS use)
CREATE POLICY "Allow public access to custom_scripts" ON public.custom_scripts
  FOR ALL USING (true) WITH CHECK (true);

-- ============================================
-- 2. MEMBERS TABLE
-- For chamber member directory
-- ============================================
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

-- Enable RLS
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;

-- Allow public read/write
CREATE POLICY "Allow public access to members" ON public.members
  FOR ALL USING (true) WITH CHECK (true);

-- ============================================
-- 3. STORAGE BUCKET FOR MEMBER LOGOS
-- ============================================
-- Note: Run this separately in Storage section or use:
INSERT INTO storage.buckets (id, name, public)
VALUES ('member-logos', 'member-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public uploads to member-logos bucket
CREATE POLICY "Allow public uploads to member-logos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'member-logos');

CREATE POLICY "Allow public read from member-logos" ON storage.objects
  FOR SELECT USING (bucket_id = 'member-logos');

CREATE POLICY "Allow public delete from member-logos" ON storage.objects
  FOR DELETE USING (bucket_id = 'member-logos');

-- ============================================
-- Done! Tables and storage ready.
-- ============================================
