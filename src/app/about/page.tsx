"use client";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

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
      <div className="bg-[#f4f7fb] min-h-screen flex flex-col">
        {/* 1. HERO SECTION */}
        <section className="bg-[#0e3b8c] text-white pt-48 pb-32 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
              About Alvion Technologies
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium"
            >
              Empowering Innovation Through Cutting-Edge Solutions
            </motion.p>
          </div>
        </section>

        {/* MAIN SECTIONS CONTAINER */}
        <main className="container mx-auto px-6 py-20 max-w-[90%] lg:max-w-6xl space-y-16 flex-grow">
          
          {/* 2. WHO WE ARE */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              Who Are We
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed font-medium">
                  Alvion Technologies was founded on a powerful vision to bridge the gap between complex technology and real-world business needs.
                </p>
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed font-medium">
                  We specialize in custom software solutions, digital transformation, and innovative technology consulting.
                </p>
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed font-medium">
                  Our mission is to help organizations leverage technology to achieve sustainable growth and competitive advantage.
                </p>
              </div>
              <div className="lg:w-1/2 relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-sm border border-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern office architecture" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </motion.div>

          {/* 3. WHAT MAKES US DIFFERENT */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              What Makes Us Different
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
                    alt="Client Focus" 
                    fill 
                    className="object-cover grayscale" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Client Focus</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Solutions designed around your business goals.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600" 
                    alt="Agile Development" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Agile Development</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Fast delivery with continuous improvement.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" 
                    alt="Innovation" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Innovation</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Using the latest technologies to deliver value.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. OUR NUMBERS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              Our Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-100">
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[52px] md:text-[60px] font-bold text-[#0e3b8c] block mb-2 leading-none">100+</span>
                <span className="text-zinc-400 text-xs md:text-sm font-black uppercase tracking-widest">Projects</span>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[52px] md:text-[60px] font-bold text-[#0e3b8c] block mb-2 leading-none">98%</span>
                <span className="text-zinc-400 text-xs md:text-sm font-black uppercase tracking-widest">Client Satisfaction</span>
              </div>
              <div className="py-4 md:py-0 flex flex-col items-center justify-center">
                <span className="text-[52px] md:text-[60px] font-bold text-[#0e3b8c] block mb-2 leading-none">5+</span>
                <span className="text-zinc-400 text-xs md:text-sm font-black uppercase tracking-widest">Years Experience</span>
              </div>
            </div>
          </motion.div>

          {/* 5. VISION & MISSION */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              Vision & Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#f8fbfd] p-8 md:p-10 rounded-[24px] border border-zinc-50 shadow-sm flex flex-col">
                <h3 className="text-[22px] font-bold text-[#0d1b2a] mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-[#0e3b8c] rounded-full inline-block"></span>
                  Vision
                </h3>
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed font-medium">
                  To empower businesses through accessible and transformative technology solutions.
                </p>
              </div>
              <div className="bg-[#f8fbfd] p-8 md:p-10 rounded-[24px] border border-zinc-50 shadow-sm flex flex-col">
                <h3 className="text-[22px] font-bold text-[#0d1b2a] mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-6 bg-[#0e3b8c] rounded-full inline-block"></span>
                  Mission
                </h3>
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed font-medium">
                  Deliver exceptional digital products that solve real business problems through innovation and collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6. OUR CORE PILLARS - UPDATED IMAGE CARD STYLE */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              Our Core Pillars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 - Innovation */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600" 
                    alt="Innovation" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Innovation</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Exploring modern technologies.</p>
                </div>
              </div>

              {/* Pillar 2 - Partnership */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600" 
                    alt="Partnership" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Partnership</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Long-term client relationships.</p>
                </div>
              </div>

              {/* Pillar 3 - Excellence */}
              <div className="bg-white rounded-[24px] overflow-hidden border border-zinc-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" 
                    alt="Excellence" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-2">Excellence</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">Delivering the highest quality solutions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 7. TECHNOLOGIES WE MASTER */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white border border-zinc-100 border-t-8 border-t-[#0e3b8c] rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-5 sm:p-10 md:p-16"
          >
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#0d1b2a] mb-12 text-center">
              Technologies We Master
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techs.map((tech) => (
                <div key={tech.name} className="bg-white p-8 rounded-[20px] border border-zinc-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
                  <h3 className="text-[20px] font-bold text-[#0e3b8c] mb-2">{tech.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">{tech.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 8. READY TO TRANSFORM YOUR BUSINESS */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0e3b8c] text-white rounded-[32px] p-6 sm:p-12 md:p-20 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <h2 className="text-[32px] md:text-[40px] font-bold mb-4 tracking-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/95 text-[16px] md:text-[18px] leading-relaxed mb-10 font-medium">
                Partner with Alvion Technologies and discover how the right technology solutions can accelerate your growth.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#0e3b8c] font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-all text-sm uppercase tracking-wider"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

        </main>
        
        <Footer />
      </div>
    </>
  );
}
