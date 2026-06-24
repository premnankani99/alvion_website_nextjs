import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function RegulatoryCompliancePage() {
  const pageData: CaseStudyData = {
    id: "regulatory-compliance-management-system",
    title: "Regulatory Compliance System",
    description: "Regulatory Compliance Automation",
    industry: "Banking, Insurance & Financial Services",
    projectType: "Regulatory Compliance Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A highly regulated financial enterprise needed a unified system to manage an ever-growing list of global regulatory obligations and complex internal controls.",
      "To combat the massive operational risk posed by frequent rule changes, they sought a single robust platform to standardize compliance activities and ensure ironclad audit readiness."
    ],
    problemIntro: "Compliance was managed using disjointed spreadsheets and emails, creating severe risk and inefficiency.",
    problems: [
      { title: "Manual Tracking", desc: "Mapping hundreds of regulations to internal controls was highly error-prone." },
      { title: "Siloed Evidence", desc: "Audit evidence was scattered across personal drives and disjointed tools." },
      { title: "Regulatory Lag", desc: "The firm took months to adapt internal policies to new regulatory updates." }
    ],
    solution: [
      "A centralized Regulatory Compliance System was deployed via Appian, fully digitizing compliance workflows, control assessments, and evidence collection.",
      "A smart rules engine was implemented to automatically map incoming regulatory updates to existing policies, immediately triggering alerts for compliance officers."
    ],
    modules: [
      { num: "01", title: "Automated Regulatory Intake" },
      { num: "02", title: "Intelligent Policy Mapping" },
      { num: "03", title: "Scheduled Control Assessments" },
      { num: "04", title: "Centralized Evidence Vault" },
      { num: "05", title: "Automated Escalation Alerts" },
      { num: "06", title: "Regulator Reporting Dashboards" }
    ],
    outcomes: [
      { value: "65%", label: "Faster Reporting" },
      { value: "70%", label: "Less Manual Tracking" },
      { value: "100%", label: "Audit Readiness" }
    ],
    technologies: [
      "Appian Case Management", "Process Models", "Data Fabric", "Business Rules",
      "Dynamic Interfaces", "Role-Based Security", "Audit Trails", "REST APIs",
      "Document Vault", "Automated Timers"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Reporting Time",
        value: "15 Mins",
        trend: "65%",
        trendDirection: "down",
        sparklineData: [85, 80, 70, 50, 45, 35, 30],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Tracking",
        value: "5K+",
        trend: "70%",
        trendDirection: "down",
        sparklineData: [95, 85, 75, 55, 45, 35, 25],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Audit Readiness",
        value: "100%",
        trend: "85%",
        trendDirection: "up",
        sparklineData: [30, 40, 55, 75, 85, 95, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The system successfully united disparate regional compliance teams under a single, highly governed digital roof, completely eradicating the panic of audit season.",
      "The massive reduction in manual tracking empowered compliance officers to shift focus from administrative data gathering to high-level strategic risk analysis."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
