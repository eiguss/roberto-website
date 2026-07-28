"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
        >
            <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 inline-block" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white/90 tracking-tight">
                {children}
            </h2>
        </motion.div>
    );
}
