import { useEffect, useState } from 'react';
import logo from '../assets/brand/voya-logo.svg';
import { navLinks } from '../content';
import { Icon } from './Icon';

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <nav className="nav container" aria-label="Main">
        <a className="nav-logo" href="#home" aria-label="Voya — back to top">
          <img src={logo} alt="Voya" width={112} height={29} />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? 'x' : 'menu'} size={24} />
        </button>
        <div id="nav-menu" className="nav-menu">
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary nav-cta" href="#download" onClick={() => setOpen(false)}>
            Get the app
          </a>
        </div>
      </nav>
    </header>
  );
}
