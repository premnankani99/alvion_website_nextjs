import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/digital-insurance-claims.json";

export default function DigitalInsuranceClaimsPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
