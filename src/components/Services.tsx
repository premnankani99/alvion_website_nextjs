"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Intelligent Automation",
    description: "Automate processes with AI-driven bots and orchestration to improve speed, accuracy and efficiency.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    color: "text-blue-600"
  },
  {
    title: "Development & Implementation",
    description: "Design, build and deploy secure, scalable applications tailored to your business and technology stack.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    color: "text-[#0d1b2a]"
  },
  {
    title: "Application & Infra Support",
    description: "Ensure reliability with proactive monitoring, incident management and ongoing platform support.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "text-[#0d1b2a]"
  }
];

export default function Services() {
  return (
    <section id="services-grid" className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0d1b2a]">Our Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[95%] mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-zinc-100 flex flex-col h-full hover:shadow-lg transition-all duration-500"
            >
              <div className="relative aspect-video">
                <Image src={service.image} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className={`text-lg font-bold mb-2 ${service.color}`}>{service.title}</h4>
                <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="mt-auto text-[#e67e22] font-bold text-xs flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                  Learn more &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-10 py-3 border border-[#0d1b2a] text-[#0d1b2a] font-bold rounded-full hover:bg-[#0d1b2a] hover:text-white transition-all text-xs uppercase tracking-widest bg-white shadow-md">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
