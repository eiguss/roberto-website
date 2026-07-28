"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cvData } from "@/data/cv-data";
import { Github, Linkedin, Mail, Printer, MapPin, Check, Copy, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(cvData.personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <header id="hero" className="pt-24 pb-16 flex flex-col items-center text-center">
            {/* Executive Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-mono backdrop-blur-md"
            >
                <Sparkles size={13} className="text-blue-400 animate-pulse" />
                <span>Director of Engineering & Senior Software Architect</span>
            </motion.div>

            {/* Profile Avatar with Glowing Halo */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8 relative group"
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 group-hover:scale-105" />
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 p-[3px]">
                    <div className="relative w-full h-full rounded-full bg-neutral-950 overflow-hidden shadow-2xl">
                        <Image
                            src={cvData.personalInfo.profileImage || "/profile.jpg"}
                            alt={cvData.personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            {/* Main Name Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/60"
            >
                {cvData.personalInfo.name}
            </motion.h1>

            {/* Role Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="text-lg sm:text-2xl text-blue-400 font-semibold mb-3 font-display tracking-wide"
            >
                {cvData.personalInfo.title}
            </motion.p>

            {/* Location & Status Tag */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center justify-center gap-4 text-xs font-mono text-white/50 mb-8"
            >
                <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-rose-400" />
                    {cvData.personalInfo.location}
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">
                    14+ Years Software Development & Architecture
                </span>
            </motion.div>

            {/* Bio summary */}
            <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="max-w-3xl text-white/70 text-base md:text-lg mb-10 leading-relaxed font-normal"
            >
                {cvData.personalInfo.bio}
            </motion.p>

            {/* Action Bar */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center justify-center gap-3 mb-12"
            >
                <button
                    onClick={handleCopyEmail}
                    className="no-print px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-xs sm:text-sm transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                    {copied ? (
                        <>
                            <Check size={16} className="text-emerald-400" />
                            <span className="text-emerald-300">Email Copied!</span>
                        </>
                    ) : (
                        <>
                            <Mail size={16} className="text-blue-400" />
                            <span>{cvData.personalInfo.email}</span>
                            <Copy size={13} className="text-white/40 ml-1" />
                        </>
                    )}
                </button>

                <a
                    href={cvData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-print p-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white transition-all hover:scale-105"
                    aria-label="LinkedIn Profile"
                >
                    <Linkedin size={18} />
                </a>

                <a
                    href={cvData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-print p-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white/80 hover:text-white transition-all hover:scale-105"
                    aria-label="GitHub Profile"
                >
                    <Github size={18} />
                </a>

                <button
                    onClick={handlePrint}
                    className="no-print px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm rounded-full shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Printer size={16} />
                    <span>Print Printable CV</span>
                </button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2"
            >
                {cvData.personalInfo.stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="glass backdrop-blur-md bg-white/[0.02] border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center hover:bg-white/[0.04] transition-all"
                    >
                        <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-display">
                            {stat.value}
                        </span>
                        <span className="text-xs text-white/50 mt-1 font-medium">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </header>
    );
}
