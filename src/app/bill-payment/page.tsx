import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function BillPaymentPage() {
  const pageData: CaseStudyData = {
    id: "bill-payment",
    title: "Bill Payment Integration",
    description: "Centralized Utility Bill Payment Platform",
    industry: "Fintech / Banking",
    projectType: "Payment Gateway Integration",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading financial services provider aimed to consolidate disparate bill payment channels into a single, unified interface for their vast customer base.",
      "The initiative sought to handle high transaction volumes reliably, connect with numerous utility providers in real-time, and guarantee military-grade payment security."
    ],
    problemIntro: "Fragmented payment gateways resulted in high failure rates and a disjointed user experience.",
    problems: [
      { title: "High Failure Rates", desc: "Unreliable integrations led to frequently failed transactions and frustrated users." },
      { title: "Disjointed Experience", desc: "Users had to navigate multiple interfaces to pay different types of bills." },
      { title: "Reconciliation Issues", desc: "Finance teams struggled with manual settlement and reconciliation processes." }
    ],
    solution: [
      "We built a centralized, robust Bill Payment Hub that seamlessly integrated with dozens of utility providers and payment gateways using scalable microservices.",
      "The platform featured real-time transaction monitoring, automated settlements, and a sleek unified front-end for users to manage all payments in one place."
    ],
    modules: [
      { num: "01", title: "Unified Payment Interface" },
      { num: "02", title: "Biller API Integrations" },
      { num: "03", title: "Automated Reconciliation" },
      { num: "04", title: "Fraud Monitoring System" },
      { num: "05", title: "Transaction Dashboard" },
      { num: "06", title: "Smart Notification Engine" }
    ],
    outcomes: [
      { value: "99.9%", label: "Transaction Success" },
      { value: "50%", label: "Drop in Support Tickets" },
      { value: "2x", label: "Increase in User Engagement" }
    ],
    technologies: [
      "Appian Portals", "REST & SOAP APIs", "Payment Gateway APIs", "Microservices Architecture",
      "Redis Caching", "PostgreSQL", "Appian Rules Engine", "Data Fabric",
      "Audit Logging", "Push Notifications"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Transaction Time",
        value: "45 Sec",
        trend: "70%",
        trendDirection: "down",
        sparklineData: [150, 120, 100, 80, 60, 50, 45],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Support Tickets",
        value: "12%",
        trend: "50%",
        trendDirection: "down",
        sparklineData: [62, 55, 48, 35, 25, 18, 12],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Success Rate",
        value: "99.9%",
        trend: "15%",
        trendDirection: "up",
        sparklineData: [84, 88, 92, 95, 98, 99.5, 99.9],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The unified Bill Payment Hub dramatically improved system reliability and user satisfaction, offering a flawless payment experience across all channels.",
      "With automated backend reconciliation and real-time fraud monitoring, the institution minimized operational risks and scaled their transaction capacity effortlessly."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
