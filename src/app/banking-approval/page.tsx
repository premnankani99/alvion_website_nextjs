import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/banking-approval.json";

export default function BankingApprovalPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
