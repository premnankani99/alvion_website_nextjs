"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function DevelopmentImplementation() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    { question: "How long does a typical implementation take?", answer: "Implementation timelines vary depending on the scope and complexity of the project. A typical enterprise application can range from a few weeks for initial MVP to several months for full-scale deployments." },
    { question: "Can you integrate with legacy systems?", answer: "Yes, we have deep expertise in connecting Appian and custom applications with legacy enterprise ecosystems, including ERPs, CRMs, and on-premise databases via secure APIs and integration frameworks." },
    { question: "Do you provide post-deployment support?", answer: "Absolutely. We offer comprehensive post-go-live optimization, continuous enhancement, and 24/7 monitoring to ensure long-term stability and performance." },
    { question: "How do you ensure scalability and security?", answer: "We design cloud-native and on-premise architectures that adhere to global compliance standards, utilizing containerization, CI/CD pipelines, and enterprise-grade security protocols." }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">
        
        {/* HERO SECTION */}
        <section className="relative w-full h-[250px] overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80" 
              alt="Development and Implementation" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
          </div>
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 w-full relative z-20">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Development & Implementation
            </h1>
          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="bg-[#f8f9fc] py-16">
          <div className="max-w-5xl mx-auto px-6 md:px-12">
            
            {/* Intro & Industries */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a233a] mb-5">
                Appian Development & Implementation Services
              </h2>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-6">
                We deliver full-cycle Appian development and enterprise implementation services, transforming business requirements into scalable, secure, and high-performance applications.
              </p>
              <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-8">
                From architecture planning to deployment and post-go-live optimization, our approach ensures long-term stability, performance efficiency, and digital scalability.
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

            {/* Our Development Capabilities */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Our Development Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Enterprise Solution Architecture</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Design scalable, secure, and future-ready Appian architectures aligned with enterprise standards.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Application & Workflow Engineering</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Develop optimized process models, automation logic, and dynamic user interfaces.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Integration & Data Fabric Implementation</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Enable seamless integration with ERP, CRM, APIs, databases, and legacy systems.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Deployment & Performance Optimization</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Structured release management, CI/CD pipelines, and performance tuning for enterprise readiness.
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
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Accelerated Application Deployment</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">35%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Reduction in Development Effort</p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-8 text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2">100%</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 font-medium">Scalable & Secure Architecture</p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h3 className="text-xl md:text-2xl font-bold text-[#1a233a] mb-6">Why Choose Alvion Technologies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Certified Appian Professionals</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Experienced experts delivering enterprise-grade implementations and scalable solutions.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Agile Delivery Framework</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Rapid, collaborative, and predictable execution aligned with business milestones.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Integration Excellence</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Proven expertise connecting Appian with complex enterprise ecosystems securely.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-[12px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h4 className="text-[17px] md:text-lg font-bold text-[#1a233a] mb-3">Post-Go-Live Optimization</h4>
                  <p className="text-sm md:text-[15px] text-zinc-600 leading-relaxed">
                    Continuous enhancement, monitoring, and performance optimization services.
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
