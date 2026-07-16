"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ApplicationInfraSupport() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "Do you provide 24/7 support?", answer: "Yes, our dedicated support teams provide round-the-clock 24/7/365 monitoring and rapid incident resolution to ensure continuous operations." },
    { question: "Can you support cloud and hybrid environments?", answer: "Absolutely. We manage complex hybrid architectures across on-premise, AWS, Azure, and Google Cloud Platform environments." },
    { question: "How do you handle incidents and outages?", answer: "We follow strict ITIL-aligned processes with predefined SLAs for rapid triage, root cause analysis, and resolution to minimize downtime." },
    { question: "How do you ensure security and compliance?", answer: "We conduct regular vulnerability assessments, enforce strict access controls, and align our infrastructure management with global security standards." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" 
              alt="Application & Infra Support" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Application & Infra Support
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a233a] mb-5">
                Enterprise Application & Infrastructure Support
              </h2>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-6">
                Ensure uninterrupted business operations with reliable, secure, and scalable application and infrastructure support services.
              </p>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-8">
                Our proactive monitoring, structured SLAs, and optimization framework minimize downtime, enhance performance, and strengthen operational resilience.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-4">Industries We Serve</h3>
              <ul className="list-disc list-inside pl-3 md:pl-8 space-y-3 text-zinc-600 text-[15px] md:text-base mt-3 marker:text-blue-500">
                <li>Banking & Financial Services</li>
                <li>Insurance</li>
                <li>Healthcare</li>
                <li>Retail & E-Commerce</li>
                <li>Manufacturing</li>
                <li>Telecommunications</li>
              </ul>
            </div>

            {/* Our Support Capabilities */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Our Support Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Application Monitoring & Maintenance</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Continuous monitoring, incident resolution, patching, upgrades, and performance optimization.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Infrastructure Management</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Cloud and on-prem infrastructure management ensuring scalability, reliability, and security.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Incident & Problem Management</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    ITIL-aligned processes with defined SLAs and structured root cause analysis.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Security & Compliance Optimization</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Vulnerability assessments, governance enforcement, and compliance alignment.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">99.9%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Application Uptime & High Availability</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">40%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Reduction in Downtime Risk</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Secure & Compliant Operations</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">24/7 Support Model</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Round-the-clock monitoring with rapid response and proactive risk mitigation.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Certified Infrastructure Experts</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Skilled professionals managing enterprise-grade environments securely.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Proactive Monitoring</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Early detection and prevention of system failures and performance bottlenecks.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Scalable & Secure Framework</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Infrastructure aligned with enterprise security, governance, and compliance standards.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">FAQs</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-[8px] overflow-hidden">
                    <button 
                      onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                      className="w-full px-5 py-4 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-[15px] font-medium text-[#333]">{faq.question}</span>
                      <span className="text-gray-400 text-lg leading-none">
                        {openFAQ === i ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFAQ === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-5 pb-4 text-[14px] text-[#666] pt-1">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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
