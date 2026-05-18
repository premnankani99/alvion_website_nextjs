import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Case Studies & Business Solutions",
  description: "Browse the successful case studies and robust digital transformation solutions built by Alvion Technologies. Discover our expert low-code automations, high-scale Java systems, and creative React Native apps.",
  keywords: [
    "Custom software development company",
    "Enterprise software solutions",
    "Business automation solutions",
    "Digital transformation services Jaipur"
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
