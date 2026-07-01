import { motion } from "motion/react";
import { ArrowRight, Github, Instagram, Linkedin, Briefcase } from "lucide-react";

interface HeroProps {
  name: string;
  tagline: string;
  subTaglines: string[];
  intro: string;
  github: string;
  instagram: string;
  linkedin: string;
  hasJourney: boolean;
  hasProjects: boolean;
}

export default function Hero({ name, tagline, subTaglines, intro, github, instagram, linkedin, hasJourney, hasProjects }: HeroProps) {

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 px-4 md:px-8 pb-10"
    >
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-inner"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span className="text-[10px] sm:text-xs font-mono font-medium tracking-wider text-emerald-400 uppercase">
            Portfolio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-5 sm:mb-6 leading-none">
            {name}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {subTaglines.map((sub, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 shadow-sm"
              >
                {sub}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-indigo-300 max-w-4xl tracking-tight leading-snug"
        >
          {tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl px-4 leading-relaxed"
        >
          {intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4 px-4 w-full"
        >
          {hasJourney && (
            <button
              onClick={() => handleScrollTo("journey")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 active:scale-95 transition-all shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              <span>View My Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}

          {(hasProjects || subTaglines.length > 0) && (
            <button
              onClick={() => handleScrollTo(hasProjects ? "projects" : "skills")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-200 bg-zinc-900 hover:bg-zinc-900 hover:text-white border border-zinc-800 hover:border-zinc-700 active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>{hasProjects ? "Explore Projects" : "View Skills"}</span>
            </button>
          )}

          <button
            onClick={() => handleScrollTo("contact")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-zinc-400 bg-transparent hover:text-white border border-transparent hover:border-zinc-800 transition-all cursor-pointer"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-4 pb-16 sm:pb-4"
        >
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all active:scale-90"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-emerald-400 hover:border-zinc-700 transition-all active:scale-90"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {instagram && (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-pink-400 hover:border-zinc-700 transition-all active:scale-90"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
