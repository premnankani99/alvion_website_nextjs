"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BankingApprovalPage() {
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
          <Link href="/services/banking" className="hover:text-blue-500 transition-colors">Case Studies</Link> &gt; 
          <span className="text-blue-500">Banking Approval Management System</span>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Banking Approval Management System</h1>
          <p className="text-zinc-500 text-lg">Approval Workflow Automation</p>
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
                <p className="text-sm text-zinc-600 leading-relaxed">Approval Workflow Automation</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Internal Web Application</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Client Overview</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                A retail banking division required a lightweight internal application to manage high-volume approval requests such as transaction overrides, limit extensions, exception handling, and operational requests. The goal was to create a fast, secure, and easy-to-use approval system for branch and head-office users.
              </p>
            </section>

            <section id="challenge" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Challenge</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Approval requests were handled through emails and manual follow-ups, causing delays, lack of visibility, and inconsistent decision-making. Managers had no centralized dashboard to track pending or overdue approvals, impacting service turnaround times and operational efficiency.
              </p>
            </section>

            <section id="solution" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base mb-4">
                A short-flow Approval Management System was built using Appian to digitize and automate approval workflows.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The application enabled quick request creation, rule-based routing, SLA tracking, and one-click approve or reject actions. Real-time dashboards provided managers with complete visibility into approval queues and bottlenecks.
              </p>
            </section>

            <section id="result" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">70%</h3>
                  <p className="text-xs text-zinc-500">Faster Approval Turnaround</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">55%</h3>
                  <p className="text-xs text-zinc-500">Reduction in Follow-Ups</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-2">100%</h3>
                  <p className="text-xs text-zinc-500">Approval Traceability</p>
                </div>
              </div>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The solution streamlined internal decision-making, reduced operational delays, and improved accountability. Standardized workflows, audit trails, and real-time insights helped the bank enhance efficiency while meeting compliance and control requirements.
              </p>
            </section>

            <section id="technologies">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Low-Code Platform</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Process Models</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Records</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">SAIL Interfaces</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian Security & RBAC</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Business Rules Engine</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">SLA Monitoring</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST API Integration</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">PostgreSQL / Oracle</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Audit Logs & History</span>
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
