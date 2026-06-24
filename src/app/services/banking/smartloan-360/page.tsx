import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function SmartLoanCaseStudy() {
  const smartLoanData: CaseStudyData = {
    id: "smartloan-360",
    title: "SmartLoan 360",
    description: "End-to-End Digital Lending Transformation",
    industry: "Banking & Financial Services",
    projectType: "Digital Lending Modernization",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading financial institution sought to modernize its lending operations to address slow processing times and manual bottlenecks. They required a unified digital platform to handle the entire loan lifecycle from origination to disbursal.",
      "By replacing fragmented legacy systems with a streamlined digital approach, the institution aimed to enhance customer experience, ensure stringent compliance, and significantly accelerate loan approvals."
    ],
    problemIntro: "The existing loan processing system was heavily reliant on manual data entry and disconnected applications.",
    problems: [
      { title: "Manual Data Entry", desc: "Heavy reliance on manual entry led to frequent errors and prolonged processing times." },
      { title: "Siloed Operations", desc: "Disconnected systems prevented a unified view of the customer and loan status." },
      { title: "Compliance Risks", desc: "Manual document tracking increased the risk of regulatory non-compliance." }
    ],
    solution: [
      "An end-to-end digital lending platform was implemented using Appian, automating the loan lifecycle from application to final approval and disbursal.",
      "The solution integrated intelligent document processing, automated credit scoring, and dynamic workflows to eliminate manual touchpoints and ensure real-time visibility."
    ],
    modules: [
      { num: "01", title: "Digital Origination Portal" },
      { num: "02", title: "Intelligent Credit Scoring" },
      { num: "03", title: "Automated Document Processing" },
      { num: "04", title: "Risk & Compliance Checks" },
      { num: "05", title: "Dynamic Approval Workflows" },
      { num: "06", title: "Real-Time Tracking Dashboard" }
    ],
    outcomes: [
      { value: "40%", label: "Faster Approvals" },
      { value: "35%", label: "Cost Reduction" },
      { value: "100%", label: "Audit Traceability" }
    ],
    technologies: [
      "Appian Low-Code Platform", "Process Models", "SAIL Interfaces", "Appian RPA",
      "Decision Rules Engine", "Document Management", "Core Banking API", "PostgreSQL",
      "OAuth 2.0 Security", "Audit Logging"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [
      "/screen1.png", "/screen2.png", "/screen3.png", "/screen4.png", "/screen5.png",
      "/screen6.png", "/screen7.png", "/screen8.png", "/screen9.png", "/screen10.png"
    ],
    summaryText: "",
    hideConclusion: true,
    kpiStats: [
      {
        title: "Processing Time",
        value: "12 Mins",
        trend: "50%",
        trendDirection: "down",
        sparklineData: [45, 42, 38, 35, 30, 25, 20, 15, 12],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Admin Workload",
        value: "1.2 Hrs",
        trend: "40%",
        trendDirection: "down",
        sparklineData: [80, 75, 78, 65, 60, 55, 45, 42, 40],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Satisfaction",
        value: "91%",
        trend: "25%",
        trendDirection: "up",
        sparklineData: [60, 65, 62, 70, 75, 80, 85, 88, 91],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ]
  };

  return <CaseStudyTemplate data={smartLoanData} />;
}
