import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const governanceCaseStudies = [
  {
    title: "Enterprise GRC Automation Platform",
    desc: "",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1752697589029-0fd0ce96a395?auto=format&fit=crop&w=3600&h=2160", 
    link: "/enterprise-grc-automation-platform"
  },
  {
    title: "Regulatory Compliance Management System",
    desc: "",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=3600&h=2160",
    link: "/regulatory-compliance-management-system"
  }
];

export default function GovernancePage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="pt-2 mb-6">
            <Link href="/services#case-studies" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest">
              &larr; Back to Services
            </Link>
          </div>
          <h1 className="text-5xl font-bold text-center text-[#111827] mb-16 tracking-tight">
            Governance
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
            {governanceCaseStudies.map((study, index) => (
              <Link key={index} href={study.link} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[1.5/1] overflow-hidden mb-6 bg-gray-100 rounded-[24px] shadow-sm">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-wide group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                {study.desc && (
                  <p className="text-gray-500 text-sm mb-1">
                    {study.desc}
                  </p>
                )}
                <p className="text-gray-500 text-sm">
                  {study.date}
                </p>
              </Link>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
