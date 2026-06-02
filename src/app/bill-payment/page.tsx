"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BillPaymentPage() {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#fbfcfd] pt-28 min-h-screen text-[#0d1b2a] flex flex-col">
                {/* Back Button */}
        <div className="container mx-auto px-6 md:px-12 py-6">
          <button onClick={() => window.history.back()} className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest cursor-pointer">
            &larr; Back
          </button>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Bill Payment Integration in Telecom App</h1>
          <p className="text-zinc-500 text-lg">Bharat Bill Payment System (BBPS) Integration for Seamless Utility Payments</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">Telecom / FinTech / Digital Payments</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">BBPS Bill Payment System<br/>Integration</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Telecom Mobile App +<br/>Backend API Integration</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            
            <section id="overview" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Overview</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                A telecom service provider wanted to enhance its mobile application by enabling customers to pay utility bills directly within the app.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                To provide a reliable and standardized bill payment experience across India, the company integrated the Bharat Bill Payment System (BBPS), a centralized platform regulated by NPCI.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Through this integration, users could conveniently pay electricity, broadband, gas, water, and telecom bills directly from the telecom app without switching to external payment platforms.
              </p>
            </section>

            <section id="problem" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Problem</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Customers using the telecom application had to rely on multiple third-party apps or websites to pay their utility bills. This fragmented experience reduced user engagement and limited the telecom app's ability to become a complete digital service platform.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The client required a secure, scalable bill payment infrastructure that could support multiple billers and ensure real-time payment confirmation.
              </p>
            </section>

            <section id="solution" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Our team integrated the BBPS platform into the telecom application using secure APIs provided by BBPS service providers.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The integration enabled users to fetch bill details, validate consumer information, and complete payments within the telecom app interface.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The system also provided instant payment confirmation, transaction tracking, and automated bill reminders, improving overall customer convenience and engagement.
              </p>
            </section>

            <section id="modules" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Functional Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Multi-Biller Bill Payment Support</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Real-Time Bill Fetch & Validation</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">BBPS API Integration</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Secure Payment Processing</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Instant Payment Confirmation</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Transaction History & Bill Reminders</div>
              </div>
            </section>

            <section id="outcomes" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[180px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Unified</h3>
                  <p className="text-sm text-zinc-500">Utility Bill Payments in One App</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[180px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Secure</h3>
                  <p className="text-sm text-zinc-500">BBPS Regulated Payment Infrastructure</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[180px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Higher</h3>
                  <p className="text-sm text-zinc-500">User Engagement & App Retention</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">BBPS APIs</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST APIs</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Secure Payment Gateway</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">NPCI BBPS Platform</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Mobile App Integration</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Transaction Management System</span>
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
