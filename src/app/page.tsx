"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import SoftwareSolutions from "@/components/SoftwareSolutions";

export default function Home() {
  return (
    <>
      <main className="relative bg-white overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[#070b19]/75 z-10" />
             <video
               autoPlay
               loop
               muted
               playsInline
               className="absolute inset-0 w-full h-full object-cover z-0"
             >
               <source 
                 src="https://www.pexels.com/download/video/8632604/" 
                 type="video/mp4" 
               />
             </video>
             
             {/* Ambient Cyber Neon Glows behind content - Dynamic Dark Blue & Slate */}
             <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10 animate-pulse" style={{ animationDuration: '5s' }} />
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-950/10 rounded-full blur-[120px] pointer-events-none z-10 animate-pulse" style={{ animationDuration: '7s' }} />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">

            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.32, delay: 0.04 }}
               className="text-3xl md:text-[52px] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Innovative <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-blue-400 drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Software Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.12 }}
              className="text-lg md:text-xl text-zinc-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed opacity-95"
            >
              Alleviate vision and accelerate innovation with our expert services.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.2 }}
              className="flex justify-center"
            >
              <Link href="/services" className="px-12 py-4 border border-blue-400/50 text-blue-300 font-bold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_0_25px_rgba(30,58,138,0.4)] transition-all duration-300 text-[15px] bg-slate-900/40 backdrop-blur-sm tracking-wide uppercase">
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sections following the Master Template */}
        <About />
        <SoftwareSolutions />

        {/* CLIENTS SECTION - OBSIDIAN BLACK / DARK BLUE ACCENT */}
        <section className="py-12 md:py-20 bg-[#fafbfc] border-y border-zinc-200/60 text-[#0d1b2a] relative overflow-hidden">
          {/* Soft blue ambient light effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-12 flex flex-col items-center">
              {/* Badge removed per user request */}

              {/* Title sliding from Left */}
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.36, delay: 0.02, type: "spring", bounce: 0.15 }}
                className="text-2xl md:text-4xl font-black text-black"
              >
                Our <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Clients</span>
              </motion.h3>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.32, delay: 0.04 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center max-w-[95%] mx-auto"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                <div key={num} className="h-32 bg-white rounded-[24px] border border-zinc-100 shadow-[0_4px_15px_rgba(0,0,0,0.005)] hover:border-blue-500/30 hover:shadow-[0_10px_35px_rgba(30,58,138,0.08)] hover:scale-102 transition-all duration-300 cursor-pointer overflow-hidden group flex items-center justify-center p-6">
                  <motion.img 
                    src={`/clients/${num}.avif`} 
                    alt={`Client Logo ${num}`} 
                    initial={{ filter: "grayscale(100%) blur(1px)", opacity: 0.5, scale: 0.98 }}
                    whileInView={{ filter: "grayscale(0%) blur(0px)", opacity: 1, scale: 1.04 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <Services />
        <Projects />

        {/* CTA SECTION - UNIFIED OBSIDIAN BLACK & BLUE NEBULA */}
        <section className="py-12 md:py-20 relative overflow-hidden border-t border-zinc-150 bg-white">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/70 via-blue-50/50 to-zinc-100/70 z-10" />
              <Image 
                src="/alvion_company_office.png" 
                alt="Code Background" 
                fill 
                sizes="100vw"
                className="object-cover opacity-10"
                priority
              />
              
              {/* Expanding glowing nebula circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-blue-500/5 animate-ping opacity-75 z-0 pointer-events-none" style={{ animationDuration: '4s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-zinc-950/5 animate-ping opacity-50 z-0 pointer-events-none" style={{ animationDuration: '6s' }} />
            </div>
            
            <div className="container mx-auto px-6 md:px-12 text-center relative z-20">
               <div className="max-w-[95%] mx-auto flex flex-col items-center">
                 {/* Title sliding from Left */}
                 <motion.h2 
                   initial={{ opacity: 0, x: -80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: false, amount: 0.15 }}
                   transition={{ duration: 0.32, type: "spring", bounce: 0.15 }}
                   className="text-2xl md:text-4xl font-black text-black mb-4 tracking-tight"
                 >
                   Innovate Your Vision
                 </motion.h2>

                 {/* Description sliding from Right */}
                 <motion.p 
                   initial={{ opacity: 0, x: 80 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: false, amount: 0.15 }}
                   transition={{ duration: 0.36, delay: 0.02, type: "spring", bounce: 0.12 }}
                   className="text-zinc-600 mb-10 text-base font-light max-w-xl mx-auto"
                 >
                   Transforming your vision into reality with cutting-edge technology and expert solutions.
                 </motion.p>

                 {/* Button sliding from Bottom */}
                 <motion.div
                   initial={{ opacity: 0, y: 60 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: false, amount: 0.15 }}
                   transition={{ duration: 0.32, delay: 0.04, type: "spring", bounce: 0.18 }}
                 >
                   <Link href="/contact" className="px-12 py-4 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-extrabold rounded-full hover:shadow-[0_10px_25px_rgba(30,58,138,0.25)] hover:scale-105 transition-all duration-300 uppercase tracking-widest text-xs shadow-2xl">
                     Contact Us Today
                   </Link>
                 </motion.div>
               </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
