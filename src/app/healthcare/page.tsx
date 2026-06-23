import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import healthcareData from "@/data/healthcare.json";

export default function HealthcareCaseStudy() {
  return <CaseStudyTemplate data={healthcareData} />;
}
