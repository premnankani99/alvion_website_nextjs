import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/consumer-electronics-brand.json";

export default function ConsumerElectronicsPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
