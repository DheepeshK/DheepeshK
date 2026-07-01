import { useMemo, useEffect, useState } from "react";
import { motion } from "motion/react";

interface AnimatedBgProps {
  colors?: string[];
}

export default function AnimatedBg({ colors = ["#34d399", "#6366f1", "#2dd4bf"] }: AnimatedBgProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const orbs = useMemo(() => {
    const c0 = colors[0] ?? "#34d399";
    const c1 = colors[1] ?? "#6366f1";
    const c2 = colors[2] ?? "#2dd4bf";
    return [
      { x: 15, y: 10, s: 700, c: c0, d: 0 },
      { x: 60, y: 50, s: 500, c: c1, d: 8 },
      { x: 80, y: 80, s: 600, c: c2, d: 16 },
    ];
  }, [colors]);

  const dust = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      sz: Math.random() * 2 + 1,
      dr: Math.random() * 30 + 25,
      dl: Math.random() * 15,
      ci: i % 3,
    })), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: o.s,
            height: o.s,
            left: `${o.x}%`,
            top: `${o.y}%`,
            marginLeft: -o.s / 2,
            marginTop: -o.s / 2,
            background: o.c,
            opacity: 0.06 + i * 0.02,
            filter: "blur(140px)",
          }}
          animate={{
            scale: [1, 1.08, 0.96, 1],
            x: [0, 15, -10, 0],
            y: [0, -12, 10, 0],
          }}
          transition={{
            duration: 35 + i * 10,
            repeat: Infinity,
            delay: o.d,
            ease: "easeInOut",
          }}
        />
      ))}
      {dust.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: d.sz,
            height: d.sz,
            left: `${d.x}%`,
            top: `${d.y}%`,
            marginLeft: -d.sz / 2,
            marginTop: -d.sz / 2,
            background: colors[d.ci] ?? "#34d399",
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 8, 0],
            opacity: [0.1, 0.35, 0.15, 0.25, 0.1],
          }}
          transition={{
            duration: d.dr,
            repeat: Infinity,
            delay: d.dl,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
