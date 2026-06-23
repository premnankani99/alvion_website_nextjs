import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function ConsumerElectronicsPage() {
  const pageData: CaseStudyData = {
    id: "consumer-electronics-brand",
    title: "Dealer Management System",
    description: "Enterprise Dealer Operations Platform",
    industry: "Retail & Distribution",
    projectType: "Dealer Management Platform",
    platform: "Appian Low-Code Platform",
    overview: [
      "The Dealer Management System (DMS) is a centralized platform designed to streamline dealer operations including product orders, service coordination, and billing management.",
      "Dealers can manage their orders, request installations, track service progress, and generate invoices through a unified digital portal, providing complete operational visibility."
    ],
    problemIntro: "Many dealer networks rely on manual processes and disconnected tools to manage operations.",
    problems: [
      { title: "Operational Delays", desc: "Disconnected tools lead to massive delays in order processing." },
      { title: "Limited Visibility", desc: "Dealers lack real-time insights into installation and service progress." },
      { title: "Poor Coordination", desc: "Inefficient communication between dealers and service teams causes customer dissatisfaction." }
    ],
    solution: [
      "A unified Dealer Management Portal was developed to digitize dealer operations and centralize workflow management across the entire distribution network.",
      "Dealers can place orders, schedule installation services, manage invoices, and track service progress from a single dashboard powered by robust API integrations."
    ],
    modules: [
      { num: "01", title: "Dealer Order Management" },
      { num: "02", title: "Installation Service Requests" },
      { num: "03", title: "Invoice & Billing Management" },
      { num: "04", title: "Service Tracking Dashboard" },
      { num: "05", title: "Dealer Account Management" },
      { num: "06", title: "Real-Time Order Tracking" }
    ],
    outcomes: [
      { value: "60%", label: "Faster Dealer Operations" },
      { value: "45%", label: "Reduced Manual Processes" },
      { value: "100%", label: "Improved Service Visibility" }
    ],
    technologies: [
      "Appian Low-Code", "React & React Native", "Android Java SDK", "RESTful APIs",
      "Appian Records", "Process Modeler", "PostgreSQL Database", "Secure Auth",
      "Mobile Dashboards", "Billing Integration API"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Operation Speed",
        value: "60%",
        trend: "60%",
        trendDirection: "down",
        sparklineData: [85, 80, 70, 50, 45, 40, 35],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Overhead",
        value: "45%",
        trend: "45%",
        trendDirection: "down",
        sparklineData: [90, 85, 75, 65, 55, 50, 45],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Service Visibility",
        value: "100%",
        trend: "80%",
        trendDirection: "up",
        sparklineData: [40, 50, 65, 80, 90, 95, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The Dealer Management System transformed the way the consumer electronics brand collaborates with its distribution network, significantly reducing manual overhead.",
      "By providing real-time visibility into orders and service requests, the platform ensured faster resolutions and higher satisfaction across all dealer partners."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
