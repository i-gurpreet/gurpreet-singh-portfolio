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

    let animFrameId = 0;
    let particles: Particle[] = [];
    let isVisible = true;
    let isRunning = false;
    const mouse = {
      x: -9999,
      y: -9999,
      isHovering: false,
    };

    const getParticleColor = () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      return isLight ? { r: 15, g: 23, b: 42 } : { r: 255, g: 255, b: 255 };
    };

    const resolveCount = (width: number) => {
      if (particleCount != null) return particleCount;
      // ponytail: keep canvas cheap; bump if visual density feels thin
      return width < 768 ? 60 : 120;
    };

    const initParticles = (width: number, height: number) => {
      const count = resolveCount(width);
      particles = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 1.3 + 0.6,
          baseAlpha: Math.random() * 0.55 + 0.25,
        });
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
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

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) return;
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

    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }

      const parent = canvas.parentElement;
      const width = parent?.clientWidth || canvas.width;
      const height = parent?.clientHeight || canvas.height;
      const color = getParticleColor();

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${p.baseAlpha})`;
        ctx.fill();
      }

      if (mouse.isHovering && mouse.x > 0 && mouse.y > 0) {
        // ponytail: O(n log n) nearest-N; fine at ~120 particles — spatial hash if count climbs again
        const particlesWithDist: { p: Particle; dist: number }[] = [];

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          particlesWithDist.push({ p, dist: Math.sqrt(dx * dx + dy * dy) });
        }

        particlesWithDist.sort((a, b) => a.dist - b.dist);
        const nearestPoints = particlesWithDist.slice(0, maxConnectedPoints);

        for (let i = 0; i < nearestPoints.length; i++) {
          const { p, dist } = nearestPoints[i];
          if (dist > maxDistance) continue;

          const lineAlpha = (1 - dist / maxDistance) * 0.7;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${lineAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${Math.min(1, lineAlpha + 0.35)})`;
          ctx.fill();
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (isRunning || !isVisible) return;
      isRunning = true;
      animFrameId = requestAnimationFrame(render);
    };

    const stopLoop = () => {
      isRunning = false;
      cancelAnimationFrame(animFrameId);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) startLoop();
        else stopLoop();
      },
      { rootMargin: '40px 0px' }
    );
    visibilityObserver.observe(canvas);
    startLoop();

    return () => {
      stopLoop();
      visibilityObserver.disconnect();
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
