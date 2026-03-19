// src/components/Skills.jsx
import './Skills.css';
import { useReveal } from '../hooks/useReveal';
import { SKILLS } from '../data/portfolioData';

function SkillColumn({ category, items, delay }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-col reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="sk-col-title">{category}</div>
      <div className="sk-list">
        {items.map((sk) => (
          <div key={sk.name} className="sk-item">
            <span className="sk-name">{sk.name}</span>
            <span className="sk-level">{sk.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const header = useReveal();
  const intro  = useReveal();

  return (
    <section className="skills" id="skills">
      <div className="skills__header">
        <h2
          ref={header.ref}
          className={`skills__title reveal ${header.visible ? 'visible' : ''}`}
        >
          Tech<br /><em>Stack.</em>
        </h2>
        <p
          ref={intro.ref}
          className={`skills__intro reveal ${intro.visible ? 'visible' : ''}`}
        >
          "Tools I actually know and use — built and proven across three live projects."
        </p>
      </div>

      <div className="skills__cols">
        {SKILLS.map((group, i) => (
          <SkillColumn
            key={group.category}
            category={group.category}
            items={group.items}
            delay={`${i * 0.15}s`}
          />
        ))}
      </div>
    </section>
  );
}
