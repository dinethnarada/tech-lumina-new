import type { Metadata } from "next";
import localFont from "next/font/local";
import PlexusBackground from "@/components/PlexusBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const alesandRegular = localFont({
  src: "./fonts/Alesand_Regular.ttf",
  variable: "--font-regular",
});

const alesandBold = localFont({
  src: "./fonts/Alesand_Bold.ttf",
  variable: "--font-bold",
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  title: "Tech Lumina - Crafting Tomorrow\'s Websites, Today",
  description: "Tech Lumina provides cutting edge digital solutions and web development services to transform your business.",
  keywords: [
    'web development', 'modern websites', 'UI/UX design', 'digital strategy', 'web solutions',
    'custom web development', 'responsive web design', 'website development company',
    'professional web services', 'web application development', 'frontend development',
    'backend development', 'full stack development', 'mobile-friendly websites',
    'enterprise web solutions', 'ecommerce development', 'web optimization',
    'website maintenance', 'website security', 'performance optimization',
    'SEO friendly websites', 'modern web technologies', 'scalable web applications',
    'tech lumina startup', 'digital solutions', 'technology services', 'web consulting',
    'website analytics', 'user experience design', 'digital transformation', "lumina tech", "tech blog", "tech lumina"
  ],
  metadataBase: new URL('https://tech-lumina.com'),
  authors: [{ name: 'Tech Lumina Team' }],
  creator: 'Tech Lumina',
  publisher: 'Tech Lumina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tech-lumina.com',
    title: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today',
    description: "Tech Lumina provides cutting edge digital solutions and web development services to transform your business.",
    siteName: 'Tech Lumina',
    images: [{
      url: 'https://tech-lumina.com/logo.png',
      width: 1200,
      height: 630,
      alt: 'Tech Lumina - Crafting Tomorrow\'s Websites, Today'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tech Lumina - Crafting Tomorrow's Websites, Today",
    description: "Tech Lumina provides cutting edge digital solutions and web development services to transform your business.",
    images: [
      {
        url: 'https://tech-lumina.com/logo.png',
        alt: "Tech Lumina - Crafting Tomorrow's Websites, Today",
      }
    ],
    creator: '@techlumina',
    site: '@techlumina',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alesandRegular.variable} ${alesandBold.variable} font-regular antialiased bg-[#130420]`}
      >
        <div className="fixed inset-0 z-0">
          <PlexusBackground />
        </div>
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="relative z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
