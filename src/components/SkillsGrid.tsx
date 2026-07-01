import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Skill } from "../types";
import {
  Terminal, FileCode, Sigma, Globe, PaintbrushVertical,
  GitBranch, Cpu, Box, Palette, Image, Video, Camera,
  FileText, FileSpreadsheet, Presentation,
  Table2, CodeXml, Github, Zap, Code,
  Users, Target, Settings, Sparkles, Wrench,
  PenTool, Layout, HardDrive
} from "lucide-react";

type LucideIcon = typeof Terminal;

interface SkillsGridProps {
  skills: Skill[];
}

const skillIconMap: Record<string, LucideIcon> = {
  "C": Terminal,
  "C++": Terminal,
  "Python": FileCode,
  "MATLAB": Sigma,
  "HTML": Globe,
  "CSS": PaintbrushVertical,
  "SolidWorks": Box,
  "Embedded Systems": Cpu,
  "Simulink": GitBranch,
  "Canva": Palette,
  "Adobe Photoshop": Image,
  "DaVinci Resolve": Video,
  "OBS Studio": Camera,
  "Visual Studio Code (VS Code)": CodeXml,
  "GitHub": Github,
  "Microsoft Word": FileText,
  "Microsoft Excel": FileSpreadsheet,
  "Microsoft PowerPoint": Presentation,
  "Google Sheets": Table2,
  "Event Management": Users,
  "Team Coordination": Users,
  "Public Speaking": Target,
  "Planning & Execution": Wrench,
};

const categoryConfig = {
  programming: {
    label: "Programming",
    icon: Code,
    gradient: "from-emerald-500/10 via-cyan-500/5 to-transparent",
    borderGlow: "shadow-emerald-500/20",
    iconBg: "from-emerald-400 to-cyan-400",
    badge: "text-emerald-400 border-emerald-500/30",
    glow: "bg-emerald-500/10"
  },
  engineering: {
    label: "Engineering",
    icon: HardDrive,
    gradient: "from-blue-500/10 via-cyan-500/5 to-transparent",
    borderGlow: "shadow-blue-500/20",
    iconBg: "from-blue-400 to-cyan-400",
    badge: "text-blue-400 border-blue-500/30",
    glow: "bg-blue-500/10"
  },
  design: {
    label: "Design & Creativity",
    icon: PenTool,
    gradient: "from-orange-500/10 via-amber-500/5 to-transparent",
    borderGlow: "shadow-orange-500/20",
    iconBg: "from-orange-400 to-amber-400",
    badge: "text-orange-400 border-orange-500/30",
    glow: "bg-orange-500/10"
  },
  devtools: {
    label: "Development Tools",
    icon: CodeXml,
    gradient: "from-fuchsia-500/10 via-pink-500/5 to-transparent",
    borderGlow: "shadow-fuchsia-500/20",
    iconBg: "from-fuchsia-400 to-pink-400",
    badge: "text-fuchsia-400 border-fuchsia-500/30",
    glow: "bg-fuchsia-500/10"
  },
  productivity: {
    label: "Productivity",
    icon: Layout,
    gradient: "from-teal-500/10 via-lime-500/5 to-transparent",
    borderGlow: "shadow-teal-500/20",
    iconBg: "from-teal-400 to-lime-400",
    badge: "text-teal-400 border-teal-500/30",
    glow: "bg-teal-500/10"
  },
  leadership: {
    label: "Leadership",
    icon: Users,
    gradient: "from-sky-500/10 via-indigo-500/5 to-transparent",
    borderGlow: "shadow-sky-500/20",
    iconBg: "from-sky-400 to-indigo-400",
    badge: "text-sky-400 border-sky-500/30",
    glow: "bg-sky-500/10"
  }
} as const;

const tabs = [
  { value: "programming" as const, label: "Programming" },
  { value: "engineering" as const, label: "Engineering" },
  { value: "design" as const, label: "Design & Creativity" },
  { value: "devtools" as const, label: "Dev Tools" },
  { value: "productivity" as const, label: "Productivity" },
  { value: "leadership" as const, label: "Leadership" }
];

function FloatingParticles() {
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: ["rgba(52,211,153,0.3)", "rgba(251,146,60,0.2)", "rgba(56,189,248,0.2)", "rgba(232,121,249,0.2)"][i % 4],
    })), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            opacity: [0.2, 0.7, 0.3, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number; key?: string }) {
  const config = categoryConfig[skill.category];
  const Icon = skillIconMap[skill.name] ?? Code;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: index * 0.06,
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="group relative"
    >
      <div className={`
        relative rounded-2xl border border-zinc-800/80 bg-gradient-to-br ${config.gradient}
        p-5 h-full backdrop-blur-sm overflow-hidden
        transition-all duration-300
        hover:border-zinc-700 hover:shadow-2xl ${config.borderGlow}
      `}>
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${config.glow} blur-xl`} />

        <div className="relative flex flex-col items-start gap-4">
          <div className="relative">
            <div className={`
              flex h-14 w-14 items-center justify-center rounded-xl
              bg-gradient-to-br ${config.iconBg} shadow-lg
              transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl
            `}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <motion.div
              className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${config.iconBg} opacity-30 blur-md`}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-2">
            <span className={`
              inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider
              border ${config.badge} bg-zinc-950/50
            `}>
              {config.label}
            </span>
            <h3 className="text-sm md:text-base font-bold text-zinc-100 leading-tight">
              {skill.name}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
  const [activeTab, setActiveTab] = useState<Skill["category"]>("programming");

  const currentSkills = skills.filter((s) => s.category === activeTab);
  const config = categoryConfig[activeTab];
  const TabIcon = config.icon;

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden"
    >
      <FloatingParticles />

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
              <Zap className="w-3.5 h-3.5" />
              <span>Skills &amp; Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Skills{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                &amp; Expertise
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-cyan-500 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Technologies, tools, and creative mediums I work with.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="flex p-1 bg-zinc-900/60 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              const tabConfig = categoryConfig[tab.value];
              const TIcon = tabConfig.icon;
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`
                    relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide
                    transition-all duration-300 cursor-pointer
                    ${isActive
                      ? "text-zinc-950"
                      : "text-zinc-400 hover:text-zinc-200"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="tab-bg"
                      className={`absolute inset-0 rounded-lg bg-gradient-to-r ${tabConfig.iconBg}`}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <TIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className={`
              flex h-8 w-8 items-center justify-center rounded-lg
              bg-gradient-to-br ${config.iconBg}
            `}>
              <TabIcon className="w-4 h-4 text-white" />
            </div>
            <span className="text-zinc-400 text-sm">
              Showing <strong className="text-zinc-200">{currentSkills.length}</strong> {config.label.toLowerCase()}
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            <AnimatePresence mode="popLayout">
              {currentSkills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {currentSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 mb-4">
              <Sparkles className="w-6 h-6 text-zinc-600" />
            </div>
            <p className="text-zinc-500 text-sm">No skills in this category yet.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
