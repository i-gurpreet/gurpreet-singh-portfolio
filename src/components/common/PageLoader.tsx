import { useEffect } from 'react';

const MIN_MS = 900;

/** Dismisses the HTML splash once fonts/assets are ready. */
export function PageLoader() {
  useEffect(() => {
    const el = document.getElementById('page-loader');
    if (!el) return;

    const bar = el.querySelector<HTMLElement>('.page-loader__bar');
    const started = performance.now();
    let cancelled = false;

    const finish = async () => {
      await Promise.all([
        document.fonts?.ready ?? Promise.resolve(),
        new Promise<void>((resolve) => {
          if (document.readyState === 'complete') resolve();
          else window.addEventListener('load', () => resolve(), { once: true });
        }),
      ]);

      const wait = Math.max(0, MIN_MS - (performance.now() - started));
      if (wait) await new Promise((r) => setTimeout(r, wait));
      if (cancelled) return;

      if (bar) bar.style.width = '100%';
      el.classList.add('is-done');
      document.documentElement.classList.remove('is-loading');

      const remove = () => el.remove();
      el.addEventListener('transitionend', remove, { once: true });
      // ponytail: transitionend can miss if tab was backgrounded
      window.setTimeout(remove, 700);
    };

    void finish();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
