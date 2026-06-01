"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TrainingServices() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "Do you provide corporate training programs?", answer: "Yes, we offer fully customized corporate upskilling programs tailored to the specific tools, goals, and skill levels of your organization." },
    { question: "Is the training hands-on and project-based?", answer: "Absolutely. We emphasize practical learning through live case studies, guided implementation exercises, and real-world project scenarios." },
    { question: "Do participants receive certification?", answer: "We prepare participants for official platform certifications and provide completion certificates to validate their newly acquired skills." },
    { question: "Do you provide post-training mentorship?", answer: "Yes, our commitment extends beyond the classroom with continuous mentorship and post-training support to ensure successful practical application." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80" 
              alt="Training Services" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Training Services
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-[28px] font-bold text-[#1a233a] mb-6">
                Enterprise Training & Enablement
              </h2>
              <p className="text-[#555] text-base leading-relaxed mb-6">
                Empower your workforce with structured, hands-on training programs designed to strengthen technical expertise and accelerate digital transformation.
              </p>
              <p className="text-[#555] text-base leading-relaxed mb-8">
                Our programs combine theory, live demonstrations, real-world case studies, and guided implementation exercises to ensure measurable skill development.
              </p>
              
              <h3 className="text-xl font-bold text-[#1a233a] mb-4">Industries We Serve</h3>
              <ul className="space-y-2 text-[#555] text-base">
                <li>Banking & Financial Services</li>
                <li>Insurance</li>
                <li>Healthcare</li>
                <li>Retail & E-Commerce</li>
                <li>Manufacturing</li>
                <li>Telecommunications</li>
              </ul>
            </div>

            {/* Our Training Programs */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-[#1a233a] mb-6">Our Training Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Appian Developer Training</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Comprehensive modules covering process models, integrations, SAIL interfaces, and deployment best practices.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Automation & RPA Programs</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Hands-on training on automation frameworks, workflow orchestration, and optimization strategies.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Corporate Upskilling</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Customized enterprise programs aligned with business objectives and project requirements.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Hands-On Workshops</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Interactive workshops with live use cases and guided implementation exercises.
                  </p>
                </div>
              </div>
            </div>

            {/* Business Impact */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-[#1a233a] mb-6">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl font-bold text-[#1c5fba] mb-2">45%</h4>
                  <p className="text-sm text-[#555]">Improved Workforce Productivity</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl font-bold text-[#1c5fba] mb-2">30%</h4>
                  <p className="text-sm text-[#555]">Faster Project Execution</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm text-[#555]">Industry-Ready Professionals</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Expert Trainers</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Industry professionals with real-world enterprise experience.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Practical Learning Model</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Hands-on projects and live scenarios for deeper understanding.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Customized Curriculum</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Programs tailored to your organization's tools and transformation goals.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="font-bold text-[#1a233a] text-sm mb-3">Post-Training Support</h4>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Continuous guidance and mentorship after completion of training.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-xl font-bold text-[#1a233a] mb-6">FAQs</h3>
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
