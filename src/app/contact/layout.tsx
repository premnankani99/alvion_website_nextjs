import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Alvion Technologies Jaipur",
  description: "Get in touch with Alvion Technologies, the premier IT company in Jaipur. Visit our Lal Kothi office or drop us a message to discuss your Appian low-code automation, Spring Boot backend APIs, or React mobile app development needs.",
  keywords: [
    "Software company in Jaipur",
    "IT company in Jaipur",
    "Appian development company in Jaipur",
    "Digital transformation company Jaipur",
    "Alvion Technologies Contact"
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
