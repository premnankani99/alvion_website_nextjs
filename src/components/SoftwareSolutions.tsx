"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SoftwareSolutions() {
  const services = [
    {
      title: "Appian Development",
      description: "Streamline processes with our Appian expertise for efficient business solutions."
    },
    {
      title: "Java Solutions",
      description: "Robust and scalable Java applications to meet your business needs effectively."
    },
    {
      title: "React Applications",
      description: "Build dynamic user interfaces with our React development services tailored for you."
    }
  ];

  return (
    <section id="software-solutions" className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Centered Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d1b2a] mb-3">
            Innovative Software Solutions
          </h2>
          <p className="text-[#4a4a4a] text-base md:text-lg max-w-2xl mx-auto">
            Transforming your vision into reality with cutting-edge technology and expert solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch max-w-[95%] mx-auto">
          {/* Left Side - Image */}
          <div className="lg:w-1/2 relative rounded-2xl overflow-hidden border border-zinc-100 min-h-[350px] shadow-sm">
            <Image 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=852,fit=crop/YNqMEWZ1PXT9OR5G/siteexample-3BMzBTWrZmF04ckF.png" 
              alt="Innovative Software Solutions Dashboard" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Light Grey Container with White Cards */}
          <div className="lg:w-1/2 bg-[#f0f4f8] p-6 rounded-2xl flex flex-col justify-center">
            <div className="flex flex-col gap-4 h-full justify-center">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-white/50"
                >
                  <h4 className="text-[19px] font-bold text-[#0d1b2a] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-[#4a4a4a] text-[15px] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
