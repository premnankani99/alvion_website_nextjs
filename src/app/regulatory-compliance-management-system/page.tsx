"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RegulatoryCompliancePage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-[#0d1b2a] mb-4 tracking-tight">Regulatory Compliance Management System</h1>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">GOVERNANCE</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-purple-50/50 border border-purple-100 p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-[#6b21a8] mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-700">Banking, Insurance & Financial Services</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-[#6b21a8] mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">Regulatory Compliance Automation</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            <section id="overview" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Client Overview</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                A regulated financial enterprise operating across multiple regions needed a unified system to manage regulatory obligations, compliance reporting, and internal controls. Frequent regulatory changes and manual tracking created operational risk and audit challenges.
              </p>
            </section>

            <section id="challenge" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Challenge</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                Compliance activities were managed using spreadsheets, emails, and siloed tools. Tracking regulatory requirements, mapping controls, and preparing audit evidence was time-consuming and error-prone, increasing the risk of non-compliance.
              </p>
            </section>

            <section id="solution" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Solution</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                A centralized Regulatory Compliance Management System was implemented using Appian. The platform automated regulatory intake, compliance workflows, control assessments, evidence management, and approval cycles with full traceability.
              </p>
            </section>

            <section id="result" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-6">Result</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">65%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Faster Compliance Reporting</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">70%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Reduction in Manual Tracking</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">100%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Audit Readiness</p>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                The system improved regulatory adherence, reduced compliance risk, and enhanced transparency across departments. Real-time dashboards and automated alerts enabled proactive compliance management and faster regulatory response.
              </p>
            </section>

            <section id="technologies" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-6">Technology Stack</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base mb-6">
                The platform was built using Appian&apos;s secure and scalable low-code architecture:
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Appian Low-Code Platform",
                  "Appian Case Management",
                  "Appian Records & Data Fabric",
                  "Process Models & Decision Rules",
                  "SAIL Dynamic Interfaces",
                  "Compliance Workflow Automation",
                  "Document & Evidence Management",
                  "Role-Based Security & Access Control",
                  "Audit Trails & Activity Logs",
                  "REST API Integrations"
                ].map((tech, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-white rounded-full text-[13px] border border-gray-200 text-gray-700 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 border-l-2 border-[#6b21a8] pl-4 flex flex-col gap-5">
              <a href="#overview" className={`text-sm ${activeSection === 'overview' ? 'text-[#6b21a8] font-bold' : 'text-zinc-600 hover:text-[#6b21a8]'}`}>Client Overview</a>
              <a href="#challenge" className={`text-sm ${activeSection === 'challenge' ? 'text-[#6b21a8] font-bold' : 'text-zinc-600 hover:text-[#6b21a8]'}`}>Challenge</a>
              <a href="#solution" className={`text-sm ${activeSection === 'solution' ? 'text-[#6b21a8] font-bold' : 'text-zinc-600 hover:text-[#6b21a8]'}`}>Solution</a>
              <a href="#result" className={`text-sm ${activeSection === 'result' ? 'text-[#6b21a8] font-bold' : 'text-zinc-600 hover:text-[#6b21a8]'}`}>Result</a>
              <a href="#technologies" className={`text-sm ${activeSection === 'technologies' ? 'text-[#6b21a8] font-bold' : 'text-zinc-600 hover:text-[#6b21a8]'}`}>Tech Stack</a>
            </div>
          </aside>

        </div>
        <Footer />
      </div>
    </>
  );
}
