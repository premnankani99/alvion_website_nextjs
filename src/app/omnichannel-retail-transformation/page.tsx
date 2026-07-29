import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/omnichannel-retail-transformation.json";

export default function OmnichannelRetailPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
