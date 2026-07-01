import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
interface AboutProps {
  story: string;
  name: string;
}

export default function About({ story, name }: AboutProps) {
  const paragraphs = story.split("\n\n");

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
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
              <span>About</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            A peek into who I am and what drives me.
          </p>
        </motion.div>

        <div className="max-w-4xl space-y-6 text-zinc-300 leading-relaxed text-sm sm:text-base">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-medium text-white text-lg"
          >
            Hello there! I'm <span className="text-emerald-400">{name}</span>.
          </motion.p>

          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
