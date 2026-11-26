import { useEffect } from 'react';

/**
 * In-page section links (href="#id") scroll to their section without adding
 * a fragment to the URL. Scrolling follows the CSS `scroll-behavior` (smooth,
 * or instant under prefers-reduced-motion) and `scroll-padding-top`, and focus
 * moves to the target so keyboard and screen-reader users continue from there.
 */
export function useSectionNavigation() {
  useEffect(() => {
    const goTo = (target: HTMLElement) => {
      if (target.id === 'home') window.scrollTo({ top: 0 });
      else target.scrollIntoView({ block: 'start' });

      if (!target.hasAttribute('tabindex')) {
        target.setAttribute('tabindex', '-1');
        target.classList.add('nav-focus-target');
        target.addEventListener(
          'blur',
          () => {
            target.removeAttribute('tabindex');
            target.classList.remove('nav-focus-target');
          },
          { once: true },
        );
      }
      target.focus({ preventScroll: true });
    };

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = link?.getAttribute('href')?.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!target) return;
      e.preventDefault();
      goTo(target);
    };

    // Clean up a fragment already in the address bar (e.g. an old shared link).
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      history.replaceState(history.state, '', location.pathname + location.search);
      if (target) target.scrollIntoView({ block: 'start' });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
