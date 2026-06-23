import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function DigitalInsuranceClaimsPage() {
  const pageData: CaseStudyData = {
    id: "digital-insurance-claims",
    title: "Digital Insurance Claims Platform",
    description: "Insurance Claims Process Automation",
    industry: "Insurance",
    projectType: "Claims Process Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading insurance provider was overwhelmed by the high volume of motor and health claims, causing severe operational delays and damaging their reputation for timely payouts.",
      "They needed a centralized, intelligent digital platform to streamline claims processing, reduce fraudulent claims through better data validation, and accelerate settlements."
    ],
    problemIntro: "Manual verification and disconnected legacy systems severely impacted claims efficiency.",
    problems: [
      { title: "Long Settlement Cycles", desc: "Inefficient routing resulted in incredibly long cycles and frustrated customers." },
      { title: "High Fraud Risk", desc: "Manual document review made it difficult to detect duplicate or altered claims." },
      { title: "No SLA Tracking", desc: "Absence of automated tracking led to operational blind spots and regulatory fines." }
    ],
    solution: [
      "An end-to-end Claims Automation Platform was deployed using Appian to digitize and orchestrate the complete claims lifecycle from initial intake to final payout.",
      "The solution integrated intelligent rule-based validation, automated task routing, and comprehensive dashboards to ensure claims teams focused purely on exception handling."
    ],
    modules: [
      { num: "01", title: "Omnichannel Intake Portal" },
      { num: "02", title: "Rule-Based Claim Validation" },
      { num: "03", title: "Automated Task Routing" },
      { num: "04", title: "Evidence Management" },
      { num: "05", title: "SLA Auto-Escalations" },
      { num: "06", title: "Real-Time Adjuster Dashboards" }
    ],
    outcomes: [
      { value: "65%", label: "Faster Settlements" },
      { value: "50%", label: "Reduction in Manual Effort" },
      { value: "30%", label: "Drop in Fraudulent Payouts" }
    ],
    technologies: [
      "Appian Case Management", "Process Models", "Data Fabric", "Business Rules",
      "SLA Timers", "Document Management", "Core Insurance APIs", "Fraud API",
      "PostgreSQL", "Audit Logging"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Settlement Time",
        value: "65%",
        trend: "65%",
        trendDirection: "down",
        sparklineData: [120, 100, 80, 60, 55, 45, 40, 35],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Manual Effort",
        value: "50%",
        trend: "50%",
        trendDirection: "down",
        sparklineData: [90, 85, 75, 65, 55, 50, 45],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Claim Traceability",
        value: "100%",
        trend: "45%",
        trendDirection: "up",
        sparklineData: [55, 60, 75, 85, 95, 100, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The fully digital platform completely transformed the client's operational capabilities, enabling adjusters to focus on high-value investigation and customer support.",
      "The robust tracking and automated communication pipelines dramatically improved customer satisfaction while delivering a staggering 65% improvement in settlement speeds."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
