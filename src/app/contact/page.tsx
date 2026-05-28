"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#fbfcfd] min-h-screen flex flex-col pt-20">

        {/* 1. HERO SECTION */}
        <section className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
              alt="Contact Banner"
              fill
              className="object-cover"
              priority
             sizes="100vw" />
            <div className="absolute inset-0 bg-[#070b19]/75 z-10" />
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-10" />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="text-3xl md:text-[52px] font-black text-white tracking-tight leading-tight"
            >
              Contact <span className="text-[#3b82f6] drop-shadow-[0_0_15px_rgba(30,58,138,0.3)]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.04, ease: "easeOut" }}
              className="text-base md:text-lg text-zinc-200 max-w-2xl mx-auto mt-4 font-light opacity-90"
            >
              Let's collaborate and build technology that drives real business growth.
            </motion.p>
          </div>
        </section>

        {/* 2. STATS & WHY CONTACT US */}
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 bg-zinc-950/5 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[95%] lg:max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">

              {/* Left Column Content */}
              <div className="lg:w-1/2 flex flex-col justify-center text-left">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.16, type: "spring", bounce: 0.1 }}
                >
                  {/* Badge removed per user request */}

                  <h2 className="text-2xl md:text-4xl font-black text-black mb-6 leading-tight">
                    Contact <br />
                    <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Alvion Technologies</span>
                  </h2>

                  <p className="text-zinc-500 text-base leading-relaxed mb-10 font-normal">
                    Ready to transform your ideas into powerful digital solutions? Whether you need enterprise Appian development, scalable React applications, or robust Java systems, our experts are here to guide you every step of the way.
                  </p>
                </motion.div>

                {/* Statistics Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.18, delay: 0.04, type: "spring", bounce: 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-zinc-150 text-left"
                >
                  <div>
                    <span className="text-[28px] font-black text-[#1e3a8a] block leading-none">24/7</span>
                    <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider block mt-2">Dedicated Support</span>
                  </div>
                  <div>
                    <span className="text-[28px] font-black text-[#1e3a8a] block leading-none">1 Day</span>
                    <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider block mt-2">Response Time</span>
                  </div>
                  <div>
                    <span className="text-[28px] font-black text-[#1e3a8a] block leading-none">100%</span>
                    <span className="text-zinc-400 text-[11px] font-bold uppercase tracking-wider block mt-2">Client-Focused</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column Image */}
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.24, type: "spring", bounce: 0.1 }}
                  className="relative w-full aspect-video rounded-[24px] overflow-hidden border border-zinc-200/50 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(30,58,138,0.12)] transition-all duration-700 group cursor-pointer"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                    alt="Alvion Workspace"
                    fill
                    className="object-cover group-hover:scale-106 transition-transform duration-1000 ease-out z-10"
                   sizes="100vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 via-transparent to-transparent z-15 pointer-events-none" />
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out pointer-events-none z-25" />
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. GET IN TOUCH FORM */}
        <section id="contact-form" className="py-12 md:py-20 bg-[#fafbfc] border-y border-zinc-200/60 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

          <div className="container mx-auto px-6 max-w-[95%] lg:max-w-4xl relative z-10">
            <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
              {/* Badge */}
              {/* Badge removed per user request */}
              <h2 className="text-2xl md:text-4xl font-black text-black">
                Get In <span className="text-[#1e3a8a] drop-shadow-[0_2px_8px_rgba(30,58,138,0.05)]">Touch</span>
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
              className="bg-white border border-zinc-150 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.005)] p-5 md:p-10"
            >
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-black uppercase tracking-wider mb-2">Name*</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-5 py-3 md:py-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500/50 transition-colors placeholder:text-zinc-400 text-sm font-normal"
                    />
                  </div>

                  {/* Last Name Input */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-black uppercase tracking-wider mb-2">Last name</label>
                    <input
                      type="text"
                      placeholder="Your last name"
                      className="w-full px-5 py-3 md:py-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500/50 transition-colors placeholder:text-zinc-400 text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-bold text-black uppercase tracking-wider mb-2">Your email*</label>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full px-5 py-3 md:py-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500/50 transition-colors placeholder:text-zinc-400 text-sm font-normal"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col text-left">
                  <label className="text-xs font-bold text-black uppercase tracking-wider mb-2">Message*</label>
                  <textarea
                    required
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-5 py-3 md:py-4 bg-zinc-50 border border-zinc-150 rounded-xl focus:outline-none focus:bg-white focus:border-blue-500/50 transition-colors placeholder:text-zinc-400 text-sm font-normal resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-3.5 md:py-4 bg-gradient-to-r from-zinc-950 to-[#1e3a8a] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_10px_25px_rgba(30,58,138,0.2)] uppercase tracking-widest text-xs"
                  >
                    Submit Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* 4. CONTACT INFO & MAP */}
        <section className="py-12 md:py-20 bg-white relative">
          <div className="container mx-auto px-6 max-w-[95%] lg:max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">

              {/* Contacts */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-black text-black mb-4">Contacts</h4>
                <p className="text-zinc-500 text-[15px] font-normal">contact-us@alviontechnologies.com</p>
                <p className="text-zinc-500 text-[15px] font-normal mt-1">+91 97848-65841</p>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-black text-black mb-4">Address</h4>
                <p className="text-zinc-500 text-[15px] font-normal">Alvion Technologies, No. 1, Pulia, 7 Ta 21, Sector 7,</p>
                <p className="text-zinc-500 text-[15px] font-normal">Jawahar Nagar, Jaipur, Rajasthan - 302004</p>
              </div>

              {/* Opening Hours */}
              <div className="flex flex-col items-center">
                <h4 className="text-[20px] font-black text-black mb-4">Opening hours</h4>
                <p className="text-zinc-500 text-[15px] font-normal">Monday - Friday: 10:00 AM - 8:00 PM</p>
                <p className="text-zinc-500 text-[15px] font-normal mt-1">Saturday - Sunday: Closed</p>
              </div>
            </div>

            {/* Google Map Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.2, type: "spring", bounce: 0.1 }}
              className="w-full h-[450px] rounded-[24px] overflow-hidden border border-zinc-150 shadow-[0_4px_25px_rgba(0,0,0,0.005)]"
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
