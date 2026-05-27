"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";

export default function AppianDeveloperPage() {
  const responsibilities = [
    { title: "Full-Lifecycle Development", desc: "Architect, design, develop, and deploy end-to-end solutions on the Appian platform, ensuring they are scalable, secure, and reliable." },
    { title: "Solution Design", desc: "Create core Appian artifacts, including process models, data types (CDTs), user interfaces (SAIL), expression rules, and records, to meet business requirements." },
    { title: "System Integration", desc: "Develop seamless integrations between Appian applications and other enterprise systems, databases, and third-party services using web APIs (REST/SOAP) and other connectors." },
    { title: "Stakeholder Collaboration", desc: "Work effectively with cross-functional teams to gather requirements, conduct design reviews, and ensure the final product aligns perfectly with business goals." },
    { title: "Application Support & Optimization", desc: "Provide ongoing maintenance and support for existing Appian applications, including troubleshooting bugs, resolving performance issues, and implementing enhancements." },
    { title: "Best Practices", desc: "Uphold high standards of code quality by adhering to Appian development best practices, participating in code reviews, and maintaining thorough technical documentation." }
  ];

  const qualifications = [
    "Bachelor’s degree in Computer Science, Information Technology, Engineering, or a related discipline.",
    "0-2 years of hands-on experience in application development and implementation using the Appian platform.",
    "Strong proficiency in all major Appian components, including Process Modeling, SAIL for UI design, Records, and data management.",
    "Demonstrable experience integrating Appian with external systems via web services (REST/SOAP).",
    "Solid understanding of relational databases (like MySQL, SQL Server) and proficiency in writing SQL queries.",
    "Excellent analytical and problem-solving abilities with a keen attention to detail.",
    "Strong verbal and written communication skills and the ability to work effectively in a team environment."
  ];

  const preferredSkills = [
    "Appian Certified Associate Developer (Level 1) or Lead Developer (Level 2) certification is a significant plus.",
    "Experience working within an Agile/Scrum development framework.",
    "Familiarity with related web technologies such as Java, JavaScript, or CSS.",
    "Knowledge of enterprise architecture patterns and principles."
  ];

  const perks = [
    { title: "Competitive Salary", desc: "A competitive salary and a comprehensive benefits package.", icon: "💰" },
    { title: "Professional Growth", desc: "Opportunities for professional growth, including training and support for Appian certifications.", icon: "📈" },
    { title: "Collaborative Culture", desc: "A collaborative and forward-thinking work culture that values innovation and teamwork.", icon: "🤝" },
    { title: "Meaningful Projects", desc: "The chance to work on challenging and meaningful projects that make a real business impact.", icon: "🎯" },
    { title: "Jaipur Office", desc: "A modern and supportive office environment located in the vibrant city of Jaipur.", icon: "🏢" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20 min-h-screen flex flex-col text-[#0d1b2a]">
        
        {/* HERO BANNER */}
        <section className="relative h-[280px] md:h-[380px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
              alt="Appian Developer Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#070b19]/80 z-10" />
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 w-full">
            <div className="max-w-6xl mx-auto">
              <Link 
                href="/careers" 
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-6 text-sm transition-colors"
              >
                <ArrowLeft size={16} /> Back to Careers
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight"
              >
                Appian Developer
              </motion.h1>
              <div className="flex flex-wrap gap-4 text-zinc-300 text-xs md:text-sm">
                <span className="flex items-center gap-1.5"><MapPin size={16} className="text-[#3b82f6]" /> Jaipur, India</span>
                <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-[#3b82f6]" /> Full-Time</span>
                <span className="flex items-center gap-1.5"><GraduationCap size={16} className="text-[#3b82f6]" /> 0-2 Years Exp</span>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section className="py-12 md:py-20 bg-[#fafbfc] flex-grow">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column (Job Details) */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Job Overview */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Job Overview</h2>
                  <p className="text-zinc-600 leading-relaxed font-normal text-sm md:text-base">
                    Alvion Technologies was founded on a powerful vision to bridge the gap between complex technology and real-world business needs. As an Appian Developer, you will build and automate business applications using the Appian low-code platform. You will be responsible for full-lifecycle development, creating custom solutions, and orchestrating processes to drive digital transformation.
                  </p>
                </div>

                {/* Key Responsibilities */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black mb-6">Key Responsibilities</h2>
                  <div className="space-y-6">
                    {responsibilities.map((resp, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-[#1e3a8a] rounded-full mt-2.5 shrink-0" />
                        <div>
                          <h4 className="font-bold text-black text-base mb-1">{resp.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed">{resp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Required Qualifications */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Required Skills & Qualifications</h2>
                  <ul className="space-y-3">
                    {qualifications.map((qual, i) => (
                      <li key={i} className="flex gap-3 text-zinc-600 text-sm md:text-base leading-relaxed">
                        <span className="text-[#1e3a8a] font-bold">✓</span>
                        <span>{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Preferred Skills */}
                {preferredSkills.length > 0 && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Preferred Skills</h2>
                    <ul className="space-y-3">
                      {preferredSkills.map((pref, i) => (
                        <li key={i} className="flex gap-3 text-zinc-600 text-sm md:text-base leading-relaxed">
                          <span className="text-blue-500 font-bold">•</span>
                          <span>{pref}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Right Column (Sticky Summary Card) */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-zinc-200 rounded-[24px] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow sticky top-28">
                  <h3 className="text-lg font-bold text-black mb-6 pb-4 border-b border-zinc-100">Job Summary</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Location</span>
                      <span className="font-semibold text-black">Jaipur, India</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Job Type</span>
                      <span className="font-semibold text-black">Full-Time</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Workplace</span>
                      <span className="font-semibold text-black">In-Office</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Experience</span>
                      <span className="font-semibold text-black">0-2 Years</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-400">Department</span>
                      <span className="font-semibold text-black">Low-Code & AI</span>
                    </div>
                  </div>

                  <Link 
                    href="/contact" 
                    className="block w-full text-center py-4 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full shadow-lg hover:shadow-[0_10px_20px_rgba(30,58,138,0.15)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-widest text-[10px]"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHAT WE OFFER */}
        <section className="py-12 md:py-20 bg-white border-t border-zinc-100 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-12">
              What We Offer at <span className="text-[#1e3a8a]">Alvion Technologies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {perks.map((perk, i) => (
                <div 
                  key={i} 
                  className="p-6 bg-[#fbfcfd] border border-zinc-150 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.005)] hover:shadow-[0_10px_25px_rgba(30,58,138,0.04)] transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{perk.icon}</div>
                  <h4 className="font-bold text-black text-lg mb-2">{perk.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
