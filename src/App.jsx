import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Origins from './components/Origins';
import Arsenal from './components/Arsenal';
import Contracts from './components/Contracts';
import Codex from './components/Codex';
import Transmission from './components/Transmission';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [eagleVision, setEagleVision] = useState(false);

  return (
    <div className={`min-h-screen bg-[#070709] text-zinc-100 relative selection:bg-[#ff2a55] selection:text-white ${eagleVision ? 'eagle-vision-active' : ''}`}>
      
      {/* Akari Kanzo Style Interactive Custom Laser Crosshair Cursor */}
      <CustomCursor eagleVision={eagleVision} />

      {/* Cinematic Animus Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Interactive Background Canvas with fluid sparks */}
      <BackgroundCanvas eagleVision={eagleVision} />

      {/* Scanline Grid Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none scanline-grid opacity-35 z-0" />

      {/* Eagle Vision Scanning Laser Beam (Top) */}
      {eagleVision && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-50 animate-pulse pointer-events-none shadow-[0_0_15px_#00dcff]" />
      )}

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          eagleVision={eagleVision}
          onToggleEagleVision={() => setEagleVision(!eagleVision)}
          onReplayPreloader={() => setLoading(true)}
        />

        <main className="flex-1">
          <Hero eagleVision={eagleVision} />
          <Origins eagleVision={eagleVision} />
          <Arsenal eagleVision={eagleVision} />
          <Contracts eagleVision={eagleVision} />
          <Codex eagleVision={eagleVision} />
          <Transmission eagleVision={eagleVision} />
        </main>

        <Footer eagleVision={eagleVision} />
      </div>
    </div>
  );
}
