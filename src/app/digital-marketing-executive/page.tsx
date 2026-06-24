"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";

export default function DigitalMarketingExecutivePage() {
  const responsibilities = [
    { title: "Campaign Management", desc: "Assist in planning, executing, and monitoring digital marketing campaigns across platforms such as Google, LinkedIn, Instagram, and Facebook." },
    { title: "Content Creation", desc: "Create engaging content for social media posts, blogs, email campaigns, and website updates aligned with brand messaging." },
    { title: "Social Media Management", desc: "Manage and schedule posts, respond to engagement, and grow audience reach across social media platforms." },
    { title: "SEO Support", desc: "Assist in implementing on-page and off-page SEO strategies to improve website ranking and organic traffic." },
    { title: "Analytics & Reporting", desc: "Track campaign performance using tools like Google Analytics and generate performance reports with actionable insights." },
    { title: "Lead Generation", desc: "Support initiatives focused on generating and nurturing leads through digital channels." },
    { title: "Market Research", desc: "Conduct competitor analysis and research industry trends to identify new marketing opportunities." }
  ];

  const qualifications = [
    "0-1 years of experience with a Bachelor’s degree in Marketing, Business Administration, Communications, or a related field.",
    "Basic understanding of digital marketing concepts including SEO, SEM, social media marketing, and email marketing.",
    "Familiarity with tools such as Google Analytics, Google Ads, or Meta Ads Manager (preferred but not mandatory).",
    "Strong written and verbal communication skills.",
    "Creative mindset with attention to detail.",
    "Analytical thinking and ability to interpret performance data.",
    "Ability to manage multiple tasks and meet deadlines.",
    "A strong willingness to learn and grow in a fast-paced environment."
  ];

  const preferredSkills = [
    "Prior internship or hands-on project experience in digital marketing.",
    "Familiarity with content design tools like Canva.",
    "Basic knowledge of website management.",
    "Understanding of paid advertising campaigns (PPC).",
    "Exposure to marketing automation tools or CRM systems."
  ];

  const perks = [
    { title: "Structured Mentorship", desc: "Work under experienced marketing professionals to accelerate your growth.", icon: "🤝" },
    { title: "Career Growth Path", desc: "Clear opportunities to advance into specialized roles such as SEO Specialist, Performance Marketer, or Marketing Strategist.", icon: "📈" },
    { title: "Hands-On Experience", desc: "Real exposure to live campaigns and measurable business impact from day one.", icon: "📊" },
    { title: "Innovative Culture", desc: "A collaborative and forward-thinking work environment that encourages creativity and experimentation.", icon: "💡" },
    { title: "Competitive Salary", desc: "Attractive compensation package aligned with industry standards.", icon: "💰" },
    { title: "Professional Certifications", desc: "Access to training resources and opportunities to earn certifications in digital marketing tools.", icon: "📜" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20 min-h-screen flex flex-col text-[#0d1b2a]">
        
        {/* HERO BANNER */}
        <section className="relative h-[280px] md:h-[380px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000"
              alt="Digital Marketing Executive Banner"
              fill
              className="object-cover"
              priority
             sizes="100vw" />
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
                Digital Marketing Executive
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
        <section className="py-10 md:py-16 bg-[#fafbfc] flex-grow">
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column (Job Details) */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Job Overview */}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-black mb-4">Job Overview</h2>
                  <p className="text-zinc-600 leading-relaxed font-normal text-sm md:text-base">
                    Alvion Technologies is looking for an enthusiastic and creative Digital Marketing Executive to join our team in Jaipur. In this role, you will help plan and execute digital marketing campaigns to improve brand visibility and generate quality leads. You will manage campaigns across Google, LinkedIn, Facebook, and Instagram, create engaging social media posts, support SEO initiatives, and compile analytics reports under the guidance of our marketing leaders.
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
                      <span className="font-semibold text-black">Digital Marketing</span>
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
        <section className="py-10 md:py-16 bg-white border-t border-zinc-100 relative overflow-hidden">
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
