import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Color Palette Generator & Value Map Tool for Artists | Oil Painting Reference",
  description: "Professional color palette generator and value map analyzer for oil painters, watercolor artists, and traditional painters. Extract dominant colors, analyze light/shadow values, temperature mapping, and real-time color picker. Free online art reference tool with squint analysis for better paintings.",
  keywords: [
    "color palette generator",
    "value map analyzer", 
    "oil painting tools",
    "art reference generator",
    "color analysis tool",
    "dominant color extractor",
    "painting color picker",
    "artist color tool",
    "traditional painting reference",
    "watercolor palette generator",
    "acrylic painting colors",
    "color temperature analysis",
    "squint analysis tool",
    "light shadow mapping",
    "free art tools",
    "online color picker",
    "paint mixing guide",
    "color harmony generator",
    "artist reference tool",
    "painting study tool"
  ],
  authors: [{ name: "Artist Color Tools" }],
  creator: "Professional Art Tools",
  publisher: "Artist Color Tools",
  robots: "index, follow",
  openGraph: {
    title: "Free Color Palette Generator & Value Map Tool for Artists",
    description: "Extract dominant colors and analyze values from reference images. Perfect for oil painters, watercolor artists, and traditional painters.",
    type: "website",
    locale: "en_US",
    siteName: "Artist Color Tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Color Palette Generator & Value Map Tool for Artists",
    description: "Extract dominant colors and analyze values from reference images. Perfect for oil painters and traditional artists.",
  },
  alternates: {
    canonical: "https://artistcolortools.com",
  },
  category: "Art Tools",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {gaTrackingId && <GoogleAnalytics trackingId={gaTrackingId} />}
        {children}
      </body>
    </html>
  );
}
