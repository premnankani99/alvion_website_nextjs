import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function LoanAutomationPage() {
  const pageData: CaseStudyData = {
    id: "loan-automation",
    title: "Commercial Loan Automation",
    description: "Streamlined Underwriting & Disbursement Workflow",
    industry: "Commercial Banking",
    projectType: "Lending Operations Modernization",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading commercial bank struggled with notoriously slow loan underwriting cycles, bogged down by manual risk assessments, vast paperwork, and disparate review systems.",
      "They required a unified, intelligent automation solution to drastically cut turnaround times, enhance underwriting accuracy, and seamlessly orchestrate complex multi-tier approvals."
    ],
    problemIntro: "Manual underwriting and fragmented data silos hindered the bank's ability to process loans efficiently.",
    problems: [
      { title: "Sluggish Underwriting", desc: "Data gathering from disparate systems resulted in weeks-long evaluation cycles." },
      { title: "Error-Prone Risk Checks", desc: "Manual risk calculation frequently led to mispriced loans and compliance gaps." },
      { title: "Approval Bottlenecks", desc: "Multi-tier approvals stalled entirely when key decision-makers were unavailable." }
    ],
    solution: [
      "A comprehensive Commercial Loan Automation platform was rapidly developed, centralizing the entire underwriting workflow into a single, intuitive interface.",
      "The system utilized intelligent business rules, OCR data extraction, and seamless integrations with external credit bureaus to automate risk scoring and expedite final decisions."
    ],
    modules: [
      { num: "01", title: "Automated Data Extraction" },
      { num: "02", title: "Intelligent Risk Scoring" },
      { num: "03", title: "Credit Bureau Integration" },
      { num: "04", title: "Dynamic Approval Hierarchy" },
      { num: "05", title: "Collateral Management" },
      { num: "06", title: "Compliance Reporting Engine" }
    ],
    outcomes: [
      { value: "70%", label: "Faster Underwriting" },
      { value: "40%", label: "Boost in Loan Volume" },
      { value: "100%", label: "SLA Adherence" }
    ],
    technologies: [
      "Appian Workflows", "OCR Document Processing", "Credit API Integrations", "Business Rules",
      "Case Management", "Data Fabric", "Role-Based Access", "PostgreSQL",
      "Automated Alerts", "Audit Logging"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Underwriting Time",
        value: "2 Hrs",
        trend: "85%",
        trendDirection: "down",
        sparklineData: [48, 40, 32, 24, 16, 8, 4, 2],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Entry",
        value: "5%",
        trend: "90%",
        trendDirection: "down",
        sparklineData: [95, 80, 65, 50, 35, 20, 10, 5],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Approval Rate",
        value: "82%",
        trend: "12%",
        trendDirection: "up",
        sparklineData: [70, 72, 74, 76, 78, 80, 82],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The deployment of the Loan Automation platform successfully eliminated manual bottlenecks, empowering underwriters to focus purely on complex risk analysis rather than data gathering.",
      "The bank realized immediate ROI through faster disbursements, significantly higher loan processing volumes, and flawless adherence to internal SLAs."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
