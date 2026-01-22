"use client";

import { cvData } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Education() {
    return (
        <section className="mb-16">
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                    <GlassCard key={`${edu.institution}-${edu.degree}`} delay={index * 0.1}>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white/90">{edu.degree}</h3>
                                <p className="text-white/50">{edu.institution}</p>
                            </div>
                            <span className="text-white/40 text-sm font-mono mt-1 md:mt-0">
                                {edu.period}
                            </span>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
