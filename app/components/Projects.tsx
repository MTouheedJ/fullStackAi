"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

export function Projects() {
  const ref = useRef<
  HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  const projectList = [
    {
      title: "AI Assistant",
      description:
        "A platform where users can create multiple AI agents. Each agent is individually trained on text, Q&A, images, or PDFs.",
      technologies: ["LangChain", "RAG", "Vector DB", "Multi-Agent", "Next.js"],
      link: "https://dashboard.strongforce.ai/",
      featured: true,
    },
    {
      title: "AI Nutritionist",
      description: "AI-based nutritionist generating custom diet plans based on fitness goals and preferences.",
      technologies: ["AI", "Nutrition", "LLM", "React", "FastAPI"],
      link: "https://ai-nutritionist.vercel.app/",
      featured: true,
    },
    {
      title: "House Visualizer",
      description:
        "Upload a house image and change trims, walls, accents, and more—powered by AI image processing.",
      technologies: ["AI", "Computer Vision", "Image Processing", "React"],
      link: "https://house-visualizer-seven.vercel.app/",
      featured: true,
    },
    {
      title: "Conversational Chatbot with RAG",
      description:
        "Advanced chatbot with similarity search, supporting multimodal input and Telegram integration.",
      technologies: ["LangChain", "RAG", "Vector Search", "Telegram", "FastAPI"],
      link: "https://jvrivghct.com/",
      featured: true,
    },
  ];

  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-[#1e293b] overflow-hidden">
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3b82f6] rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6] rounded-full blur-3xl opacity-10" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#f1f5f9]">
            My <span className="gradient-text">Projects</span>
          </h2>
          <motion.div className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6 rounded-full" initial={{ width: 0 }} animate={isInView ? { width: 96 } : { width: 0 }} transition={{ delay: 0.2, duration: 0.8 }} />
          <p className="text-xl sm:text-2xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative AI solutions and intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectList.map((project, index) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ delay: index * 0.1, duration: 0.6 }} className="group relative">
              <motion.div className="h-full card p-8 flex flex-col cursor-pointer relative" whileHover={{ y: -8 }} onClick={() => project.link && window.open(project.link, "_blank")}>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-xs font-bold rounded-full shadow-md z-10">
                    Featured
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-5 text-[#3b82f6] pr-16 leading-tight">
                  {project.title}
                </h3>

                <p className="text-base text-[#cbd5e1] mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-[#1e3a8a] border border-[#3b82f6] text-[#60a5fa] text-xs font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <motion.a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#2563eb] transition-colors text-sm font-semibold mt-auto" whileHover={{ x: 5 }} onClick={(e) => e.stopPropagation()}>
                    View Project →
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}