import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { TerminalWidget } from "@/components/ui/TerminalWidget";
import { PrintCV } from "@/components/sections/PrintCV";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Interactive Web View */}
      <main id="web-layout" className="min-h-screen bg-[#050505] relative selection:bg-blue-500/30">
        {/* Background Ambient Lighting Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/15 blur-[140px] rounded-full" />
          <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/15 blur-[140px] rounded-full" />
          <div className="absolute bottom-[5%] left-[20%] w-[45%] h-[40%] bg-purple-900/15 blur-[140px] rounded-full" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <Hero />

          <div className="space-y-16">
            <Skills />
            <Experience />
            <Education />
            <TerminalWidget />
          </div>

          <footer className="no-print mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-white/40 text-xs gap-4">
            <p>© {new Date().getFullYear()} • Roberto Martínez Querol. All rights reserved.</p>
            <p className="font-mono text-[11px] text-white/30">
              Built with Next.js • Tailwind CSS • Framer Motion
            </p>
          </footer>
        </div>
      </main>

      {/* Dedicated Executive Printable Resume Layout */}
      <PrintCV />
    </>
  );
}
