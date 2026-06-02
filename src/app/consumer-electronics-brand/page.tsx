"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function ConsumerElectronicsPage() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "challenge", "solution", "features", "impact", "technologies"];
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
      <div className="bg-[#fbfcfd] pt-20 min-h-screen text-[#0d1b2a] flex flex-col">
                {/* Back Button */}
        <div className="container mx-auto px-6 md:px-12 py-6">
          <button onClick={() => window.history.back()} className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest cursor-pointer">
            &larr; Back
          </button>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Dealer Management System</h1>
          <p className="text-zinc-500 text-lg">Enterprise Dealer Operations Platform</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-6 rounded-lg sticky top-28">
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">Retail & Distribution</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600">Dealer Management Platform</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600">Web & Mobile Application</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            
            <section id="overview" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Project Overview</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The Dealer Management System (DMS) is a centralized platform designed to streamline dealer operations including product orders, service coordination, and billing management.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Dealers can manage their orders, request installations, track service progress, and generate invoices through a unified digital portal.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The platform improves operational efficiency and provides complete visibility across dealer networks.
              </p>
            </section>

            <section id="challenge" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Challenge</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Many dealer networks rely on manual processes and disconnected tools to manage product orders, installations, and billing.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                This leads to operational delays, limited service visibility, and inefficient coordination between dealers and service teams.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                A scalable digital solution was required to unify dealer workflows and enable real-time tracking of operations.
              </p>
            </section>

            <section id="solution" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                A unified Dealer Management Portal was developed to digitize dealer operations and centralize workflow management.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Dealers can place orders, schedule installation services, manage invoices, and track service progress from a single dashboard.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                API integrations ensure seamless communication between backend systems, dealer portals, and mobile applications.
              </p>
            </section>

            <section id="features" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Dealer Order Management</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Installation Service Requests</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Invoice & Billing Management</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Service Tracking Dashboard</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Dealer Account Management</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Real-time Order Tracking</div>
              </div>
            </section>

            <section id="impact" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Business Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">60%</h3>
                  <p className="text-xs text-zinc-500">Faster Dealer Operations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">45%</h3>
                  <p className="text-xs text-zinc-500">Reduced Manual Processes</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">100%</h3>
                  <p className="text-xs text-zinc-500">Improved Service Visibility</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">React</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">React Native</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Android</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Java</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST APIs</span>
              </div>
            </section>

          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4">
            <div className="sticky top-28 border-l-2 border-blue-500 pl-4 flex flex-col gap-4">
              <a href="#overview" className={`text-sm ${activeSection === 'overview' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Project Overview</a>
              <a href="#challenge" className={`text-sm ${activeSection === 'challenge' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Challenge</a>
              <a href="#solution" className={`text-sm ${activeSection === 'solution' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Solution</a>
              <a href="#features" className={`text-sm ${activeSection === 'features' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Key Features</a>
              <a href="#impact" className={`text-sm ${activeSection === 'impact' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Business Impact</a>
              <a href="#technologies" className={`text-sm ${activeSection === 'technologies' ? 'text-blue-500 font-medium' : 'text-zinc-500 hover:text-blue-400'}`}>Technology Stack</a>
            </div>
          </aside>

        </div>
        <Footer />
      </div>
    </>
  );
}
