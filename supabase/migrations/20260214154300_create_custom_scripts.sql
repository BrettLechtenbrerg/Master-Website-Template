-- Create the custom_scripts table
CREATE TABLE IF NOT EXISTS public.custom_scripts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    location TEXT NOT NULL CHECK (location IN ('header', 'footer')),
    scope TEXT NOT NULL CHECK (scope IN ('sitewide', 'page')),
    page_path TEXT, -- e.g., '/contact'
    content TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.custom_scripts ENABLE ROW LEVEL SECURITY;

-- Policies for authenticated admins
-- For now, we assume authenticated users are admins based on the existing pattern
CREATE POLICY "Allow public select for active scripts"
ON public.custom_scripts FOR SELECT
USING (is_active = true);

CREATE POLICY "Allow authenticated admins to manage all scripts"
ON public.custom_scripts FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Function to handle updated_at
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for updated_at
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.custom_scripts
FOR EACH ROW
EXECUTE PROCEDURE handle_updated_at();
