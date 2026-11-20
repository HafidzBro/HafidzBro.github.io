import React, { useEffect, useRef } from 'react';

export default function BackgroundCanvas({ eagleVision = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Persistent ambient embers
    const ambientCount = Math.min(Math.floor(width / 22), 55);
    const particles = [];

    // Interactive mouse trail sparks
    const sparkParticles = [];

    const mouse = {
      x: width / 2,
      y: height / 2,
      prevX: width / 2,
      prevY: height / 2,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Spawn interactive sparks on mouse movement
      const speed = Math.hypot(mouse.x - mouse.prevX, mouse.y - mouse.prevY);
      if (speed > 2 && sparkParticles.length < 40) {
        sparkParticles.push({
          x: mouse.x + (Math.random() - 0.5) * 15,
          y: mouse.y + (Math.random() - 0.5) * 15,
          size: Math.random() * 2.8 + 1.2,
          speedX: (Math.random() - 0.5) * 2,
          speedY: (Math.random() - 0.5) * 2 - 1.2, // upward burst
          life: 1.0,
          decay: Math.random() * 0.03 + 0.02,
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initialize Ambient Embers
    for (let i = 0; i < ambientCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.4 - 0.35, // upward ember float
        alpha: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const color = eagleVision
        ? { r: 0, g: 220, b: 255 } // Cyan Eagle Vision
        : { r: 255, g: 42, b: 85 }; // Crimson Assassin

      // 1. Draw connections between nearby ambient embers
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${lineAlpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Render & update ambient embers
      particles.forEach((p) => {
        // Gravitate slightly towards or away from cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150) {
            const force = (1 - dist / 150) * 0.6;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.85 || p.alpha < 0.2) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 0.9)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Render & update interactive mouse sparks (Akari style spark trail)
      for (let i = sparkParticles.length - 1; i >= 0; i--) {
        const s = sparkParticles[i];
        s.x += s.speedX;
        s.y += s.speedY;
        s.life -= s.decay;

        if (s.life <= 0) {
          sparkParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${s.life * 0.85})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [eagleVision]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-75 transition-opacity duration-700"
    />
  );
}
