"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Fixed Deposit",
    image: "https://blogassets.airtel.in/wp-content/uploads/2025/03/banner_24_fd.png"
  },
  {
    title: "Consumer Electronics Brand",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Warehouse Management System",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Projects() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0d1b2a]">Case Studies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-[95%] mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-zinc-100"
            >
              <div className="relative aspect-video">
                <Image src={study.image} alt={study.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-[#0d1b2a]">{study.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-12 py-3.5 border border-[#0d1b2a] text-[#0d1b2a] font-bold rounded-full hover:bg-[#0d1b2a] hover:text-white transition-all text-sm uppercase tracking-widest bg-white shadow-md">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
