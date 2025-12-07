import { Hero } from "./components/Hero";
import About from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import Contact from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12 border-t border-[#334155] bg-[#0f172a]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#94a3b8] text-sm sm:text-base">
            © {new Date().getFullYear()} AI Portfolio. Built with Next.js and
            Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
