"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20 md:mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#f1f5f9]">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <p className="text-xl sm:text-2xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed">
            Ready to build intelligent AI solutions? Let\'s connect and discuss your next project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="card p-8 sm:p-10 lg:p-12"
          >
            <div className="space-y-6 mb-10">
              {/* Email Card */}
              <motion.div className="flex items-center gap-6 p-6 bg-[#0f172a] border border-[#334155] rounded-xl group hover:border-[#3b82f6] transition-all duration-300" whileHover={{ scale: 1.02, y: -2 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#94a3b8] mb-1 font-medium">Email</p>
                  <p className="text-lg text-[#f1f5f9] font-semibold">Available on Upwork</p>
                </div>
              </motion.div>

              {/* Upwork Card */}
              <motion.div className="flex items-center gap-6 p-6 bg-[#0f172a] border border-[#334155] rounded-xl group hover:border-[#3b82f6] transition-all duration-300" whileHover={{ scale: 1.02, y: -2 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12..." />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#94a3b8] mb-1 font-medium">Platform</p>
                  <p className="text-lg text-[#f1f5f9] font-semibold">Upwork</p>
                </div>
              </motion.div>
            </div>

            <motion.div className="text-center pt-4" initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              <p className="text-lg text-[#cbd5e1] mb-8">Looking for an AI developer? Find me on Upwork</p>
              <motion.a
                href="https://www.upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect on Upwork
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}