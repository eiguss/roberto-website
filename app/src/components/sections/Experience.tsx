"use client";

import { cvData } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Experience() {
    return (
        <section className="mb-16">
            <SectionTitle>Work Experience</SectionTitle>
            <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                    <GlassCard key={`${exp.company}-${exp.role}`} delay={index * 0.1}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white/90">{exp.role}</h3>
                                <p className="text-blue-400 font-medium">{exp.company}</p>
                            </div>
                            <span className="text-white/40 text-sm font-mono mt-1 md:mt-0">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-white/60 mb-4 leading-relaxed">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
