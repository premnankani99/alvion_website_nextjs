import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function BankingApprovalPage() {
  const pageData: CaseStudyData = {
    id: "banking-approval",
    title: "Centralized Banking Approvals",
    description: "Enterprise Exception & Approval Management",
    industry: "Corporate Banking",
    projectType: "Workflow & Operations Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A global corporate bank faced massive operational delays due to unstructured, email-based exception and approval processes spanning multiple departments.",
      "They required a centralized, easily auditable approval engine to standardize decision-making, enforce strict SLA tracking, and eliminate compliance vulnerabilities."
    ],
    problemIntro: "Email-driven approvals caused severe delays, lost requests, and audit failures.",
    problems: [
      { title: "Lost Requests", desc: "Critical approvals routinely slipped through the cracks in overflowing email inboxes." },
      { title: "No Traceability", desc: "Auditors struggled to track the decision history and rationale behind major exceptions." },
      { title: "Missed SLAs", desc: "Lack of automated reminders led to systematic breaches of internal operational SLAs." }
    ],
    solution: [
      "A highly scalable Centralized Approval Hub was built on Appian, completely replacing email chains with structured, rule-driven workflow forms.",
      "The hub auto-routed requests to appropriate stakeholders based on financial thresholds, triggered escalating alerts, and maintained an unalterable audit trail for every action taken."
    ],
    modules: [
      { num: "01", title: "Standardized Intake Forms" },
      { num: "02", title: "Smart Routing Engine" },
      { num: "03", title: "Threshold-Based Approvals" },
      { num: "04", title: "Automated Escalations" },
      { num: "05", title: "Executive Dashboard" },
      { num: "06", title: "Immutable Audit Vault" }
    ],
    outcomes: [
      { value: "80%", label: "Faster Decisions" },
      { value: "100%", label: "Audit Compliance" },
      { value: "0", label: "Lost Approval Requests" }
    ],
    technologies: [
      "Appian Workflows", "Dynamic Forms", "Business Rules", "SLA Timers",
      "Active Directory Sync", "Data Fabric", "Email Integration", "PostgreSQL",
      "Executive Analytics", "Secure Logging"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Approval Wait Time",
        value: "5 Mins",
        trend: "75%",
        trendDirection: "down",
        sparklineData: [45, 40, 35, 25, 20, 15, 10, 5],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Exception Drag",
        value: "8%",
        trend: "50%",
        trendDirection: "down",
        sparklineData: [35, 30, 28, 22, 18, 15, 12, 8],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "SLA Compliance",
        value: "100%",
        trend: "10%",
        trendDirection: "up",
        sparklineData: [90, 92, 94, 95, 96, 98, 99, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "By centralizing all exception management, the bank completely eliminated email bottlenecks and achieved 100% adherence to their strict compliance standards.",
      "The robust workflow engine provided executives with unprecedented operational clarity, accelerating critical business decisions across the entire organization."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
