"use client";

import { cvData, Project } from "@/data/cv-data";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FolderGit2, Sparkles, CheckCircle2 } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="mb-20 scroll-mt-24">
            <SectionTitle>Featured Architectural & Engineering Highlights</SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cvData.projects.map((project: Project, index: number) => (
                    <GlassCard
                        key={project.title}
                        delay={index * 0.1}
                        className="p-6 flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all group"
                    >
                        <div>
                            {/* Header */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                                    <FolderGit2 size={20} />
                                </div>
                                <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                                    Enterprise Core
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Highlights */}
                            <ul className="space-y-1.5 mb-6 text-xs text-white/70">
                                {project.highlights.map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <Sparkles size={12} className="text-purple-400 shrink-0 mt-0.5" />
                                        <span>{h}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[11px] font-mono text-white/60"
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
