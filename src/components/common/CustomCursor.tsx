import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position & Velocity tracking
  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const haloPos = useRef({ x: -100, y: -100 });

  const currentVelocity = useRef({ x: 0, y: 0 });
  const currentAngle = useRef(0);
  const currentStretch = useRef(0);

  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const checkTouch = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(hasTouch);
    };

    checkTouch();

    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    // Hide default system cursor on desktop
    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        prevMousePos.current.x = e.clientX;
        prevMousePos.current.y = e.clientY;
        haloPos.current.x = e.clientX;
        haloPos.current.y = e.clientY;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .btn, .clickable, .editorial-project-card, .credibility-card, .skill-tag, .contact-social-pill, .nav-icon-link',
      );

      setIsHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    // Linear interpolation
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // 60/120 FPS render loop for stretching physics
    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      // 1. Calculate instant velocity delta
      const deltaX = targetX - prevMousePos.current.x;
      const deltaY = targetY - prevMousePos.current.y;

      // Smooth velocity interpolation to avoid jitter
      currentVelocity.current.x = lerp(currentVelocity.current.x, deltaX, 0.35);
      currentVelocity.current.y = lerp(currentVelocity.current.y, deltaY, 0.35);

      const vx = currentVelocity.current.x;
      const vy = currentVelocity.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);

      // Calculate direction angle when moving
      if (speed > 0.8) {
        currentAngle.current = Math.atan2(vy, vx);
      }

      // Calculate stretch factor along movement direction
      const targetStretch = Math.min(speed * 0.045, 0.75);
      currentStretch.current = lerp(
        currentStretch.current,
        targetStretch,
        0.22,
      );

      const stretch = currentStretch.current;
      const scaleX = 1 + stretch;
      const scaleY = Math.max(0.6, 1 - stretch * 0.4);

      // 2. Render Core with directional velocity stretch
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) rotate(${currentAngle.current}rad) scale(${scaleX}, ${scaleY})`;
      }

      // 3. Render Trailing Radiant Halo with momentum lag
      haloPos.current.x = lerp(haloPos.current.x, targetX, 0.16);
      haloPos.current.y = lerp(haloPos.current.y, targetY, 0.16);

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0)`;
      }

      prevMousePos.current.x = targetX;
      prevMousePos.current.y = targetY;

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      document.body.classList.remove("has-custom-cursor");
    };
  }, [isVisible]);

  if (isTouchDevice) {
    return null;
  }

  const cursorClasses = [
    "custom-cursor-root",
    isVisible ? "cursor-visible" : "cursor-hidden",
    isHovered ? "cursor-hovering" : "",
    isClicked ? "cursor-clicking" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cursorClasses} aria-hidden="true">
      {/* Soft trailing radiant halo */}
      <div ref={haloRef} className="cursor-orb-halo" />
      {/* Directional stretching luminous core bead */}
      <div ref={coreRef} className="cursor-orb-core" />
    </div>
  );
};
