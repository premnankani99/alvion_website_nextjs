"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function StepUpSipCalculator() {
  const [initialSip, setInitialSip] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [stepUpPercent, setStepUpPercent] = useState(10);
  const [years, setYears] = useState(10);
  const [months, setMonths] = useState(0);

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [profit, setProfit] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const calculateStepUp = () => {
    let currentSip = Number(initialSip);
    const monthlyRate = Number(returnRate) / 12 / 100;
    const totalMonths = (Number(years) * 12) + Number(months);
    const stepUpRate = Number(stepUpPercent) / 100;

    let invested = 0;
    let balance = 0;

    for (let i = 1; i <= totalMonths; i++) {
      invested += currentSip;
      balance = (balance + currentSip) * (1 + monthlyRate);

      // Increase SIP amount every 12 months
      if (i % 12 === 0) {
        currentSip += currentSip * stepUpRate;
      }
    }

    setTotalInvestment(Math.round(invested));
    setTotalValue(Math.round(balance));
    setProfit(Math.round(balance - invested));
  };

  useEffect(() => {
    calculateStepUp();
  }, [initialSip, returnRate, stepUpPercent, years, months]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-[#d81b60] hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center">
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#802a70] mb-8 text-center">
              Step-Up SIP Calculator
            </h1>
            
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Initial SIP Amount</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <span className="px-4 text-sm font-bold border-r border-gray-300">₹</span>
                  <input 
                    type="number" 
                    value={initialSip} 
                    onChange={(e) => setInitialSip(Number(e.target.value))}
                    className="w-full p-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Expected Return %</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <span className="px-4 text-sm font-bold border-r border-gray-300">%</span>
                  <input 
                    type="number" 
                    value={returnRate} 
                    onChange={(e) => setReturnRate(Number(e.target.value))}
                    className="w-full p-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Annual Step Up %</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <span className="px-4 text-sm font-bold border-r border-gray-300">%</span>
                  <input 
                    type="number" 
                    value={stepUpPercent} 
                    onChange={(e) => setStepUpPercent(Number(e.target.value))}
                    className="w-full p-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Years</label>
                <input 
                  type="number" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Months</label>
                <input 
                  type="number" 
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
              </div>

            </div>

            <button 
              onClick={calculateStepUp}
              className="bg-[#d81b60] hover:bg-[#c2185b] text-white font-medium py-2 px-8 rounded-md transition-colors mb-8"
            >
              Calculate
            </button>

            <div className="flex flex-col items-center gap-2 text-base font-medium text-black">
              <p>Total Investment: <b>₹{totalInvestment.toLocaleString('en-IN')}</b></p>
              <p>Profit: <b>₹{profit.toLocaleString('en-IN')}</b></p>
              <p>Total Value: <b>₹{totalValue.toLocaleString('en-IN')}</b></p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
