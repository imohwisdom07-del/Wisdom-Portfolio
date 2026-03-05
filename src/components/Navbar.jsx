// src/components/Navbar.jsx
import './Navbar.css';
import { META } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {META.name}
        <span className="navbar__alias"> · aka. {META.alias}</span>
      </div>
      <ul className="navbar__links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#skills">Stack</a></li>
      </ul>
    </nav>
  );
}
