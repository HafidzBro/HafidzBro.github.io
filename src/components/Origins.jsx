import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Compass } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Origins({ eagleVision }) {
  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const barGradient = eagleVision
    ? 'from-cyan-500 to-cyan-300'
    : 'from-[#ff2a55] to-[#ff6b8b]';
  const badgeBorder = eagleVision ? 'border-cyan-400/40' : 'border-[#ff2a55]/40';

  return (
    <section id="origins" className="py-28 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#ff2a55] font-bold">01.</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Origins <span className="text-zinc-600 font-mono text-xl">// Dossier</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Story / Bio & Creed */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0b10] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <Shield className="w-32 h-32 text-white" />
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 uppercase tracking-widest mb-4">
                <Compass className={`w-3.5 h-3.5 ${accentColor}`} />
                <span>Operative Philosophy</span>
              </div>

              <blockquote className={`border-l-2 ${eagleVision ? 'border-cyan-400' : 'border-[#ff2a55]'} pl-4 italic text-zinc-200 text-base sm:text-lg mb-6 font-serif`}>
                "{personalData.creed}"
              </blockquote>

              <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Seorang Full Stack Developer yang berfokus pada perancangan arsitektur backend berkinerja tinggi, keamanan sistem, dan pengalaman pengguna yang responsif. Memadukan ketelitian logika server (<span className="text-white font-medium">ASP.NET Core, PostgreSQL, Docker</span>) dengan kelincahan pengembangan antarmuka lintas platform (<span className="text-white font-medium">React, TypeScript, Flutter</span>).
                </p>
                <p>
                  Bagi saya, setiap baris kode bukan sekadar sintaks, melainkan kontrak kinerja: harus terstruktur, teruji keandalannya, dan siap menghadapi skala komputasi di dunia nyata.
                </p>
              </div>

              {/* Dossier Quick Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5 font-mono text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase">BASE SECTOR:</span>
                  <span className="text-zinc-200 font-semibold">{personalData.baseSector}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase">AFFILIATION:</span>
                  <span className="text-zinc-200 font-semibold">{personalData.affiliation}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase">AVAILABILITY:</span>
                  <span className="text-emerald-400 font-semibold">{personalData.availability}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Attribute / Stat Matrix */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0b0b10] border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                  <Target className={`w-3.5 h-3.5 ${accentColor}`} />
                  Character Attribute Matrix
                </span>
                <span className={`font-mono text-[11px] px-2 py-0.5 rounded border ${badgeBorder} ${accentColor} bg-white/[0.02]`}>
                  STAT PROFILE
                </span>
              </div>

              <div className="space-y-5">
                {personalData.stats.map((stat, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between text-xs font-mono mb-1.5">
                      <span className="text-zinc-200 font-medium">{stat.label}</span>
                      <span className={`${accentColor} font-bold`}>{stat.value}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full bg-[#15151f] h-2 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${barGradient} rounded-full`}
                      />
                    </div>
                    <span className="text-[11px] text-zinc-400 font-sans mt-1 block">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
