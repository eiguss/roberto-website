import { cvData } from "@/data/cv-data";

export function PrintCV() {
    return (
        <div id="print-cv-container" className="hidden print:block text-black bg-white font-sans text-xs leading-relaxed p-0 m-0">
            {/* Header Section */}
            <header className="border-b border-neutral-300 pb-4 mb-4 text-center">
                <h1 className="text-2xl font-bold tracking-tight text-neutral-900 mb-1">
                    {cvData.personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-neutral-700 mb-2">
                    {cvData.personalInfo.title}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-neutral-600 font-mono">
                    <span>{cvData.personalInfo.email}</span>
                    <span>•</span>
                    <span>{cvData.personalInfo.location}</span>
                    <span>•</span>
                    <span>{cvData.personalInfo.linkedin}</span>
                    <span>•</span>
                    <span>{cvData.personalInfo.github}</span>
                </div>
            </header>

            {/* Executive Summary */}
            <section className="mb-4 break-inside-avoid">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-1.5">
                    Executive Summary
                </h2>
                <p className="text-neutral-700 leading-normal text-[11px]">
                    {cvData.personalInfo.bio}
                </p>
            </section>

            {/* Core Competencies & Skills */}
            <section className="mb-4 break-inside-avoid">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                    Core Technical Competencies
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px]">
                    {cvData.skillCategories.map((cat) => (
                        <div key={cat.category}>
                            <span className="font-bold text-neutral-900 block mb-0.5">{cat.category}:</span>
                            <span className="text-neutral-700">
                                {cat.skills.map((s) => s.name).join(" • ")}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Professional Experience */}
            <section className="mb-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
                    Professional Experience
                </h2>
                <div className="space-y-3">
                    {cvData.experience.map((exp) => (
                        <div key={`${exp.company}-${exp.role}`} className="break-inside-avoid">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <div>
                                    <span className="font-bold text-neutral-900 text-xs">{exp.role}</span>
                                    <span className="text-neutral-600 font-medium ml-1.5">— {exp.company}</span>
                                    {exp.location && (
                                        <span className="text-neutral-500 text-[10px] ml-1.5">({exp.location})</span>
                                    )}
                                </div>
                                <span className="font-mono text-[10px] text-neutral-600 shrink-0 font-medium">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-neutral-700 text-[11px] mb-1 leading-normal">
                                {exp.description}
                            </p>
                            {exp.highlights && exp.highlights.length > 0 && (
                                <ul className="list-disc list-inside text-neutral-700 text-[10.5px] space-y-0.5 pl-1 mb-1.5">
                                    {exp.highlights.map((h, i) => (
                                        <li key={i} className="leading-snug">
                                            <span className="-ml-1">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className="text-[10px] font-mono text-neutral-500">
                                <span className="font-bold text-neutral-600">Tech:</span> {exp.technologies.join(", ")}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="break-inside-avoid">
                <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2">
                    Education & Credentials
                </h2>
                <div className="space-y-1.5">
                    {cvData.education.map((edu) => (
                        <div key={edu.degree} className="flex justify-between items-baseline text-[11px]">
                            <div>
                                <span className="font-bold text-neutral-900">{edu.degree}</span>
                                <span className="text-neutral-600 ml-1.5">— {edu.institution}</span>
                            </div>
                            <span className="font-mono text-[10px] text-neutral-600">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
