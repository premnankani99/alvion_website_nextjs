"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QualityEngineeringAssurance() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "Do you provide automation testing services?", answer: "Yes, we build robust automation testing frameworks integrated directly into your CI/CD pipelines to ensure continuous quality." },
    { question: "Can you support DevOps and CI/CD pipelines?", answer: "Absolutely. Our quality engineering practices are seamlessly embedded into modern DevOps and CI/CD environments." },
    { question: "Do you offer performance and load testing?", answer: "Yes, we simulate real-world workloads to validate the scalability, responsiveness, and stability of your applications." },
    { question: "How do you ensure security and compliance quality?", answer: "We perform comprehensive vulnerability assessments and ensure validation against industry regulatory standards before release." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80" 
              alt="Quality Engineering & Assurance" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Quality Engineering & Assurance
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a233a] mb-5">
                Enterprise Quality Engineering & Assurance
              </h2>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-6">
                Deliver reliable, high-performance applications through structured quality engineering practices embedded across the software lifecycle.
              </p>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-8">
                Our QA framework integrates automation, performance validation, and security testing to ensure enterprise-grade stability before go-live.
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

            {/* Our Quality Capabilities */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Our Quality Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Functional & Regression Testing</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Comprehensive validation cycles ensuring application stability and reliability across releases.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Automation Testing</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Automated frameworks accelerating release cycles while reducing manual intervention.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Performance & Load Testing</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Validation of scalability and responsiveness under real-world workload conditions.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Security & Compliance Testing</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Identification of vulnerabilities and validation against regulatory standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">40%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Reduction in Production Defects</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">30%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Accelerated Release Cycles</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Enhanced System Stability</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Certified QA Engineers</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Experienced professionals delivering enterprise-grade quality standards.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Automation-First Strategy</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Structured automated testing frameworks aligned with modern DevOps practices.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">CI/CD Integration</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Quality engineering seamlessly embedded into continuous integration pipelines.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Continuous Quality Improvement</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Ongoing monitoring, reporting, and optimization for sustained excellence.
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
