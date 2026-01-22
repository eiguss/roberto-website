"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv-data";
import { Github, Linkedin, Mail, Printer } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const handlePrint = () => {
        window.print();
    };

    return (
        <header className="py-20 flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1">
                    <div className="relative w-full h-full rounded-full bg-black overflow-hidden">
                        <Image
                            src={cvData.personalInfo.profileImage || ""}
                            alt={cvData.personalInfo.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
            >
                {cvData.personalInfo.name}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl text-blue-400 font-medium mb-8 font-display"
            >
                {cvData.personalInfo.title}
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-2xl text-white/50 text-lg mb-10 leading-relaxed"
            >
                {cvData.personalInfo.bio}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-6"
            >
                <a href={cvData.personalInfo.github} className="text-white/40 hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href={cvData.personalInfo.linkedin} className="text-white/40 hover:text-white transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href={`mailto:${cvData.personalInfo.email}`} className="text-white/40 hover:text-white transition-colors">
                    <Mail size={24} />
                </a>
                <button
                    onClick={handlePrint}
                    className="no-print ml-4 px-6 py-2 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2"
                >
                    <Printer size={16} />
                    Print CV
                </button>
            </motion.div>
        </header>
    );
}
