"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ApplicationInfraSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide 24/7 support?",
      a: "Yes, we operate a round-the-clock support model with continuous monitoring and alert management. Our SLA-driven framework ensures rapid response times and structured escalation procedures. This guarantees operational continuity and minimized business disruption."
    },
    {
      q: "Can you support cloud and hybrid environments?",
      a: "Absolutely. We manage AWS, Azure, hybrid cloud, and on-premise infrastructure environments. Our experts ensure optimal configuration, cost efficiency, and security compliance. We also assist with cloud migration and modernization initiatives."
    },
    {
      q: "How do you handle incidents and outages?",
      a: "We follow ITIL-based incident and problem management practices. Every issue is logged, categorized, and resolved with detailed root cause analysis. Preventive measures are implemented to avoid recurrence and strengthen resilience."
    },
    {
      q: "How do you ensure security and compliance?",
      a: "We conduct regular vulnerability assessments and governance audits. Security controls are continuously monitored to meet industry standards. Our framework aligns infrastructure operations with enterprise compliance requirements."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20 min-h-screen flex flex-col text-[#0d1b2a]">
        {/* HERO BANNER */}
        <section className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
              alt="Infra Support Banner"
              fill
              className="object-cover object-center"
              priority
             sizes="100vw" />
            <div className="absolute inset-0 bg-[#070b19]/80 z-10" />
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-[52px] font-black text-white tracking-tight leading-tight"
            >
              Application & Infra Support
            </motion.h1>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-10 md:py-16 bg-[#fbfcfd] flex-grow">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">

            {/* Title & Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Enterprise Application & Infrastructure Support</h2>
              <div className="text-zinc-600 leading-relaxed font-normal space-y-4">
                <p>Ensure uninterrupted business operations with reliable, secure, and scalable application and infrastructure support services.</p>
                <p>Our proactive monitoring, structured SLAs, and optimization framework minimize downtime, enhance performance, and strengthen operational resilience.</p>
              </div>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-4">Industries We Serve</h3>
              <ul className="flex flex-col gap-2 text-zinc-500 text-sm">
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
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Our Support Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Application Monitoring & Maintenance</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Continuous monitoring, incident resolution, patching, upgrades, and performance optimization.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Infrastructure Management</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Cloud and on-prem infrastructure management ensuring scalability, reliability, and security.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Incident & Problem Management</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">ITIL-aligned processes with defined SLAs and structured root cause analysis.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Security & Compliance Optimization</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Vulnerability assessments, governance enforcement, and compliance alignment.</p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">99.9%</span>
                  <p className="text-xs text-zinc-500 font-medium">Application Uptime & High Availability</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">40%</span>
                  <p className="text-xs text-zinc-500 font-medium">Reduction in Downtime Risk</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">100%</span>
                  <p className="text-xs text-zinc-500 font-medium">Secure & Compliant Operations</p>
                </div>
              </div>
            </div>

            {/* Why Choose Alvion Technologies? */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">24/7 Support Model</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Round-the-clock monitoring with rapid response and proactive risk mitigation.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Certified Infrastructure Experts</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Skilled professionals managing enterprise-grade environments securely.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Proactive Monitoring</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Early detection and prevention of system failures and performance bottlenecks.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Scalable & Secure Framework</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Infrastructure aligned with enterprise security, governance, and compliance standards.</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">FAQs</h3>
              <div className="flex flex-col gap-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors"
                    >
                      <span className="font-semibold text-sm text-black">{faq.q}</span>
                      <span className="text-zinc-400 font-medium text-lg">{openFaq === idx ? "-" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-4 text-sm text-zinc-500"
                        >
                          <div className="pt-2 border-t border-zinc-100 mt-2">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
