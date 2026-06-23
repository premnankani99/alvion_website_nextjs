import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function FixedDepositPage() {
  const pageData: CaseStudyData = {
    id: "fixed-diposit",
    title: "Fixed Deposit Modernization",
    description: "Automated Fixed Deposit Processing System",
    industry: "Retail Banking",
    projectType: "Core Banking Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A prominent retail bank wanted to simplify its fixed deposit origination and management processes, which were previously burdened by excessive paperwork and manual verification.",
      "The goal was to create a seamless, paperless experience that allowed customers to open and manage deposits instantly while ensuring full compliance with KYC regulations."
    ],
    problemIntro: "Manual verifications and disparate systems caused frustrating delays for customers opening new deposit accounts.",
    problems: [
      { title: "Slow Onboarding", desc: "Paper-based processes led to lengthy account opening times." },
      { title: "Manual KYC Checks", desc: "Verification of identity documents was manual and error-prone." },
      { title: "Fragmented Tracking", desc: "Customers had no visibility into their deposit status without calling the branch." }
    ],
    solution: [
      "A fully digital Fixed Deposit platform was deployed, integrating direct customer portals with core banking backends for instant processing.",
      "The system utilized automated KYC verification, digital signatures, and straight-through processing to instantly provision accounts upon customer request."
    ],
    modules: [
      { num: "01", title: "Digital Onboarding Portal" },
      { num: "02", title: "Automated KYC Integration" },
      { num: "03", title: "Interest Calculation Engine" },
      { num: "04", title: "Digital Signatures" },
      { num: "05", title: "Core Banking Sync" },
      { num: "06", title: "Customer Self-Service Hub" }
    ],
    outcomes: [
      { value: "85%", label: "Faster Account Opening" },
      { value: "60%", label: "Reduction in Paperwork" },
      { value: "95%", label: "First-Time Resolution" }
    ],
    technologies: [
      "Appian Portals", "Integration SDK", "Identity Verification APIs", "Appian Records",
      "Process Modeler", "Business Rules", "Core Banking API", "Secure Cloud Storage",
      "E-Signature Integration", "Analytics Dashboard"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Account Setup Time",
        value: "3 Mins",
        trend: "80%",
        trendDirection: "down",
        sparklineData: [15, 12, 10, 8, 6, 5, 4, 3],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Verification",
        value: "15%",
        trend: "65%",
        trendDirection: "down",
        sparklineData: [80, 70, 60, 45, 30, 20, 15],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "User Retention",
        value: "88%",
        trend: "30%",
        trendDirection: "up",
        sparklineData: [58, 62, 65, 72, 78, 84, 88],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The new platform completely revitalized the bank's fixed deposit offerings, transforming a tedious chore into an instant, satisfying customer journey.",
      "With automated processing and zero manual friction, the bank saw a rapid increase in new deposits and a significant drop in operational overhead."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
