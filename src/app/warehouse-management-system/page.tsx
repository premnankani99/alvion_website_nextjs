"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function WarehouseManagementPage() {
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
      <div className="bg-[#fbfcfd] pt-20 min-h-screen text-[#0d1b2a] flex flex-col">
        {/* Breadcrumb */}
        <div className="container mx-auto px-6 md:px-12 py-6 text-sm text-zinc-500 flex gap-2">
          <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link> &gt; 
          <Link href="/#case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link> &gt; 
          <span className="text-blue-500">Warehouse Management System</span>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Warehouse Management System</h1>
          <p className="text-zinc-500 text-lg">Global eCommerce Fulfilment Platform</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-6 rounded-lg sticky top-28">
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">Logistics / eCommerce Fulfilment / 3PL Warehousing</p>
              </div>
              <div className="mb-6">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600">Warehouse Management Platform</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600">Web Portal + Android Warehouse App</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            
            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Overview</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                A leading eCommerce fulfilment and 3PL logistics provider operating across Australia and New Zealand required a digital system to manage warehouse operations, inventory, and order processing across multiple distribution centres.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The objective was to build a scalable warehouse management platform accessible via web and mobile devices that could streamline fulfilment operations, improve order accuracy, and provide real-time inventory visibility.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The system enabled efficient order fulfilment for multiple eCommerce brands across warehouses located in Australia and New Zealand.
              </p>
            </section>

            <section id="problem" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Problem</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The client handled large volumes of eCommerce orders across multiple warehouses and required a centralized platform to manage inventory and order fulfilment operations.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Traditional warehouse workflows lacked automation and resulted in delays, manual errors, and limited visibility into inventory and shipment status.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                The organization required a scalable system capable of managing inventory tracking, pick & pack workflows, and order processing across multiple warehouse locations.
              </p>
            </section>

            <section id="solution" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Solution</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                We developed a custom Warehouse Management System consisting of a centralized web portal for warehouse operations and a mobile application for warehouse staff.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                The web portal provided operational dashboards for inventory management, order processing, analytics, and reporting.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                A mobile Android application optimized for rugged warehouse devices enabled barcode scanning, picking, packing, and shipment verification directly from the warehouse floor.
              </p>
            </section>

            <section id="modules" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Functional Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Inventory Management</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Multi-Warehouse Management</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Order Processing Dashboard</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Pick & Pack Operations</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Barcode Scanning & Validation</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100">Shipment & Logistics Integration</div>
              </div>
            </section>

            <section id="outcomes" className="mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Fast</h3>
                  <p className="text-xs text-zinc-500">Order Processing Across Warehouses</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">High</h3>
                  <p className="text-xs text-zinc-500">Inventory Accuracy via Barcode Scanning</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[200px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Real-time</h3>
                  <p className="text-xs text-zinc-500">Visibility into Orders & Shipments</p>
                </div>
              </div>
            </section>

            <section id="technologies">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Appian</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Android (Kotlin)</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">REST APIs</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Barcode Scanning</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Honeywell CT45 Integration</span>
                <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Warehouse Device Integration</span>
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
