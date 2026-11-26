import logo from '../assets/brand/voya-logo-cream.svg';
import { liveStoreUrl, storeConfig } from '../config/stores';
import { navLinks, supportEmail } from '../content';

function StoreStatus({ id, label }: { id: 'appStore' | 'googlePlay'; label: string }) {
  const url = liveStoreUrl(id);
  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  ) : (
    <span className="footer-muted">
      {label} <span className="footer-soon">Coming soon</span>
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="Voya" width={128} height={33} />
          <p>Plan less. Live more.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="footer-title">Explore</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="footer-title">Get the app</h2>
          <ul>
            <li>
              <StoreStatus id="appStore" label="App Store" />
            </li>
            <li>
              <StoreStatus id="googlePlay" label="Google Play" />
            </li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Contact</h2>
          <ul>
            <li>
              <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} Voya. All rights reserved.</p>
        {!liveStoreUrl('appStore') && !liveStoreUrl('googlePlay') && <p>{storeConfig.launchStatusText}</p>}
      </div>
    </footer>
  );
}
