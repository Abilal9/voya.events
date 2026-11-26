import { journey } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section how" aria-labelledby="how-title">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow">How it works</p>
          <h2 id="how-title">Discover. Decide. Plan. Go.</h2>
          <p className="section-lede">From the first idea to the moment you’re there, Voya keeps everyone moving together.</p>
        </Reveal>
        <ol className="journey">
          {journey.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 110} className="journey-step">
              <span className="journey-num" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="journey-icon">
                <Icon name={step.icon} size={26} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
