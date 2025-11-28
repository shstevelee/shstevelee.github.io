"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileWarning,
  Clock,
  Code,
  Cpu,
  ScrollText,
  Lock,
  ArrowRight,
} from "lucide-react";

import { allProjects, type Project, type ProjectType } from "@/data/projects";

const filters = ["ALL", "HARDWARE", "SOFTWARE", "R&D"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  // Filter Logic
  const filteredProjects = allProjects.filter((p) => {
    if (activeFilter === "ALL") return true;
    // Check if the project's type list includes the selected filter
    return p.types.includes(activeFilter as ProjectType);
  });

  return (
    <main className="min-h-screen w-full bg-safety-yellow text-industrial-black pt-32 px-4 md:px-12 lg:px-20 pb-20 overflow-y-auto">
      {/* --- HEADER & FILTERS --- */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-oswald text-7xl md:text-9xl font-bold tracking-tighter leading-none"
        >
          PROJECT
          <br />
          LOG_2025
        </motion.h1>

        {/* The "Dip Switch" Filter Control */}
        <div className="flex flex-wrap gap-4 font-mono text-sm md:text-base">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                relative px-6 py-3 border-2 border-industrial-black transition-all duration-200
                hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]
                ${
                  activeFilter === filter
                    ? "bg-industrial-black text-safety-yellow shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] translate-x-[-2px] translate-y-[-2px]"
                    : "bg-transparent text-industrial-black"
                }
              `}
            >
              <div
                className={`w-3 h-3 border border-current mr-3 inline-block ${
                  activeFilter === filter ? "bg-safety-yellow" : ""
                }`}
              />
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* --- PROJECT GRID --- */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  );
}

// --- CARD COMPONENT ---
function ProjectCard({ project }: { project: Project }) {
  // Check types array for specific flags
  const isConfidential = project.types.includes("CONFIDENTIAL");
  const isResearch = project.types.includes("R&D");
  const isHardware = project.types.includes("HARDWARE");
  const isSoftware = project.types.includes("SOFTWARE");

  // Check meta string for "HACK" (allows "7H HACK", "24H HACK", etc.)
  const isHackathon = project.meta?.includes("HACK");

  return (
    <motion.div
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        relative p-6 border-4 border-industrial-black flex flex-col justify-between group min-h-[400px]
        transition-colors duration-300
        ${
          isResearch
            ? "bg-industrial-black text-white hover:bg-white hover:text-black hover:border-black"
            : "bg-transparent hover:bg-white"
        }
        ${isConfidential ? 'bg-[url("/assets/noise.png")]' : ""} 
      `}
    >
      {/* 1. Card Header */}
      <div>
        <div className="flex justify-between items-start border-b-2 border-current pb-4 mb-6">
          <span className="font-mono text-xl">#{project.id}</span>
          <div className="flex gap-2">
            {/* Render multiple icons if applicable */}
            {isHardware && <Cpu size={20} />}
            {isSoftware && <Code size={20} />}
            {isResearch && <ScrollText size={20} />}
            {isConfidential && <Lock size={20} />}
          </div>
        </div>

        {/* 2. Title & Meta */}
        <h2 className="font-oswald text-4xl mb-2 leading-tight uppercase">
          {project.title}
        </h2>

        {/* Hackathon Badge */}
        {isHackathon && (
          <div className="inline-flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 font-mono text-xs mb-4 font-bold animate-pulse">
            <Clock size={12} /> {project.meta}
          </div>
        )}

        {/* Research Badge */}
        {isResearch && (
          <div className="inline-block border border-current px-2 py-0.5 font-mono text-xs mb-4 opacity-70">
            {project.meta}
          </div>
        )}

        {/* Confidential Warning */}
        {isConfidential && (
          <div className="flex items-center gap-2 text-red-600 font-bold font-mono text-sm mb-4 border border-red-600 px-2 py-1 bg-red-600/10">
            <FileWarning size={16} /> ACADEMIC POLICY RESTRICTED
          </div>
        )}

        <p className="font-mono text-xs opacity-60 mb-6">{project.category}</p>

        <p
          className={`font-sans text-lg leading-relaxed ${
            isConfidential
              ? "blur-[2px] select-none hover:blur-none transition-all"
              : ""
          }`}
        >
          {project.description}
        </p>
      </div>

      {/* 3. Footer (Stack & Link) */}
      <div className="mt-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-current px-2 py-1 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-end">
          {isConfidential ? (
            <span
              className={`
            font-oswald text-xl decoration-2 underline-offset-4 uppercase inline-flex items-center gap-2
             opacity-50 cursor-not-allowed line-through
          `}
            >
              {project.linkText} <ArrowRight size={20} />
            </span>
          ) : (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
            font-oswald text-xl hover:underline decoration-2 underline-offset-4 uppercase inline-flex items-center gap-2
          `}
            >
              {project.linkText} <ArrowRight size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
