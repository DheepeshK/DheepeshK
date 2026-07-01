import { motion } from "motion/react";
import { Experience } from "../types";
import { Briefcase, Building, ChevronRight } from "lucide-react";

interface ExperienceProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Experience & Responsibilities
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Leadership, volunteer, and event experience.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 md:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-900 pb-4 mb-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-mono font-medium tracking-wider text-emerald-400 bg-emerald-500/5 px-2.5 py-0.5 rounded-md uppercase">
                      {exp.type === "internship" ? "Academic Internship" : exp.type === "volunteer" ? "Volunteer" : exp.type === "event" ? "Event" : "Leadership Role"}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <Building className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="font-semibold">{exp.organization}</span>
                  </div>
                </div>

                {exp.period && (
                  <div className="text-right md:pt-1">
                    <span className="inline-block text-xs font-mono text-zinc-500 bg-zinc-950 border border-zinc-900 px-3 py-1 rounded-lg">
                      {exp.period}
                    </span>
                  </div>
                )}
              </div>

              {exp.points.length > 0 && (
                <div className="space-y-3.5">
                  <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                    Key contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.skillsLearned && exp.skillsLearned.length > 0 && (
                <div className="pt-6 mt-6 border-t border-zinc-900/60 flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider mr-2">
                    Gained Mastery In:
                  </span>
                  {exp.skillsLearned.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded text-[10px] font-mono text-zinc-500 bg-zinc-950 border border-zinc-900"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
