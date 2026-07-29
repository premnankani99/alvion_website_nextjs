import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/medical-inventory-management-system.json";

export default function MedicalInventoryManagementPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
