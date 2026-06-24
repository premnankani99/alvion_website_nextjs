"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InnovativeSolutions() {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[42px] font-bold text-[#0d1b2a] mb-6 leading-tight"
          >
            Innovative Software Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.04 }}
            className="text-[#4a4a4a] text-[18px] max-w-2xl mx-auto mb-12"
          >
            Alleviate vision and accelerate innovation with our expert services.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="w-full max-w-5xl mx-auto relative aspect-[1.8/1] rounded-[40px] overflow-hidden shadow-2xl border border-zinc-100"
          >
            <Image 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=852,fit=crop/YNqMEWZ1PXT9OR5G/siteexample-3BMzBTWrZmF04ckF.png" 
              alt="Innovative Software Solutions Dashboard" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
