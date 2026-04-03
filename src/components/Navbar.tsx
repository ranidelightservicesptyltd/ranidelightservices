"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StarBorder from "./StarBorder";
import GlassSurface from "./GlassSurface";

// Standardize on dark theme for all pages per user request
const isLightPage = false;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pt-4 md:pt-6 pointer-events-none"
      >
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={32}
          borderWidth={0.07}
          brightness={50}
          opacity={0.93}
          blur={11}
          displace={0.5}
          backgroundOpacity={0}
          saturation={1}
          distortionScale={-180}
          redOffset={0}
          greenOffset={10}
          blueOffset={20}
          className="w-full max-w-7xl pointer-events-auto"
          style={{ borderRadius: '32px' }}
        >
          <div 
            className="w-full flex items-center justify-between px-6 md:px-10 py-0"
          >
            {/* Logo — small layout footprint, visually overflows navbar */}
            <Link href="/" className="relative flex items-center group">
              <div className="relative w-36 h-10 sm:w-40 sm:h-10 md:w-44 md:h-10 flex-shrink-0 overflow-visible">
                <Image
                  src="/logo.png"
                  alt="Rani Delight Services Logo"
                  width={320}
                  height={120}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] h-auto sm:w-[115px] md:w-[140px] lg:w-[165px] object-contain transition-all duration-300 group-hover:scale-[1.03]"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-14">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-black/70 hover:text-black text-[13px] lg:text-[15px] xl:text-[17px] font-semibold tracking-wide transition-all relative group whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full opacity-20" />
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              {/* Desktop CTA */}
              <div className="hidden md:block">
                <Link
                  href="/booknow"
                  className="bg-blue-600 text-white px-4 py-2 lg:px-6 lg:py-2.5 xl:px-8 xl:py-3 rounded-full text-[12px] lg:text-[13px] xl:text-[14px] font-semibold tracking-wide whitespace-nowrap hover:bg-blue-700 hover:scale-[1.05] active:scale-95 transition-all shadow-lg shadow-blue-500/20"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-black/5 border border-black/10 backdrop-blur-md z-50 relative"
                aria-label="Toggle Menu"
              >
                <span className={`w-5 h-[1.5px] bg-black transition-all duration-300 absolute ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`} />
                <span className={`w-5 h-[1.5px] bg-black transition-all duration-300 absolute ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`w-5 h-[1.5px] bg-black transition-all duration-300 absolute ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`} />
              </button>
            </div>
          </div>
        </GlassSurface>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center gap-10 w-full mb-12">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05, ease: "easeOut" }}
                  className="w-full"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-4xl font-semibold text-black/90 hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 w-full flex justify-center"
              >
                <Link
                  href="/booknow"
                  className="bg-blue-600 w-full max-w-xs text-white px-8 py-5 rounded-full text-xl font-bold tracking-wide text-center hover:bg-blue-700 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
