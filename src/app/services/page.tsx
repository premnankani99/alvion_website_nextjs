"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Intelligent Automation",
    desc: "Automate processes with AI-driven bots and orchestration to improve speed, accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    chip: "[ APPIAN & AI ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/intelligent-automation"
  },
  {
    title: "Development & Implementation",
    desc: "Design, build and deploy secure, scalable applications tailored to your business and technology stack.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    chip: "[ REACT & JAVA ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/development-and-implementation"
  },
  {
    title: "Application & Infra Support",
    desc: "Ensure reliability with proactive monitoring, incident management and ongoing platform support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    chip: "[ CLOUD & PLATFORM ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/application-and-infra-support"
  },
  {
    title: "Training",
    desc: "Upskill business and IT teams with structured programs focused on tools, platforms and best practices.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
    chip: "[ SKILLS & UPSKILLING ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/training"
  },
  {
    title: "Quality Engineering & Assurance",
    desc: "Implement robust test strategies and automation to increase release quality and reduce production risk.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    chip: "[ TESTING & QA ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/quality-engineering-and-assurance"
  },
  {
    title: "Consulting",
    desc: "Align technology initiatives with business goals through strategy, roadmaps and operating model design.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    chip: "[ STRATEGY & ADVISORY ]",
    chipColor: "bg-blue-50 text-[#1e3a8a] border-blue-200/50",
    link: "/services/consulting"
  }
];

const caseStudies = [
  { title: "Banking", desc: "Securing financial futures with digital innovation.", image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80", link: "/services/banking" },
  { title: "Insurance", desc: "Advanced risk management solutions.", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", link: "/services/insurance" },
  { title: "Governance", desc: "Enhancing transparency in administration.", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800", link: "/services/governance" },
  { title: "Retail", desc: "Transforming modern retail experiences.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Real Estate", desc: "Smart property management solutions.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", link: "#" },
  { title: "Healthcare", desc: "Empowering modern healthcare systems.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", link: "#" }
];

export default function ServicesPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);
  const displayedStudies = caseStudies.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <>
      <Navbar />
      <div className="bg-white pt-20">

        {/* 1. TOP HERO BANNER */}
        <section className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YNqMEWZ1PXT9OR5G/create-a-image-that-real-people-discuss-of-code-in-it-company-3-qwRB4x0aSp0cyfWC.jpg"
              alt="Alvion Services Banner"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-[#070b19]/75 z-10" />

            {/* Ambient cyber glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-[52px] font-black text-white tracking-tight leading-tight"
            >
              Enterprise <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.04, ease: "easeOut" }}
              className="text-base md:text-lg text-zinc-200 max-w-2xl mx-auto mt-4 font-light opacity-90"
            >
              Comprehensive low-code automation, full-stack application development, and strategic IT enablement.
            </motion.p>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section className="py-12 md:py-20 relative overflow-hidden bg-[#fbfcfd]">
          {/* Ambient background glows */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row-reverse items-start gap-16">

              <div className="lg:w-1/2 flex flex-col items-start pt-4 lg:pt-8">
                {/* Badge removed per user request */}

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.18, delay: 0.01, type: "spring", bounce: 0.1 }}
                  className="text-2xl md:text-4xl font-black text-black mb-6 leading-tight"
                >
                  Service <br />
                  <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">
                    Excellence
                  </span>
                </motion.h2>

                {/* Underline */}
                <motion.div
                  initial={{ opacity: 0, scaleX: 0, x: 50 }}
                  whileInView={{ opacity: 1, scaleX: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.16 }}
                  className="origin-left mb-6"
                >
                  <svg className="w-48 h-3 text-[#1e3a8a]" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q10,0 20,5 T40,5 T60,5 T80,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.18, delay: 0.02, type: "spring", bounce: 0.1 }}
                  className="text-zinc-600 text-[16px] leading-relaxed mb-10 max-w-xl font-normal"
                >
                  Our specialized service teams at Alvion Technologies are dedicated to accelerating your digital transformation. From robust low-code implementations to full-stack engineering and dedicated quality assurance, we provide the strategic guidance and technical firepower needed to scale your enterprise seamlessly.
                </motion.p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-4 sm:gap-6 w-full mt-2">
                  {[
                    { val: "100+", label: "Projects Delivered", startX: -50, delay: 0.05 },
                    { val: "50+", label: "Happy Clients", startX: 0, delay: 0.06 },
                    { val: "5+", label: "Years Experience", startX: 50, delay: 0.07 }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: stat.startX, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.2, delay: stat.delay, type: "spring", bounce: 0.1 }}
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="flex-1 min-w-[140px] px-5 py-4 rounded-[16px] bg-white border border-zinc-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_10px_35px_rgba(30,58,138,0.06)] flex flex-col items-center text-center cursor-default transition-all duration-300"
                    >
                      <span className="text-[24px] font-black text-transparent bg-clip-text bg-gradient-to-br from-zinc-950 to-[#1e3a8a]">{stat.val}</span>
                      <p className="text-zinc-500 text-[10px] font-semibold tracking-widest mt-1 uppercase">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

              </div>

              {/* Left Column image container & Stats */}
              <div className="lg:w-1/2 w-full flex flex-col gap-8 lg:pl-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.24, type: "spring", bounce: 0.1 }}
                  className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                    alt="Service team collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent z-15 pointer-events-none" />
                </motion.div>

              </div>

            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES GRID */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">

            <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
              {/* Badge removed per user request */}

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.18, delay: 0.01, type: "spring", bounce: 0.1 }}
                className="text-2xl md:text-4xl font-black text-black"
              >
                Our <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Enterprise Services</span>
              </motion.h3>
            </div>

            {/* Staggered dynamic cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-[95%] mx-auto">
              {services.map((service, index) => {
                const CardContent = (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: (index % 3 === 0 ? -60 : index % 3 === 2 ? 60 : 0), y: 40 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.2, delay: (index % 3) * 0.1, type: "spring", bounce: 0.1 }}
                    className="group bg-[#fcfdfe] rounded-[24px] overflow-hidden border border-zinc-150 flex flex-col h-full cursor-pointer hover:-translate-y-3 hover:rotate-1 hover:skew-x-1 hover:shadow-[0_15px_35px_rgba(30,58,138,0.08)] hover:border-blue-500/30 transition-all duration-500"
                  >
                    {/* Image container */}
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
                      <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-40 z-15" />

                      {/* Badge on image */}
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
                        {service.desc}
                      </p>
                      <span className="mt-auto text-[#1e3a8a] font-bold text-xs flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider">
                        {service.link ? "Learn more \u2192" : ""}
                      </span>
                    </div>
                  </motion.div>
                );

                return service.link ? (
                  <Link key={index} href={service.link}>
                    {CardContent}
                  </Link>
                ) : (
                  <div key={index}>{CardContent}</div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 4. CASE STUDIES */}
        <section className="py-12 md:py-20 bg-[#fafbfc] border-t border-zinc-200/60 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
              {/* Badge removed per user request */}

              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.18, delay: 0.01, type: "spring", bounce: 0.1 }}
                className="text-2xl md:text-4xl font-black text-black"
              >
                Case <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Studies</span>
              </motion.h3>
            </div>

            {/* Snappy Sliding cards container */}
            <div className="relative max-w-[95%] mx-auto mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.14, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {displayedStudies.map((study, index) => (
                    <Link key={index} href={study.link} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="group bg-white rounded-[24px] overflow-hidden border border-zinc-150 hover:border-blue-500/30 shadow-[0_4px_25px_rgba(0,0,0,0.005)] hover:shadow-[0_15px_35px_rgba(30,58,138,0.05)] transition-all duration-500 relative flex flex-col h-full"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
                          <Image src={study.image} alt={study.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw" className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-40 z-15" />
                        </div>

                        <div className="p-5 md:p-8 flex flex-col flex-grow text-left">
                          <h4 className="text-[18px] md:text-xl font-bold text-black mb-2 group-hover:text-[#1e3a8a] transition-colors">{study.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed mb-4">{study.desc}</p>
                          <span className="mt-auto text-[#1e3a8a] font-bold text-xs uppercase tracking-wider">Explore Link &rarr;</span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center gap-3 mt-12">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`transition-all duration-300 rounded-full h-2.5 ${currentPage === i ? "w-10 bg-[#1e3a8a]" : "w-2.5 bg-zinc-200"}`}
                />
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
