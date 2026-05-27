import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Alvion Technologies - Digital Transformation Company Jaipur",
  description: "Learn how Alvion Technologies provides expert Appian low-code solutions, enterprise Java backend development, and cross-platform React Native apps. Our mission is to empower businesses with high-end digital transformation in Jaipur and globally.",
  keywords: [
    "Digital transformation company Jaipur",
    "Software company in Jaipur",
    "IT company in Jaipur",
    "Appian development company Jaipur",
    "Alvion Technologies About"
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
