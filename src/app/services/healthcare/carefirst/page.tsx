import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/carefirst.json";

export default function HealthcareCaseStudy() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
