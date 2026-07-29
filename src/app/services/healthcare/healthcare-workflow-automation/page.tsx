import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/healthcare-workflow-automation.json";

export default function HealthcareWorkflowAutomationPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
