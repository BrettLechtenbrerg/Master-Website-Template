import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Murray Area Chamber of Commerce | Hub of Innovation & Growth",
  description: "Strengthening Murray's business economy by providing unparalleled resources, networking opportunities, and support for businesses of all sizes. Join 500+ member businesses today.",
  keywords: ["Murray Chamber", "Chamber of Commerce", "Utah Business", "Murray Utah", "Business Networking", "Small Business Resources"],
  authors: [{ name: "Murray Area Chamber of Commerce" }],
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Murray Area Chamber of Commerce",
    description: "Your hub for innovation and business growth in Murray, Utah",
    url: "https://www.themurraychamber.com",
    siteName: "Murray Area Chamber of Commerce",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Murray Area Chamber of Commerce",
    description: "Your hub for innovation and business growth in Murray, Utah",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased min-w-full`}>
        {/* Aurora Background */}
        <div className="aurora-bg" aria-hidden="true" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="min-w-full flex flex-col items-center relative z-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
