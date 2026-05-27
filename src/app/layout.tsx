import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alvion Technologies | Top Appian & Software Development Company in Jaipur",
  description: "Alvion Technologies provides expert Appian low-code solutions, Java backend, React, and mobile app development. The leading IT company in Jaipur for digital transformation.",
  keywords: ["Appian development company Jaipur", "Low-code solutions", "Java backend development", "React Native app development", "IT company in Jaipur"],
  authors: [{ name: "Alvion Technologies" }],
  viewport: "width=device-width, initial-scale=1",
};

import Navbar from "@/components/Navbar";
import AICopilot from "@/components/AICopilot";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <AICopilot />
      </body>
    </html>
  );
}
