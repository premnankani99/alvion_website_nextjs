"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, GraduationCap, ArrowLeft } from "lucide-react";

export default function AssociateSoftwareDeveloperPage() {
  const responsibilities = [
    { title: "Code Development", desc: "Write clean, efficient, and well-documented code in accordance with company standards and best practices under the guidance of senior team members." },
    { title: "Collaboration", desc: "Actively participate in team meetings, brainstorming sessions, and project discussions to contribute ideas and understand project requirements." },
    { title: "Testing & Debugging", desc: "Assist in identifying, troubleshooting, and resolving software defects and bugs. Develop and execute unit tests to ensure code quality." },
    { title: "Learning & Growth", desc: "Continuously learn new programming languages, frameworks, and technologies to enhance your skills and contribute effectively to projects." },
    { title: "SDLC Participation", desc: "Support the team in all phases of the software development lifecycle (SDLC), including design, development, testing, deployment, and maintenance." },
    { title: "Code Reviews", desc: "Participate in peer code reviews to learn from experienced developers and improve your coding abilities." }
  ];

  const qualifications = [
    "0-2 Years of experience with a Bachelor’s degree in Computer Science, Information Technology, Engineering, or a related field.",
    "Solid understanding of fundamental concepts like Object-Oriented Programming (OOP), Data Structures, and Algorithms.",
    "Proficiency in at least one modern programming language, such as Java, Python, JavaScript, or C#.",
    "Basic knowledge of relational databases (e.g., MySQL, PostgreSQL) and SQL.",
    "Strong logical reasoning, analytical, and problem-solving skills.",
    "An excellent communicator with a positive attitude and a strong desire to learn and grow.",
    "Ability to work effectively both independently and as part of a collaborative team."
  ];

  const preferredSkills = [
    "Prior internship or hands-on project experience in software development.",
    "Familiarity with version control systems like Git.",
    "Exposure to web development frameworks (e.g., React, Angular, Spring, Django).",
    "Basic understanding of cloud platforms (AWS, Azure, GCP) or APIs."
  ];

  const perks = [
    { title: "Structured Mentorship", desc: "Receive direct guidance and support from experienced senior developers to accelerate your learning.", icon: "🎓" },
    { title: "Career Growth Path", desc: "A clear trajectory for professional development and advancement within the company.", icon: "📈" },
    { title: "Hands-On Experience", desc: "The opportunity to work on real-world projects and make a tangible impact from day one.", icon: "💻" },
    { title: "Innovative Culture", desc: "A dynamic and inclusive work environment that encourages creativity, collaboration, and continuous learning.", icon: "💡" },
    { title: "Competitive Salary", desc: "A competitive entry-level compensation package and benefits.", icon: "💰" },
    { title: "Professional Development", desc: "We encourage and support continuous learning through training and other resources.", icon: "📚" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20 min-h-screen flex flex-col text-[#0d1b2a]">
        
        {/* HERO BANNER */}
        <section className="relative h-[280px] md:h-[380px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000"
              alt="Associate Software Developer Banner"
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
                Associate Software Developer
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
                    Alvion Technologies is excited to invite applications from passionate and aspiring programmers for the role of Associate Software Developer at our Jaipur office. This is an ideal entry-level position for recent graduates and early-career professionals who are eager to launch their careers in software development and contribute to innovative technology projects. Under the mentorship of senior engineers, you will contribute to the entire software development lifecycle, from writing and testing code to debugging and deploying applications.
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
                      <span className="font-semibold text-black">Software Engineering</span>
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
