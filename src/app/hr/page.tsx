"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";

export default function HRExecutivePage() {
  const responsibilities = [
    { title: "Recruitment Support", desc: "Assist in the end-to-end recruitment process, including sourcing candidates from job portals, screening resumes, and scheduling interviews." },
    { title: "Candidate Communication", desc: "Serve as a point of contact for candidates, ensuring a positive experience throughout the hiring process." },
    { title: "Onboarding & Offboarding", desc: "Assist with the smooth onboarding of new employees by preparing documentation and coordinating orientation sessions. Support offboarding procedures as needed." },
    { title: "HR Administration", desc: "Help maintain and update employee records in our HR Information System (HRIS), ensuring data accuracy and confidentiality." },
    { title: "Documentation", desc: "Assist in preparing HR-related documents such as offer letters, appointment letters, and employee verification letters." },
    { title: "Employee Engagement", desc: "Contribute to organizing company events, wellness programs, and other employee engagement initiatives to foster a positive work environment." },
    { title: "Policy Support", desc: "Provide support in researching and documenting HR policies and procedures." }
  ];

  const qualifications = [
    "0-2 years of experience with a Bachelor’s or Master’s degree in Human Resources, Business Administration, Psychology, or a related field.",
    "Excellent verbal and written communication skills in English.",
    "Strong interpersonal skills with the ability to interact professionally with employees and candidates.",
    "Proficient in MS Office Suite (Word, Excel, PowerPoint).",
    "Exceptional organizational skills and a keen attention to detail.",
    "Ability to handle sensitive information with the utmost confidentiality and discretion.",
    "A positive attitude, eagerness to learn, and a strong work ethic."
  ];

  const preferredSkills = [
    "Prior internship experience in HR is a plus.",
    "Familiarity with professional networking sites like LinkedIn.",
    "Basic understanding of Indian labor laws and regulations."
  ];

  const perks = [
    { title: "Hands-On Experience", desc: "Gain practical experience in all major functions of a modern HR department.", icon: "💼" },
    { title: "Professional Mentorship", desc: "Receive direct guidance and mentorship from experienced HR professionals.", icon: "📚" },
    { title: "Dynamic Tech Culture", desc: "Be part of a collaborative, innovative, and supportive team in a growing tech company.", icon: "🚀" },
    { title: "Internship Stipend", desc: "A competitive monthly stipend for the duration of the internship.", icon: "💰" },
    { title: "Completion Certificate", desc: "A certificate recognizing your contribution and successful completion of the internship.", icon: "🎓" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20 min-h-screen flex flex-col text-[#0d1b2a]">
        
        {/* HERO BANNER */}
        <section className="relative h-[280px] md:h-[380px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000"
              alt="HR Executive Banner"
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
                HR Executive
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
                    Alvion Technologies is seeking an HR Executive to support our HR operations and contribute to the development and maintenance of our human resource systems. This is an ideal position for early-career professionals and graduates who want to build a career in tech recruitment, administration, employee engagement, and onboarding practices in Jaipur.
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
                      <span className="font-semibold text-black">Human Resources</span>
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
