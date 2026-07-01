import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MemoryItem } from "../types";
import { Image, Calendar, Bookmark } from "lucide-react";

interface GalleryProps {
  galleryItems: MemoryItem[];
}

export default function Gallery({ galleryItems }: GalleryProps) {
  const [selectedCat, setSelectedCat] = useState<string>("all");

  const categories = ["all", "leadership", "Hackathons", "Seminars", "Teamwork", "Personal"];

  const filteredItems = selectedCat === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCat);

  return (
    <section id="gallery" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-teal-400 font-mono text-xs tracking-wider uppercase mb-3">
              <Image className="w-3.5 h-3.5" />
              <span>Moments</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Gallery & Memories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
            Photos and memories from events, hackathons, and campus life.
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-4 mb-10 pb-2 border-b border-zinc-900">
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer capitalize ${
                  selectedCat === cat
                    ? "bg-zinc-900 text-teal-400 border border-zinc-800"
                    : "text-zinc-500 bg-transparent border border-transparent hover:text-zinc-400"
                }`}
              >
                {cat === "all" ? "All Photos" : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative h-64 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg shadow-inner cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">

                  <div className="flex items-center justify-between text-[9px] font-mono font-medium text-teal-400">
                    <span className="flex items-center gap-1">
                      <Bookmark className="w-3 h-3" />
                      <span>{item.category}</span>
                    </span>
                    <span className="text-zinc-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-200 leading-normal font-medium line-clamp-3">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
