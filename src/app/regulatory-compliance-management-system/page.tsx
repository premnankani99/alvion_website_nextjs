import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/regulatory-compliance-management-system.json";

export default function RegulatoryCompliancePage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
