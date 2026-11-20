import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';

const statusMessages = [
  'INITIALIZING ANIMA PROTOCOL...',
  'DECRYPTING ARCHIVAL SHADOW CODEX...',
  'CALIBRATING THREE-DIMENSIONAL HUD...',
  'SYNCHRONIZING TACTICAL ARSENAL...',
  'OPERATIVE INITIALIZED // ACCESS GRANTED'
];

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStatus, setCurrentStatus] = useState(statusMessages[0]);
  const [completed, setCompleted] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    // Lock body scrolling during preloader
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      if (completedRef.current) {
        clearInterval(interval);
        return;
      }

      let increment = Math.floor(Math.random() * 5) + 3;
      if (current > 40 && current < 65) {
        increment = 2;
      }

      current += increment;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        setCurrentStatus(statusMessages[4]);
        clearInterval(interval);

        completedRef.current = true;

        setTimeout(() => {
          setCompleted(true);
          setTimeout(() => {
            document.body.style.overflow = '';
            if (onComplete) onComplete();
          }, 600);
        }, 400);
      } else {
        setProgress(current);

        const msgIndex = Math.min(
          Math.floor((current / 100) * (statusMessages.length - 1)),
          statusMessages.length - 2
        );
        setCurrentStatus(statusMessages[msgIndex]);
      }
    }, 55);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setProgress(100);
    setCompleted(true);
    setTimeout(() => {
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: completed ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050508] text-white px-6 select-none"
      style={{ pointerEvents: completed ? 'none' : 'auto' }}
    >
      {/* Background ambient crimson glow & scanlines */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#ff2a55]/15 blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 scanline-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg flex flex-col items-center">
        
        {/* Assassin Geometric Emblem */}
        <motion.div
          animate={{
            scale: [1, 1.04, 1],
            filter: [
              'drop-shadow(0 0 15px rgba(255,42,85,0.4))',
              'drop-shadow(0 0 35px rgba(255,42,85,0.8))',
              'drop-shadow(0 0 15px rgba(255,42,85,0.4))'
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8 p-5 rounded-2xl bg-[#0b0b12] border border-[#ff2a55]/40 shadow-2xl"
        >
          <div className="w-20 h-20 flex items-center justify-center text-[#ff2a55]">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-16 h-16"
            >
              <polygon points="50,8 90,30 90,70 50,92 10,70 10,30" stroke="currentColor" strokeOpacity="0.8" />
              <polygon points="50,22 74,38 74,62 50,78 26,62 26,38" fill="rgba(255,42,85,0.15)" stroke="#ff2a55" strokeWidth="3" />
              <line x1="50" y1="8" x2="50" y2="92" stroke="#ff2a55" strokeWidth="2" strokeDasharray="6 4" />
              <circle cx="50" cy="50" r="6" fill="#ff2a55" />
            </svg>
          </div>
        </motion.div>

        {/* Brand identity (ONLY HAFIDZ KURNIA DAROJAD) */}
        <div className="text-center mb-6">
          <div className="font-mono text-xs uppercase tracking-[0.35em] text-[#ff2a55] font-bold flex items-center justify-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2a55] animate-ping" />
            <span>SYNCHRONIZING OPERATIVE HUD</span>
          </div>
          <h1 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            HAFIDZ KURNIA DAROJAD
          </h1>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#101018] h-2.5 rounded-full overflow-hidden border border-white/10 mb-4 p-[1px]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#ff2a55] via-[#ff4b72] to-[#ff2a55] rounded-full shadow-[0_0_15px_#ff2a55]"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut', duration: 0.1 }}
          />
        </div>

        {/* Status text & percentage */}
        <div className="w-full flex items-center justify-between font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2 truncate pr-2">
            <Terminal className="w-3.5 h-3.5 text-[#ff2a55] shrink-0" />
            <span className="truncate tracking-wide">{currentStatus}</span>
          </div>
          <span className="font-bold text-[#ff2a55] font-mono text-sm">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="mt-8 px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase text-zinc-400 hover:text-white border border-white/10 hover:border-[#ff2a55]/60 transition-all bg-white/[0.02] hover:bg-[#ff2a55]/10 flex items-center gap-1.5 cursor-pointer"
        >
          <span>Skip Protocol</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#ff2a55]" />
        </button>

      </div>
    </motion.div>
  );
}
