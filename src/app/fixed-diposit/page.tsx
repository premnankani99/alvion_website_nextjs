import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/fixed-diposit.json";

export default function FixedDepositPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
