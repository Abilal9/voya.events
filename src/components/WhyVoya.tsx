import { benefits, groupChatVsVoya } from '../content';
import { Icon } from './Icon';
import { Reveal } from './Reveal';

export function WhyVoya() {
  return (
    <section id="features" className="section why" aria-labelledby="why-title">
      <div className="container">
        <Reveal className="section-head center">
          <p className="eyebrow">Why Voya</p>
          <h2 id="why-title">More than another group chat.</h2>
          <p className="section-lede">
            Group chats are great for talking. Voya is where the talking turns into a plan everyone can see.
          </p>
        </Reveal>

        <div className="compare">
          <Reveal className="compare-card compare-before">
            <h3>The usual way</h3>
            <ul>
              {groupChatVsVoya.before.map((t) => (
                <li key={t}>
                  <span className="compare-mark">
                    <Icon name="x" size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="compare-card compare-after" delay={120}>
            <h3>With Voya</h3>
            <ul>
              {groupChatVsVoya.after.map((t) => (
                <li key={t}>
                  <span className="compare-mark">
                    <Icon name="check" size={14} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="benefits">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="benefit">
              <span className="benefit-icon">
                <Icon name={b.icon} size={24} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
