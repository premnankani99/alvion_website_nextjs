"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "Appian Developer",
    exp: "0-2 Years",
    desc: "Designs, builds, and automates scalable business applications leveraging the Appian low-code platform.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/appian-developer"
  },
  {
    title: "React Native Developer",
    exp: "2-4 Years",
    desc: "Designs and develops high-performance, cross-platform mobile applications using React and JavaScript.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/react-native-developer"
  },
  {
    title: "HR Executive",
    exp: "0-2 Years",
    desc: "Manages end-to-end HR operations and contributes to the strategic growth of our workforce and culture.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/hr"
  },
  {
    title: "Associate Software Developer",
    exp: "0-2 Years",
    desc: "Collaborates with cross-functional teams to design, develop, and deploy innovative software solutions.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/associate-software-developer"
  },
  {
    title: "Digital Marketing Executive",
    exp: "0-2 Years",
    desc: "Plans and executes data-driven digital marketing campaigns to boost brand visibility and drive growth.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/digital-marketing-executive"
  },
  {
    title: "Automation Tester - Python",
    exp: "3-4 Years",
    desc: "Develops and executes robust automated test scripts to ensure software quality and reliable releases.",
    loc: "JAIPUR, INDIA",
    type: "FULL-TIME",
    link: "/automation-tester"
  }
];

const perks = [
  { title: "Build Technology That Makes an Impact", desc: "Build impactful software that solves real-world problems and drives meaningful innovation.", icon: "💡" },
  { title: "Learn, Grow, and Lead", desc: "Grow your career with continuous learning, mentorship, and opportunities to lead impactful projects.", icon: "📚" },
  { title: "Flexible, People-First Environment", desc: "Enjoy a flexible, supportive workplace that values work-life balance and empowers you to do your best work.", icon: "🌱" }
];

export default function CareersPage() {
  const scrollToOpenings = () => {
    const element = document.getElementById("openings");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">

        {/* 1. HERO SECTION */}
        <section className="relative h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.32 }}
            className="absolute inset-0 z-0"
          >
            <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" alt="Careers Banner" fill sizes="100vw" className="object-cover" priority />
            <div className="absolute inset-0 bg-[#070b19]/75 z-10" />

            {/* Ambient cyber glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10 animate-pulse" />
          </motion.div>
          <div className="relative z-20 text-center px-6 flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-3xl md:text-[52px] font-black text-white mb-8 tracking-tight leading-tight"
            >
              Build Your <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Future</span> With Us
            </motion.h1>
            <motion.button
              onClick={scrollToOpenings}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.06 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full shadow-xl hover:shadow-[0_10px_25px_rgba(30,58,138,0.25)] transition-all duration-300 text-xs uppercase tracking-widest"
            >
              View Openings
            </motion.button>
          </div>
        </section>

        {/* 2. WHY WORK WITH US */}
        <section className="py-10 md:py-16 bg-white text-[#0d1b2a] border-b border-zinc-100 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">

              <div className="lg:w-1/2 flex flex-col items-start">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.16, type: "spring", bounce: 0.1 }}
                >
                  {/* Badge removed per user request */}

                  {/* Heading */}
                  <h2 className="text-2xl md:text-4xl font-black text-black mb-4 leading-tight">
                    Why <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Work With Us</span>
                  </h2>
                  <p className="text-zinc-500 text-base md:text-lg mb-10 font-normal">Innovate with Purpose. Grow with Passion. Build the Future Together.</p>

                  <div className="grid grid-cols-1 auto-rows-fr gap-4 md:gap-6 w-full">
                    {perks.map((perk, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.18, delay: i * 0.03, type: "spring", bounce: 0.1 }}
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-[#fcfdfe] rounded-[16px] border border-zinc-150 hover:bg-white hover:border-blue-500/20 hover:shadow-[0_10px_35px_rgba(30,58,138,0.05)] transition-all duration-300 h-full"
                      >
                        <div className="text-2xl md:text-3xl flex items-center justify-center p-3 bg-blue-50/50 rounded-xl shrink-0">{perk.icon}</div>
                        <div>
                          <h4 className="font-bold text-black text-base md:text-lg mb-1 md:mb-2">{perk.title}</h4>
                          <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed">{perk.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Image Container with swipe reflect and border radius */}
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.24, type: "spring", bounce: 0.1 }}
                  className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer"
                >
                  <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Team collaborating" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent z-15 pointer-events-none" />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. CURRENT OPENINGS */}
        <section id="openings" className="py-10 md:py-16 bg-[#fafbfc] scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
              {/* Badge removed per user request */}

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.18, delay: 0.01, type: "spring", bounce: 0.1 }}
                className="text-2xl md:text-4xl font-black text-black"
              >
                Current <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Openings</span>
              </motion.h3>
              <p className="text-zinc-500 text-base md:text-lg mt-4 max-w-2xl mx-auto font-normal">Help us build the next generation of enterprise automation.</p>
            </div>

            {/* Jobs list with fast staggered cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[95%] mx-auto">
              {jobs.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: (index % 3 === 0 ? -60 : index % 3 === 2 ? 60 : 0), y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.2, delay: (index % 3) * 0.08, type: "spring", bounce: 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="p-5 md:p-8 bg-white border border-zinc-150 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:shadow-[0_15px_35px_rgba(30,58,138,0.06)] hover:border-blue-500/20 transition-all duration-300 group flex flex-col h-full text-left"
                >
                  <h4 className="text-[18px] md:text-[22px] font-bold text-black mb-1 group-hover:text-[#1e3a8a] transition-colors">{job.title}</h4>
                  <p className="text-[#1e3a8a] text-[12px] font-black uppercase tracking-[0.2em] mb-4">({job.exp})</p>

                  <p className="text-zinc-500 text-sm leading-relaxed mb-10 flex-grow font-normal">
                    {job.desc}
                  </p>

                  <div className="flex items-center gap-5 text-zinc-600 text-xs md:text-[13px] font-bold uppercase tracking-wider mb-10">
                    <span className="flex items-center gap-2"><MapPin size={15} className="text-[#1e3a8a]" /> <span>{job.loc}</span></span>
                    <span className="flex items-center gap-2"><Clock size={15} className="text-[#1e3a8a]" /> <span>{job.type}</span></span>
                  </div>

                  <div className="w-full mt-auto">
                    <Link 
                      href={job.link}
                      className="block w-full text-center py-3 font-bold rounded-full transition-all duration-300 uppercase tracking-widest text-[10px] border-2 bg-white text-black border-black hover:bg-gradient-to-r hover:from-zinc-950 hover:to-[#1e3a8a] hover:text-white hover:border-transparent hover:shadow-[0_10px_20px_rgba(30,58,138,0.15)]"
                    >
                      Apply Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
