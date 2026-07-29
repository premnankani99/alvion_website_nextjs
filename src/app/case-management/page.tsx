import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/case-management.json";

export default function CaseManagementPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
