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
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
        ? "bg-white py-3 border-b border-zinc-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)] backdrop-blur-md" 
        : "bg-white py-4 md:py-5 border-b border-zinc-100"
    }`}>
      {/* Fine Obsidian Black & Dark Blue top visual accent border line */}
      <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-zinc-950 via-[#1e3a8a] to-blue-500 z-50 pointer-events-none" />

      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Official Logo */}
        <Link href="/" className="relative w-36 md:w-48 h-10 md:h-12 transition-all">
          <Image 
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/YNqMEWZ1PXT9OR5G/whatsapp-image-2026-02-19-at-13.21.20-1-jNdlYe8brAIAZp6c.jpeg" 
            alt="Alvion Technologies logo" 
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Links with Dark Blue Accent highlighting */}
        <div className="hidden md:flex items-center gap-10 text-[16px] font-bold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`transition-all relative py-1 ${
                pathname === link.href 
                  ? "text-[#1e3a8a]" 
                  : "text-zinc-600 hover:text-[#1e3a8a]"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1e3a8a] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
        >
          <div className={`w-6 h-0.5 bg-zinc-800 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-zinc-800 transition-all ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-zinc-800 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
              className={`text-base font-bold py-2 border-b border-zinc-100 transition-colors ${
                pathname === link.href 
                  ? "text-[#1e3a8a]" 
                  : "text-zinc-600 hover:text-[#1e3a8a]"
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
