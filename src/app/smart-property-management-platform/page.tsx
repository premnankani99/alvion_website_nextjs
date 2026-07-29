import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/smart-property-management-platform.json";

export default function SmartPropertyManagementPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
