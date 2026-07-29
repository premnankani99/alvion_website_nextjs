import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/loan-automation.json";

export default function LoanAutomationPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
