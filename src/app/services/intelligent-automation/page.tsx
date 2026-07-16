"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function IntelligentAutomation() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "What processes can be automated?", answer: "We can automate a wide range of rule-based, repetitive processes across finance, HR, supply chain, and IT operations using advanced RPA and AI capabilities." },
    { question: "Will automation replace jobs?", answer: "Automation is designed to augment human work, taking over repetitive tasks so employees can focus on higher-value, strategic initiatives." },
    { question: "How long does implementation take?", answer: "Implementation timelines vary based on complexity, but our agile approach typically delivers initial automated workflows within a few weeks." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] bg-[#1a1f3c] overflow-hidden flex items-center">
          {/* Background image on the right like the robot */}
          <div className="absolute right-0 bottom-0 w-1/2 h-full z-0 flex justify-end items-end">
            <div className="relative w-full h-full max-w-lg">
              <Image 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80" 
                alt="Robot" 
                fill 
                className="object-contain object-bottom opacity-80"
              />
            </div>
          </div>
          {/* Dark gradient overlay if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f3c] via-[#1a1f3c]/90 to-transparent z-10" />

          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Intelligent Automation
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a233a] mb-5">
                Intelligent Automation with Appian
              </h2>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-8">
                Intelligent Automation combines workflow orchestration, artificial intelligence, robotic process automation, and unified data management to modernize enterprise operations.
              </p>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-4">Industries We Serve</h3>
              <ul className="list-disc list-inside pl-3 md:pl-8 space-y-3 text-zinc-600 text-[15px] md:text-base mt-3 marker:text-blue-500">
                <li>Banking & Capital Markets</li>
                <li>Insurance</li>
                <li>Retail</li>
                <li>Manufacturing</li>
                <li>Telecommunications</li>
              </ul>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">40–60%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Faster Processing Across Operations</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">30–50%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Reduction in Operational Costs</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Improved Compliance & Audit Visibility</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Domain Expertise</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Extensive experience delivering automation across finance, healthcare, retail, and manufacturing sectors.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">End-to-End Implementation</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    From strategy and design to deployment and continuous optimization, we manage the complete lifecycle.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Enterprise-Grade Security</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Secure, scalable architectures aligned with global compliance and enterprise standards.
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
