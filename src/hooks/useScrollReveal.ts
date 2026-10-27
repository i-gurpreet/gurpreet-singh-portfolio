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
        rootMargin: '50px 0px 50px 0px',
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return elementRef;
};
