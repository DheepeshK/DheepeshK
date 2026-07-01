import { motion } from "motion/react";
import { Compass, Lightbulb, Target, Trophy, Sparkles } from "lucide-react";

interface VisionProps {
  visionStatement: string;
  future1Year: string;
  future3Year: string;
  future5Year: string;
}

export default function Vision({ visionStatement, future1Year, future3Year, future5Year }: VisionProps) {
  return (
    <section id="vision" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Looking Ahead</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              My Mission & Vision
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-indigo-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Where I'm headed and what I aim to build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-6 md:p-10 rounded-2xl bg-zinc-900/40 border border-zinc-900 shadow-inner mb-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 text-indigo-500/10 opacity-30 select-none">
            <Lightbulb className="w-24 h-24" />
          </div>

          <div className="space-y-4 relative z-10 max-w-3xl">
            <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase font-semibold">
                Vision Statement
            </span>
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-medium italic">
              "{visionStatement}"
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg flex flex-col justify-between gap-6 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-teal-400 uppercase">
                    Near-term
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 font-mono">1 Year Goal</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-teal-400 transition-colors">
                The Open Source Launch
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {future1Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
              <Target className="w-4 h-4 text-teal-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg flex flex-col justify-between gap-6 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-indigo-400 uppercase">
                    Mid-term
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 font-mono">3 Year Goal</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-indigo-400 transition-colors">
                Co-Founding SaaS Venture
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {future3Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg flex flex-col justify-between gap-6 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-pink-400 uppercase">
                    Long-term
                  </span>
                  <span className="text-xs font-semibold text-zinc-500 font-mono">5 Year Goal</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-pink-400 transition-colors">
                Empowering Maker Communities
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {future5Year}
              </p>
            </div>
            <div className="w-8 h-8 rounded bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
              <Trophy className="w-4 h-4 text-pink-400" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
