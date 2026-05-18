"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white">
      {/* About Section - COMBINED WITH STATS & AI NEURAL ORBIT OVERLAY */}
      <section className="py-24 relative overflow-hidden bg-[#fbfcfd]">
        {/* Soft Cyber Ambient light effects (Slate Black & Dark Blue) */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content sliding detail by detail */}
            <div className="lg:w-1/2 flex flex-col items-start">
              {/* Badge sliding from Left */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
                className="text-[#1e3a8a] font-bold text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
                01 // Intelligent Automation Core
              </motion.div>

              {/* Title sliding from Left - Black & Dark Blue */}
              <motion.h2
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.05, type: "spring", bounce: 0.15 }}
                className="text-[44px] md:text-[52px] font-black text-black mb-6 leading-tight"
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
                transition={{ duration: 0.8, delay: 0.1 }}
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
                transition={{ duration: 0.9, delay: 0.15, type: "spring", bounce: 0.12 }}
                className="text-zinc-600 text-[16px] leading-relaxed mb-10 max-w-xl font-normal"
              >
                At Alvion Technologies, we drive automation through modern low-code applications built on Appian, React, and Java. We blend cognitive intelligence with modular, high-speed architectures to create elite corporate software.
              </motion.p>
              
              {/* Button sliding from Bottom - Black & Dark Blue Theme */}
              <motion.button
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.18 }}
                className="px-10 py-3.5 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full hover:shadow-[0_10px_25px_rgba(30,58,138,0.25)] hover:scale-105 transition-all duration-300 text-sm mb-12 uppercase tracking-wider"
              >
                Learn More
              </motion.button>

              {/* Stats Row sliding card by card */}
              <div className="flex flex-wrap gap-6 sm:gap-10">
                {[
                  { val: "100+", label: "Projects Delivered", startX: -80, startY: 0, delay: 0.25 },
                  { val: "50+", label: "Happy Clients", startX: 0, startY: 60, delay: 0.3 },
                  { val: "5+", label: "Years Experience", startX: 80, startY: 0, delay: 0.35 }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: stat.startX, y: stat.startY }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.9, delay: stat.delay, type: "spring", bounce: 0.15 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="px-6 py-4 rounded-2xl bg-white border border-zinc-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(30,58,138,0.06)] flex flex-col items-start cursor-default transition-all duration-300"
                  >
                    <span className="text-[32px] font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-[#1e3a8a]">{stat.val}</span>
                    <p className="text-zinc-500 text-[11px] font-semibold tracking-wide mt-1 uppercase">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Original Premium Image with Gloss Swipe Reflect */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, type: "spring", bounce: 0.15 }}
                className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer"
              >
                {/* Original High-Resolution Image */}
                <Image 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                  alt="Alvion Software Development" 
                  fill 
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
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Soft blue backdrop light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-[95%] mx-auto">
            
            {/* Mission Right Content sliding detail by detail */}
            <div className="lg:w-1/2 flex flex-col items-start">
              {/* Mission Badge sliding from Right */}
              <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
                className="text-[#1e3a8a] font-bold text-xs uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse" />
                02 // Strategic Vision
              </motion.div>

              {/* Title sliding from Right */}
              <motion.h2 
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.05, type: "spring", bounce: 0.15 }}
                className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight"
              >
                Our Mission
              </motion.h2>

              {/* Mission Paragraph 1 sliding from Left */}
              <motion.p 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.1, type: "spring", bounce: 0.12 }}
                className="text-zinc-600 text-[16px] leading-relaxed font-normal mb-4"
              >
                Our mission is to empower businesses with automated software solutions that elevate productivity and fuel sustainable growth. We transform complex enterprise challenges into streamlined, intelligent systems.
              </motion.p>

              {/* Mission Paragraph 2 sliding from Bottom */}
              <motion.p 
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.9, delay: 0.15, type: "spring", bounce: 0.12 }}
                className="text-zinc-500 text-[15px] leading-relaxed font-normal"
              >
                By combining low-code automation with strategic insight, we help organizations stay agile, competitive, and future-ready.
              </motion.p>
            </div>
            
            {/* Mission Image: Original Image with glowing dark blue data ledger overlay */}
            <div className="lg:w-1/2 w-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 1.1, type: "spring", bounce: 0.15 }}
                className="relative w-full aspect-[2/1] rounded-[30px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer flex items-center justify-center"
              >
                {/* Original High-Resolution Mission Dashboard Image */}
                <Image 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=482,fit=crop/YNqMEWZ1PXT9OR5G/sales_dashboard_dark_theme-LGNqX8b1YLdQtDHy.png" 
                  alt="Sales Dashboard Dark Theme" 
                  fill 
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
                      transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
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
