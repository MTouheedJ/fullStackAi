"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-[#0f172a]"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3b82f6] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-center md:text-left text-[#f1f5f9]">
              About <span className="gradient-text">Me</span>
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mb-10 mx-auto md:mx-0 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg sm:text-xl text-[#cbd5e1] leading-relaxed">
                I specialize in building cutting-edge AI applications and intelligent systems...
              </p>
              <p className="text-lg sm:text-xl text-[#cbd5e1] leading-relaxed">
                With a strong foundation in modern AI frameworks like LangChain, LangGraph...
              </p>
              <p className="text-lg sm:text-xl text-[#cbd5e1] leading-relaxed">
                My projects demonstrate proficiency in building end-to-end AI systems...
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="card p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-[#f1f5f9]">Core Expertise</h3>
                <div className="space-y-6">
                  {["Multi-Agent Systems", "RAG & Vector Databases", "Voice AI Integration", "LLM Fine-tuning", "AI Workflow Automation"].map((item, index) => (
                    <motion.div
                      key={item}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full" />
                      <span className="text-[#f1f5f9] text-lg sm:text-xl font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
