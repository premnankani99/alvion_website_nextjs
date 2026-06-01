"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InflationCalculator() {
  const [initialAmount, setInitialAmount] = useState(100000);
  const [inflationRate, setInflationRate] = useState(6);
  const [years, setYears] = useState(25);
  const [calcType, setCalcType] = useState("Yearly");

  const [futureCost, setFutureCost] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);

  const calculateInflation = () => {
    const P = Number(initialAmount);
    const r = Number(inflationRate) / 100;
    const n = Number(years);

    let fv = P * Math.pow(1 + r, n);
    
    setFutureCost(Math.round(fv));
    setPriceIncrease(Math.round(fv - P));
  };

  useEffect(() => {
    calculateInflation();
  }, [initialAmount, inflationRate, years, calcType]);

  return (
    <>
      <Navbar />
      <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="mb-6">
            <Link href="/financial-tools" className="text-[#802a70] hover:underline">&larr; Back to Financial Tools</Link>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center">
            
            <h1 className="text-2xl md:text-3xl font-bold text-[#802a70] mb-8 text-center">
              Inflation Calculator
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Initial Amount</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <span className="px-4 text-sm font-bold border-r border-gray-300">₹</span>
                  <input 
                    type="number" 
                    value={initialAmount} 
                    onChange={(e) => setInitialAmount(Number(e.target.value))}
                    className="w-full p-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Inflation Rate (%)</label>
                <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                  <span className="px-4 text-sm font-bold border-r border-gray-300">%</span>
                  <input 
                    type="number" 
                    value={inflationRate} 
                    onChange={(e) => setInflationRate(Number(e.target.value))}
                    className="w-full p-2 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Number of Years</label>
                <input 
                  type="number" 
                  value={years} 
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-black">Calculation Type</label>
                <select 
                  value={calcType}
                  onChange={(e) => setCalcType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none bg-white"
                >
                  <option value="Yearly">Yearly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>

            </div>

            <button 
              onClick={calculateInflation}
              className="bg-[#d81b60] hover:bg-[#c2185b] text-white font-medium py-3 px-12 rounded-md transition-colors mb-8"
            >
              Calculate
            </button>

            <div className="w-full bg-[#f8f9fa] rounded-lg p-8 text-center border border-gray-100">
              <h3 className="text-3xl font-bold text-[#2e7d32] mb-2">₹ {futureCost.toLocaleString('en-IN')}</h3>
              <p className="text-gray-700 font-medium mb-6">Future Cost</p>
              
              <div className="w-full h-px bg-gray-300 mb-4"></div>
              
              <p className="text-sm text-black font-medium">Current Cost: ₹ {initialAmount.toLocaleString('en-IN')}</p>
              <p className="text-sm text-black font-medium">Price Increase due to Inflation: ₹ {priceIncrease.toLocaleString('en-IN')}</p>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
