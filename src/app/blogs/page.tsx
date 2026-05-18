"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogsPage() {
  return (
    <>
      <div className="bg-[#f4f7fb] min-h-screen flex flex-col pt-32">
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20">
          {/* Section Title */}
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[42px] md:text-[48px] font-bold text-[#0d1b2a] mb-12 text-center tracking-tight"
          >
            Our Latest Blogs
          </motion.h1>

          {/* Featured Blog Card - 1:1 Parity with Screenshot */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[90%] lg:max-w-6xl bg-white rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col md:flex-row items-stretch min-h-[420px] mb-12"
          >
            {/* Image side */}
            <div className="md:w-1/2 relative min-h-[240px] md:min-h-0 w-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="30 Days of System Design" 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Text side */}
            <div className="md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center items-start">
              <h2 className="text-[32px] md:text-[38px] font-bold text-[#0d1b2a] mb-6 leading-tight">
                30 Days of System Design
              </h2>
              <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-8 font-medium">
                A practical series breaking down real-world system architecture concepts — from databases and caching to scalability and distributed systems. Learn how modern applications are designed to handle millions of users.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#c026d3] hover:bg-[#a21caf] text-white font-bold rounded-full transition-all text-sm flex items-center gap-2 shadow-lg shadow-fuchsia-100"
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
