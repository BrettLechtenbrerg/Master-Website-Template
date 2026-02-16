import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Hub | Murray Chamber',
  description: 'Content Management System for Murray Area Chamber of Commerce',
  robots: 'noindex, nofollow',
};

export default function PowerHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-white overflow-auto" style={{ zIndex: 99999 }}>
      {children}
    </div>
  );
}
