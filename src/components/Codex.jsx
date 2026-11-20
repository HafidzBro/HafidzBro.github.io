import React from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Calendar, ArrowRight } from 'lucide-react';
import { codexTimeline } from '../data/portfolioData';

export default function Codex({ eagleVision }) {
  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const markerBg = eagleVision ? 'bg-cyan-400 shadow-[0_0_12px_#00dcff]' : 'bg-[#ff2a55] shadow-[0_0_12px_#ff2a55]';

  return (
    <section id="codex" className="py-24 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-xs text-[#ff2a55] font-bold">04.</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Codex <span className="text-zinc-600 font-mono text-xl">// Operative Journey</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {codexTimeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Marker */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full ${markerBg} border-2 border-[#070709] transition-transform group-hover:scale-125`} />

              <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/5 hover:border-white/15 transition-all">
                {/* Period Badge */}
                <div className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 mb-2 px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/5">
                  <Calendar className={`w-3 h-3 ${accentColor}`} />
                  <span>{item.period}</span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white mb-1 group-hover:text-[#ff2a55] transition-colors">
                  {item.title}
                </h3>

                <div className="font-mono text-xs text-zinc-500 mb-3">
                  {item.organization}
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
