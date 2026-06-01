"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function DreamHomeCalculator() {
  const [presentCost, setPresentCost] = useState(10000000);
  const [years, setYears] = useState(7);
  const [inflationRate, setInflationRate] = useState(5);
  const [savedAmount, setSavedAmount] = useState(80000);
  const [returnRate, setReturnRate] = useState(12);

  const [futureCost, setFutureCost] = useState(0);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);

  const calculateDreamHome = () => {
    const P_cost = Number(presentCost);
    const t = Number(years);
    const r_inf = Number(inflationRate) / 100;
    const P_saved = Number(savedAmount);
    const r_inv = Number(returnRate) / 100;

    // 1. Future cost of home
    const fv_home = P_cost * Math.pow(1 + r_inf, t);

    // 2. Future value of already saved amount
    const fv_saved = P_saved * Math.pow(1 + r_inv, t);

    // 3. Corpus required
    const requiredCorpus = Math.max(0, fv_home - fv_saved);

    // 4. Required monthly SIP
    const r_monthly = r_inv / 12;
    const n_months = t * 12;

    let sip = 0;
    if (requiredCorpus > 0) {
      if (r_monthly === 0) {
        sip = requiredCorpus / n_months;
      } else {
        sip = requiredCorpus / (((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly) * (1 + r_monthly));
      }
    }

    setFutureCost(Math.round(fv_home));
    setMonthlyInvestment(Math.round(sip));
  };

  useEffect(() => {
    calculateDreamHome();
  }, [presentCost, years, inflationRate, savedAmount, returnRate]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-blue-500 hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
            
            <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Dream Home Calculator
            </h1>

            <div className="flex flex-col gap-6 mb-8">
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-black">Present cost of dream home</label>
                  <input 
                    type="number" 
                    value={presentCost} 
                    onChange={(e) => setPresentCost(Number(e.target.value))}
                    className="border border-gray-300 rounded p-1 text-sm text-right w-32 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" min="1000000" max="100000000" step="100000"
                  value={presentCost} onChange={(e) => setPresentCost(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-black">Years to buy house</label>
                  <input 
                    type="number" 
                    value={years} 
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="border border-gray-300 rounded p-1 text-sm text-right w-32 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" min="1" max="30" step="1"
                  value={years} onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-black">Inflation rate (%)</label>
                  <input 
                    type="number" 
                    value={inflationRate} 
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="border border-gray-300 rounded p-1 text-sm text-right w-32 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" min="1" max="15" step="0.5"
                  value={inflationRate} onChange={(e) => setInflationRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-black">Amount already saved</label>
                  <input 
                    type="number" 
                    value={savedAmount} 
                    onChange={(e) => setSavedAmount(Number(e.target.value))}
                    className="border border-gray-300 rounded p-1 text-sm text-right w-32 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" min="0" max="50000000" step="10000"
                  value={savedAmount} onChange={(e) => setSavedAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm text-black">Expected return (%)</label>
                  <input 
                    type="number" 
                    value={returnRate} 
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="border border-gray-300 rounded p-1 text-sm text-right w-32 focus:outline-none"
                  />
                </div>
                <input 
                  type="range" min="1" max="30" step="0.5"
                  value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

            </div>

            <div className="w-full bg-[#f8faff] rounded-lg p-6 border border-gray-100 flex flex-col gap-2">
              <h3 className="text-lg font-bold text-black">Future Cost of Home: ₹ {futureCost.toLocaleString('en-IN')}</h3>
              <h3 className="text-lg font-bold text-black">Required Monthly Investment: ₹ {monthlyInvestment.toLocaleString('en-IN')}</h3>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
