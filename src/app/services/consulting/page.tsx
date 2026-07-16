"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ConsultingServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "Do you provide industry-specific consulting?", answer: "Yes, our consultants have deep domain expertise across finance, healthcare, retail, and manufacturing sectors to provide tailored industry solutions." },
    { question: "Can you help with digital transformation planning?", answer: "Absolutely. We specialize in defining clear, actionable digital roadmaps aligned with your long-term business strategy and modernization goals." },
    { question: "Do you assist in technology selection?", answer: "Yes, we evaluate and recommend platforms, architectures, and integrations that best fit your operational requirements and enterprise standards." },
    { question: "Do you provide ongoing advisory support?", answer: "We partner with organizations long-term, providing continuous advisory, governance, and optimization services beyond initial implementation." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80" 
              alt="Consulting Services" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Consulting Services
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a233a] mb-5">
                Strategic Technology & Process Consulting
              </h2>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-6">
                Drive transformation with expert consulting services designed to align technology, processes, and long-term business strategy.
              </p>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-8">
                Our consultants identify operational gaps, define digital roadmaps, and deliver scalable modernization strategies tailored to your industry.
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

            {/* Our Consulting Capabilities */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Our Consulting Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Digital Transformation Strategy</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Structured modernization roadmaps aligned with automation, compliance, and enterprise growth objectives.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Process Optimization</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Workflow redesign improving operational efficiency, risk management, and scalability.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Technology Advisory</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Evaluation and recommendation of platforms, integrations, and secure enterprise architectures.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Enterprise Architecture Consulting</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Design of resilient, scalable systems supporting long-term transformation goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">50%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Clear & Actionable Digital Roadmap</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">35%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Improved Operational Efficiency</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Future-Ready Technology Stack</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Industry Expertise</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Deep domain experience across finance, healthcare, retail, and manufacturing sectors.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Business-First Approach</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Solutions aligned with measurable business outcomes and strategic ROI goals.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Certified Consultants</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Experienced professionals delivering enterprise-scale transformation programs.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Long-Term Partnership</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Ongoing advisory, governance, and optimization beyond initial implementation.
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
