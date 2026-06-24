import CaseStudyClassicSidebarTemplate from "@/components/CaseStudyClassicSidebarTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function SmartPropertyManagementPage() {
  const pageData: CaseStudyData = {
    id: "smart-property-management-platform",
    title: "Smart Property Management Platform",
    description: "Property management automation",
    industry: "Real Estate",
    projectType: "Property management automation",
    platform: "Web & Mobile Application",
    overview: [
      "A premium residential community in Mumbai, managing over 500 luxury apartments across multiple high-rise towers, was facing significant operational challenges. The management team relied on fragmented systems for daily operations, including manual maintenance tracking, inefficient billing cycles, and disjointed resident communication.",
      "As the community expanded, the volume of service requests and financial transactions increased dramatically, exposing the limitations of their existing infrastructure. The management team urgently needed a unified, scalable digital platform capable of improving service quality, increasing financial transparency, and driving overall operational efficiency."
    ],
    problemIntro: "Before digitalization, the client faced several critical operational bottlenecks that slowed down daily operations and impacted the resident experience:",
    problems: [
      {
        title: "Disconnected Maintenance Systems",
        desc: "The property relied entirely on disconnected systems and paper-based processes for maintenance requests, leading to lost tickets, delayed resolutions, and an inability to track service SLAs effectively."
      },
      {
        title: "Billing & Financial Inefficiencies",
        desc: "Manual billing and collection processes caused frequent errors, delayed payments, and required residents to constantly follow up for updates or dispute inaccurate charges."
      },
      {
        title: "Fragmented Resident Communication",
        desc: "Important announcements and community updates were shared through disparate channels, resulting in missed information and a lack of community engagement."
      },
      {
        title: "Poor Operational Visibility",
        desc: "Staff struggled to maintain service consistency and visibility across operations, lacking real-time data to optimize workforce deployment, resulting in rising costs and low satisfaction."
      }
    ],
    solution: [
      "Alvion Technologies partnered with the management committee to deploy a centralized smart property management platform designed to automate end-to-end community operations. The solution seamlessly integrated maintenance workflows, digital billing, resident communication, and asset monitoring into a single unified ecosystem.",
      "The implementation provided administrative staff with comprehensive real-time dashboards to track KPIs, while residents were empowered with an intuitive mobile application. Automated notifications and role-based access controls were established to streamline operations, enforce accountability, and dramatically improve transparency across the entire community."
    ],
    modules: [
      { num: "01", title: "Automated Maintenance Ticketing" },
      { num: "02", title: "Integrated Billing & Payment Gateway" },
      { num: "03", title: "Resident Self-Service Mobile App" },
      { num: "04", title: "Real-Time Asset Monitoring" },
      { num: "05", title: "Omnichannel Notifications" },
      { num: "06", title: "Vendor & Staff Management" }
    ],
    outcomes: [
      { value: "75%", label: "Reduction in Response Time" },
      { value: "92%", label: "Resident Satisfaction" },
      { value: "40%", label: "Cost Savings" }
    ],
    technologies: [
      { name: "Appian Low-Code Platform", icon: "", bg: "bg-blue-50/60" },
      { name: "Appian Records & Data Fabric", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Process Models", icon: "", bg: "bg-blue-50/60" },
      { name: "SAIL Interfaces (Dynamic UI)", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Portals (User & Admin)", icon: "", bg: "bg-blue-50/60" },
      { name: "API Integration", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Security & Role-Based Access", icon: "", bg: "bg-blue-50/60" },
      { name: "PostgreSQL / Oracle Database", icon: "", bg: "bg-indigo-50/60" },
      { name: "Third-Party Payment Gateway Integration", icon: "", bg: "bg-blue-50/60" },
      { name: "Email Notification Services", icon: "", bg: "bg-indigo-50/60" },
      { name: "Single Sign-On (SSO)", icon: "", bg: "bg-blue-50/60" },
      { name: "Audit Trails & Compliance Logging", icon: "", bg: "bg-indigo-50/60" }
    ],
    kpiStats: [
      {
        title: "Reduction in Response Time",
        value: "15 Mins",
        trend: "75%",
        trendDirection: "down",
        sparklineData: [80, 70, 60, 50, 45, 30, 25],
        sparklineColor: "#3b82f6",
        iconType: "clock"
      },
      {
        title: "Resident Satisfaction",
        value: "2.5x",
        trend: "92%",
        trendDirection: "up",
        sparklineData: [50, 55, 65, 75, 80, 88, 92],
        sparklineColor: "#f59e0b",
        iconType: "heart"
      },
      {
        title: "Cost Savings",
        value: "1.2 Hrs",
        trend: "40%",
        trendDirection: "down",
        sparklineData: [100, 95, 85, 80, 70, 65, 60],
        sparklineColor: "#10b981",
        iconType: "document"
      }
    ],
    conclusion: [
      "The deployment of the smart property management platform significantly improved maintenance turnaround times, entirely eliminated historical billing disputes, and enhanced the premium living experience for all residents.",
      "Through intelligent automation, the community management reduced manual administrative effort by over 60%, optimized staffing requirements, and enabled data-driven decision making. The scalable architecture ensures the platform can easily adapt to future community expansions and technological integrations."
    ]
  };

  return <CaseStudyClassicSidebarTemplate data={pageData} />;
}
