import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const insuranceCaseStudies = [
  {
    category: "INSURANCE",
    title: "Case Management System",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=1800&h=1080",
    link: "/case-management"
  },
  {
    category: "INSURANCE",
    title: "Digital Insurance Claims Management Platform",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1637763723578-79a4ca9225f7?auto=format&fit=crop&w=1800&h=1080",
    link: "/digital-insurance-claims"
  }
];

export default function InsurancePage() {
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
            Insurance
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
            {insuranceCaseStudies.map((study, index) => (
              <Link key={index} href={study.link} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[1.5/1] overflow-hidden mb-6 bg-gray-100">
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                </div>
                <p className="text-gray-500 text-xs mb-2 uppercase tracking-wide">
                  {study.category}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-wide group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
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
