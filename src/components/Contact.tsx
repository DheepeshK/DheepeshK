import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, ArrowRight } from "lucide-react";

interface ContactProps {
  email: string;
  secondaryEmail?: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  instagram: string;
}

export default function Contact({
  email,
  secondaryEmail,
  phone,
  address,
  github,
  linkedin,
  instagram
}: ContactProps) {
  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-zinc-900 overflow-hidden">
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
              <Send className="w-3.5 h-3.5" />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Contact
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-emerald-600 mt-4 rounded-full" />
          </div>
          <p className="max-w-xs text-zinc-500 text-xs md:text-sm mt-4 md:mt-0 leading-relaxed">
                Open to internships, collaborations, and technical conversations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4 text-left">
              <h3 className="text-lg font-bold text-white">Let's Connect</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm block">
            I'm always open to discussing new opportunities, collaborations, or interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-900 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">Email</span>
                  <a href={`mailto:${email}`} className="font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              {secondaryEmail && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-900 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">Academic Email</span>
                    <a href={`mailto:${secondaryEmail}`} className="font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                      {secondaryEmail}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3 text-sm">
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-900 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">Phone</span>
                  <a href={`tel:${phone}`} className="font-semibold text-zinc-200 hover:text-cyan-400 transition-colors">
                    {phone}
                  </a>
                </div>
              </div>

              {address && (
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-900 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block leading-none mb-1">Location</span>
                    <span className="font-semibold text-zinc-200">{address}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-zinc-900 space-y-3">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Social</span>

              <div className="flex items-center gap-4">
                {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-900 w-fit text-[11px] font-mono text-zinc-400 hover:text-white border border-zinc-900 hover:border-zinc-700 transition-all">
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
                {linkedin && (
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-900 w-fit text-[11px] font-mono text-zinc-400 hover:text-emerald-400 border border-zinc-900 hover:border-zinc-700 transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {instagram && (
                  <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 rounded bg-zinc-900 w-fit text-[11px] font-mono text-zinc-400 hover:text-rose-400 border border-zinc-900 hover:border-zinc-700 transition-all">
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 self-start">
            <div className="p-6 md:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-all hover:shadow-lg space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-emerald-400">
                  <Send className="w-3.5 h-3.5" />
                  Available for opportunities
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Get In Touch
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
                  For internships, collaborations, speaking opportunities, or technical discussions, the fastest way to connect is by email or phone.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <a
                  href={`mailto:${email}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-left hover:border-emerald-500/30 transition-all hover:shadow-lg"
                >
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                    <Mail className="w-5 h-5" />
                  </span>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">Email</p>
                  <p className="mt-2 text-sm font-semibold text-white">{email}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    Send Email
                    <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 text-left hover:border-cyan-500/30 transition-all hover:shadow-lg"
                >
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </span>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">Phone</p>
                  <p className="mt-2 text-sm font-semibold text-white">{phone}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-cyan-400">
                    Call Me
                    <ArrowRight className="w-3.5 h-3.5" />
                  </p>
                </a>
              </div>

              {secondaryEmail && (
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">Academic Email</p>
                  <a href={`mailto:${secondaryEmail}`} className="mt-2 block text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                    {secondaryEmail}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
