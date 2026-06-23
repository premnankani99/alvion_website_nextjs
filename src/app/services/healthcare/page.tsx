import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const healthcareCaseStudies = [
  {
    title: "CareFirst Hospitals",
    desc: "AI-Powered Hospital Digital Transformation with real-time KPI tracking.",
    category: "HEALTHCARE",
    date: "Latest · 4 min read",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=3600&h=2160",
    link: "/services/healthcare/carefirst"
  },
  {
    title: "Healthcare Workflow Automation",
    desc: "Centralized digital orchestration layer to unify disparate processes.",
    category: "HEALTHCARE",
    date: "Latest · 4 min read",
    image: "https://images.unsplash.com/photo-1666886573531-48d2e3c2b684?auto=format&fit=crop&w=3600&h=2160", 
    link: "/services/healthcare/healthcare-workflow-automation"
  },
  {
    title: "Medical Inventory Management System",
    desc: "Automating inventory tracking, procurement, and supplier coordination.",
    category: "HEALTHCARE",
    date: "Latest · 4 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=3600&h=2160",
    link: "/services/healthcare/medical-inventory-management-system"
  }
];

export default function HealthcarePage() {
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
            Health Care
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
            {healthcareCaseStudies.map((study, index) => (
              <Link key={index} href={study.link} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[1.5/1] overflow-hidden mb-6 bg-gray-100">
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
