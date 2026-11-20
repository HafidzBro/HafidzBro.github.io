import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EagleTransition({ trigger, eagleVision = false, onTransitionEnd }) {
  const [isActive, setIsActive] = useState(false);
  const [flightKey, setFlightKey] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    setIsActive(true);
    setFlightKey((prev) => prev + 1);

    const timer = setTimeout(() => {
      setIsActive(false);
      if (onTransitionEnd) onTransitionEnd();
    }, 1100);

    return () => clearTimeout(timer);
  }, [trigger]);

  const glowColor = eagleVision ? '#00dcff' : '#ff2a55';
  const glowRgba = eagleVision ? 'rgba(0, 220, 255, ' : 'rgba(255, 42, 85, ';

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
          
          {/* 1. Cinematic Flash / Vignette Sweep */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.45, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent"
            style={{
              boxShadow: `inset 0 0 100px ${glowRgba}0.2)`
            }}
          />

          {/* 2. Aerodynamic Sonic Trail (Wind Slash) */}
          <motion.div
            initial={{ x: '-20vw', y: '110vh', scaleX: 0.2, opacity: 0 }}
            animate={{
              x: '120vw',
              y: '-20vh',
              scaleX: 1,
              opacity: [0, 0.8, 0],
            }}
            transition={{ duration: 0.95, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute h-1 rounded-full blur-sm"
            style={{
              width: '350px',
              backgroundColor: glowColor,
              boxShadow: `0 0 25px ${glowColor}, 0 0 50px ${glowColor}`,
              transform: 'rotate(-32deg)',
            }}
          />

          {/* 3. The Soaring Assassin Eagle */}
          <motion.div
            key={flightKey}
            initial={{
              x: '-15vw',
              y: '95vh',
              scale: 0.65,
              rotate: -20,
              opacity: 0,
            }}
            animate={{
              x: ['-15vw', '35vw', '115vw'],
              y: ['95vh', '38vh', '-15vh'],
              scale: [0.65, 1.25, 0.8],
              rotate: [-20, -10, 5],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.05,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="absolute w-44 h-44 drop-shadow-[0_0_25px_rgba(255,42,85,0.8)]"
            style={{
              filter: `drop-shadow(0 0 20px ${glowColor})`,
            }}
          >
            {/* SVG Rigged Eagle with Flapping Wings */}
            <svg
              viewBox="0 0 240 180"
              fill={glowColor}
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="eagleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="60%" stopColor={glowColor} />
                  <stop offset="100%" stopColor="#000000" />
                </linearGradient>
              </defs>

              {/* Eagle Silhouette: Body & Tail */}
              <g fill="url(#eagleGrad)">
                <polygon points="120,40 132,48 122,54 118,52" />
                <path d="M120,40 Q112,50 110,65 Q125,68 126,56 Z" />
                <path d="M110,65 Q106,95 112,125 Q128,125 125,75 Q118,65 110,65 Z" />
                <polygon points="112,125 105,160 115,152 120,165 125,152 135,160 128,125" />
              </g>

              {/* Left Wing (Animated Flap) */}
              <motion.g
                animate={{
                  rotate: [0, -14, 8, -6, 0],
                }}
                transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '110px 75px' }}
                fill="url(#eagleGrad)"
              >
                <path d="M110,75 C95,50 65,30 20,20 C45,45 65,65 75,90 C88,100 102,90 110,75 Z" />
                <path d="M20,20 C10,35 25,50 45,65 C32,50 25,38 20,20 Z" opacity="0.8" />
                <path d="M35,50 C22,65 40,78 60,88 C45,75 35,60 35,50 Z" opacity="0.6" />
              </motion.g>

              {/* Right Wing (Animated Flap) */}
              <motion.g
                animate={{
                  rotate: [0, 14, -8, 6, 0],
                }}
                transition={{ duration: 0.45, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '125px 75px' }}
                fill="url(#eagleGrad)"
              >
                <path d="M125,75 C140,50 170,30 215,20 C190,45 170,65 160,90 C147,100 133,90 125,75 Z" />
                <path d="M215,20 C225,35 210,50 190,65 C203,50 210,38 215,20 Z" opacity="0.8" />
                <path d="M200,50 C213,65 195,78 175,88 C190,75 200,60 200,50 Z" opacity="0.6" />
              </motion.g>
            </svg>

            {/* Trailing Feather Sparks */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 flex gap-1 pointer-events-none">
              <span
                className="w-2 h-2 rounded-full animate-ping opacity-75"
                style={{ backgroundColor: glowColor }}
              />
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping delay-75 opacity-60"
                style={{ backgroundColor: glowColor }}
              />
            </div>
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}

