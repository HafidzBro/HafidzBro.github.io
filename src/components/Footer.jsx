import React from 'react';
import { ChevronUp, Shield } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer({ eagleVision }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';

  return (
    <footer className="border-t border-white/5 bg-[#050507] py-12 px-4 sm:px-8 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-white/[0.03] border border-white/10 ${accentColor}`}>
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="font-['Space_Grotesk'] text-sm font-bold text-white">
              {personalData.name}
            </div>
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
              Full Stack Developer · Backend Engineer · Mobile Developer
            </div>
          </div>
        </div>

        {/* Status text */}
        <div className="font-mono text-xs text-zinc-500 text-center sm:text-left">
          © {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-400 hover:text-white transition-all flex items-center gap-2 font-mono text-xs cursor-pointer"
        >
          <span>Top</span>
          <ChevronUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
