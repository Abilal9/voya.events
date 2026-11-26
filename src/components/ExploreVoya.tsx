import { pillars } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function ExploreVoya() {
  return (
    <section id="explore" className="section explore" aria-labelledby="explore-title">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow">Explore Voya</p>
          <h2 id="explore-title">One app for the plans you actually want to make.</h2>
          <p className="section-lede">
            Big adventures, little get-togethers and the days that matter most. Different plans, the same simple
            feeling.
          </p>
        </Reveal>
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className={`pillar tone-${p.tone}`}>
              <a href={`#${p.id}`} className="pillar-link">
                <span className="pillar-icon">
                  <Icon name={p.icon} size={26} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.line}</p>
                <span className="pillar-more">
                  See how <Icon name="arrowRight" size={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
