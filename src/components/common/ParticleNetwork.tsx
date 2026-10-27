import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

interface ParticleNetworkProps {
  maxConnectedPoints?: number;
  maxDistance?: number;
  particleCount?: number;
  className?: string;
}

export const ParticleNetwork: React.FC<ParticleNetworkProps> = ({
  maxConnectedPoints = 8,
  maxDistance = 240,
  particleCount,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let particles: Particle[] = [];
    const mouse = {
      x: -9999,
      y: -9999,
      isHovering: false,
    };

    // Determine color based on active theme
    const getParticleColor = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      return isLight ? { r: 15, g: 23, b: 42 } : { r: 255, g: 255, b: 255 };
    };

    const initParticles = (width: number, height: number) => {
      // Ultra-rich starry particle field (approx 400-500 points on desktop)
      const count =
        particleCount ||
        Math.max(240, Math.min(500, Math.floor((width * height) / 2200)));
      particles = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Floating in random directions at gentle speed
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.3 + 0.6, // 0.6 to 1.9px
          baseAlpha: Math.random() * 0.55 + 0.25, // 0.25 to 0.8
        });
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      initParticles(width, height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse movement tracking relative to canvas
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        mouse.x = clientX - rect.left;
        mouse.y = clientY - rect.top;
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
      }
    };

    const onMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Main 60/120 FPS animation loop
    const render = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth || canvas.width;
      const height = parent?.clientHeight || canvas.height;
      const color = getParticleColor();

      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw all floating particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move in random directions
        p.x += p.vx;
        p.y += p.vy;

        // Wrap smoothly around edges so points continuously float
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.baseAlpha})`;
        ctx.fill();
      }

      // 2. Connect cursor with the nearest 8 points
      if (mouse.isHovering && mouse.x > 0 && mouse.y > 0) {
        // Calculate distance from cursor to every particle
        const particlesWithDist: { p: Particle; dist: number }[] = [];

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          particlesWithDist.push({ p, dist });
        }

        // Sort ascending by distance to find the nearest points
        particlesWithDist.sort((a, b) => a.dist - b.dist);

        // Take the nearest 8 points
        const nearestPoints = particlesWithDist.slice(0, maxConnectedPoints);

        for (let i = 0; i < nearestPoints.length; i++) {
          const { p, dist } = nearestPoints[i];

          if (dist <= maxDistance) {
            // Fade line opacity smoothly based on proximity
            const lineAlpha = (1 - dist / maxDistance) * 0.7;

            // Draw line connecting cursor to the point
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Accent glow at the connected point
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius + 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${Math.min(1, lineAlpha + 0.35)})`;
            ctx.fill();
          }
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    animFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [maxConnectedPoints, maxDistance, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`particle-network-canvas ${className}`}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};
