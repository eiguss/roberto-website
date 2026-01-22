import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-5%] w-[30%] h-[50%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 pb-20">
        <Hero />

        <div className="space-y-24">
          <Skills />
          <Experience />
          <Education />
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 text-center text-white/20 text-sm">
          <p>© {new Date().getFullYear()} • Roberto Martínez Querol. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
