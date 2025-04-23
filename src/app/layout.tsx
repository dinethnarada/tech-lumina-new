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
  title: "Tech Lumina - Crafting Tomorrow\'s Websites, Today",
  description: "Tech Lumina provides cutting-edge digital solutions and web development services to transform your business.",
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
