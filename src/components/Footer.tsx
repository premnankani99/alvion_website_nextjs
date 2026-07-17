"use client";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12 lg:max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
          
          {/* Left Column: Follow us */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-[22px] font-bold mb-6 text-white tracking-wide">
              Follow us
            </h2>
            <div className="flex flex-wrap gap-5 text-xl mb-12 md:mb-16">
               <a href="https://www.facebook.com/people/Alvion-Technologies/61588624670566/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300 transition-colors"><FaFacebookF className="w-5 h-5" /></a>
               <a href="https://www.instagram.com/alviontechnologies/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition-colors"><FaInstagram className="w-5 h-5" /></a>
               <a href="https://www.linkedin.com/company/alvion-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition-colors"><FaLinkedinIn className="w-5 h-5" /></a>
               <a href="https://www.google.com/search?client=ms-android-oneplus-terr1-rso3&hs=WZ59&sca_esv=e46d580fc3c87728&sxsrf=ANbL-n4tlPDoOJdAGLhPWkUx3PKjS46riQ:1772100869274&kgmid=/g/11y0d_9nd5&q=Alvion+Technologies&shndl=30&source=sh/x/loc/act/m1/2&kgs=89e15dc272d47281&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/act/m1/2" target="_blank" rel="noopener noreferrer" aria-label="Google" className="hover:text-gray-300 transition-colors"><FaGoogle className="w-5 h-5" /></a>
               <a href="https://wa.me/919784865841" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gray-300 transition-colors"><FaWhatsapp className="w-5 h-5" /></a>
            </div>
            
            <div className="text-white/80 text-[13px]">
              <p>© 2025. All rights reserved.</p>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="flex flex-col">
            <h2 className="text-xl md:text-[22px] font-bold mb-6 text-white tracking-wide">
              Get in Touch
            </h2>
            <div className="flex flex-col space-y-4 text-[14.5px] text-white/90">
               <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+919784865841" className="hover:text-white transition-colors">+91 97848-65841</a>
               </div>
               <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact-us@alviontechnologies.com" className="hover:text-white transition-colors">contact-us@alviontechnologies.com</a>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
