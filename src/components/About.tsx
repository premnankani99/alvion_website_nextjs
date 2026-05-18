"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white">
      {/* About Section - COMBINED WITH STATS AS PER SCREENSHOT */}
      <section className="py-16 relative overflow-hidden bg-[#f8fbff]">
        {/* Subtle Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-[95%] mx-auto flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[48px] font-bold text-[#0d1b2a] mb-6 leading-tight">
                  About Alvion <br /> Technologies
                </h2>
                <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-10 max-w-xl">
                  At Alvion Technologies, we drive innovation through modern software solutions built on Appian, React, and Java. We blend low-code automation with responsive design and strong backend systems to create seamless digital experiences. Our focus is on building scalable, secure, and high-performance applications.
                </p>
                
                <button className="px-10 py-3.5 bg-[#0d1b2a] text-white font-bold rounded-lg hover:bg-[#1a304a] transition-all text-sm mb-12">
                  Learn More
                </button>

                {/* Integrated Stats Row */}
                <div className="flex gap-12">
                  <div>
                    <span className="text-[32px] font-bold text-[#0066cc]">100+</span>
                    <p className="text-[#4a4a4a] text-[12px] mt-1">Projects Delivered</p>
                  </div>
                  <div>
                    <span className="text-[32px] font-bold text-[#0066cc]">50+</span>
                    <p className="text-[#4a4a4a] text-[12px] mt-1">Happy Clients</p>
                  </div>
                  <div>
                    <span className="text-[32px] font-bold text-[#0066cc]">5+</span>
                    <p className="text-[#4a4a4a] text-[12px] mt-1">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                alt="Alvion Software Development" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Maintained for consistency */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 max-w-[95%] mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-[#4a4a4a] text-[17px] leading-relaxed">
                Our mission is to empower businesses with innovative software solutions 
                that elevate productivity and fuel sustainable growth in today's dynamic 
                digital landscape. We strive to transform complex challenges into 
                streamlined, efficient systems that enable smarter decision-making and 
                faster execution. By combining advanced technology with strategic insight, 
                we help organizations stay agile, competitive, and future-ready. Through 
                continuous innovation and a commitment to excellence, we aim to create 
                lasting value for every client we serve.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative aspect-[2/1] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=482,fit=crop/YNqMEWZ1PXT9OR5G/sales_dashboard_dark_theme-LGNqX8b1YLdQtDHy.png" 
                alt="Sales Dashboard Dark Theme" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
