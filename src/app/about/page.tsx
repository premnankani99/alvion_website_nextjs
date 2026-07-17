"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const techs = [
  { name: "React", desc: "Modern UI Development" },
  { name: "Java", desc: "Enterprise Applications" },
  { name: "Cloud", desc: "AWS, Azure & GCP" },
  { name: "DevOps", desc: "CI/CD Automation" },
  { name: "AI & ML", desc: "Intelligent Systems" },
  { name: "Appian", desc: "Low-Code Automation" }
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-[#fbfcfd] min-h-screen flex flex-col pt-20">

        {/* 1. HERO SECTION */}
        <section className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/alvion_company_office.png"
              alt="About Us Banner"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#070b19]/75 z-10" />
            {/* Ambient cyber glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-[52px] font-black text-white tracking-tight leading-tight"
            >
              About <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Alvion Technologies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.04, ease: "easeOut" }}
              className="text-base md:text-lg text-zinc-200 max-w-2xl mx-auto mt-4 font-light opacity-90"
            >
              Empowering Innovation Through Cutting-Edge Solutions
            </motion.p>
          </div>
        </section>

        {/* MAIN SECTIONS CONTAINER */}
        <main className="container mx-auto px-6 py-10 md:py-16 max-w-[95%] lg:max-w-6xl space-y-16 md:space-y-24 flex-grow">

          {/* 2. WHO WE ARE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10 relative overflow-hidden"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-4 md:mb-6 text-center">
              Who We <span className="text-[#1e3a8a]">Are</span>
            </h2>
            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-8 lg:gap-12">
              <div className="lg:w-1/2 space-y-4 md:space-y-5 flex flex-col justify-start pt-2">
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-normal">
                  Alvion Technologies was founded on a powerful vision to bridge the gap between complex technology and real-world business needs.
                </p>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-normal">
                  We specialize in custom software solutions, digital transformation, and innovative technology consulting.
                </p>
                <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-normal">
                  Our mission is to help organizations leverage technology to achieve sustainable growth and competitive advantage.
                </p>
              </div>
              <div className="lg:w-1/2 relative w-full rounded-[24px] overflow-hidden border border-zinc-150 shadow-sm group cursor-pointer" style={{ aspectRatio: '3/2' }}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern office architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10"
                />
              </div>
            </div>
          </motion.div>

          {/* 3. WHAT MAKES US DIFFERENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-8 md:mb-12 text-center">
              What Makes Us <span className="text-[#1e3a8a]">Different</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Client Focus", desc: "Solutions designed around your business goals.", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" },
                { title: "Agile Development", desc: "Fast delivery with continuous improvement.", img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600" },
                { title: "Innovation", desc: "Using the latest technologies to deliver value.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.18, delay: idx * 0.03, type: "spring", bounce: 0.1 }}
                  className="bg-white rounded-[24px] overflow-hidden border border-zinc-150 hover:border-blue-500/20 shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-1000 z-10"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-grow text-left">
                    <h3 className="text-[20px] font-bold text-black mb-2 group-hover:text-[#1e3a8a] transition-colors">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4. OUR NUMBERS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-8 md:mb-12 text-center">
              Our <span className="text-[#1e3a8a]">Numbers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[32px] md:text-[40px] font-black text-[#1e3a8a] block mb-2 leading-none">100+</span>
                <span className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-widest">Projects</span>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[32px] md:text-[40px] font-black text-[#1e3a8a] block mb-2 leading-none">98%</span>
                <span className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-widest">Client Satisfaction</span>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[32px] md:text-[40px] font-black text-[#1e3a8a] block mb-2 leading-none">5+</span>
                <span className="text-zinc-400 text-xs md:text-sm font-semibold uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* 5. VISION & MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-8 md:mb-12 text-center">
              Vision & <span className="text-[#1e3a8a]">Mission</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#fcfdfe] p-6 md:p-8 rounded-[16px] border border-zinc-150 shadow-sm flex flex-col text-left">
                <h3 className="text-[20px] font-bold text-black mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-[#1e3a8a] rounded-full inline-block"></span>
                  Vision
                </h3>
                <p className="text-zinc-600 text-[16px] leading-relaxed font-normal">
                  To empower businesses through accessible and transformative technology solutions.
                </p>
              </div>
              <div className="bg-[#fcfdfe] p-6 md:p-8 rounded-[16px] border border-zinc-150 shadow-sm flex flex-col text-left">
                <h3 className="text-[20px] font-bold text-black mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-[#1e3a8a] rounded-full inline-block"></span>
                  Mission
                </h3>
                <p className="text-zinc-600 text-[16px] leading-relaxed font-normal">
                  Deliver exceptional digital products that solve real business problems through innovation and collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. OUR CORE PILLARS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-8 md:mb-12 text-center">
              Our Core <span className="text-[#1e3a8a]">Pillars</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Innovation", desc: "Exploring modern technologies.", img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" },
                { title: "Partnership", desc: "Long-term client relationships.", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" },
                { title: "Excellence", desc: "Delivering the highest quality solutions.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" }
              ].map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.18, delay: idx * 0.03, type: "spring", bounce: 0.1 }}
                  className="bg-white rounded-[24px] overflow-hidden border border-zinc-150 hover:border-blue-500/20 shadow-sm flex flex-col h-full hover:shadow-md transition-all duration-300 group cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
                    <Image
                      src={pillar.img}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-106 transition-transform duration-1000 z-10"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-grow text-left">
                    <h3 className="text-[20px] font-bold text-black mb-2 group-hover:text-[#1e3a8a] transition-colors">{pillar.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-normal">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 7. TECHNOLOGIES WE MASTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-white border border-zinc-150 border-t-8 border-t-[#1e3a8a] rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
          >
            <h2 className="text-2xl md:text-4xl font-black text-black mb-8 md:mb-12 text-center">
              Technologies We <span className="text-[#1e3a8a]">Master</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techs.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.16, delay: (idx % 3) * 0.08, type: "spring", bounce: 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 md:p-8 rounded-[16px] border border-zinc-150 shadow-sm flex flex-col items-center justify-center text-center hover:border-blue-500/20 hover:shadow-[0_10px_25px_rgba(30,58,138,0.04)] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-[20px] font-bold text-[#1e3a8a] mb-2">{tech.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-normal">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 8. READY TO TRANSFORM YOUR BUSINESS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
            className="bg-gradient-to-br from-zinc-950 to-[#1e3a8a] text-white rounded-[24px] p-5 md:p-16 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/95 text-[16px] md:text-[18px] leading-relaxed mb-10 font-light">
                Partner with Alvion Technologies and discover how the right technology solutions can accelerate your growth.
              </p>
              <Link href="/contact#contact-form">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-white text-black font-bold rounded-full shadow-lg hover:bg-slate-50 transition-all text-xs uppercase tracking-wider cursor-pointer"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </motion.div>

        </main>

        <Footer />
      </div>
    </>
  );
}
