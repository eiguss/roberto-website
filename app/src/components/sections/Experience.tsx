"use client";

import { cvData, Experience as ExperienceType } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
    return (
        <section id="experience" className="mb-20 scroll-mt-24">
            <div className="mb-8">
                <SectionTitle>Work Experience</SectionTitle>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative border-l border-white/10 ml-3 md:ml-6 pl-6 md:pl-8 space-y-10">
                {cvData.experience.map((exp: ExperienceType, index: number) => (
                    <motion.div
                        key={`${exp.company}-${exp.role}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="relative group"
                    >
                        {/* Glowing Node Marker */}
                        <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ring-4 ring-black group-hover:scale-125 transition-transform" />

                        <GlassCard className="p-6 md:p-7 relative overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all">
                            {/* Role & Company Header */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="flex items-center gap-3 text-sm text-blue-400 font-medium mt-1">
                                        <span className="flex items-center gap-1">
                                            <Briefcase size={14} />
                                            {exp.company}
                                        </span>
                                        {exp.location && (
                                            <span className="text-white/40 text-xs font-mono flex items-center gap-1">
                                                <MapPin size={12} />
                                                {exp.location}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono self-start">
                                    <Calendar size={12} className="text-blue-400" />
                                    {exp.period}
                                </span>
                            </div>

                            {/* Overview description */}
                            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                                {exp.description}
                            </p>

                            {/* Highlights bullets */}
                            {exp.highlights && exp.highlights.length > 0 && (
                                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-white/70">
                                    {exp.highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                                {exp.technologies.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-xs text-blue-300 font-mono"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
