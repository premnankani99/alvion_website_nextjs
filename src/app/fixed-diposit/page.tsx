"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function FixedDepositPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "problem", "solution", "modules", "outcomes", "technologies"];
      let current = "overview";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#fbfcfd] pt-20 min-h-screen text-[#0d1b2a] flex flex-col">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 md:px-12 py-6 text-sm text-zinc-500 flex gap-2">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link> &gt; 
          <Link href="/#case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link> &gt; 
          <span className="text-blue-500">Fixed Deposit Integration</span>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Fixed Deposit Integration in Financial App</h1>
          <p className="text-zinc-500 text-lg">Third-Party SDK Integration for Digital Banking</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-6 rounded-lg sticky top-28">
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">FinTech / Digital Banking / Financial Services</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600">Third-Party Fixed Deposit SDK Integration</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600">Mobile Banking App + Backend API Integration</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Overview</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                A digital banking platform wanted to expand its financial product offerings by enabling customers to open Fixed Deposits (FDs) directly from their mobile application.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                To accelerate development and ensure regulatory compliance, the client decided to integrate a trusted third-party Fixed Deposit SDK that provides access to multiple banking partners and financial institutions.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Our team implemented the SDK within the existing financial application, enabling users to discover FD plans, compare interest rates, and invest seamlessly without leaving the app.
              </p>
            </section>

            <section id="problem" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Problem</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The client&apos;s mobile banking application lacked investment products beyond basic savings accounts and payments. Customers had to visit external banking portals or physical branches to open Fixed Deposits, resulting in a fragmented user experience.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The client required a secure integration that could enable FD investments directly within the app while ensuring compliance with financial regulations and maintaining a seamless user experience.
              </p>
            </section>

            <section id="solution" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                We integrated a third-party Fixed Deposit SDK into the financial mobile application, enabling customers to browse FD products from multiple partner banks.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The SDK provided secure APIs for listing available deposit plans, calculating interest earnings, and initiating FD investments directly within the app interface.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The integration also supported KYC verification, transaction tracking, and real-time updates on deposit status, ensuring a fully digital investment journey.
              </p>
            </section>

            <section id="modules" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Functional Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">FD Plan Discovery & Comparison</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Real-time Interest Rate Calculation</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Third-Party SDK Integration</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Secure Payment Processing</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">KYC & User Verification</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Investment Tracking Dashboard</div>
              </div>
            </section>

            <section id="outcomes" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Seamless</h3>
                  <p className="text-xs text-zinc-500">In-App Fixed Deposit Investments</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Secure</h3>
                  <p className="text-xs text-zinc-500">Financial Transactions via SDK Integration</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Improved</h3>
                  <p className="text-xs text-zinc-500">User Engagement & Financial Product Adoption</p>
                </div>
              </div>
            </section>

            <section id="technologies">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Android / iOS SDK</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST APIs</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Third-Party FD SDK</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Secure Payment Gateway</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">KYC Verification APIs</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Mobile Banking App</span>
              </div>
            </section>

          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 border-l-2 border-blue-500 pl-4 flex flex-col gap-4">
              <a href="#overview" className={`text-sm ${activeSection === 'overview' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Overview</a>
              <a href="#problem" className={`text-sm ${activeSection === 'problem' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Problem</a>
              <a href="#solution" className={`text-sm ${activeSection === 'solution' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Solution</a>
              <a href="#modules" className={`text-sm ${activeSection === 'modules' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Modules</a>
              <a href="#outcomes" className={`text-sm ${activeSection === 'outcomes' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Outcomes</a>
              <a href="#technologies" className={`text-sm ${activeSection === 'technologies' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Technologies</a>
            </div>
          </aside>

        </div>
        <Footer />
      </div>
    </>
  );
}
