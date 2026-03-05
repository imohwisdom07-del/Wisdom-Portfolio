// src/components/Cursor.jsx
import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const onMove = (e) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dotRef.current.style.left = e.clientX + 'px';
      dotRef.current.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    let raf;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.09;
      ry.current += (my.current - ry.current) * 0.09;
      ringRef.current.style.left = rx.current + 'px';
      ringRef.current.style.top  = ry.current + 'px';
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const addHover = () => document.body.classList.add('cur-hover');
    const rmHover  = () => document.body.classList.remove('cur-hover');
    const targets  = document.querySelectorAll('a, button, .project-card, .sk-item');
    targets.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', rmHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', rmHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cur-dot"  />
      <div ref={ringRef} className="cur-ring" />
    </>
  );
}
