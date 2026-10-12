import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');

  const visibleCategories =
    activeCategoryId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategoryId);

  return (
    <section className="section-block section-block--alt" id="skills" aria-labelledby="skills-heading">
      <div className="container-shell">
        <div className="section-header">
          <span className="section-eyebrow">TECHNICAL CAPABILITIES</span>
          <h2 id="skills-heading" className="section-title">
            Engineering Stack &amp; Core Competencies
          </h2>
          <p className="section-subtitle">
            Production-tested tools and architectures spanning backend microservices, AI orchestration, relational &amp; NoSQL databases, and AWS cloud infrastructure.
          </p>
        </div>

        <div className="skills-filter-bar" role="group" aria-label="Filter technical skills by domain">
          <button
            type="button"
            className={`filter-pill-btn ${activeCategoryId === 'all' ? 'filter-pill-btn--active' : ''}`}
            onClick={() => setActiveCategoryId('all')}
          >
            All Domains ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((category) => {
            const isSelected = activeCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                className={`filter-pill-btn ${isSelected ? 'filter-pill-btn--active' : ''}`}
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        <div className="skills-matrix-grid">
          {visibleCategories.map((category) => {
            const originalIndex = SKILL_CATEGORIES.findIndex((c) => c.id === category.id);
            return (
              <article key={category.id} className="skill-category-card">
                <div className="skill-category-header">
                  <span className="skill-category-index">0{originalIndex + 1}</span>
                  <div>
                    <h3 className="skill-category-title">{category.title}</h3>
                    <p className="skill-category-subtitle">{category.subtitle}</p>
                  </div>
                </div>

                <div className="skill-pill-group">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge-item">
                      <TechIcon name={skill} size={14} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
