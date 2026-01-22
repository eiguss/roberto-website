"use client";

import { cvData } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExternalLink } from "lucide-react";

export function Projects() {
    return (
        <section className="mb-16">
            <SectionTitle>Featured Projects</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cvData.projects.map((project, index) => (
                    <GlassCard key={project.title} delay={index * 0.1} className="group">
                        <h3 className="text-xl font-bold text-white/90 mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                            {project.title}
                            <ExternalLink size={16} className="opacity-40" />
                        </h3>
                        <p className="text-white/60 mb-4">
                            {project.description}
                        </p>
                        <div className="relative aspect-video rounded-xl bg-white/5 overflow-hidden">
                            {/* Image placeholder behavior with a gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-white/20 font-display italic">
                                Project Preview
                            </div>
                        </div>
                    </GlassCard>
                ))}
            </div>
        </section>
    );
}
