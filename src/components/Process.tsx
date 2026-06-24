"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description: "We dive deep into your business goals, target audience, and technical requirements to build a roadmap for success."
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Our experts design the architecture and user experience to ensure your solution is both scalable and intuitive."
  },
  {
    number: "03",
    title: "Development & QA",
    description: "We build with precision using Appian, React, and Java, followed by rigorous quality testing to ensure perfection."
  },
  {
    number: "04",
    title: "Deployment & Support",
    description: "Successful launch followed by proactive monitoring and support to ensure your business keeps growing."
  }
];

export default function Process() {
  return (
    <section className="py-10 md:py-16 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Methodology</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary">How We Bring Your Ideas To Life</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="relative p-8 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl md:text-6xl font-black text-primary/5 absolute top-4 right-4">{step.number}</span>
              <div className="relative z-10">
                <h4 className="text-xl font-bold text-primary mb-4">{step.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
