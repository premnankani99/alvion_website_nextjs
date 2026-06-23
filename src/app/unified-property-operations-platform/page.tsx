import CaseStudyClassicSidebarTemplate from "@/components/CaseStudyClassicSidebarTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function UnifiedPropertyOperationsPage() {
  const pageData: CaseStudyData = {
    id: "unified-property-operations-platform",
    title: "Unified Property Operations Platform",
    description: "Property Listing & Management System",
    industry: "Real Estate",
    projectType: "Property Listing & Management System",
    platform: "Web & Mobile Application",
    overview: [
      "A leading real estate services company, managing a vast portfolio of residential and commercial properties across multiple metropolitan cities, recognized the need to modernize their technology stack. The company's goal was to build a unified digital platform that could handle everything from property listings to broker management and internal backend operations.",
      "The core objective was to combine enterprise-grade workflow automation, ensuring rigorous compliance and data integrity, with a modern, high-performance web and mobile user experience to attract buyers and empower field agents."
    ],
    problemIntro: "Prior to the transformation, the company's growth was severely hindered by legacy systems and manual operational processes:",
    problems: [
      {
        title: "Fragmented Property Data",
        desc: "Property data was scattered across disparate spreadsheets, localized databases, and disconnected third-party listing platforms, leading to data silos."
      },
      {
        title: "Broker Inefficiencies",
        desc: "Brokers constantly struggled with duplicate property listings, delayed management approvals, and a complete lack of real-time inventory visibility when in the field."
      },
      {
        title: "Lack of Structured Workflows",
        desc: "The absence of structured, automated workflows for onboarding new properties and verifying tenant data caused severe bottlenecks."
      },
      {
        title: "Impacted Lead Conversion",
        desc: "Because data was not centralized, potential buyer leads often fell through the cracks, severely impacting overall lead conversion rates and operational efficiency."
      }
    ],
    solution: [
      "Alvion Technologies engineered a powerful hybrid digital solution. Appian was implemented as the core backend platform to drive enterprise workflow automation, rigorous approval routing, and robust master data management.",
      "Simultaneously, custom ReactJS and React Native applications were developed to deliver high-performance, responsive web and mobile experiences. Appian seamlessly handled complex backend processes such as property onboarding, broker KYC approvals, role-based security access, and compliance reporting.",
      "Meanwhile, the React-based frontend applications enabled buyers, sellers, and brokers to search, filter, and manage property portfolios in real time with an incredibly intuitive user interface."
    ],
    modules: [
      { num: "01", title: "Appian Workflow Automation" },
      { num: "02", title: "ReactJS Web Portal" },
      { num: "03", title: "React Native Broker App" },
      { num: "04", title: "Real-Time Inventory Sync" },
      { num: "05", title: "Broker KYC & Onboarding" },
      { num: "06", title: "Advanced Lead Management" }
    ],
    outcomes: [
      { value: "65%", label: "Faster Listing Approvals" },
      { value: "50%", label: "Increase in User Engagement" },
      { value: "40%", label: "Operational Cost Reduction" }
    ],
    technologies: [
      { name: "Appian Low-Code Platform", icon: "", bg: "bg-blue-50/60" },
      { name: "Appian Records & Data Fabric", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Process Models", icon: "", bg: "bg-blue-50/60" },
      { name: "Appian SAIL Interfaces", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Portals & Security", icon: "", bg: "bg-blue-50/60" },
      { name: "ReactJS (Web Frontend)", icon: "", bg: "bg-indigo-50/60" },
      { name: "React Native (iOS & Android)", icon: "", bg: "bg-blue-50/60" },
      { name: "REST API Integration", icon: "", bg: "bg-indigo-50/60" },
      { name: "PostgreSQL / Oracle Database", icon: "", bg: "bg-blue-50/60" },
      { name: "Cloud Deployment (AWS / Azure)", icon: "", bg: "bg-indigo-50/60" },
      { name: "Analytics & Reporting", icon: "", bg: "bg-blue-50/60" }
    ],
    kpiStats: [
      {
        title: "Faster Listing Approvals",
        value: "65%",
        trend: "65%",
        trendDirection: "down",
        sparklineData: [85, 75, 60, 50, 45, 40, 35],
        sparklineColor: "#3b82f6",
        iconType: "clock"
      },
      {
        title: "User Engagement",
        value: "50%",
        trend: "50%",
        trendDirection: "up",
        sparklineData: [40, 45, 55, 65, 70, 80, 90],
        sparklineColor: "#f59e0b",
        iconType: "heart"
      },
      {
        title: "Operational Cost Reduction",
        value: "40%",
        trend: "40%",
        trendDirection: "down",
        sparklineData: [100, 90, 85, 80, 75, 65, 60],
        sparklineColor: "#10b981",
        iconType: "document"
      }
    ],
    conclusion: [
      "The hybrid platform delivered a truly seamless and connected experience for property owners, external brokers, and prospective buyers, completely revolutionizing the client's service delivery model.",
      "By automating the property lifecycle, the solution drastically reduced manual administrative effort, ensured 100% data accuracy across all channels, and provided the digital foundation necessary for the client to rapidly scale their operations into new geographic regions with minimal overhead."
    ]
  };

  return <CaseStudyClassicSidebarTemplate data={pageData} />;
}
