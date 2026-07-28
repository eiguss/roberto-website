"use client";

import { useState, useEffect } from "react";
import { Printer, Briefcase, Cpu, GraduationCap } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      className={`no-print fixed top-4 inset-x-0 z-50 max-w-5xl mx-auto px-4 transition-all duration-300 ${
        scrolled ? "translate-y-0" : "translate-y-1"
      }`}
    >
      <div className="glass backdrop-blur-xl bg-black/60 border border-white/10 rounded-full px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-blue-950/20">
        {/* Brand / Mini Info */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-[1.5px]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden font-bold text-xs text-white">
              RM
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-white/90 group-hover:text-blue-400 transition-colors">
              {cvData.personalInfo.name}
            </span>
            <span className="text-[10px] text-white/40 font-mono tracking-tight flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {cvData.personalInfo.status}
            </span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-white/60">
          <a
            href="#skills"
            className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <Cpu size={14} className="text-indigo-400" />
            Skills
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <Briefcase size={14} className="text-blue-400" />
            Experience
          </a>
          <a
            href="#education"
            className="hover:text-white transition-colors flex items-center gap-1.5 py-1"
          >
            <GraduationCap size={14} className="text-pink-400" />
            Education
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs rounded-full shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Printer size={14} />
            <span className="hidden xs:inline">Print CV / PDF</span>
            <span className="xs:hidden">Print</span>
          </button>
        </div>
      </div>
    </header>
  );
}
