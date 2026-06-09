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
  const sliderImages = Array.from({ length: 10 }, (_, i) => `/case-studies/landmaark/slider-${i + 1}.png`);
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

            {/* Technologies Section in Middle Column */}
            <section id="technologies" className="scroll-mt-32 pb-8">
              <h2 className="text-2xl font-bold text-blue-500 mb-6">Technologies Used</h2>
              
              {/* Pastel Boxes matching the screenshot style */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-10 justify-items-center">
                {[
                  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", bg: "bg-orange-50/60" },
                  { name: "CSS3", icon: "data:image/png;base64,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", bg: "bg-blue-50/60" },
                  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", bg: "bg-yellow-50/60" },
                  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", bg: "bg-green-50/60" },
                  { name: "Express", icon: "https://cdn.simpleicons.org/express/000000", bg: "bg-slate-100/60" },
                  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", bg: "bg-blue-50/60" },
                  { name: "cPanel", icon: "https://cdn.simpleicons.org/cpanel/FF6C2C", bg: "bg-orange-50/60" },
                  { name: "ngrok", icon: "https://cdn.simpleicons.org/ngrok/1F1E37", bg: "bg-slate-100/60" },
                ].map((tech, idx) => (
                  <div key={idx} className={`flex flex-col items-center justify-center p-4 rounded-xl w-[120px] h-[105px] ${tech.bg} border-0 shadow-sm hover:scale-105 transition-transform duration-300`}>
                    <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2 object-contain" />
                    <span className="font-bold text-gray-800 text-xs text-center">{tech.name}</span>
                  </div>
                ))}
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
