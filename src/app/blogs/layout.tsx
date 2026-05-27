import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Design Blogs | Alvion Technologies",
  description: "Explore advanced tech and system architecture guides on Alvion Technologies' System Design blog. Learn backend API engineering, scalable microservices, low-code automations, and modern web application development tips.",
  keywords: [
    "Modern web application development",
    "Backend API development company",
    "System design blog",
    "Appian solutions blog",
    "Alvion Technologies Blogs"
  ],
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
