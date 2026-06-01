"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EnterpriseGRCPage() {
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
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 md:px-12 py-6 text-sm text-zinc-500 flex gap-2">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link> &gt; 
          <Link href="/services/governance" className="hover:text-blue-500 transition-colors">Case Studies</Link> &gt; 
          <span className="text-[#8b5cf6]">Enterprise GRC Automation Platform</span>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0d1b2a] mb-4 tracking-tight">Enterprise GRC Automation Platform</h1>
          <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">GOVERNANCE</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-purple-50/50 border border-purple-100 p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-[#6b21a8] mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-700">Banking & Financial Services</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-[#6b21a8] mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">Governance, Risk & Compliance Automation</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Client Overview</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                A large enterprise operating across multiple geographies faced increasing regulatory scrutiny and governance challenges. Risk assessments, compliance tracking, and audit activities were managed through spreadsheets and siloed systems, limiting visibility and increasing operational risk.
              </p>
            </section>

            <section id="challenge" className="mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Challenge</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                The organization struggled with fragmented risk registers, manual compliance reporting, delayed audit preparation, and lack of traceability across governance processes. Leadership lacked real-time insight into risk exposure and compliance status, increasing regulatory and operational risks.
              </p>
            </section>

            <section id="solution" className="mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-4">Solution</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                An enterprise-grade GRC Automation Platform was implemented using Appian to centralize governance, risk, and compliance processes. The solution enabled automated risk assessments, compliance tracking, audit workflows, and case-based issue remediation with complete transparency and audit readiness.
              </p>
            </section>

            <section id="result" className="mb-12">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-6">Result</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">50%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Faster Audit Cycles</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">60%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Reduction in Manual Effort</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border border-gray-100 flex flex-col items-center justify-center min-h-[140px] text-center">
                  <h3 className="text-4xl font-black text-[#1d4ed8] mb-3">100%</h3>
                  <p className="text-xs text-zinc-500 font-medium tracking-wide">Risk & Compliance Traceability</p>
                </div>
              </div>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base">
                The platform significantly improved audit readiness, reduced compliance risks, and enabled proactive risk mitigation. Automated workflows and real-time dashboards empowered leadership with actionable insights while ensuring regulatory adherence.
              </p>
            </section>

            <section id="technologies">
              <h2 className="text-2xl font-bold text-[#6b21a8] mb-6">Technology Stack</h2>
              <p className="text-zinc-700 leading-relaxed text-sm md:text-base mb-6">
                The GRC platform was built using secure, scalable, and enterprise-ready Appian capabilities:
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "Appian Low-Code Platform",
                  "Appian Case Management",
                  "Appian Records & Data Fabric",
                  "Process Models & Business Rules",
                  "SAIL Dynamic Interfaces",
                  "Role-Based Access Control",
                  "Audit Trails & Compliance Logging",
                  "Document Management",
                  "REST API Integrations",
                  "Enterprise Database (PostgreSQL / Oracle)"
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
