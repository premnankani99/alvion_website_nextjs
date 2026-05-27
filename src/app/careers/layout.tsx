import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join the Top Software Company in Jaipur",
  description: "Explore rewarding job opportunities at Alvion Technologies. We are hiring expert Appian developers, React Native engineers, frontend web developers, Java backend specialists, and digital marketing interns in Jaipur.",
  keywords: [
    "Software company in Jaipur",
    "IT company in Jaipur",
    "Appian development company in Jaipur",
    "React Native app development company",
    "Alvion Technologies Careers"
  ],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
