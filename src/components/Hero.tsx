import { screens } from '../content';
import { Icon } from './Icon';
import { Phone } from './Phone';
import { StoreBadges } from './StoreBadges';

export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob blob-lavender" />
        <span className="blob blob-peach" />
      </div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-in" style={{ animationDelay: '0ms' }}>
            Trips · Hangouts · Events
          </p>
          <h1 id="hero-title" className="hero-title hero-in" style={{ animationDelay: '80ms' }}>
            Plan less.
            <br />
            <span className="accent">Live more.</span>
          </h1>
          <p className="hero-sub hero-in" style={{ animationDelay: '160ms' }}>
            Good times shouldn’t take so much planning.
          </p>
          <p className="hero-lede hero-in" style={{ animationDelay: '220ms' }}>
            From spontaneous hangouts to unforgettable trips and meaningful events, Voya brings your plans, places and
            people together — so you can get to the good part faster.
          </p>
          <div className="hero-in" style={{ animationDelay: '300ms' }}>
            <StoreBadges />
          </div>
        </div>

        <div className="hero-visual" aria-label="Voya app screens">
          <div className="hero-phones">
            <Phone screen={screens.exploreCards} className="hero-phone hero-phone-left" eager />
            <Phone screen={screens.home} className="hero-phone hero-phone-center" eager />
            <Phone screen={screens.eventInvitation} className="hero-phone hero-phone-right" eager />
            <div className="hero-chip chip-a" aria-hidden="true">
              <span className="chip-icon">
                <Icon name="check" size={16} />
              </span>
              Everyone’s in
            </div>
            <div className="hero-chip chip-b" aria-hidden="true">
              <span className="chip-icon peach">
                <Icon name="heart" size={16} />
              </span>
              Picked for you
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
