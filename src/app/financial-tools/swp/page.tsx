"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SwpCalculator() {
  const [investment, setInvestment] = useState(500000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [returnRate, setReturnRate] = useState(8);
  const [years, setYears] = useState(5);

  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const calculateSwp = () => {
    const P = Number(investment);
    const W = Number(withdrawal);
    const r = Number(returnRate) / 12 / 100;
    const n = Number(years) * 12;

    const withdrawn = W * n;
    
    // SWP Formula (Withdrawal at beginning of month): Final Value = P(1+r)^n - W[((1+r)^n - 1) / r] * (1+r)
    let fv = 0;
    if (r === 0) {
      fv = P - withdrawn;
    } else {
      fv = (P * Math.pow(1 + r, n)) - (W * ((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    }

    setTotalWithdrawal(Math.round(withdrawn));
    setFinalValue(Math.max(0, Math.round(fv))); // Prevent negative values gracefully
  };

  useEffect(() => {
    calculateSwp();
  }, [investment, withdrawal, returnRate, years]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-[#4f46e5] hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
              SWP (Systematic Withdrawal Plan) Calculator
            </h1>

            <div className="flex flex-col md:flex-row gap-10">
              
              {/* Input Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-5">
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-black">Total Investment</label>
                  <input 
                    type="number" 
                    value={investment} 
                    onChange={(e) => setInvestment(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-black">Monthly Withdrawal</label>
                  <input 
                    type="number" 
                    value={withdrawal} 
                    onChange={(e) => setWithdrawal(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-black">Expected Return (%)</label>
                  <input 
                    type="number" 
                    value={returnRate} 
                    onChange={(e) => setReturnRate(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-black">Duration (Years)</label>
                  <input 
                    type="number" 
                    value={years} 
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <button 
                  onClick={calculateSwp}
                  className="mt-2 w-full bg-[#4f46e5] hover:bg-indigo-600 text-white font-medium py-3 rounded-md transition-colors"
                >
                  Calculate
                </button>

              </div>

              {/* Output Section */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                
                <div className="bg-[#f8faff] rounded-lg p-6 text-center border border-indigo-50">
                  <p className="text-sm text-gray-700 mb-1">Invested Amount</p>
                  <h3 className="text-2xl font-black text-[#1e293b]">₹{investment.toLocaleString('en-IN')}</h3>
                </div>

                <div className="bg-[#f8faff] rounded-lg p-6 text-center border border-indigo-50">
                  <p className="text-sm text-gray-700 mb-1">Total Withdrawal</p>
                  <h3 className="text-2xl font-black text-[#1e293b]">₹{totalWithdrawal.toLocaleString('en-IN')}</h3>
                </div>

                <div className="bg-[#f8faff] rounded-lg p-6 text-center border border-indigo-50">
                  <p className="text-sm text-gray-700 mb-1">Final Value</p>
                  <h3 className="text-2xl font-black text-[#1e293b]">₹{finalValue.toLocaleString('en-IN')}</h3>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
