import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const bankingCaseStudies = [
  {
    title: "Fix Deposit",
    desc: "Blog post description.",
    date: "5/30/2026 · 1 min read",
    image: "https://blogassets.airtel.in/wp-content/uploads/2025/03/banner_24_fd.png", // Kept the updated image
    link: "/fixed-diposit"
  },
  {
    title: "Bill Payment In Telecom",
    desc: "Blog post description.",
    date: "5/29/2026 · 1 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    link: "/bill-payment"
  },
  {
    title: "LOAN AUTOMATION SYSTEM",
    desc: "",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?auto=format&fit=crop&w=3600&h=2160",
    link: "/loan-automation"
  },
  {
    title: "BANKING APPROVAL MANAGEMENT SYSTEM",
    desc: "",
    date: "11/19/2025 · 1 min read",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=3600&h=2160",
    link: "/banking-approval"
  }
];

export default function BankingPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          
          <h1 className="text-5xl font-bold text-center text-[#111827] mb-16 tracking-tight">
            Banking
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-20">
            {bankingCaseStudies.map((study, index) => (
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

          <div className="flex justify-center mt-8">
            <Link href="/financial-tools">
              <button className="px-8 py-3 bg-[#2563eb] text-white font-bold text-lg rounded-[30px] hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                Financial Tools
              </button>
            </Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
