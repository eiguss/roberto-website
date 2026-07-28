"use client";

import { cvData, Education as EducationType } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
    return (
        <section id="education" className="mb-20 scroll-mt-24">
            <SectionTitle>Education & Credentials</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvData.education.map((edu: EducationType, index: number) => (
                    <GlassCard
                        key={`${edu.institution}-${edu.degree}`}
                        delay={index * 0.1}
                        className="p-6 border border-white/10 hover:border-pink-500/40 transition-all flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                                    <GraduationCap size={20} />
                                </div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-mono">
                                    <Calendar size={12} className="text-pink-400" />
                                    {edu.period}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">
                                {edu.degree}
                            </h3>
                            <p className="text-blue-400 font-medium text-sm mb-2">
                                {edu.institution}
                            </p>
                        </div>

                        {edu.location && (
                            <div className="flex items-center gap-1 text-xs text-white/40 font-mono pt-3 border-t border-white/5">
                                <MapPin size={12} />
                                {edu.location}
                            </div>
                        )}
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
