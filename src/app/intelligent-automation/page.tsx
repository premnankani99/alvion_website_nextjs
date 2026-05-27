"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function IntelligentAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What processes can be automated?",
      a: "Any repetitive, rule-based, or data-driven workflow can be automated. This includes approvals, onboarding, claims processing, compliance checks, and document validation across departments."
    },
    {
      q: "Will automation replace jobs?",
      a: "No. Automation enhances workforce productivity by eliminating repetitive tasks. It enables employees to focus on higher-value strategic and decision-making activities."
    },
    {
      q: "How long does implementation take?",
      a: "Simple workflows can be implemented within 1-2 weeks. Complex enterprise-level automation programs may take 4-8 weeks depending on scope."
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
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000"
              alt="Intelligent Automation Banner"
              fill
              className="object-cover object-center"
              priority
            />
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
              Intelligent Automation
            </motion.h1>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="py-12 md:py-20 bg-[#fbfcfd] flex-grow">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">

            {/* Title & Description */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Intelligent Automation with Appian</h2>
              <p className="text-zinc-600 leading-relaxed font-normal">
                Intelligent Automation combines workflow orchestration, artificial intelligence, robotic process automation, and unified data management to modernize enterprise operations.
              </p>
            </div>

            {/* Industries We Serve */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-4">Industries We Serve</h3>
              <ul className="flex flex-col gap-2 text-zinc-500 text-sm">
                <li>Banking & Capital Markets</li>
                <li>Insurance</li>
                <li>Retail</li>
                <li>Manufacturing</li>
                <li>Telecommunications</li>
              </ul>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">40–60%</span>
                  <p className="text-xs text-zinc-500 font-medium">Faster Processing Across Operations</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">30–50%</span>
                  <p className="text-xs text-zinc-500 font-medium">Reduction in Operational Costs</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl md:text-4xl font-black text-[#1e40af] mb-2">100%</span>
                  <p className="text-xs text-zinc-500 font-medium">Improved Compliance & Audit Visibility</p>
                </div>
              </div>
            </div>

            {/* Why Choose Alvion Technologies? */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#0d1b2a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Domain Expertise</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Extensive experience delivering automation across finance, healthcare, retail, and manufacturing sectors.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">End-to-End Implementation</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">From strategy and design to deployment and continuous optimization, we manage the complete lifecycle.</p>
                </div>
                <div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-sm text-black mb-2">Enterprise-Grade Security</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">Secure, scalable architectures aligned with global compliance and enterprise standards.</p>
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
