"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
    children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
    return (
        <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-white/90"
        >
            {children}
        </motion.h2>
    );
}
