// src/components/Projects.jsx
import './Projects.css';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS } from '../data/portfolioData';

function ProjectArt({ type }) {
  if (type === 'vestige') return (
    <div className="pc-visual art-vestige">
      <div className="pv-art">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="rgba(184,149,106,0.2)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="140" stroke="rgba(184,149,106,0.3)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="100" stroke="rgba(184,149,106,0.4)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="60"  stroke="rgba(184,149,106,0.6)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="4"   fill="rgba(184,149,106,0.9)"/>
          <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(184,149,106,0.1)" strokeWidth="1"/>
          <line x1="20"  y1="200" x2="380" y2="200" stroke="rgba(184,149,106,0.1)" strokeWidth="1"/>
        </svg>
      </div>
      <span className="art-label">E-Commerce System</span>
    </div>
  );

  if (type === 'p2') return (
    <div className="pc-visual art-p2">
      <div className="pv-art pv-art--text">API</div>
      <span className="art-label">Backend System</span>
    </div>
  );

  if (type === 'p3') return (
    <div className="pc-visual art-p3">
      <span className="art-label">Realtime System</span>
    </div>
  );

  return (
    <div className="pc-visual art-p4">
      <span className="art-label">Automation System</span>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const { ref, visible } = useReveal();
  const isEven = index % 2 === 0;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
      className={`project-card reveal ${visible ? 'visible' : ''}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {!isEven && <ProjectArt type={project.art} />}

      <div className="pc-info">
        <div className="pc-num">{project.id} / 00{index + 1 > 9 ? '' : '0'}{PROJECTS.length}</div>
        <div>
          <div className="pc-name">
            {project.name}<br />
            <em>{project.sub}</em>
          </div>
          <div className="pc-bottom">
            <div className="pc-tags">
              {project.featured && <span className="pc-tag pc-tag--featured">★ Featured</span>}
              {project.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
              <span className="pc-tag">{project.year}</span>
            </div>
            <div className="pc-arrow">↗</div>
          </div>
        </div>
      </div>

      {isEven && <ProjectArt type={project.art} />}
    </a>
  );
}

export default function Projects() {
  const head = useReveal();

  return (
    <section className="projects" id="projects">
      <div
        ref={head.ref}
        className={`projects__head reveal ${head.visible ? 'visible' : ''}`}
      >
        <h2 className="projects__title">Selected<br /><em>Work.</em></h2>
        <div className="projects__meta">
          0{PROJECTS.length} Projects<br />
          2024 — 2026<br />
          Hand Selected
        </div>
      </div>

      {PROJECTS.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} />
      ))}
    </section>
  );
}
