import { useCallback, useEffect, useRef, useState } from 'react';
import { showcase } from '../content';
import { Icon } from './Icon';
import { Phone } from './Phone';
import { Reveal } from './Reveal';

export function Showcase() {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('.showcase-card');
    const step = card ? card.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0') : el.clientWidth * 0.8;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="showcase" className="section showcase" aria-labelledby="showcase-title">
      <div className="container showcase-head">
        <Reveal className="section-head">
          <p className="eyebrow">Inside the app</p>
          <h2 id="showcase-title">Designed to feel effortless.</h2>
          <p className="section-lede">A closer look at Voya — warm, calm and built around the people you plan with.</p>
        </Reveal>
        <div className="showcase-controls">
          <button type="button" className="round-btn" onClick={() => scrollBy(-1)} disabled={atStart} aria-label="Previous screens" aria-controls="showcase-track">
            <Icon name="chevronLeft" />
          </button>
          <button type="button" className="round-btn" onClick={() => scrollBy(1)} disabled={atEnd} aria-label="Next screens" aria-controls="showcase-track">
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
      <ul
        id="showcase-track"
        ref={track}
        className="showcase-track"
        tabIndex={0}
        aria-label="Voya app screens, scroll horizontally"
      >
        {showcase.map((item) => (
          <li key={item.title} className="showcase-card">
            <Phone screen={item.screen} />
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
