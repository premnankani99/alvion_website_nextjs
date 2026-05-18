"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const jobs = [
  { 
    title: "Appian Developer", 
    exp: "0-2 Years",
    desc: "Builds and automates business applications using the Appian low-code platform.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  },
  { 
    title: "React Native Developer", 
    exp: "2-4 Years",
    desc: "Designs and develops high-performance cross-platform mobile applications using React and JavaScript.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  },
  { 
    title: "HR Executive", 
    exp: "0-2 Years",
    desc: "Supports HR operations and contributes to the development and maintenance of web-based HR systems.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  },
  { 
    title: "Associate Software Developer", 
    exp: "0-2 Years",
    desc: "Works with the development team to design, develop, and test software solutions under expert guidance.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  },
  { 
    title: "Digital Marketing Executive", 
    exp: "0-2 Years",
    desc: "Plans and executes digital marketing campaigns to improve brand visibility and generate quality leads.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  },
  { 
    title: "Automation Tester - Python", 
    exp: "3-4 Years",
    desc: "Designs and executes automated test scripts to ensure software quality and reliable releases.",
    loc: "JAIPUR, INDIA", 
    type: "FULL-TIME" 
  }
];

const perks = [
  { title: "Build Technology That Makes an Impact", desc: "Build impactful software that solves real-world problems and drives meaningful innovation.", icon: "💡" },
  { title: "Learn, Grow, and Lead", desc: "Grow your career with continuous learning, mentorship, and opportunities to lead impactful projects.", icon: "📚" },
  { title: "Flexible, People-First Environment", desc: "Enjoy a flexible, supportive workplace that values work-life balance and empowers you to do your best work.", icon: "🌱" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

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
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[450px] overflow-hidden flex items-center justify-center">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2000" alt="Careers" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#0d1b2a]/40 z-10" />
        </motion.div>
        <div className="relative z-20 text-center px-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">Build Your Future <br /> With Us</motion.h1>
          <motion.button onClick={scrollToOpenings} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white text-[#0d1b2a] font-bold rounded-lg shadow-xl hover:bg-slate-100 transition-all text-sm uppercase tracking-widest">View Openings</motion.button>
        </div>
      </section>

      {/* 2. WHY WORK WITH US */}
      <section className="py-20 bg-white text-[#0d1b2a] border-b border-zinc-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-[48px] md:text-[56px] font-bold text-[#0d1b2a] mb-4 leading-tight">Why Work With Us</h2>
                <p className="text-[#4a4a4a] text-[18px] mb-12 font-medium">Innovate with Purpose. Grow with Passion. Build the Future Together.</p>
                <div className="space-y-6">
                   {perks.map((perk, i) => (
                     <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-6 p-6 bg-[#f8fbff] rounded-[24px] border border-zinc-100 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl flex items-center justify-center p-2">{perk.icon}</div>
                        <div><h4 className="font-bold text-[#0d1b2a] text-xl mb-2">{perk.title}</h4><p className="text-[#4a4a4a] text-sm leading-relaxed">{perk.desc}</p></div>
                     </motion.div>
                   ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white">
               <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CURRENT OPENINGS - PURE TEXT MINIMALIST */}
      <section id="openings" className="py-20 bg-[#fcfdfe] scroll-mt-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-[52px] font-bold text-[#0d1b2a] mb-4">Current Openings</h3>
            <p className="text-zinc-400 text-[18px] font-medium opacity-80">Help us build the next generation of automation.</p>
          </div>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[95%] mx-auto">
            {jobs.map((job) => (
              <motion.div key={job.title} variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="p-6 sm:p-10 bg-white border border-zinc-100 rounded-[30px] shadow-[0_15px_45px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all group flex flex-col h-full text-left">
                
                {/* REMOVED LOGO - TEXT ONLY FOCUS */}
                <h4 className="text-[24px] font-bold text-[#0d1b2a] mb-1">{job.title}</h4>
                <p className="text-rose-500 text-[12px] font-black uppercase tracking-[0.2em] mb-4">({job.exp})</p>
                
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-10 flex-grow">
                   {job.desc}
                </p>

                <div className="flex items-center gap-6 text-[#4a4a4a]/60 text-[10px] font-black uppercase tracking-widest mb-10">
                  <span className="flex items-center gap-1.5"><MapPin size={12} className="text-rose-500" /> <span>{job.loc}</span></span>
                  <span className="flex items-center gap-1.5"><Clock size={12} className="text-blue-500" /> <span>{job.type}</span></span>
                </div>
                
                <div className="w-full">
                  <button className="w-full py-4 font-black rounded-xl transition-all uppercase tracking-[0.2em] text-[10px] border-2 bg-white text-[#0d1b2a] border-[#0d1b2a] hover:bg-[#0d1b2a] hover:text-white">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
