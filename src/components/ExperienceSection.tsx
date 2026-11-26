import type { Experience } from '../content';
import { Icon } from './Icon';
import { Phone } from './Phone';
import { Reveal } from './Reveal';

export function ExperienceSection({ exp, reverse = false }: { exp: Experience; reverse?: boolean }) {
  const [back, front, side] = exp.screens;
  return (
    <section id={exp.id} className={`experience exp-${exp.id}`} aria-labelledby={`${exp.id}-title`}>
      <div className={`container exp-grid ${reverse ? 'is-reverse' : ''}`}>
        <div className="exp-copy">
          <Reveal>
            <p className="eyebrow">{exp.eyebrow}</p>
            <h2 id={`${exp.id}-title`}>{exp.title}</h2>
            <p className="section-lede">{exp.intro}</p>
          </Reveal>
          <ul className="exp-features">
            {exp.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 70} className="exp-feature">
                <span className="exp-feature-icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <span>
                  <strong>{f.title}</strong>
                  <span>{f.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="exp-visual">
          <div className="exp-stage" aria-hidden="true" />
          <Phone screen={back} className="exp-phone exp-phone-back" />
          <Phone screen={front} className="exp-phone exp-phone-front" />
          <Phone screen={side} className="exp-phone exp-phone-side" />
        </Reveal>
      </div>
    </section>
  );
}
