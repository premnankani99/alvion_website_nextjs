import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/smart-grocery-operations.json";

export default function SmartGroceryOperationsPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
