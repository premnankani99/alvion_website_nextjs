import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/warehouse-management-system.json";

export default function WarehouseManagementPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
