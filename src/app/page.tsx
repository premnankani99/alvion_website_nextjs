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
             <div className="absolute inset-0 bg-black/60 z-10" />
             <Image 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
               alt="Team working" 
               fill 
               className="object-cover"
               priority
             />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-[80px] font-extrabold text-white mb-6 tracking-tight leading-tight"
            >
              Innovative Software Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 font-light leading-relaxed opacity-100"
            >
              Alleviate vision and accelerate innovation with our expert services.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Link href="/services" className="px-12 py-4 border border-white/60 text-white font-medium rounded-full hover:bg-white hover:text-[#0d1b2a] transition-all text-[15px] bg-black/10 backdrop-blur-sm">
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sections following the Master Template */}
        <About />
        <SoftwareSolutions />

        {/* CLIENTS SECTION */}
        <section className="py-12 bg-[#f5f5f5] border-y border-zinc-100">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-10">
              <h3 className="text-4xl md:text-5xl font-bold text-[#0d1b2a]">Our Clients</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center max-w-[95%] mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                <div key={num} className="h-32 bg-white rounded-xl border border-zinc-100 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] flex items-center justify-center p-6 hover:shadow-md transition-all cursor-pointer overflow-hidden">
                  <img 
                    src={`/clients/${num}.avif`} 
                    alt={`Client Logo ${num}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Projects />

        {/* CTA SECTION - SLIM & SLEEK WITH BACKGROUND */}
        <section className="py-12 relative overflow-hidden">
           <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[#0d1b2a]/90 z-10" />
             <Image 
               src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000" 
               alt="Code Background" 
               fill 
               className="object-cover"
             />
           </div>
           <div className="container mx-auto px-6 md:px-12 text-center relative z-20">
              <div className="max-w-[95%] mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Innovate Your Vision</h2>
                <p className="text-white/70 mb-8 text-sm">Stay updated on our innovative solutions.</p>
                <Link href="/contact" className="px-10 py-3 bg-white text-[#0d1b2a] font-bold rounded-full hover:bg-zinc-100 transition-all uppercase tracking-widest text-xs shadow-xl">
                  Contact Us
                </Link>
              </div>
           </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
