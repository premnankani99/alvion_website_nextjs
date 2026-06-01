"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CagrCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(200000);
  const [years, setYears] = useState(5);

  const [cagr, setCagr] = useState(0);

  const calculateCagr = () => {
    const P = Number(initialValue);
    const F = Number(finalValue);
    const t = Number(years);

    if (P > 0 && t > 0) {
      const result = (Math.pow((F / P), (1 / t)) - 1) * 100;
      setCagr(Number(result.toFixed(2)));
    } else {
      setCagr(0);
    }
  };

  useEffect(() => {
    calculateCagr();
  }, [initialValue, finalValue, years]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-blue-500 hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center">
            
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
              CAGR Calculator
            </h1>

            <div className="w-full flex flex-col gap-6 mb-8">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Initial Investment (₹)</label>
                <input 
                  type="number" 
                  value={initialValue} 
                  onChange={(e) => setInitialValue(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none mb-1"
                />
                <input 
                  type="range" min="1000" max="10000000" step="1000"
                  value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Final Value (₹)</label>
                <input 
                  type="number" 
                  value={finalValue} 
                  onChange={(e) => setFinalValue(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none mb-1"
                />
                <input 
                  type="range" min="1000" max="100000000" step="1000"
                  value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Time Duration (Years)</label>
                <input 
                  type="number" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none mb-1"
                />
                <input 
                  type="range" min="1" max="40" step="1"
                  value={years} onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

            </div>

            <div className="w-full bg-[#f8faff] rounded-lg p-6 text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-black">
                CAGR: {cagr} %
              </h3>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
