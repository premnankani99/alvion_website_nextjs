import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";

export default function WarehouseManagementPage() {
  const pageData: CaseStudyData = {
    id: "warehouse-management-system",
    title: "Warehouse Management System",
    description: "Global eCommerce Fulfilment Platform",
    industry: "Logistics & eCommerce Fulfilment",
    projectType: "Warehouse Management Platform",
    platform: "Appian Low-Code Platform",
    overview: [
      "A leading eCommerce fulfilment and 3PL logistics provider required a digital system to manage warehouse operations, inventory, and order processing across multiple distribution centres.",
      "The objective was to build a scalable platform accessible via web and mobile devices to streamline operations, improve order accuracy, and provide real-time inventory visibility."
    ],
    problemIntro: "Traditional warehouse workflows lacked automation and resulted in severe delays and manual errors.",
    problems: [
      { title: "Delayed Processing", desc: "High volumes of eCommerce orders overwhelmed manual processing systems." },
      { title: "Inaccurate Inventory", desc: "Lack of barcode scanning led to frequent picking errors and stock discrepancies." },
      { title: "Limited Visibility", desc: "Stakeholders had no real-time visibility into inventory and shipment status." }
    ],
    solution: [
      "We developed a custom Warehouse Management System featuring a centralized web portal for managers and a ruggedized mobile application for warehouse staff.",
      "The platform optimized picking, packing, and shipment workflows using integrated barcode scanning, significantly improving inventory accuracy and processing speed."
    ],
    modules: [
      { num: "01", title: "Multi-Warehouse Inventory" },
      { num: "02", title: "Order Processing Engine" },
      { num: "03", title: "Mobile Pick & Pack" },
      { num: "04", title: "Barcode Validation" },
      { num: "05", title: "Shipment Integration" },
      { num: "06", title: "Real-Time Dashboards" }
    ],
    outcomes: [
      { value: "75%", label: "Faster Processing" },
      { value: "99%", label: "Inventory Accuracy" },
      { value: "100%", label: "Real-Time Visibility" }
    ],
    technologies: [
      "Appian Low-Code", "Android (Kotlin)", "RESTful APIs", "Barcode SDK",
      "Honeywell Integration", "Process Models", "PostgreSQL", "Order API",
      "Warehouse Dashboards", "MDM Integration"
    ].map(name => ({ name, icon: "", bg: "" })),
    sliderImages: [],
    summaryText: "",
    kpiStats: [
      {
        title: "Processing Time",
        value: "75%",
        trend: "75%",
        trendDirection: "down",
        sparklineData: [150, 130, 110, 80, 60, 50, 35],
        sparklineColor: "#9c27b0",
        iconType: "clock"
      },
      {
        title: "Picking Errors",
        value: "99%",
        trend: "95%",
        trendDirection: "down",
        sparklineData: [45, 30, 20, 10, 5, 2, 1],
        sparklineColor: "#ff9800",
        iconType: "document"
      },
      {
        title: "Visibility",
        value: "100%",
        trend: "90%",
        trendDirection: "up",
        sparklineData: [10, 20, 35, 55, 75, 90, 100],
        sparklineColor: "#ffeb3b",
        iconType: "heart"
      }
    ],
    conclusion: [
      "The custom Warehouse Management System revolutionized fulfilment operations, enabling the 3PL provider to seamlessly scale and handle surging eCommerce demand.",
      "With mobile-enabled pick and pack workflows, warehouse staff achieved near-perfect accuracy and dramatically faster processing times across all locations."
    ]
  };

  return <CaseStudyTemplate data={pageData} />;
}
