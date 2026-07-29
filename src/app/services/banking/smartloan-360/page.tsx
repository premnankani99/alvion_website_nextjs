import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/smartloan-360.json";

export default function SmartLoanCaseStudy() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
