import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import { CaseStudyData } from "@/types/case-study";
import pageData from "@/data/bill-payment.json";

export default function BillPaymentPage() {
  return <CaseStudyTemplate data={pageData as CaseStudyData} />;
}
