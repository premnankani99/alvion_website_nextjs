"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-white">
      <section className="py-12 md:py-20 relative overflow-hidden bg-[#fbfcfd]">
        {/* Soft Cyber Ambient light effects (Slate Black & Dark Blue) */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content sliding detail by detail */}
            <div className="lg:w-1/2 flex flex-col items-start">
              {/* Badge removed per user request */}

              {/* Title sliding from Left - Black & Dark Blue */}
              <motion.h2
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.02, type: "spring", bounce: 0.15 }}
                className="text-[28px] md:text-[40px] font-black text-black mb-6 leading-tight"
              >
                About <br />
                <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">
                  Alvion Technologies
                </span>
              </motion.h2>
              
              {/* Underline scaling and sliding in */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0, x: -50 }}
                whileInView={{ opacity: 1, scaleX: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.32, delay: 0.04 }}
                className="origin-left mb-6"
              >
                <svg className="w-48 h-3 text-[#1e3a8a]" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                </svg>
              </motion.div>

              {/* Description sliding from Right */}
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.06, type: "spring", bounce: 0.12 }}
                className="text-zinc-600 text-[16px] leading-relaxed mb-10 max-w-xl font-normal"
              >
                At Alvion Technologies, we alleviate vision and accelerate innovation by delivering transformative digital solutions that empower businesses to move faster and smarter. We build scalable, high-performance applications tailored to evolving enterprise needs. Our approach blends strategic thinking, modern architecture, and seamless user experiences to turn complex challenges into streamlined solutions.
              </motion.p>
              
              {/* Button sliding from Bottom - Black & Dark Blue Theme */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.32, delay: 0.08, type: "spring", bounce: 0.18 }}
              >
                <Link 
                  href="/about" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full hover:shadow-[0_10px_25px_rgba(30,58,138,0.25)] hover:scale-105 transition-all duration-300 text-sm mb-12 uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Stats Row sliding card by card */}
              <div className="flex flex-wrap gap-6 sm:gap-10">
                {[
                  { val: "100+", label: "Projects Delivered", startX: -80, startY: 0, delay: 0.1 },
                  { val: "50+", label: "Happy Clients", startX: 0, startY: 60, delay: 0.12 },
                  { val: "5+", label: "Years Experience", startX: 80, startY: 0, delay: 0.14 }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: stat.startX, y: stat.startY }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.36, delay: stat.delay, type: "spring", bounce: 0.15 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="px-5 py-3 rounded-2xl bg-white border border-zinc-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(30,58,138,0.06)] flex flex-col items-start cursor-default transition-all duration-300"
                  >
                    <span className="text-[28px] font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-[#1e3a8a]">{stat.val}</span>
                    <p className="text-zinc-500 text-[11px] font-semibold tracking-wide mt-1 uppercase">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex items-center justify-center lg:pl-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.44, type: "spring", bounce: 0.15 }}
                className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer"
              >
                {/* Original High-Resolution Image */}
                <Image 
                  src="/alvion_company_office.png" 
                  alt="Alvion Software Development" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10"
                />

                {/* Dark Vignette Overlay for High-Tech Contrast */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent z-15 pointer-events-none" />

                {/* Gloss Swipe Reflect overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Black & Dark Blue Theme */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        {/* Soft blue backdrop light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-[95%] mx-auto">
            
            {/* Mission Right Content sliding detail by detail */}
            <div className="lg:w-7/12 flex flex-col items-start lg:pl-12">
              {/* Mission Badge removed per user request */}

              {/* Title sliding from Right */}
              <motion.h2 
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.02, type: "spring", bounce: 0.15 }}
                className="text-2xl md:text-4xl font-extrabold text-black mb-6 leading-tight"
              >
                Our Mission
              </motion.h2>

              {/* Mission Paragraph 1 sliding from Left */}
              <motion.p 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.04, type: "spring", bounce: 0.12 }}
                className="text-zinc-600 text-[16px] leading-relaxed font-normal mb-4"
              >
                Our mission is to empower businesses with innovative software solutions that elevate productivity and fuel sustainable growth in today’s dynamic digital landscape. We strive to transform complex challenges into streamlined, efficient systems that enable smarter decision-making and faster execution.
              </motion.p>

              {/* Mission Paragraph 2 sliding from Bottom */}
              <motion.p 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.06, type: "spring", bounce: 0.12 }}
                className="text-zinc-500 text-[15px] leading-relaxed font-normal"
              >
                By combining advanced technology with strategic insight, we help organizations stay agile, competitive, and future-ready. Through continuous innovation and a commitment to excellence, we aim to create lasting value for every client we serve.
              </motion.p>
            </div>
            
            <div className="lg:w-5/12 w-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.44, type: "spring", bounce: 0.15 }}
                className="relative w-full aspect-[4/3] rounded-[30px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer flex items-center justify-center"
              >
                <Image 
                  src="/alvion_mission_dashboard.png" 
                  alt="Alvion Mission Dashboard" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-slate-950/20 z-15 pointer-events-none" />

                {/* High-Tech Overlay: Scrolling wave lines layered on the image - Black & Blue Theme */}
                <div className="absolute bottom-4 left-6 right-6 z-20 pointer-events-none flex items-end justify-between h-10 px-4 bg-zinc-950/50 border border-white/10 rounded-xl backdrop-blur-md">
                  {[20, 50, 80, 40, 90, 30, 60, 85, 45, 95].map((val, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${val}%` }}
                      transition={{ duration: 0.48, delay: i * 0.02, ease: "easeOut" }}
                      className="w-1.5 bg-gradient-to-t from-zinc-950 to-[#1e3a8a] rounded-full"
                    />
                  ))}
                </div>

                {/* Gloss Swipe Reflect overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
