"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SipCalculator() {
  const [investment, setInvestment] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(15);
  const [months, setMonths] = useState(0);

  const [totalInvestment, setTotalInvestment] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [maturityValue, setMaturityValue] = useState(0);

  const calculateSip = () => {
    const totalMonths = (Number(years) * 12) + Number(months);
    const monthlyRate = Number(returnRate) / 12 / 100;
    
    const invested = Number(investment) * totalMonths;
    let maturity = 0;
    
    if (monthlyRate === 0) {
      maturity = invested;
    } else {
      maturity = Number(investment) * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    }

    setTotalInvestment(Math.round(invested));
    setMaturityValue(Math.round(maturity));
    setTotalReturns(Math.round(maturity - invested));
  };

  useEffect(() => {
    calculateSip();
  }, [investment, returnRate, years, months]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-blue-500 hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#111827] mb-12 tracking-tight">
            Calculate your SIP returns
          </h1>

          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col md:flex-row gap-12">
            
            {/* Input Section */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">SIP Investment</label>
                <input 
                  type="number" 
                  value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 text-sm text-center mb-3"
                />
                <input 
                  type="range" 
                  min="500" max="100000" step="500"
                  value={investment} 
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Expected Return Rate (p.a)</label>
                <input 
                  type="number" 
                  value={returnRate} 
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 text-sm text-center mb-3"
                />
                <input 
                  type="range" 
                  min="1" max="30" step="1"
                  value={returnRate} 
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Time Period (Years)</label>
                <input 
                  type="number" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 text-sm text-center mb-3"
                />
                <input 
                  type="range" 
                  min="1" max="40" step="1"
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Additional Months</label>
                <input 
                  type="number" 
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full md:w-1/2 border border-gray-300 rounded-md p-2 text-sm text-center mb-3"
                />
                <input 
                  type="range" 
                  min="0" max="11" step="1"
                  value={months} 
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <button 
                onClick={calculateSip}
                className="mt-4 w-full bg-[#4f71e6] hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-colors"
              >
                Calculate
              </button>
            </div>

            {/* Output Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-8 pl-0 md:pl-12 md:border-l border-gray-100">
              
              <div className="w-full flex justify-between items-center text-sm font-bold text-black">
                <span>Total Investment</span>
                <span>₹{totalInvestment.toLocaleString('en-IN')}</span>
              </div>
              
              <div className="w-full flex justify-between items-center text-sm font-bold text-black">
                <span>Returns</span>
                <span className="text-green-600">₹{totalReturns.toLocaleString('en-IN')}</span>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold text-black mb-2">Maturity Value</h3>
                <p className="text-2xl font-black text-black">₹{maturityValue.toLocaleString('en-IN')}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
