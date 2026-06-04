"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function LandmaarkCaseStudy() {
  const router = useRouter();
  const sliderImages = Array.from({ length: 15 }, (_, i) => `/case-studies/landmaark/slider-${i + 1}.jpg`);
  const [activeSection, setActiveSection] = useState("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };
  
  // Ref for the image slider
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "problem", "solution", "modules", "outcomes", "technologies", "previews"];
      let current = "overview";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
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

  // sliderImages defined above

  return (
    <>
      <Navbar />
      
      <div className="bg-[#fbfcfd] pt-28 min-h-screen text-[#0d1b2a] flex flex-col font-sans">
        
        {/* Back Button */}
        <div className="container mx-auto px-6 md:px-12 py-6">
          <button 
            onClick={(e) => {
              e.preventDefault();
              const ref = typeof document !== 'undefined' ? document.referrer : '';
              if (ref && ref.includes(window.location.host)) {
                if (ref.includes('/services')) {
                  router.push('/services#case-studies');
                } else {
                  router.push('/#case-studies');
                }
              } else if (window.history.length > 1) {
                router.back();
              } else {
                router.push('/#case-studies');
              }
            }} 
            className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest cursor-pointer"
          >
            &larr; Back
          </button>
        </div>

        {/* Title Section */}
        <div className="container mx-auto px-6 md:px-12 text-center pb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-500 mb-4 tracking-tight">Landmaark Developer</h1>
          <p className="text-zinc-500 text-lg">Building a Digital Ecosystem for Property Sales, Broker Networks, and Lead Conversion</p>
        </div>

        {/* Main Content Layout */}
        <div className="container mx-auto px-6 md:px-12 pb-20 flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Metadata */}
          <aside className="lg:w-1/4">
            <div className="bg-zinc-100 p-8 rounded-lg sticky top-28">
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Industry:</h3>
                <p className="text-sm text-zinc-600">Real Estate / Property Management / Broker Network</p>
              </div>
              <div className="mb-8">
                <h3 className="font-bold text-black mb-2 text-sm">Project Type:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Full Stack Web Application Development</p>
              </div>
              <div>
                <h3 className="font-bold text-black mb-2 text-sm">Platform:</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">Web Application (Admin Portal + Broker Portal)</p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-2/4">
            
            <section id="overview" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Overview</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Landmaark Developer required a centralized digital platform to streamline property sales operations, broker management, project marketing, and customer visit scheduling.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                We built a comprehensive web-based ecosystem consisting of an Admin Management Portal and a Broker Management Portal. The platform allows brokers to seamlessly access real-time property information, schedule client visits, track their commissions, and grow their referral networks from a single, unified dashboard.
              </p>
            </section>

            <section id="problem" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">The Problem</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Before digitalization, the client faced several operational bottlenecks that slowed down sales and reduced visibility:
              </p>
              <ul className="text-zinc-600 leading-relaxed text-sm md:text-base list-disc pl-5 space-y-2">
                <li><strong className="text-zinc-900">Manual Property Tracking:</strong> Property inventory and pricing were managed on scattered spreadsheets.</li>
                <li><strong className="text-zinc-900">Lost Leads & Inefficient Visits:</strong> Follow-ups and site visits were inefficiently tracked over phone calls.</li>
                <li><strong className="text-zinc-900">Broker Coordination Chaos:</strong> Managing a multi-level network of referral brokers became a logistical nightmare.</li>
                <li><strong className="text-zinc-900">No Management Visibility:</strong> Leadership lacked a centralized view of sales performance and payouts.</li>
              </ul>
            </section>

            <section id="solution" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-4">Our Solution</h2>
              <p className="text-zinc-600 leading-relaxed mb-4 text-sm md:text-base">
                Our team developed a complete real estate sales management platform with dedicated, secure portals for both administrators and brokers. The platform digitizes the entire property sales workflow.
              </p>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                Administrators can manage projects from a centralized dashboard, while brokers are empowered to instantly book client visits, access marketing materials, and track earnings in real-time.
              </p>
            </section>

            <section id="modules" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Key Functional Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Smart Broker Dashboard</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Live Property Inventory</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Multi-Level Referral Network</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Automated Visit Booking</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Commission Tracker</div>
                <div className="bg-white p-4 rounded-md shadow-sm text-sm border border-zinc-100 flex items-center justify-center text-center">Marketing Asset Hub</div>
              </div>
            </section>

            <section id="outcomes" className="scroll-mt-32 mb-12">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Business Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">100%</h3>
                  <p className="text-sm text-zinc-500">Digital Inventory Management</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Faster</h3>
                  <p className="text-sm text-zinc-500">Sales & Visit Bookings</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[160px]">
                  <h3 className="text-3xl font-bold text-blue-500 mb-4">Full</h3>
                  <p className="text-sm text-zinc-500">Real-time Visibility</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="scroll-mt-32 pb-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">React.js & Next.js</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Tailwind CSS</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Node.js API</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">MySQL / PostgreSQL</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Role-Based Auth</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs border border-zinc-200">Cloud Hosting</span>
              </div>
            </section>

          </div>

          {/* Right Navigation */}
          <aside className="hidden lg:block lg:w-1/4 sticky top-28 self-start">
            <div className="border-l-2 border-zinc-100 pl-6 flex flex-col gap-4">
              {["overview", "problem", "solution", "modules", "outcomes", "technologies", "previews"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-left text-sm transition-colors ${
                    activeSection === section ? "text-blue-500 font-bold border-l-2 border-blue-500 -ml-[26px] pl-[26px]" : "text-zinc-500 hover:text-[#1e3a8a]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </aside>

        </div>

        {/* --- Image Slider Section --- */}
        <div id="previews" className="w-full bg-white py-20 border-t border-gray-100 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-10 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Platform Previews</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore the custom dashboard interfaces designed specifically for brokers and administrators.</p>
          </div>
          
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-10">
            <div className="relative w-full overflow-hidden border border-gray-200/50 rounded-2xl bg-zinc-50/50 py-8 px-4 shadow-inner flex flex-col items-center">
              
              <div className="relative w-full h-[460px] md:h-[630px] flex justify-center items-center perspective-[1000px]">
                {sliderImages.map((src, idx) => {
                  let offset = idx - currentImageIndex;
                  if (offset < -Math.floor(sliderImages.length / 2)) offset += sliderImages.length;
                  if (offset > Math.floor(sliderImages.length / 2)) offset -= sliderImages.length;

                  const isVisible = Math.abs(offset) <= 2;
                  
                  return (
                    <div 
                      key={idx} 
                      className="absolute transition-all duration-500 ease-in-out cursor-pointer"
                      style={{
                        transform: `translateX(${offset * 65}%) scale(${1 - Math.abs(offset) * 0.15})`,
                        zIndex: 30 - Math.abs(offset),
                        opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                        pointerEvents: isVisible ? 'auto' : 'none',
                      }}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <div className="w-[240px] md:w-[330px] h-[420px] md:h-[580px] rounded-xl overflow-hidden shadow-xl bg-white border border-gray-100 ring-1 ring-black/5">
                        <Image 
                          src={src} 
                          alt={`Landmaark Platform Preview ${idx + 1}`}
                          fill 
                          className="object-contain"
                          unoptimized={true}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Left Arrow */}
              <button 
                onClick={prevImage}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 bg-white hover:bg-zinc-100 text-blue-600 p-3 md:p-4 rounded-full shadow-lg transition-all z-40 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              {/* Right Arrow */}
              <button 
                onClick={nextImage}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 bg-white hover:bg-zinc-100 text-blue-600 p-3 md:p-4 rounded-full shadow-lg transition-all z-40 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
              
              {/* Indicators */}
              <div className="mt-8 flex justify-center gap-2 z-10 flex-wrap px-4">
                {sliderImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentImageIndex === idx ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400 w-2.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
