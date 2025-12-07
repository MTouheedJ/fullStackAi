"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      title: "AI Frameworks",
      skills: ["LangChain", "LangGraph", "CrewAI", "Agentic AI", "Claude", "OpenAI"],
    },
    {
      title: "Voice & Real-time",
      skills: ["LiveKit", "Twilio", "WebRTC", "Real-time Communication"],
    },
    {
      title: "RAG & Vector DB",
      skills: ["Vector DBs", "Embeddings", "Similarity Search", "Chroma", "Pinecone"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "Node.js", "REST APIs", "WebSockets"],
    },
    {
      title: "ML & Data",
      skills: ["Fine-tuning", "Computer Vision", "Image Processing", "Prompt Engineering"],
    },
    {
      title: "Automation",
      skills: ["n8n", "Workflow Automation", "API Integration", "Webhooks"],
    },
    {
      title: "Deployment",
      skills: ["Vercel", "Docker", "CI/CD", "Cloud Deployment"],
    },
  ];

  return (
    <section id="skills" ref={ref} className="relative py-24 sm:py-32 md:py-40 px-6 sm:px-8 lg:px-12 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.8 }} className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#f1f5f9]">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
          <p className="text-xl sm:text-2xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed">
            Expertise in modern AI frameworks and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: categoryIndex * 0.1,
                duration: 0.6,
              }}
              className="card p-6 sm:p-8 group"
            >
              <h3 className="text-xl font-bold mb-6 text-[#f1f5f9] group-hover:text-[#3b82f6] transition-colors">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] rounded-full flex-shrink-0" />
                    <span className="text-[#cbd5e1] text-sm leading-relaxed">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
