import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Globe, Palette, Zap, FileCode2, 
  Server, Layers, Database, Share2, Cpu, 
  GitBranch, Container, Terminal, Layout, Send,
  Smartphone, Wrench
} from 'lucide-react';
import { arsenalSkills } from '../data/portfolioData';

const iconMap = {
  Code2, Globe, Palette, Zap, FileCode2,
  Server, Layers, Database, Share2, Cpu,
  GitBranch, Container, Terminal, Layout, Send,
  Smartphone, Wrench
};

export default function Arsenal({ eagleVision }) {
  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const accentBorder = eagleVision ? 'group-hover:border-cyan-400/60' : 'group-hover:border-[#ff2a55]/60';

  return (
    <section id="arsenal" className="py-28 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#ff2a55] font-bold">02.</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Arsenal <span className="text-zinc-600 font-mono text-xl">// Tactical Loadout</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {arsenalSkills.map((category, catIdx) => (
            <div key={catIdx} className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/5 pb-2">
                <h3 className="font-['Space_Grotesk'] text-lg font-semibold text-white flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${eagleVision ? 'bg-cyan-400' : 'bg-[#ff2a55]'}`} />
                  {category.category}
                </h3>
                <span className="text-xs text-zinc-400 font-sans mt-1 sm:mt-0">
                  {category.description}
                </span>
              </div>

              {/* Skill Cards Grid (NO LEVEL BADGES) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                {category.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Wrench;
                  return (
                    <motion.div
                      key={sIdx}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className={`group p-4 rounded-xl bg-[#0b0b10] border border-white/5 ${accentBorder} transition-all duration-300 relative overflow-hidden flex items-center gap-3`}
                    >
                      <div className={`p-2 rounded-lg bg-white/[0.03] ${accentColor} transition-colors shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <div className="font-['Space_Grotesk'] text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors truncate">
                        {skill.name}
                      </div>

                      {/* Subtle hover line indicator */}
                      <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${eagleVision ? 'from-cyan-400' : 'from-[#ff2a55]'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </motion.div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
