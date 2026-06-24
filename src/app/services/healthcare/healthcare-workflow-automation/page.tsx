import CaseStudyClassicSidebarTemplate from "@/components/CaseStudyClassicSidebarTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function HealthcareWorkflowAutomationPage() {
  const pageData: CaseStudyData = {
    id: "healthcare-workflow-automation",
    title: "Healthcare Workflow Automation",
    description: "Workflow & Case Management Automation",
    industry: "Healthcare",
    projectType: "Workflow & Case Management Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading multi-specialty hospital network, handling thousands of daily patient interactions across numerous clinical and administrative departments, faced severe operational bottlenecks. Their workflows—spanning admissions, diagnostics, billing, discharge, and compliance reporting—were heavily fragmented.",
      "Manual handoffs, paper-based forms, and siloed software systems resulted in unacceptable processing delays, an increased risk of medical and administrative errors, and a poor overall patient experience. The organization urgently needed a centralized digital orchestration layer to unify these disparate processes."
    ],
    problemIntro: "Prior to the implementation, the hospital network faced several critical challenges that impacted both patient care and internal efficiency:",
    problems: [
      {
        title: "Manual Process Dependency",
        desc: "Healthcare operations relied heavily on manual approvals, paper-based routing, and disconnected legacy systems, severely hampering organizational agility."
      },
      {
        title: "Lack of Workflow Visibility",
        desc: "Patient intake, diagnostic approvals, discharge processes, and compliance reporting lacked real-time visibility and standardization."
      },
      {
        title: "Extended Turnaround Times",
        desc: "The fragmented nature of the workflow led to extended patient wait times, delayed diagnoses, and highly inefficient use of clinical staff."
      }
    ],
    solution: [
      "Alvion Technologies partnered with the hospital network to architect and deploy a centralized healthcare workflow automation platform powered by the Appian Low-Code environment. The solution served as an intelligent orchestration layer, seamlessly connecting end-to-end patient journeys and internal operational workflows.",
      "The platform successfully automated complex approval chains, intelligent task routing, real-time notifications, and rigorous compliance tracking across all departments. Crucially, it was deeply integrated with the hospital's existing HIS (Hospital Information System) and EHR (Electronic Health Records) systems to ensure a single source of truth."
    ],
    modules: [
      { num: "01", title: "Patient Intake Automation" },
      { num: "02", title: "Diagnostic Approval Workflows" },
      { num: "03", title: "Discharge & Billing Orchestration" },
      { num: "04", title: "Real-time Compliance Tracking" },
      { num: "05", title: "HIS/EHR System Integration" },
      { num: "06", title: "Operational Dashboards" }
    ],
    outcomes: [
      { value: "65%", label: "Faster Patient Processing" },
      { value: "50%", label: "Reduction in Manual Effort" },
      { value: "90%", label: "Process Visibility" },
      { value: "99%", label: "Compliance Accuracy" }
    ],
    technologies: [
      { name: "Appian Low-Code Platform", icon: "", bg: "bg-blue-50/60" },
      { name: "Appian Case Management", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Process Models", icon: "", bg: "bg-blue-50/60" },
      { name: "SAIL Interfaces (Dynamic UI)", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Records & Data Fabric", icon: "", bg: "bg-blue-50/60" },
      { name: "Role-Based Access Control", icon: "", bg: "bg-indigo-50/60" },
      { name: "Integration with HIS / EHR Systems", icon: "", bg: "bg-blue-50/60" },
      { name: "Document Management", icon: "", bg: "bg-indigo-50/60" },
      { name: "Audit Trails & Compliance Logging", icon: "", bg: "bg-blue-50/60" },
      { name: "Email & SMS Notifications", icon: "", bg: "bg-indigo-50/60" },
      { name: "REST APIs", icon: "", bg: "bg-blue-50/60" },
      { name: "Cloud Deployment", icon: "", bg: "bg-indigo-50/60" }
    ],
    kpiStats: [
      {
        title: "Faster Patient Processing",
        value: "15 Mins",
        trend: "65%",
        trendDirection: "down",
        sparklineData: [85, 75, 60, 50, 45, 40, 35],
        sparklineColor: "#3b82f6",
        iconType: "clock"
      },
      {
        title: "Process Visibility",
        value: "2.5x",
        trend: "90%",
        trendDirection: "up",
        sparklineData: [20, 30, 45, 60, 70, 85, 90],
        sparklineColor: "#f59e0b",
        iconType: "heart"
      },
      {
        title: "Compliance Accuracy",
        value: "24/7",
        trend: "99%",
        trendDirection: "up",
        sparklineData: [60, 70, 80, 85, 90, 95, 99],
        sparklineColor: "#10b981",
        iconType: "document"
      }
    ],
    conclusion: [
      "The deployment of the centralized workflow automation platform delivered transformative results. The healthcare organization achieved dramatic improvements in patient flow, significantly reduced administrative overhead, and ensured 100% consistent compliance with stringent healthcare regulations.",
      "Real-time operational dashboards empowered hospital administrators to proactively monitor bottlenecks, optimize resource allocation, and dramatically improve coordination between clinical and non-clinical teams, ultimately resulting in a superior standard of patient care."
    ]
  };

  return <CaseStudyClassicSidebarTemplate data={pageData} />;
}
