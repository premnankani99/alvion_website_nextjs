import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Appian & Low-Code Development Company",
  description: "Alvion Technologies offers expert Appian low-code development services, enterprise BPM solutions, scalable Java backend Spring Boot architectures, custom React frontends, and native/cross-platform mobile applications.",
  keywords: [
    "Appian development company",
    "low-code automation",
    "BPM solutions",
    "Enterprise workflow automation",
    "Java backend development services",
    "React.js development company"
  ],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
