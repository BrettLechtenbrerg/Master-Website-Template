-- Create the members table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  image_url TEXT,
  tier TEXT CHECK (tier IN ('sponsor', 'ambassador', 'member')) DEFAULT 'member',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- 1. Allow everyone (including logged-out users) to view ACTIVE members
CREATE POLICY "Public can view active members" ON members
  FOR SELECT USING (is_active = true);

-- 2. Allow only authenticated admins to perform all actions
CREATE POLICY "Admins can do everything" ON members
  FOR ALL USING (auth.role() = 'authenticated');

-- Trigger to automatically update the 'updated_at' timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_members_updated_at
    BEFORE UPDATE ON members
    FOR EACH ROW
    EXECUTE PROCEDURE update_updated_at_column();
