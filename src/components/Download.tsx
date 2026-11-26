import emblem from '../assets/brand/voya-emblem-cream.svg';
import { screens } from '../content';
import { Phone } from './Phone';
import { Reveal } from './Reveal';
import { StoreBadges } from './StoreBadges';

export function Download() {
  return (
    <section id="download" className="section download" aria-labelledby="download-title">
      <div className="container">
        <Reveal className="download-card">
          <img className="download-emblem" src={emblem} alt="" aria-hidden="true" />
          <div className="download-copy">
            <p className="eyebrow">Get Voya</p>
            <h2 id="download-title">Your next great memory starts here.</h2>
            <p className="section-lede">Discover more. Plan together. Live fully.</p>
            <StoreBadges />
          </div>
          <div className="download-visual" aria-hidden="true">
            <Phone screen={screens.eventRsvp} className="download-phone" decorative />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
