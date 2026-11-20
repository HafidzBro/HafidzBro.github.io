import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor({ eagleVision }) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect clickable elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.cursor === 'hover'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const color = eagleVision ? 'rgba(0, 220, 255, ' : 'rgba(255, 42, 85, ';

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden hidden md:block">
      {/* Center sharp laser dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          backgroundColor: eagleVision ? '#00dcff' : '#ff2a55',
          boxShadow: `0 0 8px ${eagleVision ? '#00dcff' : '#ff2a55'}`
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isClicking ? 0.6 : 1
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Outer fluid tracking crosshair ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
        style={{
          borderColor: isHovering ? `${color}0.9)` : `${color}0.4)`,
          backgroundColor: isHovering ? `${color}0.1)` : 'transparent'
        }}
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovering ? 48 : 26,
          height: isHovering ? 48 : 26,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isHovering && (
          <div
            className="w-1.5 h-1.5 rounded-full animate-ping"
            style={{ backgroundColor: eagleVision ? '#00dcff' : '#ff2a55' }}
          />
        )}
      </motion.div>
    </div>
  );
}
