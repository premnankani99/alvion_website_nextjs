"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white py-3 shadow-md" : "bg-white py-4 md:py-5"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Official Image Logo Restored with Responsive Sizing */}
        <Link href="/" className="relative w-36 md:w-48 h-10 md:h-12 transition-all">
          <Image 
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/YNqMEWZ1PXT9OR5G/whatsapp-image-2026-02-19-at-13.21.20-1-jNdlYe8brAIAZp6c.jpeg" 
            alt="Alvion Technologies logo" 
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Exact Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[18px] font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-all relative py-1 hover:text-[#0d1b2a] ${
                pathname === link.href 
                  ? "text-[#0d1b2a] border-b-2 border-[#0d1b2a]" 
                  : "text-[#4a4a4a]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-[#333333] transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#333333] transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#333333] transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              onClick={() => setIsOpen(false)} 
              href={link.href} 
              className={`text-lg font-bold py-2 border-b border-zinc-50 transition-colors ${
                pathname === link.href 
                  ? "text-[#1a56db]" 
                  : "text-[#4a4a4a] hover:text-[#1a56db]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
