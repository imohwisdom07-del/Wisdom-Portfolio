// src/components/Hero.jsx
import { useEffect } from 'react';
import './Hero.css';
import { META, CODE_SNIPPETS } from '../data/portfolioData';

export default function Hero() {
  useEffect(() => {
    const container = document.getElementById('codeLines');
    if (!container) return;
    CODE_SNIPPETS.forEach((text) => {
      const el = document.createElement('div');
      el.className = 'hero__code-line';
      el.textContent = text;
      el.style.left = (5 + Math.random() * 80) + '%';
      el.style.animationDuration = (18 + Math.random() * 14) + 's';
      el.style.animationDelay = (Math.random() * 20) + 's';
      container.appendChild(el);
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__left">
        <div className="hero__label">{META.role} — {META.location}</div>

        <div className="hero__name-wrap">
          <span className="hero__name">Imoh</span>
        </div>
        <div className="hero__name-wrap">
          <span className="hero__name hero__name--italic">Wisdom.</span>
        </div>

        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </div>

      <div className="hero__right">
        <span className="hero__num hero__num--tl">37.5°N — 126.9°E</span>
        <span className="hero__num hero__num--tr">2026</span>
        <span className="hero__num hero__num--bl">FULLSTACK</span>
        <span className="hero__num hero__num--br">V — 1.0</span>

        <div className="hero__code-rain" id="codeLines" />

        <div className="hero__visual">
          <div className="hero__rings">
            <div className="ring ring--1"><span className="ring__dot" /></div>
            <div className="ring ring--2" />
            <div className="ring ring--3" />
            <div className="ring ring--4" />
            <div className="ring__center" />
          </div>
        </div>
      </div>
    </section>
  );
}
