import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Shield, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Origins', href: '#origins' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Contracts', href: '#contracts' },
  { label: 'Codex', href: '#codex' },
  { label: 'Transmission', href: '#transmission' },
];

export default function Navbar({ eagleVision, onToggleEagleVision, onSectionNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    if (onSectionNavigate) {
      onSectionNavigate(href);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#09090d]/90 backdrop-blur-md border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
            : 'bg-[#09090d]/50 backdrop-blur-sm border-white/5'
        }`}
      >
        {/* Brand / Logo (Clean: Hafidz) */}
        <a
          href="#"
          onClick={() => handleNavClick('#')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
              eagleVision
                ? 'bg-cyan-500/15 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,220,255,0.5)]'
                : 'bg-[#ff2a55]/10 border-[#ff2a55]/50 text-[#ff2a55] group-hover:border-[#ff2a55] shadow-[0_0_15px_rgba(255,42,85,0.35)]'
            }`}
          >
            <Shield className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] font-bold text-sm tracking-wider text-white">
              HAFIDZ
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              ONLINE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links (WITHOUT NUMBERS) */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Right side controls: Eagle Vision only */}
        <div className="flex items-center gap-2">
          {/* Eagle Vision Toggle */}
          <button
            onClick={onToggleEagleVision}
            title={eagleVision ? 'Deactivate Eagle Vision' : 'Activate Eagle Vision (Tactical Mode)'}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
              eagleVision
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_18px_rgba(0,220,255,0.5)] animate-pulse'
                : 'bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:border-white/20'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">
              {eagleVision ? 'EAGLE VISION [ON]' : 'EAGLE VISION'}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-6xl mx-auto rounded-xl bg-[#09090d]/98 backdrop-blur-xl border border-white/10 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2.5 rounded-lg text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-zinc-500 text-xs font-mono">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
