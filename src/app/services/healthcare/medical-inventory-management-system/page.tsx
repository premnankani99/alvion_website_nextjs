import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function MedicalInventoryManagementPage() {
  const pageData: CaseStudyData = {
    id: "medical-inventory-management-system",
    title: "Medical Inventory Management System",
    description: "Inventory & Supply Chain Automation",
    industry: "Healthcare",
    projectType: "Inventory & Supply Chain Automation",
    platform: "Appian Low-Code Platform",
    overview: [
      "A vast multi-location hospital network, tasked with managing tens of thousands of critical medical supplies, pharmaceuticals, and surgical consumables, was continuously battling severe supply chain inefficiencies. Their inventory was tracked manually using disparate spreadsheets and localized, siloed software systems.",
      "This outdated approach resulted in frequent stock shortages of life-saving equipment, an unacceptably high rate of expired inventory, and almost zero centralized visibility across their various departments and regional warehouses."
    ],
    problemIntro: "Prior to the implementation, the supply chain operations suffered from critical operational vulnerabilities:",
    problems: [
      {
        title: "Inaccurate Stock Tracking",
        desc: "The hospital struggled with wildly inaccurate stock levels and a complete lack of batch and expiry tracking across warehouses, pharmacies, and clinical departments."
      },
      {
        title: "Delayed Procurement",
        desc: "Procurement cycles were bogged down by slow, manual approval workflows, delaying the replenishment of critical medical supplies."
      },
      {
        title: "Emergency Shortages",
        desc: "The lack of a centralized, real-time inventory view frequently led to emergency stock-outs, directly impacting patient care and operational efficiency."
      }
    ],
    solution: [
      "Alvion Technologies successfully implemented a comprehensive, Appian-powered Medical Inventory Management System to digitally transform the hospital network's entire supply chain. The platform completely automated end-to-end inventory tracking, dynamic procurement workflows, multi-tiered approvals, and supplier coordination.",
      "By establishing a centralized data fabric, the solution provided hospital administrators and clinical staff with unified, real-time visibility into exact stock levels, critical expiry dates, and historical usage patterns across all hospital locations and distributed pharmacies."
    ],
    modules: [
      { num: "01", title: "Real-time Inventory Tracking" },
      { num: "02", title: "Automated Procurement Workflows" },
      { num: "03", title: "Batch & Expiry Management" },
      { num: "04", title: "Multi-location Stock Visibility" },
      { num: "05", title: "Vendor Coordination Portal" },
      { num: "06", title: "Predictive Shortage Alerts" }
    ],
    outcomes: [
      { value: "70%", label: "Reduction in Stock Shortages" },
      { value: "60%", label: "Faster Procurement Cycles" },
      { value: "95%", label: "Inventory Accuracy" },
      { value: "40%", label: "Cost Optimization" }
    ],
    technologies: [
      { name: "Appian Low-Code Platform", icon: "", bg: "bg-blue-50/60" },
      { name: "Appian Case Management", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Records & Data Fabric", icon: "", bg: "bg-blue-50/60" },
      { name: "SAIL Dynamic Interfaces", icon: "", bg: "bg-indigo-50/60" },
      { name: "Appian Process Models", icon: "", bg: "bg-blue-50/60" },
      { name: "Role-Based Access Control", icon: "", bg: "bg-indigo-50/60" },
      { name: "Batch & Expiry Tracking", icon: "", bg: "bg-blue-50/60" },
      { name: "Automated Procurement Workflows", icon: "", bg: "bg-indigo-50/60" },
      { name: "Vendor Management", icon: "", bg: "bg-blue-50/60" },
      { name: "Audit Trails & Compliance Logging", icon: "", bg: "bg-indigo-50/60" },
      { name: "Email & Notification Services", icon: "", bg: "bg-blue-50/60" },
      { name: "REST API Integrations", icon: "", bg: "bg-indigo-50/60" },
      { name: "Cloud Deployment", icon: "", bg: "bg-blue-50/60" }
    ],
    kpiStats: [
      {
        title: "Reduction in Stock Shortages",
        value: "5K+",
        trend: "70%",
        trendDirection: "down",
        sparklineData: [85, 75, 60, 50, 45, 40, 30],
        sparklineColor: "#3b82f6",
        iconType: "clock"
      },
      {
        title: "Inventory Accuracy",
        value: "2.5x",
        trend: "95%",
        trendDirection: "up",
        sparklineData: [40, 50, 60, 75, 80, 90, 95],
        sparklineColor: "#f59e0b",
        iconType: "heart"
      },
      {
        title: "Cost Optimization",
        value: "1.2 Hrs",
        trend: "40%",
        trendDirection: "down",
        sparklineData: [100, 95, 85, 80, 70, 65, 60],
        sparklineColor: "#10b981",
        iconType: "document"
      }
    ],
    conclusion: [
      "The implementation of the automated inventory management system revolutionized the hospital's supply chain operations. The solution virtually eliminated dangerous emergency stock-outs, drastically reduced financial losses tied to expired inventory, and significantly improved coordination between clinical teams and procurement departments.",
      "Through automated low-stock alerts and powerful analytics dashboards, hospital leadership was empowered to make proactive, data-driven purchasing decisions, ensuring the uninterrupted, cost-effective availability of all critical medical supplies."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
