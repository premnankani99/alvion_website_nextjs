import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/unified-property-operations-platform.json";

export default function UnifiedPropertyOperationsPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
