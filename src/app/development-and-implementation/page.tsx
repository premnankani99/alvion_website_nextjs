"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DevelopmentImplementationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long does a typical implementation take?",
      a: "Most MVP implementations are delivered within 4-8 weeks depending on complexity. Enterprise-wide programs may follow phased rollouts to ensure scalability, risk management, and long-term performance validation."
    },
    {
      q: "Can you integrate with legacy systems?",
      a: "Yes, we integrate seamlessly with ERP systems, CRM platforms, APIs, and legacy enterprise applications. Our structured integration approach ensures secure data exchange and long-term stability."
    },
    {
      q: "Do you provide post-deployment support?",
      a: "Absolutely. We offer continuous monitoring, enhancement planning, performance optimization, and governance support. Our goal is to ensure sustained business value after go-live."
    },
    {
      q: "How do you ensure scalability and security?",
      a: "We follow enterprise-grade security standards including role-based access, secure integrations, and scalable architecture design. Every implementation aligns with compliance requirements and governance frameworks."
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
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000"
              alt="Development Banner"
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
              Development & Implementation
            </motion.h1>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-12 md:py-20 bg-[#fbfcfd] flex-grow">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">

            {/* Title & Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Appian Development & Implementation Services</h2>
              <div className="text-zinc-600 leading-relaxed font-normal space-y-4">
                <p>We deliver full-cycle Appian development and enterprise implementation services, transforming business requirements into scalable, secure, and high-performance applications.</p>
                <p>From architecture planning to deployment and post-go-live optimization, our approach ensures long-term stability, performance efficiency, and digital scalability.</p>
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

            {/* Our Development Capabilities */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Our Development Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Enterprise Solution Architecture</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Design scalable, secure, and future-ready Appian architectures aligned with enterprise standards.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Application & Workflow Engineering</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Develop optimized process models, automation logic, and dynamic user interfaces.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Integration & Data Fabric Implementation</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Enable seamless integration with ERP, CRM, APIs, databases, and legacy systems.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Deployment & Performance Optimization</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Structured release management, CI/CD pipelines, and performance tuning for enterprise readiness.</p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">50%</span>
                  <p className="text-xs text-zinc-500 font-medium">Accelerated Application Deployment</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">35%</span>
                  <p className="text-xs text-zinc-500 font-medium">Reduction in Development Effort</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">100%</span>
                  <p className="text-xs text-zinc-500 font-medium">Scalable & Secure Architecture</p>
                </div>
              </div>
            </div>

            {/* Why Choose Alvion Technologies? */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Certified Appian Professionals</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Experienced experts delivering enterprise-grade implementations and scalable solutions.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Agile Delivery Framework</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Rapid, collaborative, and predictable execution aligned with business milestones.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Integration Excellence</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Proven expertise connecting Appian with complex enterprise ecosystems securely.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Post-Go-Live Optimization</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Continuous enhancement, monitoring, and performance optimization services.</p>
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
