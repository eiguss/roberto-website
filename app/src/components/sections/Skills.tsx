"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Skills() {
    return (
        <section className="mb-16">
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cvData.skills.map((skill, index) => (
                    <GlassCard key={skill.name} delay={index * 0.1}>
                        <div className="flex flex-col">
                            <span className="text-lg font-medium text-white/80">{skill.name}</span>
                            <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                    className="bg-blue-500 h-full rounded-full"
                                />
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
