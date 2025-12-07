"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-40 sm:pt-40 sm:pb-48 md:pt-48 md:pb-56 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e293b]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="mb-8">
            <span className="inline-block px-4 py-2 bg-[#1e3a8a] text-[#60a5fa] rounded-full text-sm font-semibold border border-[#3b82f6]">
              AI Developer & Engineer
            </span>
          </motion.div>

          <motion.h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.1] tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
            <span className="block text-[#f1f5f9] mb-3">Building</span>
            <span className="gradient-text block mb-3">Intelligent</span>
            <span className="block text-[#f1f5f9]">Systems</span>
          </motion.h1>

          <motion.p className="text-xl sm:text-2xl md:text-3xl text-[#cbd5e1] mb-12 max-w-3xl mx-auto leading-relaxed font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            Specializing in <span className="text-[#3b82f6] font-semibold">AI applications</span>,
            <span className="text-[#8b5cf6] font-semibold"> multi-agent systems </span>and
            <span className="text-[#06b6d4] font-semibold"> cutting-edge technologies</span>.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}>
            <motion.a href="#projects" className="px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-base min-w-[180px] text-center" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              View Projects
            </motion.a>

            <motion.a href="#contact" className="px-8 py-4 border-2 border-[#334155] text-[#f1f5f9] font-semibold rounded-xl hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white transition-all duration-300 text-base min-w-[180px] text-center" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
