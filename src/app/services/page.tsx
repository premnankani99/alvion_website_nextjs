"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "Intelligent Automation", desc: "Automate processes with AI-driven bots and orchestration to improve speed, accuracy and efficiency.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
  { title: "Development & Implementation", desc: "Design, build and deploy secure, scalable applications tailored to your business and technology stack.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
  { title: "Application & Infra Support", desc: "Ensure reliability with proactive monitoring, incident management and ongoing platform support.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
  { title: "Training", desc: "Upskill business and IT teams with structured programs focused on tools, platforms and best practices.", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" },
  { title: "Quality Engineering & Assurance", desc: "Implement robust test strategies and automation to increase release quality and reduce production risk.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
  { title: "Consulting", desc: "Align technology initiatives with business goals through strategy, roadmaps and operating model design.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" }
];

const caseStudies = [
  { title: "Banking", desc: "Securing financial futures with digital innovation.", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80", link: "https://alviontechnologies.com/banking/" },
  { title: "Insurance", desc: "Advanced risk management solutions.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Governance", desc: "Enhancing transparency in administration.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Retail", desc: "Transforming modern retail experiences.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Real Estate", desc: "Smart property management solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Healthcare", desc: "Empowering modern healthcare systems.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", link: "#" }
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const hoverCard = {
  initial: { y: 0, scale: 1 },
  hover: { y: -12, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)", transition: { duration: 0.3, ease: "easeOut" as const } }
};

export default function ServicesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  const displayedStudies = caseStudies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <>
      <Navbar />
      <motion.div initial="hidden" animate="visible" className="bg-white">
        {/* 1. TOP HERO IMAGE */}
        <section className="relative h-[450px] overflow-hidden">
           <Image src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqMEWZ1PXT9OR5G/create-a-image-that-real-people-discuss-of-code-in-it-company-3-qwRB4x0aSp0cyfWC.jpg" alt="Alvion" fill className="object-cover" priority />
        </section>

        {/* 2. ABOUT SECTION */}
        <section className="py-16 relative bg-[#f8fbff] border-b border-zinc-100">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-[42px] md:text-[48px] font-bold text-[#0d1b2a] mb-6 leading-tight">About Alvion <br /> Technologies</h2>
                  <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-10 max-w-xl">At Alvion Technologies, we drive innovation through modern software solutions built on Appian, React, and Java. We blend low-code automation with responsive design to create seamless digital experiences.</p>
                  <button className="px-10 py-3.5 bg-[#0d1b2a] text-white font-bold rounded-lg hover:bg-[#1a304a] transition-all text-sm mb-12">Learn More</button>
                  <div className="flex gap-12">
                    <div><span className="text-[32px] font-bold text-[#0066cc]">100+</span><p className="text-[#4a4a4a] text-[12px] mt-1">Projects Delivered</p></div>
                    <div><span className="text-[32px] font-bold text-[#0066cc]">50+</span><p className="text-[#4a4a4a] text-[12px] mt-1">Happy Clients</p></div>
                    <div><span className="text-[32px] font-bold text-[#0066cc]">5+</span><p className="text-[#4a4a4a] text-[12px] mt-1">Years Experience</p></div>
                  </div>
                </motion.div>
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" alt="Tech" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES GRID */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-[42px] font-bold text-[#0d1b2a] mb-4">Our Services</h2>
              <p className="text-[#4a4a4a] text-[18px] max-w-3xl mx-auto">Explore our end-to-end technology offerings.</p>
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[95%] mx-auto">
              {services.map((service, index) => (
                <motion.div key={index} variants={hoverCard} initial="initial" whileHover="hover" className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col h-full cursor-pointer">
                  <div className="relative aspect-video overflow-hidden"><Image src={service.image} alt={service.title} fill className="object-cover" /></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[20px] font-bold text-[#0d1b2a] mb-4">{service.title}</h3>
                    <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-6 flex-grow">{service.desc}</p>
                    <button className="text-[#e67e22] font-bold text-[13px] uppercase tracking-wider flex items-center gap-1">Learn more &rarr;</button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. CASE STUDIES */}
        <section className="py-16 bg-white border-t border-zinc-100 overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12"><h2 className="text-[42px] font-bold text-[#0d1b2a]">Case Studies</h2></div>
            <div className="relative max-w-[95%] mx-auto mb-10">
              <AnimatePresence mode="wait">
                <motion.div key={currentPage} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {displayedStudies.map((study, index) => (
                     <Link key={index} href={study.link} target="_blank">
                       <motion.div whileHover={{ scale: 0.98 }} className="relative aspect-[4/3] rounded-[24px] overflow-hidden group cursor-pointer shadow-lg">
                          <Image src={study.image} alt={study.title} fill className="object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                          <div className="absolute bottom-0 left-0 p-8 z-20"><h4 className="text-2xl font-bold text-white mb-2">{study.title}</h4><p className="text-white/80 text-sm">{study.desc}</p></div>
                       </motion.div>
                     </Link>
                   ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center gap-3">
              {[...Array(totalPages)].map((_, i) => (
                <button key={i} onClick={() => setCurrentPage(i)} className={`transition-all duration-300 rounded-full ${currentPage === i ? "w-10 h-2.5 bg-[#0066cc]" : "w-2.5 h-2.5 bg-zinc-200"}`} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </>
  );
}
