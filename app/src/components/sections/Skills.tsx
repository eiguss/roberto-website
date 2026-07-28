"use client";

import { motion } from "framer-motion";
import { cvData, SkillCategory, SkillItem } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Cpu, ShieldCheck, Layers, Bot, Award } from "lucide-react";

export function Skills() {
    const categoryIcons: Record<string, React.ReactNode> = {
        "Leadership & Product Strategy": <Award size={18} className="text-amber-400" />,
        "Cloud & System Architecture": <Layers size={18} className="text-blue-400" />,
        "Engineering & Infrastructure": <Cpu size={18} className="text-indigo-400" />,
        "AI & Emerging Technologies": <Bot size={18} className="text-purple-400" />,
    };

    return (
        <section id="skills" className="mb-20 scroll-mt-24">
            <SectionTitle>Technical Skills & Core Competencies</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvData.skillCategories.map((cat: SkillCategory, catIdx: number) => (
                    <GlassCard
                        key={cat.category}
                        delay={catIdx * 0.1}
                        className="p-6 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                        <div>
                            {/* Category Header */}
                            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
                                {categoryIcons[cat.category] || <ShieldCheck size={18} className="text-blue-400" />}
                                <h3 className="text-lg font-bold text-white/90 tracking-tight">
                                    {cat.category}
                                </h3>
                            </div>

                            {/* Skills list inside category */}
                            <div className="space-y-4">
                                {cat.skills.map((skill: SkillItem, skillIdx: number) => (
                                    <div key={skill.name} className="flex flex-col gap-1.5">
                                        <div className="flex justify-between items-center text-xs font-medium">
                                            <span className="text-white/80">{skill.name}</span>
                                            <span className="text-blue-400 font-mono font-semibold">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-[1px]">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: 0.2 + skillIdx * 0.1 }}
                                                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
