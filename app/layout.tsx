import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollColorProvider } from "@/components/scroll-color-provider";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hussein-alayan.vercel.app"),
  title: {
    default: "Hussein Alayan - Full-Stack Developer",
    template: "%s | Hussein Alayan",
  },
  description:
    "Full-stack developer specializing in AI-powered solutions and automation. Building intelligent web applications with React, Next.js, and modern technologies.",
  keywords: [
    "Hussein Alayan",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI Integration",
    "Web Development",
    "Lebanon Developer",
    "FastAPI",
    "Python Developer",
  ],
  authors: [
    { name: "Hussein Alayan", url: "https://github.com/Hussein-Alayan" },
  ],
  creator: "Hussein Alayan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hussein-alayan.vercel.app",
    title: "Hussein Alayan - Full-Stack Developer",
    description:
      "Full-stack developer specializing in AI-powered solutions and automation. Building intelligent web applications with React, Next.js, and modern technologies.",
    siteName: "Hussein Alayan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hussein Alayan - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussein Alayan - Full-Stack Developer",
    description:
      "Full-stack developer specializing in AI-powered solutions and automation. Building intelligent web applications with React, Next.js, and modern technologies.",
    images: ["/og-image.png"],
    creator: "@HusseinAlayan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <ScrollColorProvider>{children}</ScrollColorProvider>
      </body>
    </html>
  );
}
