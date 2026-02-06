-- Create a bucket for member logos if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('member-logos', 'member-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Set up access control for the bucket
-- 1. Allow public access to view logos
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'member-logos' );

-- 2. Allow authenticated admins to upload logos
CREATE POLICY "Admin Upload"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'member-logos' AND
  auth.role() = 'authenticated'
);

-- 3. Allow authenticated admins to update logos
CREATE POLICY "Admin Update"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'member-logos' AND
  auth.role() = 'authenticated'
);

-- 4. Allow authenticated admins to delete logos
CREATE POLICY "Admin Delete"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'member-logos' AND
  auth.role() = 'authenticated'
);
