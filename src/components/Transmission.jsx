import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Transmission({ eagleVision }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Open mail client with pre-filled content
    const subject = encodeURIComponent(`[INQUIRY] from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nPayload:\n${formData.message}`);
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const accentColor = eagleVision ? 'text-cyan-400' : 'text-[#ff2a55]';
  const buttonBg = eagleVision
    ? 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(0,220,255,0.4)]'
    : 'bg-[#ff2a55] hover:bg-[#ff3b63] text-white shadow-[0_0_20px_rgba(255,42,85,0.4)]';

  return (
    <section id="transmission" className="py-24 px-4 sm:px-8 relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-xs text-[#ff2a55] font-bold">05.</span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            Transmission <span className="text-zinc-600 font-mono text-xl">// Comms Uplink</span>
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4" />
        </div>

        {/* Transmission Card */}
        <div className="rounded-2xl bg-[#0b0b10] border border-white/10 p-6 sm:p-10 relative overflow-hidden">
          
          {/* Terminal Header Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/5 font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal className={`w-4 h-4 ${accentColor}`} />
              <span className="text-zinc-200 font-semibold">SECURE TRANSMISSION CONSOLE</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>TLS ENCRYPTED // PORT: 443</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field: Name */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  [ Operative / Client Identifier ]
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tech Lead / Recruiter Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                />
              </div>

              {/* Field: Email */}
              <div>
                <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                  [ Secure Return Channel (Email) ]
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
                />
              </div>

            </div>

            {/* Field: Message */}
            <div>
              <label className="block font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                [ Mission Brief / Transmission Payload ]
              </label>
              <textarea
                required
                rows={5}
                placeholder="Deskripsikan kebutuhan arsitektur sistem, tawaran proyek, atau peluang kolaborasi..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-[#ff2a55] transition-colors"
              />
            </div>

            {/* Submit Button & Direct Comms */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <button
                type="submit"
                className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${buttonBg}`}
              >
                <span>Dispatch Transmission</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              <div className="font-mono text-xs text-zinc-400 flex items-center gap-2">
                <span>Or direct uplink:</span>
                <a
                  href={`mailto:${personalData.email}`}
                  className={`hover:underline font-semibold ${accentColor}`}
                >
                  {personalData.email}
                </a>
              </div>
            </div>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transmission dispatched to mail client gateway!</span>
              </motion.div>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}
