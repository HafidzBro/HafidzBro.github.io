import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, ShieldCheck, Terminal, Cpu, 
  CheckCircle2, AlertCircle, ArrowUpRight, Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetailModal({ project, isOpen, onClose, eagleVision }) {
  if (!isOpen || !project) return null;

  const cs = project.caseStudy || {};
  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const badgeBorder = eagleVision ? 'border-cyan-400/50' : 'border-[#ff2a55]/50';
  const glowShadow = eagleVision
    ? 'shadow-[0_0_35px_rgba(0,220,255,0.25)]'
    : 'shadow-[0_0_35px_rgba(255,42,85,0.25)]';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#09090e] border border-white/10 ${glowShadow} text-zinc-100 z-10 p-6 sm:p-8 space-y-6 scanline-grid`}
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5 font-mono text-xs">
                <span className={`px-2 py-0.5 rounded border ${badgeBorder} ${accentColor} font-bold uppercase tracking-wider text-[10px]`}>
                  {project.badge}
                </span>
                <span className="text-zinc-500 font-normal">
                  // {project.category}
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {project.title}
              </h2>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer shrink-0"
              title="Close Dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Screenshot / Image Banner */}
          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden border border-white/5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-80" />
            
            {/* Eagle Vision Tactical Overlay */}
            {eagleVision && (
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-cyan-950/80 border border-cyan-400/50 text-cyan-200 font-mono text-xs backdrop-blur-md">
                <span className="font-bold text-cyan-300 block mb-0.5">EAGLE VISION INTEL:</span>
                {project.eagleVisionInsight}
              </div>
            )}
          </div>

          {/* 1. Project Overview */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
              <Terminal className={`w-3.5 h-3.5 ${accentColor}`} />
              <span>Project Overview</span>
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 2. Problem Statement */}
          {cs.problemStatement && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {cs.problemStatement}
              </p>
            </div>
          )}

          {/* 3. My Role & Responsibilities */}
          {cs.roleAndResponsibilities && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <ShieldCheck className={`w-3.5 h-3.5 ${accentColor}`} />
                <span>My Role & Responsibilities</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {cs.roleAndResponsibilities}
              </p>
            </div>
          )}

          {/* 4. Technical Architecture */}
          {cs.technicalArchitecture && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                <Cpu className={`w-3.5 h-3.5 ${accentColor}`} />
                <span>Technical Architecture</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {cs.technicalArchitecture}
              </p>
            </div>
          )}

          {/* 5. Key Features */}
          {cs.keyFeatures && cs.keyFeatures.length > 0 && (
            <div>
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className={`w-3.5 h-3.5 ${accentColor}`} />
                <span>Key Features & Engineering Highlights</span>
              </h3>
              <ul className="space-y-2">
                {cs.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${eagleVision ? 'bg-cyan-400' : 'bg-[#ff2a55]'} mt-2 shrink-0`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 6. Challenges & Solutions */}
          {cs.challengesAndSolutions && (
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Engineering Challenges & Solutions</span>
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {cs.challengesAndSolutions}
              </p>
            </div>
          )}

          {/* 7. Technology Stack Badges */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-zinc-200 border border-white/10 font-mono text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 transition-colors font-mono text-xs flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              ) : (
                <span className="font-mono text-xs text-zinc-500 italic">
                  [ Private Repo / Academic Protected ]
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 ${
                    eagleVision
                      ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                      : 'bg-[#ff2a55] text-white hover:bg-[#ff3b63]'
                  }`}
                >
                  <span>Live Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="font-mono text-xs text-zinc-500">
                  [ Deployment: On-Premise / Internal Network ]
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-mono text-xs text-zinc-400 hover:text-white transition-colors"
            >
              Close Dossier [Esc]
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
