import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero({ eagleVision, onSectionNavigate }) {
  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';

  const handleNavigate = (href) => {
    if (onSectionNavigate) onSectionNavigate(href);
  };

  return (
    <section className="relative min-h-screen pt-36 pb-32 sm:py-44 flex flex-col justify-center px-4 sm:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Building Resilient Code <br />
            <span className={`italic font-serif ${accentColor} transition-colors duration-500`}>
              In The Shadows.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-xl font-normal leading-relaxed max-w-3xl mb-10">
            {personalData.heroSubheadline}
          </p>
        </motion.div>

        {/* CTAs and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contracts"
            onClick={() => handleNavigate('#contracts')}
            className={`px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-white flex items-center gap-2 transition-all ${
              eagleVision
                ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,220,255,0.4)]'
                : 'bg-[#ff2a55] hover:bg-[#ff3b63] shadow-[0_0_20px_rgba(255,42,85,0.4)]'
            }`}
          >
            <span>Explore Contracts</span>
            <ArrowDownRight className="w-4 h-4" />
          </a>

          <a
            href="#transmission"
            onClick={() => handleNavigate('#transmission')}
            className="px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
          >
            <span>Initiate Transmission</span>
          </a>

          {/* Social Quick Links */}
          <div className="flex items-center gap-2 sm:ml-4 border-l border-white/10 pl-4 py-1">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-[#ff2a55]/40 transition-all"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-[#ff2a55]/40 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-400 hover:text-white hover:border-[#ff2a55]/40 transition-all"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
