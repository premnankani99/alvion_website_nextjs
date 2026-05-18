"use client";
import { motion } from "framer-motion";

export default function SoftwareSolutions() {
  const services = [
    {
      title: "Appian Development",
      description: "Streamline processes with our Appian expertise for efficient low-code enterprise automation.",
      icon: "⚡",
      bgGlow: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)] hover:border-blue-500/30",
      startX: -100,
      startY: 0,
      delay: 0.2
    },
    {
      title: "Java Solutions",
      description: "Robust and scalable Java backends built for high-throughput transactional stability.",
      icon: "⚙️",
      bgGlow: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)] hover:border-blue-500/30",
      startX: 0,
      startY: 80,
      delay: 0.3
    },
    {
      title: "React Applications",
      description: "Build dynamic, fast, and gorgeous user interfaces with pixel-perfect micro-interactions.",
      icon: "⚛️",
      bgGlow: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)] hover:border-blue-500/30",
      startX: 100,
      startY: 0,
      delay: 0.4
    }
  ];

  return (
    <section id="software-solutions" className="py-20 bg-white text-[#0d1b2a] relative overflow-hidden">
      {/* Light matrix lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 z-0" />
      
      {/* Soft blue glowing light effect */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0 animate-pulse" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Animated header with detail-by-detail sliding reveals */}
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
            03 // High Performance Architecture
          </motion.div>

          {/* Heading sliding from Left */}
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.03, type: "spring", bounce: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black mb-4"
          >
            Innovative <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Software Solutions</span>
          </motion.h2>

          {/* Description sliding from Right (cross-slide) */}
          <motion.p 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.06, type: "spring", bounce: 0.1 }}
            className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto font-normal"
          >
            Transforming your vision into reality with cutting-edge technology, enterprise APIs, and expert low-code developers.
          </motion.p>
        </div>

        {/* Dynamic Staggered Sliding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[95%] mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: service.startX, y: service.startY }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: service.delay * 0.5, type: "spring", bounce: 0.1 }}
              whileHover={{ y: -12, scale: 1.03, rotateZ: 0.5 }}
              className={`group relative p-8 sm:p-10 rounded-[30px] bg-[#fcfdfe] border border-zinc-150 shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:scale-103 transition-all duration-300 cursor-pointer flex flex-col h-full ${service.bgGlow}`}
            >
              {/* Card Icon - sliding with additional hover spring */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-2xl mb-8 group-hover:bg-gradient-to-br group-hover:from-zinc-950 group-hover:to-[#1e3a8a] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(30,58,138,0.2)] transition-all duration-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-[#1e3a8a] transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-normal flex-grow">
                {service.description}
              </p>

              {/* Interactive arrow transition */}
              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-end text-[11px] font-semibold text-[#1e3a8a] tracking-wider uppercase">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
