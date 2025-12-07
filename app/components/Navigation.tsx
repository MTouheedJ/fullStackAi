"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0f172a]/80 backdrop-blur-xl border-b border-[#334155] shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <motion.a href="#home" className="text-xl sm:text-2xl font-bold gradient-text" whileHover={{ scale: 1.05 }}>
            AI Portfolio
          </motion.a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`} className="text-[#cbd5e1] hover:text-[#3b82f6] transition-colors relative group text-sm font-medium" whileHover={{ y: -2 }}>
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          <motion.button className="md:hidden text-[#3b82f6] z-50 p-2" whileTap={{ scale: 0.9 }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-[#334155] shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a key={item} href={`#${item.toLowerCase()}`} className="block text-[#cbd5e1] hover:text-[#3b82f6] transition-colors py-3 text-sm font-medium" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
