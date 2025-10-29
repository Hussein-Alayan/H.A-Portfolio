import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollColorProvider } from "@/components/scroll-color-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hussein Alayan - Full-Stack Developer",
  description:
    "Full-stack developer specializing in AI-powered solutions and automation. Building intelligent web applications with React, Next.js, and modern technologies.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ScrollColorProvider>{children}</ScrollColorProvider>
      </body>
    </html>
  );
}
