// src/components/Loader.jsx
import { useEffect, useState } from 'react';
import './Loader.css';

const LETTERS = ['I','M','O','H',' ','W','I','S','D','O','M'];

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true);
      setTimeout(onDone, 600);
    }, 2200);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`loader ${hidden ? 'loader--hidden' : ''}`}>
      <div className="loader__name">
        {LETTERS.map((l, i) => (
          <span
            key={i}
            className="loader__letter"
            style={{ animationDelay: `${0.08 * i}s` }}
          >
            {l === ' ' ? '\u00A0' : l}
          </span>
        ))}
      </div>
      <div className="loader__bar-wrap">
        <div className="loader__bar" />
      </div>
    </div>
  );
}
