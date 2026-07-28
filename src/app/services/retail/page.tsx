import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const retailCaseStudies = [
  {
    title: "Luxe Beauty E-Commerce Platform",
    desc: "Custom Shopify Theme for Beauty Brand",
    category: "RETAIL",
    date: "11/19/2025 · 2 min read",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800", 
    link: "/cosmetics-ecommerce"
  },
  {
    title: "Omnichannel Retail Transformation & Intelligent Inventory Modernization",
    desc: "",
    category: "RETAIL",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=3600&h=2160", 
    link: "/omnichannel-retail-transformation"
  },
  {
    title: "Smart Grocery Operations & FMCG Supply Chain Transformation",
    desc: "",
    category: "RETAIL",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=3600&h=2160",
    link: "/smart-grocery-operations"
  },
  {
    title: "CONSUMER ELECTRONICS BRAND",
    desc: "",
    date: "17/01/2026 · 1 min read",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=3600&h=2160",
    link: "/consumer-electronics-brand"
  },
  {
    title: "WAREHOUSE MANAGEMENT SYSTEM",
    desc: "",
    date: "17/01/2026 · 1 min read",
    image: "/warehouse-banner.jpg",
    link: "/warehouse-management-system"
  }
];

export default function RetailPage() {
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
            Retail
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
            {retailCaseStudies.map((study, index) => (
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
