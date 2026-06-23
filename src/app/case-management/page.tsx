import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function CaseManagementPage() {
  const pageData: CaseStudyData = {
    id: "case-management",
    title: "Case Management System",
    description: "Enterprise Case Management Automation",
    industry: "Insurance / Enterprise",
    projectType: "Case Management Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A large enterprise organization required a centralized system to manage complex, long-running business cases involving multiple teams, documents, and regulatory checkpoints.",
      "Existing processes were highly fragmented, relying on outdated legacy platforms and manual spreadsheet tracking, leading to poor visibility and frequent compliance risks."
    ],
    problemIntro: "Business cases were handled through disjointed applications, resulting in critical operational bottlenecks.",
    problems: [
      { title: "No Unified View", desc: "Lack of a centralized dashboard made tracking case progress nearly impossible." },
      { title: "SLA Breaches", desc: "Missing automated alerts led to consistent delays and manual follow-ups." },
      { title: "Document Loss", desc: "Critical case files scattered across individual drives posed severe security risks." }
    ],
    solution: [
      "An enterprise-grade Case Management Platform was rapidly built using Appian to orchestrate end-to-end lifecycles and replace disconnected legacy systems.",
      "The solution enabled dynamic case creation, centralized document storage, and automated routing, providing a 360-degree view to all internal stakeholders."
    ],
    modules: [
      { num: "01", title: "Dynamic Case Intake" },
      { num: "02", title: "Document Management Vault" },
      { num: "03", title: "Role-Based Assignment" },
      { num: "04", title: "Automated SLA Escalations" },
      { num: "05", title: "Real-Time Case Dashboard" },
      { num: "06", title: "Immutable Audit Trails" }
    ],
    outcomes: [
      { value: "60%", label: "Faster Resolution" },
      { value: "45%", label: "Less Manual Effort" },
      { value: "100%", label: "Case Traceability" }
    ],
    technologies: [
      "Appian Case Management", "Process Models", "SAIL Interfaces", "Data Fabric",
      "Business Rules", "SLA Timers", "Role-Based Access", "PostgreSQL",
      "REST APIs", "Audit Logging"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Case Resolution Time",
        value: "60%",
        trend: "60%",
        trendDirection: "down",
        sparklineData: [80, 75, 60, 50, 45, 35, 30, 20],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Effort",
        value: "45%",
        trend: "45%",
        trendDirection: "down",
        sparklineData: [90, 85, 75, 65, 55, 50, 45],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Case Traceability",
        value: "100%",
        trend: "40%",
        trendDirection: "up",
        sparklineData: [60, 65, 75, 85, 95, 100, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "By replacing manual, fragmented processes with a unified platform, the organization significantly boosted productivity and eliminated operational bottlenecks.",
      "The business achieved faster resolution times, higher customer satisfaction, and a resilient, fully compliant operational framework."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
