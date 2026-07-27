import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { JSX } from "react";
import { Analytics } from "@vercel/analytics/react";

import { PostHogProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "D&D Spellbook Generator",
  description:
    "Build a custom Dungeons & Dragons spellbook in seconds! Randomly generate spell lists by level for your next campaign.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
      <Analytics />
    </html>
  );
}
