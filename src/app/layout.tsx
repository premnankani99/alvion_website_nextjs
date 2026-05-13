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
  title: "Alvion Technologies | Best Web Development & SEO Company in Jaipur",
  description: "Alvion Technologies is a top-rated IT company in Jaipur offering expert web development, mobile apps, software solutions, and digital marketing services.",
  keywords: ["IT Company in Jaipur", "Web Development Company in Jaipur", "Software Company in Jaipur", "SEO Services Jaipur", "Best Digital Marketing Agency Jaipur"],
  authors: [{ name: "Alvion Technologies" }],
  viewport: "width=device-width, initial-scale=1",
};

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
