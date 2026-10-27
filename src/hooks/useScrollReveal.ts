import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.05) => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add('is-revealed');
          observer.unobserve(target);
        }
      },
      {
        threshold,
        // Start fade-in before the section fully enters — less blank mid-page feel
        rootMargin: '200px 0px 200px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return elementRef;
};
