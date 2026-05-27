"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <>
      <div className="bg-[#fbfcfd] min-h-screen flex flex-col pt-20">

        {/* 1. HERO SECTION */}
        <section className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000"
              alt="Blogs Banner"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#070b19]/75 z-10" />
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-[52px] font-black text-white tracking-tight leading-tight"
            >
              Latest <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Blogs</span>
            </motion.h1>

          </div>
        </section>

        {/* 2. BLOG SHOWCASE CONTENT */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-6 py-8 md:py-16 max-w-[95%] lg:max-w-6xl mx-auto">


          {/* Featured Blog Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="w-full bg-white rounded-[24px] overflow-hidden border border-zinc-150 shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:shadow-[0_15px_35px_rgba(30,58,138,0.06)] hover:border-blue-500/20 transition-all duration-500 flex flex-col md:flex-row items-stretch min-h-auto md:min-h-[420px] mb-8 group cursor-pointer mt-4 md:mt-8"
          >
            {/* Image side */}
            <div className="md:w-1/2 relative min-h-[200px] md:min-h-0 w-full overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"
                alt="30 Days of System Design"
                fill
                className="object-cover group-hover:scale-106 transition-transform duration-1000 z-10"
                priority
              />
            </div>

            {/* Text side */}
            <div className="md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-center items-start text-left">
              <span className="text-[#1e3a8a] text-[10px] font-black uppercase tracking-[0.2em] mb-2 md:mb-3">SYSTEM DESIGN SERIES</span>

              <h2 className="text-2xl md:text-4xl font-black text-black mb-3 md:mb-6 leading-tight group-hover:text-[#1e3a8a] transition-colors">
                30 Days of System Design
              </h2>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-normal">
                A practical series breaking down real-world system architecture concepts — from databases and caching to scalability and distributed systems. Learn how modern applications are designed to handle millions of users.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full transition-all duration-300 text-[11px] md:text-xs shadow-md hover:shadow-[0_10px_20px_rgba(30,58,138,0.15)] uppercase tracking-wider"
              >
                Read Series →
              </motion.button>
            </div>
          </motion.div>

        </main>
        <Footer />
      </div>
    </>
  );
}
