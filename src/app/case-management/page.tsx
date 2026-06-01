"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CaseManagementPage() {
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
          <Link href="/services/insurance" className="hover:text-blue-500 transition-colors">Case Studies</Link> &gt; 
          <span className="text-blue-500">Case Management System</span>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight">Case Management System</h1>
          <p className="text-zinc-500 text-lg uppercase tracking-wider">INSURANCE</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-[#f5f6f8] p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-purple-800 mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-800">BFSI / Insurance / Enterprise</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-purple-800 mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-800 leading-relaxed">Case Management Automation</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Overview</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                A large enterprise organization required a centralized system to manage complex, long-running business cases involving multiple teams, documents, approvals, and regulatory checkpoints. Existing processes lacked visibility, traceability, and consistency, leading to operational delays and compliance risks.
              </p>
            </section>

            <section id="challenge" className="mb-12">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Challenge</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Business cases were handled through emails, spreadsheets, and siloed applications. There was no unified view of case status, no standard workflow, and limited audit history. Teams struggled with SLA breaches, manual follow-ups, and inconsistent decision-making across departments.
              </p>
            </section>

            <section id="solution" className="mb-12">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                An enterprise-grade Case Management Platform was built using Appian to orchestrate end-to-end case lifecycles. The solution enabled dynamic case creation, document management, role-based task assignment, ad-hoc actions, and real-time tracking across all case stages with complete auditability.
              </p>
            </section>

            <section id="result" className="mb-12">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Result</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[140px]">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">60%</h3>
                  <p className="text-sm text-zinc-500">Faster Case Resolution</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[140px]">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">45%</h3>
                  <p className="text-sm text-zinc-500">Reduction in Manual Effort</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[140px]">
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
                  <p className="text-sm text-zinc-500">Case Traceability</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The Case Management platform improved operational efficiency, ensured regulatory compliance, and delivered full transparency across all cases. Standardized workflows combined with flexibility for ad-hoc actions empowered teams to resolve cases faster while maintaining governance and control.
              </p>
            </section>

            <section id="technologies">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Technology Stack</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-6">
                The solution was implemented using Appian&apos;s enterprise low-code capabilities:
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Low-Code Platform</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Case Management</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Records & Data Fabric</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">SAIL Interfaces (Dynamic UI)</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Process Models</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Business Rules & Decision Logic</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">SLA Monitoring & Escalations</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Document Management</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Role-Based Access Control</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Audit Trails & Compliance Logging</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST API Integrations</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">PostgreSQL / Oracle Database</span>
              </div>
            </section>
          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 border-l-2 border-purple-800 pl-4 flex flex-col gap-4">
              <a href="#overview" className={`text-sm ${activeSection === 'overview' ? 'text-purple-800 font-bold' : 'text-zinc-800 hover:text-purple-600'}`}>Client Overview</a>
              <a href="#challenge" className={`text-sm ${activeSection === 'challenge' ? 'text-purple-800 font-bold' : 'text-zinc-800 hover:text-purple-600'}`}>Challenge</a>
              <a href="#solution" className={`text-sm ${activeSection === 'solution' ? 'text-purple-800 font-bold' : 'text-zinc-800 hover:text-purple-600'}`}>Solution</a>
              <a href="#result" className={`text-sm ${activeSection === 'result' ? 'text-purple-800 font-bold' : 'text-zinc-800 hover:text-purple-600'}`}>Result</a>
              <a href="#technologies" className={`text-sm ${activeSection === 'technologies' ? 'text-purple-800 font-bold' : 'text-zinc-800 hover:text-purple-600'}`}>Tech Stack</a>
            </div>
          </aside>

        </div>
        <Footer />
      </div>
    </>
  );
}
