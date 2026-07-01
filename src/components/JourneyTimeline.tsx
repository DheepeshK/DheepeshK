import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TimelineEvent } from "../types";
import { History, Milestone, Code, GraduationCap, Brush, Compass, HelpCircle } from "lucide-react";

interface JourneyTimelineProps {
  events: TimelineEvent[];
}

export default function JourneyTimeline({ events }: JourneyTimelineProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Events" },
    { value: "milestone", label: "Milestones" },
    { value: "tech", label: "Engineering" },
    { value: "creative", label: "Creative" },
    { value: "education", label: "Education" },
    { value: "future", label: "Future Goals" }
  ];

  const filteredEvents = selectedFilter === "all"
    ? events
    : events.filter(e => e.category === selectedFilter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "milestone":
        return <Milestone className="w-4 h-4 text-emerald-400" />;
      case "tech":
        return <Code className="w-4 h-4 text-cyan-400" />;
      case "education":
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case "creative":
        return <Brush className="w-4 h-4 text-amber-400" />;
      case "future":
        return <Compass className="w-4 h-4 text-pink-400" />;
      default:
        return <HelpCircle className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getCategoryThemeColor = (cat: string) => {
    switch (cat) {
      case "milestone": return "text-emerald-400 bg-emerald-500/10";
      case "tech": return "text-cyan-400 bg-cyan-500/10";
      case "education": return "text-indigo-400 bg-indigo-500/10";
      case "creative": return "text-amber-400 bg-amber-500/10";
      case "future": return "text-pink-400 bg-pink-500/10";
      default: return "text-zinc-400 bg-zinc-900";
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs tracking-wider uppercase mb-3">
              <History className="w-3.5 h-3.5" />
              <span>The Journey So Far</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              My Journey & Timeline
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-indigo-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Key milestones, creative ventures, and future aspirations that shape my path.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-zinc-900">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedFilter === cat.value
                  ? "bg-zinc-900 text-white shadow-md border border-zinc-700"
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative border-l border-zinc-900 ml-4 md:ml-32 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-6 md:pl-10"
              >
                <div className="hidden md:block absolute right-full mr-12 text-right top-1">
                  <span className="text-md font-extrabold tracking-tight text-white block">
                    {event.year}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 block uppercase pt-0.5">
                    {event.period}
                  </span>
                </div>

                <div className={`absolute left-0 -translate-x-1/2 top-1.5 w-8 h-8 rounded-lg flex items-center justify-center border-2 border-zinc-950 shadow-md ${getCategoryThemeColor(event.category)}`}>
                  {getCategoryIcon(event.category)}
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg flex flex-col gap-3 relative group">

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold uppercase ${getCategoryThemeColor(event.category)}`}>
                      {event.category}
                    </span>

                    <div className="md:hidden flex items-center gap-2 text-[10px] font-mono font-medium text-zinc-500 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      <span>{event.year}</span>
                      <span>•</span>
                      <span>{event.period}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-xs font-mono tracking-wide text-zinc-500 mt-0.5">
                      {event.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {event.description}
                  </p>

                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {event.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-zinc-900"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredEvents.length === 0 && (
            <div className="col-span-full text-center py-16 text-zinc-500 border border-dashed border-zinc-900 rounded-2xl ml-4">
              <span>No events match this filter.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
