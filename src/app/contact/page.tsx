"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#f4f7fb] min-h-screen flex flex-col pt-24">
        {/* 1. HERO SECTION - LIGHT BLUE BACKGROUND */}
        <section className="py-20 bg-[#f4f7fb] relative overflow-hidden flex items-center justify-center">
          <div className="container mx-auto px-6 md:px-12 max-w-[90%] lg:max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Left Content Column */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-[42px] md:text-[54px] font-bold mb-6 leading-tight tracking-tight text-[#0d1b2a]"
                >
                  <span className="text-[#0e3b8c]">Contact Alvion</span> <br />
                  <span className="text-[#1a56db]">Technologies</span>
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-[#4a4a4a] text-[16px] leading-relaxed mb-10 font-medium"
                >
                  Ready to transform your ideas into powerful digital solutions? Whether you need enterprise Appian development, scalable React applications, or robust Java systems, our experts are here to guide you every step of the way. Let's collaborate and build technology that drives real business growth.
                </motion.p>

                {/* Statistics Row */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-200 text-center sm:text-left"
                >
                  <div>
                    <span className="text-[28px] font-black text-[#0e3b8c] block leading-none">24/7</span>
                    <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider block mt-2">Dedicated Support</span>
                  </div>
                  <div>
                    <span className="text-[28px] font-black text-[#0e3b8c] block leading-none">1 Day</span>
                    <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider block mt-2">Average Response Time</span>
                  </div>
                  <div>
                    <span className="text-[28px] font-black text-[#0e3b8c] block leading-none">100%</span>
                    <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-wider block mt-2">Client-Focused</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Image Column */}
              <div className="lg:w-1/2 relative aspect-video w-full rounded-[32px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-zinc-100">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Alvion Developers working on code" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. GET IN TOUCH FORM SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-[90%] lg:max-w-4xl">
            <h2 className="text-[36px] font-bold text-[#0e3b8c] mb-12 text-center">
              Get In Touch
            </h2>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-zinc-100 rounded-[32px] shadow-[0_15px_50px_rgba(0,0,0,0.02)] p-6 sm:p-10 md:p-16"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#0d1b2a] mb-2">Name*</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your name" 
                      className="w-full px-6 py-4 bg-zinc-100/50 rounded-xl focus:outline-none focus:bg-zinc-100/80 transition-colors placeholder:text-zinc-400 font-medium"
                    />
                  </div>

                  {/* Last Name Input */}
                  <div className="flex flex-col">
                    <label className="text-sm font-bold text-[#0d1b2a] mb-2">Last name</label>
                    <input 
                      type="text" 
                      placeholder="Your last name" 
                      className="w-full px-6 py-4 bg-zinc-100/50 rounded-xl focus:outline-none focus:bg-zinc-100/80 transition-colors placeholder:text-zinc-400 font-medium"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#0d1b2a] mb-2">Your email*</label>
                  <input 
                    type="email" 
                    required
                    placeholder="Your email address" 
                    className="w-full px-6 py-4 bg-zinc-100/50 rounded-xl focus:outline-none focus:bg-zinc-100/80 transition-colors placeholder:text-zinc-400 font-medium"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col">
                  <label className="text-sm font-bold text-[#0d1b2a] mb-2">Message*</label>
                  <textarea 
                    required
                    placeholder="Enter your message" 
                    rows={6}
                    className="w-full px-6 py-4 bg-zinc-100/50 rounded-xl focus:outline-none focus:bg-zinc-100/80 transition-colors placeholder:text-zinc-400 font-medium resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-12 py-4 bg-[#1a56db] hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-100 uppercase tracking-widest text-sm"
                  >
                    Submit
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* 3. CONTACT INFORMATION & ADDRESS SECTION */}
        <section className="py-20 bg-white border-t border-zinc-100">
          <div className="container mx-auto px-6 max-w-[90%] lg:max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
              {/* Contacts */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-bold text-[#0d1b2a] mb-4">Contacts</h4>
                <p className="text-zinc-600 text-[15px] font-medium">contact-us@alviontechnologies.com</p>
                <p className="text-zinc-600 text-[15px] font-medium mt-1">+91 97848-65841</p>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-bold text-[#0d1b2a] mb-4">Address</h4>
                <p className="text-zinc-600 text-[15px] font-medium">Alvion Technologies, No. 1, Pulia, 7 Ta 21, Sector 7,</p>
                <p className="text-zinc-600 text-[15px] font-medium">Jawahar Nagar, Jaipur, Rajasthan - 302004</p>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-bold text-[#0d1b2a] mb-4">Opening hours</h4>
                <p className="text-zinc-600 text-[15px] font-medium">Monday - Friday: 10:00 AM - 8:00 PM</p>
                <p className="text-zinc-600 text-[15px] font-medium mt-1">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Centered Map Container */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full h-[450px] rounded-[32px] overflow-hidden border border-zinc-100 shadow-[0_15px_45px_rgba(0,0,0,0.02)]"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.56238382747!2d75.8239088!3d26.8856238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6d18bd0a561%3A0x6b4cd7c2688b5a!2sSector%207%2C%20Jawahar%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302004!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
