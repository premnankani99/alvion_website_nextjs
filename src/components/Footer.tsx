"use client";
import Link from "next/link";
import { Globe, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
          
          {/* Left Column: Socials */}
          <div className="max-w-xs mx-auto md:mx-0 text-center md:text-left">
            <h4 className="text-[20px] font-bold mb-4 text-white">Follow us</h4>
            <div className="flex gap-4 text-xl">
               <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-white/70 transition-all" />
               <FaInstagram className="w-5 h-5 cursor-pointer hover:text-white/70 transition-all" />
               <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-white/70 transition-all" />
               <Globe className="w-5 h-5 cursor-pointer hover:text-white/70 transition-all" />
               <FaGoogle className="w-5 h-5 cursor-pointer hover:text-white/70 transition-all" />
               <span className="text-lg font-bold cursor-pointer hover:text-white/70 transition-all">💬</span>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="text-center md:text-left mx-auto md:mx-0">
            <h4 className="text-[20px] font-bold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
               <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919784865841" className="text-white/80 text-sm hover:text-white transition-colors">+91 97848-65841</a>
               </div>
               <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact-us@alviontechnologies.com" className="text-white/80 text-sm hover:text-white transition-colors">contact-us@alviontechnologies.com</a>
               </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-center md:justify-between items-center text-center text-white/50 text-[11px] gap-2">
          <p>© 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
