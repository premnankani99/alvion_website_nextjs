"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Intelligent Automation",
    description: "Automate processes with AI-driven bots and orchestration to improve speed, accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    glowColor: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)]",
    borderGlow: "hover:border-blue-500/30",
    chip: "[ APPIAN & AI ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/intelligent-automation",
    startX: -100,
    startY: 0,
    delay: 0.08
  },
  {
    title: "Development & Implementation",
    description: "Design, build and deploy secure, scalable applications tailored to your business and technology stack.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    glowColor: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)]",
    borderGlow: "hover:border-blue-500/30",
    chip: "[ REACT & JAVA ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/development-and-implementation",
    startX: 0,
    startY: 80,
    delay: 0.12
  },
  {
    title: "Application & Infra Support",
    description: "Ensure reliability with proactive monitoring, incident management and ongoing platform support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    glowColor: "hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)]",
    borderGlow: "hover:border-blue-500/30",
    chip: "[ CLOUD & PLATFORM ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/application-and-infra-support",
    startX: 100,
    startY: 0,
    delay: 0.16
  }
];

export default function Services() {
  return (
    <section id="services-grid" className="py-10 md:py-16 bg-white text-[#0d1b2a] relative overflow-hidden">
      {/* Background Soft Cyber Light Effects */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Animated header with detail sliding reveals */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          {/* Badge removed per user request */}

          {/* Heading sliding from Left with delay */}
          <motion.h3 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.18, delay: 0.01, type: "spring", bounce: 0.1 }}
            className="text-2xl md:text-4xl font-black text-black"
          >
            Our <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Services</span>
          </motion.h3>
        </div>

        {/* 3D Transforming Skew Hover Cards with Scroll Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-[95%] mx-auto">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block h-full">
              <motion.div 
                initial={{ opacity: 0, x: service.startX, y: service.startY }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.2, delay: service.delay * 0.2, type: "spring", bounce: 0.1 }}
                className={`group bg-[#fcfdfe] rounded-[24px] overflow-hidden border border-zinc-150 flex flex-col h-full cursor-pointer hover:-translate-y-3 hover:rotate-1 hover:skew-x-1 transition-all duration-500 ${service.borderGlow} ${service.glowColor}`}
              >
                {/* Image Container with high-tech scanner line overlay & Gloss Swipe Reflect */}
                <div className="relative aspect-video overflow-hidden rounded-t-[24px] [transform:translateZ(0)]">
                  {/* Gloss Swipe Reflect overlay */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" />

                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-40 z-15" />
                  
                  {/* Visual Glow Chip on top-right of image */}
                  <div className={`absolute top-4 right-4 px-3 py-1 text-[9px] font-black uppercase border rounded-md tracking-wider z-20 backdrop-blur-md ${service.chipColor}`}>
                    {service.chip}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 md:p-8 flex flex-col flex-grow text-left">
                  <h4 className="text-[18px] md:text-xl font-bold text-black mb-3 group-hover:text-[#1e3a8a] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow font-normal">
                    {service.description}
                  </p>
                  <span className="mt-auto text-[#1e3a8a] font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                    Learn more &rarr;
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          className="flex justify-center mt-12"
        >
          <Link href="/services#enterprise-services" className="inline-block px-8 py-3 border border-blue-500/50 text-[#1e3a8a] font-bold rounded-full hover:bg-gradient-to-r hover:from-zinc-950 hover:to-[#1e3a8a] hover:text-white hover:border-transparent transition-all duration-300 text-xs uppercase tracking-widest bg-white shadow-md">
            View More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
