// src/components/Footer.jsx
import './Footer.css';
import { useReveal } from '../hooks/useReveal';
import { META } from '../data/portfolioData';

export default function Footer() {
  const cta   = useReveal();
  const right = useReveal();

  return (
    <footer className="footer">
      <div className="footer__watermark">Wisdom.</div>

      <div className="footer__main">
        <h2
          ref={cta.ref}
          className={`footer__cta-title reveal ${cta.visible ? 'visible' : ''}`}
        >
          Let's build<br /><em>something.</em>
        </h2>

        <div
          ref={right.ref}
          className={`footer__right reveal ${right.visible ? 'visible' : ''}`}
        >
          <p className="footer__desc">
            Open to fullstack roles, freelance projects,
            and remote opportunities worldwide.
          </p>
          <div className="footer__socials">
            <a href={META.github}   target="_blank" rel="noreferrer" className="footer__social">
              GitHub — <em>{META.alias}</em>
            </a>
            <a href={META.linkedin} target="_blank" rel="noreferrer" className="footer__social">
              LinkedIn — Imoh Wisdom
            </a>
            <a href={META.vestige}  target="_blank" rel="noreferrer" className="footer__social">
              Vestige — Live Project
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__copy">
          Built by <strong>Imoh Wisdom</strong> / {META.alias} on GitHub
        </div>
        <a href={`mailto:${META.email}`} className="footer__email">
          {META.email}
        </a>
        <div className="footer__copy">©2026 — All rights reserved</div>
      </div>
    </footer>
  );
}
