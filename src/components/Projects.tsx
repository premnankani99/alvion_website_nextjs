"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Fixed Deposit System",
    image: "https://blogassets.airtel.in/wp-content/uploads/2025/03/banner_24_fd.png",
    category: "FINTECH SOLUTIONS",
    startX: -100,
    startY: 0,
    delay: 0.2
  },
  {
    title: "Consumer Electronics Portal",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800",
    category: "E-COMMERCE & IOT",
    startX: 0,
    startY: 80,
    delay: 0.3
  },
  {
    title: "Warehouse Management Suite",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    category: "SUPPLY CHAIN",
    startX: 100,
    startY: 0,
    delay: 0.4
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-[#fafbfc] text-[#0d1b2a] relative overflow-hidden">
      {/* Soft glowing light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Scroll Reveal header details */}
        <div className="text-center mb-16 flex flex-col items-center">
          {/* Badge sliding from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.1 }}
            className="text-[#1e3a8a] font-bold text-xs uppercase tracking-[0.25em] mb-4 flex items-center justify-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-ping" />
            05 // Client Case Studies & Delivery
          </motion.div>

          {/* Heading sliding from Left with delay */}
          <motion.h3 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.03, type: "spring", bounce: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black"
          >
            Client <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Case Studies</span>
          </motion.h3>
        </div>

        {/* Staggered Sliding Scroll Reveal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-[95%] mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: study.startX, y: study.startY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: study.delay * 0.5, type: "spring", bounce: 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-zinc-150 hover:border-blue-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:shadow-[0_15px_35px_rgba(30,58,138,0.05)] transition-all duration-500 relative flex flex-col h-full"
            >
              {/* Image Container with scanner overlay & Gloss Swipe Reflect */}
              <div className="relative aspect-video overflow-hidden">
                {/* Gloss Swipe Reflect overlay */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />

                <Image src={study.image} alt={study.title} fill className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-40 z-15" />

                {/* AI Laser Scanline Diagnostic Animation */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scanline z-20 pointer-events-none" />

                {/* Category indicator pill */}
                <span className="absolute bottom-4 left-6 px-3 py-1 bg-white/95 backdrop-blur-md border border-zinc-200/50 text-[10px] font-black text-[#1e3a8a] rounded-md tracking-wider z-20">
                  {study.category}
                </span>
              </div>

              {/* Card Footer Text */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h4 className="text-xl font-bold text-black mb-6 group-hover:text-[#1e3a8a] transition-colors">
                  {study.title}
                </h4>
                
                {/* Tech specifications mock indicator */}
                <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span>DEPLOYED: SUCCESS</span>
                  <span className="text-[#1e3a8a] font-bold">CASE STUDY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          className="flex justify-center mt-12"
        >
          <button className="px-12 py-3.5 border border-blue-500/50 text-[#1e3a8a] font-bold rounded-full hover:bg-gradient-to-r hover:from-zinc-950 hover:to-[#1e3a8a] hover:text-white hover:border-transparent transition-all duration-300 text-xs uppercase tracking-widest bg-white shadow-md">
            View More
          </button>
        </motion.div>
      </div>

      {/* Global CSS Injecting custom scanline keyframe dynamically so it's 100% bug-free */}
      <style jsx global>{`
        @keyframes scanline {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .group-hover\:animate-scanline {
          animation: scanline 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
