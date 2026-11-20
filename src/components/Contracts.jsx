import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, BookOpen } from 'lucide-react';
import { contractsProjects } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import TiltCard from './TiltCard';
import ScrambleText from './ScrambleText';
import ProjectDetailModal from './ProjectDetailModal';

const categories = ['All', 'Full-Stack & Mobile', 'Healthcare & Systems', 'Web & GIS Systems'];

export default function Contracts({ eagleVision }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? contractsProjects
    : contractsProjects.filter(p => p.category === activeCategory);

  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const badgeBg = eagleVision
    ? 'bg-cyan-500/10 text-cyan-300 border-cyan-400/40'
    : 'bg-[#ff2a55]/10 text-[#ff2a55] border-[#ff2a55]/40';

  return (
    <section id="contracts" className="py-28 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-[#ff2a55] font-bold">03.</span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                <ScrambleText text="Contracts" /> <span className="text-zinc-600 font-mono text-xl">// Missions Log</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm font-mono">
              [ Klik kartu proyek untuk menginspeksi Case Study teknis mendalam // Eagle Vision untuk secret intel ]
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? eagleVision
                      ? 'bg-cyan-500 text-black font-bold shadow-[0_0_12px_rgba(0,220,255,0.4)]'
                      : 'bg-[#ff2a55] text-white font-bold shadow-[0_0_12px_rgba(255,42,85,0.4)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard
                key={project.id}
                eagleVision={eagleVision}
                className={`bg-[#0b0b10] border border-white/10 transition-colors duration-300 cursor-pointer ${
                  eagleVision
                    ? 'hover:border-cyan-400/60 shadow-[0_0_20px_rgba(0,220,255,0.08)]'
                    : 'hover:border-[#ff2a55]/60 hover:shadow-[0_0_25px_rgba(255,42,85,0.12)]'
                }`}
              >
                {/* Image Banner */}
                <div 
                  onClick={() => setSelectedProject(project)}
                  className="relative h-56 sm:h-64 overflow-hidden bg-zinc-900 group"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-black/40" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`font-mono text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md border backdrop-blur-md ${badgeBg}`}>
                      {project.badge}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-black/60 text-zinc-300 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  {/* View Case Study Hint on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>Inspect Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div onClick={() => setSelectedProject(project)}>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white hover:text-[#ff2a55] transition-colors mb-2">
                      {project.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Eagle Vision Secret X-Ray Box */}
                    {eagleVision && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-3 rounded-lg bg-cyan-950/40 border border-cyan-400/40 text-cyan-200 text-xs font-mono mb-4 flex items-start gap-2 shadow-[0_0_15px_rgba(0,220,255,0.2)]"
                      >
                        <Eye className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-cyan-300 block mb-0.5">EAGLE VISION INSIGHT:</span>
                          {project.eagleVisionInsight}
                        </div>
                      </motion.div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Links Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className={`font-mono text-xs font-semibold flex items-center gap-1.5 ${accentColor} hover:underline cursor-pointer`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Inspect Case Study</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/5 transition-colors"
                      title="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </TiltCard>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        eagleVision={eagleVision}
      />
    </section>
  );
}
