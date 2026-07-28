"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { cvData } from "@/data/cv-data";

interface HistoryEntry {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function TerminalWidget() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: "initial-summary",
      command: "roberto --summary",
      output: (
        <div className="space-y-1 text-white/90 font-mono">
          <p><span className="text-blue-400 font-bold">NAME:</span> {cvData.personalInfo.name}</p>
          <p><span className="text-blue-400 font-bold">TITLE:</span> {cvData.personalInfo.title}</p>
          <p><span className="text-blue-400 font-bold">LOCATION:</span> {cvData.personalInfo.location}</p>
          <p><span className="text-blue-400 font-bold">TRACK RECORD:</span> 14+ years total software experience (12 years at Inbenta), scaling from Web Developer to Director of Engineering.</p>
          <p className="text-white/70 pt-1"><span className="text-blue-400 font-bold">CORE FOCUS:</span> Software Architecture, AI Systems, Full-Stack Web Engineering & Technical Leadership.</p>
        </div>
      ),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase().replace(/^roberto\s+/, "");
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }

    let outputNode: React.ReactNode;

    if (cmd === "help" || cmd === "?") {
      outputNode = (
        <div className="text-amber-300 font-mono space-y-1">
          <p className="font-semibold">Available Commands:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 pl-2 text-xs text-amber-200/80">
            <span>• <strong className="text-amber-300">summary</strong> (or --summary)</span>
            <span>• <strong className="text-amber-300">stack</strong> (or --stack)</span>
            <span>• <strong className="text-amber-300">contact</strong> (or --contact)</span>
            <span>• <strong className="text-amber-300">experience</strong></span>
            <span>• <strong className="text-amber-300">skills</strong></span>
            <span>• <strong className="text-amber-300">whoami</strong></span>
            <span>• <strong className="text-amber-300">clear</strong></span>
          </div>
        </div>
      );
    } else if (cmd === "summary" || cmd === "--summary") {
      outputNode = (
        <div className="space-y-1 text-white/90 font-mono">
          <p><span className="text-blue-400 font-bold">NAME:</span> {cvData.personalInfo.name}</p>
          <p><span className="text-blue-400 font-bold">TITLE:</span> {cvData.personalInfo.title}</p>
          <p><span className="text-blue-400 font-bold">LOCATION:</span> {cvData.personalInfo.location}</p>
          <p><span className="text-blue-400 font-bold">TRACK RECORD:</span> 14+ years total software experience (12 years at Inbenta), scaling from Web Developer to Director of Engineering.</p>
          <p className="text-white/70 pt-1"><span className="text-blue-400 font-bold">CORE FOCUS:</span> Software Architecture, AI Systems, Full-Stack Web Engineering & Technical Leadership.</p>
        </div>
      );
    } else if (cmd === "stack" || cmd === "--stack") {
      outputNode = (
        <div className="space-y-1 font-mono text-purple-300">
          <p>{"{"}</p>
          <p className="pl-4 text-white/90"><span className="text-purple-400 font-semibold">&quot;architecture_and_cloud&quot;:</span> [&quot;Software Architecture & Patterns&quot;, &quot;System Design&quot;, &quot;AWS Cloud Services&quot;, &quot;SaaS Architecture&quot;],</p>
          <p className="pl-4 text-white/90"><span className="text-purple-400 font-semibold">&quot;databases_and_data_management&quot;:</span> [&quot;SQL&quot;, &quot;PostgreSQL&quot;, &quot;OpenSearch&quot;, &quot;Memcached&quot;],</p>
          <p className="pl-4 text-white/90"><span className="text-purple-400 font-semibold">&quot;frontend_and_mobile&quot;:</span> [&quot;Next.js&quot;, &quot;React&quot;, &quot;Vue.js&quot;, &quot;Vuetify&quot;, &quot;MUI&quot;, &quot;Flutter&quot;],</p>
          <p className="pl-4 text-white/90"><span className="text-purple-400 font-semibold">&quot;languages&quot;:</span> [&quot;TypeScript&quot;, &quot;JavaScript (ES6+)&quot;, &quot;Node.js&quot;, &quot;PHP&quot;, &quot;SQL&quot;],</p>
          <p className="pl-4 text-white/90"><span className="text-purple-400 font-semibold">&quot;ai_engineering&quot;:</span> [&quot;Conversational AI&quot;, &quot;Semantic Indexing&quot;, &quot;LLM Integrations&quot;]</p>
          <p>{"}"}</p>
        </div>
      );
    } else if (cmd === "contact" || cmd === "--contact") {
      outputNode = (
        <div className="space-y-1 font-mono text-emerald-300">
          <p><span className="text-emerald-400 font-bold">EMAIL:</span> <a href={`mailto:${cvData.personalInfo.email}`} className="underline hover:text-white">{cvData.personalInfo.email}</a></p>
          <p><span className="text-emerald-400 font-bold">LINKEDIN:</span> <a href={cvData.personalInfo.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">{cvData.personalInfo.linkedin}</a></p>
          <p><span className="text-emerald-400 font-bold">GITHUB:</span> <a href={cvData.personalInfo.github} target="_blank" rel="noreferrer" className="underline hover:text-white">{cvData.personalInfo.github}</a></p>
        </div>
      );
    } else if (cmd === "experience") {
      outputNode = (
        <div className="space-y-1 font-mono text-white/80">
          <p className="text-blue-400 font-bold">Career Progression at Inbenta & Beyond:</p>
          <p>• Director of Engineering - Product Division (2023 - Present)</p>
          <p>• Head of Product (2022 - 2023)</p>
          <p>• Senior Software Engineer Team Lead (2017 - 2023)</p>
          <p>• Project Manager (Full Stack) (2016 - 2017) — Silicon Valley Exchange</p>
          <p>• Web Developer (2014 - 2016)</p>
        </div>
      );
    } else if (cmd === "skills") {
      outputNode = (
        <div className="space-y-1 font-mono text-indigo-300">
          <p className="font-bold text-white">Top Technical Competencies:</p>
          <p>• Team Leadership (98%) | Software Architecture (95%) | TypeScript (95%)</p>
          <p>• Full-Stack Development (92%) | SQL & PostgreSQL (92%) | Vuetify, MUI & React/Vue (90%)</p>
          <p>• OpenSearch & Memcached (88%) | Flutter (85%)</p>
        </div>
      );
    } else if (cmd === "whoami") {
      outputNode = (
        <div className="font-mono text-cyan-300">
          guest@roberto-website: Welcome tech leader & recruiter! Type &apos;help&apos; to explore commands.
        </div>
      );
    } else {
      outputNode = (
        <div className="font-mono text-rose-400">
          zsh: command not found: {rawCmd}. Type <span className="underline font-bold text-amber-300">&apos;help&apos;</span> for available commands.
        </div>
      );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `${Date.now()}-${Math.random()}`,
        command: rawCmd,
        output: outputNode,
      },
    ]);
    setInputValue("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputValue);
  };

  return (
    <section className="no-print my-20">
      <div className="glass backdrop-blur-xl bg-neutral-950/95 border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-neutral-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-white/50 flex items-center gap-1.5">
              <TerminalIcon size={13} className="text-blue-400" />
              roberto@architect-dev:~
            </span>
          </div>

          {/* Quick Action Chips */}
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <button
              onClick={() => executeCommand("roberto --summary")}
              className="px-2.5 py-1 rounded bg-blue-600/20 hover:bg-blue-600/40 text-blue-300 border border-blue-500/30 transition-all hover:scale-105"
            >
              --summary
            </button>
            <button
              onClick={() => executeCommand("roberto --stack")}
              className="px-2.5 py-1 rounded bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 border border-purple-500/30 transition-all hover:scale-105"
            >
              --stack
            </button>
            <button
              onClick={() => executeCommand("roberto --contact")}
              className="px-2.5 py-1 rounded bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 transition-all hover:scale-105"
            >
              --contact
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-4 max-h-[380px] overflow-y-auto custom-scrollbar"
        >
          {history.map((entry) => (
            <div key={entry.id} className="space-y-2">
              <div className="flex items-center gap-2 text-white/50">
                <span className="text-blue-400 font-bold">$</span>
                <span className="text-white font-medium">{entry.command}</span>
              </div>
              <div className="pl-3 border-l-2 border-white/10">
                {entry.output}
              </div>
            </div>
          ))}

          {/* Live Prompt Input */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-blue-400 font-bold">$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="type 'help', 'summary', 'stack', 'contact', 'clear'..."
              className="bg-transparent text-white focus:outline-none w-full text-xs font-mono placeholder:text-white/30"
              autoComplete="off"
            />
            <button type="submit" className="text-white/40 hover:text-white transition-colors" aria-label="Run command">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
