import { motion } from "motion/react";
import { GraduationCap, BookOpen, Star, Sparkles } from "lucide-react";

interface EducationProps {
  education: {
    institution: string;
    degree: string;
    department: string;
    period: string;
    gpa: string;
    highlights: string[];
    interests: string[];
  };
}

export default function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
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
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Academic Background
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            My formal education and scholarly pursuits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg flex flex-col justify-between relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
                Current Enrollment
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {education.institution}
                </h3>
                <p className="text-xs font-mono text-zinc-500 mt-1 block">
                  {education.period}
                </p>
              </div>

              <div className="space-y-1 pt-2">
                <div className="text-xs text-zinc-400 font-semibold">
                    Program
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  {education.degree} — {education.department}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-900 shadow-inner mt-8 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                  Cumulative GPA
                </span>
                <span className="text-lg font-extrabold text-white">
                  {education.gpa}
                </span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-6">

            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase border-b border-zinc-900 pb-2.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Highlights</span>
              </h4>

              <ul className="space-y-3">
                {education.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2"></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg space-y-4">
              <h4 className="text-xs font-mono tracking-widest text-zinc-400 uppercase border-b border-zinc-900 pb-2.5 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>Areas of Interest</span>
              </h4>

              <div className="flex flex-wrap gap-2 pt-2">
                {education.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 shadow-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
