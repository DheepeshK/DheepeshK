import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { ExternalLink, Github, Search, Sparkles, AlertCircle, TrendingUp, X } from "lucide-react";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [activeDetailProject, setActiveDetailProject] = useState<Project | null>(null);

  const allTags = ["all", ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTag = selectedTag === "all" || p.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Featured Projects</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Projects & Prototypes
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Projects, prototypes, and technical work.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 pb-4 border-b border-zinc-900">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-900/60 border border-zinc-900 rounded-xl py-2 pl-10 pr-4 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-10 max-h-24 overflow-y-auto">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-md text-[10px] font-mono font-medium uppercase tracking-wider cursor-pointer ${
                selectedTag === tag
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "text-zinc-500 hover:text-zinc-400 bg-zinc-900/40 border border-transparent"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col h-full rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg overflow-hidden relative"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent"></div>

                  {p.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest font-semibold uppercase bg-emerald-500 text-zinc-950 shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow gap-6">
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm block">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
                    <button
                      onClick={() => setActiveDetailProject(p)}
                      className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 hover:text-emerald-400 cursor-pointer"
                    >
                      Detail Specs
                    </button>

                    <div className="flex gap-4">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-white transition-all"
                          title="Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-emerald-400 transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center py-16 text-zinc-500 border border-dashed border-zinc-900 rounded-2xl mt-6">
            <span>                No projects match your search. Try a different filter.</span>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeDetailProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden text-left"
            >
              <div className="relative h-32 bg-zinc-950">
                <img
                  src={activeDetailProject.image}
                  alt={activeDetailProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50"
                />
                <button
                  onClick={() => setActiveDetailProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
                  aria-label="Close Details"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {activeDetailProject.title}
                  </h4>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 block uppercase">
                    Overview
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {activeDetailProject.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-900 space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-500 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase leading-none">The Problem</span>
                      <p className="text-xs text-zinc-400 leading-relaxed">{activeDetailProject.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase leading-none">The Impact</span>
                      <p className="text-xs text-zinc-400 leading-relaxed">{activeDetailProject.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {activeDetailProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pl-3">
                    {activeDetailProject.github && (
                      <a
                        href={activeDetailProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-950 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repo</span>
                      </a>
                    )}
                    {activeDetailProject.link && (
                      <a
                        href={activeDetailProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 font-bold transition-all hover:bg-emerald-600"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
