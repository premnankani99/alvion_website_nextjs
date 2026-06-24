import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function OmnichannelRetailPage() {
  const pageData: CaseStudyData = {
    id: "omnichannel-retail-transformation",
    title: "Omnichannel Retail Transformation",
    description: "Intelligent Inventory Modernization",
    industry: "Grocery & FMCG Retail",
    projectType: "Supply Chain Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading regional grocery and FMCG retail chain operating more than 120 stores across urban and semi-urban markets partnered with Alvion Technologies to modernize its supply chain and store operations.",
      "Managing thousands of SKUs including perishable goods and fast-moving consumer products, the organization required a scalable, intelligent system to improve product availability, reduce wastage, and enhance real-time operational visibility."
    ],
    problemIntro: "The retailer relied on manual replenishment planning and disconnected systems between suppliers, warehouses, and stores.",
    problems: [
      { title: "Frequent Stockouts", desc: "Disconnected systems resulted in frequent stockouts of high-demand products." },
      { title: "Margin Erosion", desc: "Overstocking of perishable items led to massive inventory losses and margin erosion." },
      { title: "Approval Bottlenecks", desc: "Procurement approvals via emails limited transparency and slowed supplier coordination." }
    ],
    solution: [
      "Alvion Technologies implemented a centralized retail operations platform powered by Appian for workflow automation and seamless supply chain orchestration.",
      "AI-driven demand forecasting models analyzed seasonal patterns, regional buying behavior, and promotional trends to automatically trigger smart replenishment cycles."
    ],
    modules: [
      { num: "01", title: "Automated Procurement" },
      { num: "02", title: "Vendor Onboarding Portal" },
      { num: "03", title: "Inter-Store Transfers" },
      { num: "04", title: "AI Demand Forecasting" },
      { num: "05", title: "Warehouse Sync" },
      { num: "06", title: "Real-Time Analytics" }
    ],
    outcomes: [
      { value: "32%", label: "Reduction in Inventory Wastage" },
      { value: "28%", label: "Faster Replenishment Cycles" },
      { value: "40%", label: "Improved Stock Accuracy" }
    ],
    technologies: [
      "Appian Low-Code Platform", "Appian Process Models", "SAIL Interfaces", "Azure Cloud",
      "AI Demand Forecasting", "Machine Learning Models", "DevOps CI/CD", "Power BI Analytics",
      "PostgreSQL / Oracle", "RESTful APIs"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Inventory Wastage",
        value: "10K+",
        trend: "32%",
        trendDirection: "down",
        sparklineData: [80, 75, 70, 60, 55, 45, 40],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Replenishment Time",
        value: "10K+",
        trend: "28%",
        trendDirection: "down",
        sparklineData: [90, 85, 75, 60, 45, 40, 36],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Stock Accuracy",
        value: "1.2 Hrs",
        trend: "40%",
        trendDirection: "up",
        sparklineData: [60, 65, 70, 80, 85, 95, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The transformation significantly improved supply chain transparency and operational efficiency across the retail network. Automated workflows reduced approval delays and predictive analytics minimized stock imbalances.",
      "The retailer now operates on a scalable digital foundation capable of supporting rapid expansion while maintaining healthy margins and consistent product availability."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
