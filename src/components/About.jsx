// src/components/About.jsx
import './About.css';
import { useReveal } from '../hooks/useReveal';
import { META, STATS } from '../data/portfolioData';

export default function About() {
  const title = useReveal();
  const quote = useReveal();
  const body  = useReveal();
  const grid  = useReveal();

  return (
    <section className="about" id="about">
      <div
        ref={title.ref}
        className={`about__sidebar reveal ${title.visible ? 'visible' : ''}`}
      >
        <div className="section-tag">About</div>
        <h2 className="about__sidebar-title">
          Who<br /><em>I am.</em>
        </h2>

        {/* Terminal block with both identities */}
        <div className="about__terminal">
          <div className="about__terminal-line">
            <span className="t-prompt">▶</span>
            <span className="t-cmd">whoami</span>
          </div>
          <div className="about__terminal-line">
            <span className="t-out">imoh wisdom</span>
          </div>
          <div className="about__terminal-line">
            <span className="t-prompt">▶</span>
            <span className="t-cmd">alias</span>
          </div>
          <div className="about__terminal-line">
            <span className="t-out t-accent">davaboi</span>
          </div>
          <div className="about__terminal-line">
            <span className="t-prompt">▶</span>
            <span className="t-cmd">status</span>
          </div>
          <div className="about__terminal-line">
            <span className="t-out">open_to_work=true <span className="t-cursor" /></span>
          </div>
        </div>
      </div>

      <div className="about__main">
        <p
          ref={quote.ref}
          className={`about__quote reveal ${quote.visible ? 'visible' : ''}`}
        >
          "I build things that are <em>fast, precise,</em> and impossible to ignore."
        </p>

        <div
          ref={body.ref}
          className={`reveal ${body.visible ? 'visible' : ''}`}
        >
          <p className="about__body">
            A frontend developer based remotely — building polished, well-crafted
            web applications using React.js, JavaScript, and CSS. I care about
            how things look, how they feel, and how users experience them.
          </p>
          <p className="about__body">
            VESTIGE and E-Max Trade are two of my own products — a luxury
            e-commerce platform and a full-featured crypto merchant trading
            platform, both built entirely by me and live in production.
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`about__grid reveal ${grid.visible ? 'visible' : ''}`}
        >
          {STATS.map((s) => (
            <div key={s.label} className="about__cell">
              <div className="about__cell-val">{s.value}</div>
              <div className="about__cell-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
