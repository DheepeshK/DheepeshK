import { useState } from "react";
import { motion } from "motion/react";
import { Achievement } from "../types";
import { Award, Trophy, Bookmark, ShieldCheck, CheckCircle } from "lucide-react";
interface AchievementsProps {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  const [selectedSub, setSelectedSub] = useState<string>("all");

  const subCategories = [
    { value: "all", label: "All" },
    { value: "award", label: "Awards" },
    { value: "competition", label: "Competitions" },
    { value: "certificate", label: "Certifications" },
  ];

  const filteredAchievements = selectedSub === "all"
    ? achievements
    : achievements.filter(a => a.category === selectedSub);

  const getBadgeIcon = (cat: string) => {
    switch (cat) {
      case "award":
        return <Trophy className="w-5 h-5 text-amber-400" />;
      case "competition":
        return <Trophy className="w-5 h-5 text-rose-400" />;
      case "certificate":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Bookmark className="w-5 h-5 text-indigo-400" />;
    }
  };

  const getBorderColor = (cat: string) => {
    switch (cat) {
      case "award": return "hover:border-amber-500/30";
      case "competition": return "hover:border-rose-500/30";
      case "certificate": return "hover:border-cyan-500/30";
      default: return "hover:border-emerald-500/30";
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-rose-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Recognition</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Achievements & Honors
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-rose-500 to-rose-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Awards, certifications, and competition results.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-zinc-900">
          {subCategories.map(sub => (
            <button
              key={sub.value}
              onClick={() => setSelectedSub(sub.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedSub === sub.value
                  ? "bg-zinc-900 text-rose-400 border border-zinc-800"
                  : "text-zinc-500 hover:text-zinc-400 bg-transparent border border-transparent"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`p-6 rounded-2xl bg-zinc-900/35 border border-zinc-900 ${getBorderColor(item.category)} transition-all hover:shadow-lg flex items-start gap-4 relative group`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-center">
                {getBadgeIcon(item.category)}
              </div>

              <div className="space-y-2 flex-grow">
                {(item.issuer || item.date) && (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    {item.issuer && (
                      <span className="text-[10px] font-mono font-medium text-rose-400 uppercase tracking-widest block">
                        {item.issuer}
                      </span>
                    )}
                    {item.date && (
                      <span className="text-[10px] font-mono text-zinc-500 block">
                        {item.date}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.category === "certificate" && (
                  <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verified Credential</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {filteredAchievements.length === 0 && (
            <div className="col-span-full text-center py-16 text-zinc-500 border border-dashed border-zinc-900 rounded-2xl">
              <span>No achievements match this filter.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
