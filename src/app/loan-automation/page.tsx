"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoanAutomationPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "challenge", "solution", "result", "technologies"];
      let current = "overview";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) current = section;
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
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Loan Automation System</h1>
          <p className="text-zinc-500 text-lg">Banking & Financial Services Automation</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">Banking & Financial Services</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Loan Origination & Automation</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Web & Mobile Application</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            <section id="overview" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Client Overview</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                A mid-sized banking institution offering personal, home, and SME loans was experiencing delays in loan processing due to manual documentation, fragmented approval workflows, and lack of real-time visibility. The bank aimed to digitize the end-to-end loan lifecycle while ensuring compliance and audit readiness.
              </p>
            </section>

            <section id="challenge" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Challenge</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Loan applications were processed through emails and spreadsheets, resulting in long turnaround times, high error rates, and poor customer experience. Credit, risk, and compliance teams worked in silos, making approvals slow and difficult to track. Regulatory reporting and audit trails required significant manual effort.
              </p>
            </section>

            <section id="solution" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-4">
                An enterprise-grade Loan Automation System was implemented using Appian as the core workflow and orchestration platform.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The solution automated loan application intake, document verification, credit checks, multi-level approvals, and disbursement workflows. A modern web and mobile interface was provided using React for customer and relationship manager interactions.
              </p>
            </section>

            <section id="result" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">60%</h3>
                  <p className="text-xs text-zinc-500">Faster Loan Processing</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">45%</h3>
                  <p className="text-xs text-zinc-500">Reduction in Manual Effort</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">99%</h3>
                  <p className="text-xs text-zinc-500">Process Compliance Accuracy</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The bank achieved faster loan approvals, improved customer satisfaction, and complete visibility into loan pipelines. Automated audit trails, role-based access, and real-time dashboards enabled regulatory compliance and data-driven decision-making across departments.
              </p>
            </section>

            <section id="technologies" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Low-Code Platform</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Process Models</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Records & Data Fabric</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">SAIL Interfaces</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Security & RBAC</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST API Integration</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Audit Logs & Compliance Reporting</span>
              </div>
            </section>
          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 border-l-2 border-blue-500 pl-4 flex flex-col gap-4">
              <a href="#overview" className={`text-sm ${activeSection === 'overview' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Overview</a>
              <a href="#challenge" className={`text-sm ${activeSection === 'challenge' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Challenge</a>
              <a href="#solution" className={`text-sm ${activeSection === 'solution' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Solution</a>
              <a href="#result" className={`text-sm ${activeSection === 'result' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Outcomes</a>
              <a href="#technologies" className={`text-sm ${activeSection === 'technologies' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Technologies</a>
            </div>
          </aside>

        </div>
        <Footer />
      </div>
    </>
  );
}
