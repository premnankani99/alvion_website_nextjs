"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const calculators = [
  { name: "SIP Calculator", link: "/financial-tools/sip" },
  { name: "Step-Up SIP Calculator", link: "/financial-tools/step-up-sip" },
  { name: "SWP Calculator", link: "/financial-tools/swp" },
  { name: "Inflation Calculator", link: "/financial-tools/inflation" },
  { name: "Dream Home Calculator", link: "/financial-tools/dream-home" },
  { name: "CAGR Calculator", link: "/financial-tools/cagr" }
];

export default function FinancialToolsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center">
          
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
            Financial Calculators
          </h1>
          <p className="text-gray-500 text-lg mb-16">
            Plan your investments and financial goals with our smart calculators.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {calculators.map((calc, index) => (
              <Link href={calc.link} key={index} className="group cursor-pointer">
                <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-10 h-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {calc.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
