import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/enterprise-grc-automation-platform.json";

export default function EnterpriseGRCPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
