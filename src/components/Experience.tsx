import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const Experience: React.FC = () => {
  const [selectedStageIndex, setSelectedStageIndex] = useState<number | null>(null);

  return (
    <section className="section-block section-block--alt" id="experience" aria-labelledby="experience-heading">
      <div className="container-shell">
        <div className="section-header">
          <span className="section-eyebrow">CAREER JOURNEY &amp; PROGRESSION</span>
          <h2 id="experience-heading" className="section-title">
            Engineering Journey at CentraLogic
          </h2>
          <p className="section-subtitle">
            Progression across full-stack web applications, database optimization, cloud-native document automation, and deterministic AI agent systems.
          </p>
        </div>

        <div className="experience-list">
          {EXPERIENCE_DATA.map((entry) => {
            const visibleHighlights =
              selectedStageIndex === null
                ? entry.highlights
                : entry.highlights.filter((_, i) => i === selectedStageIndex);

            return (
              <article key={entry.id} className="experience-card">
                <div className="experience-card__top">
                  <div className="experience-header-main">
                    <div className="experience-role-row">
                      <h3 className="experience-role">{entry.role}</h3>
                      <span className="experience-status-badge">Current Role</span>
                    </div>
                    <div className="experience-company-row">
                      <span className="experience-company">{entry.company}</span>
                      <span className="experience-divider" aria-hidden="true">|</span>
                      <span className="experience-period">{entry.period}</span>
                      <span className="experience-divider" aria-hidden="true">|</span>
                      <span className="experience-location">{entry.location}</span>
                    </div>
                  </div>
                  <div className="experience-type-pill">{entry.employmentType}</div>
                </div>

                <div className="experience-intro-block">
                  <p className="experience-summary">{entry.summary}</p>
                  <div className="experience-pillars-header">
                    <span className="experience-pillars-caption">
                      Interactive Career Tracks (Click a track to focus or view all stages):
                    </span>
                    {selectedStageIndex !== null && (
                      <button
                        type="button"
                        className="btn-reset-stages"
                        onClick={() => setSelectedStageIndex(null)}
                      >
                        Show All 4 Stages
                      </button>
                    )}
                  </div>
                  <div className="experience-pillars-grid" role="group" aria-label="Filter career journey stages">
                    {entry.keyPillars.map((pillar, idx) => {
                      const isActive = selectedStageIndex === idx;
                      return (
                        <button
                          key={pillar}
                          type="button"
                          className={`experience-pillar-item experience-pillar-item--btn ${
                            isActive ? 'experience-pillar-item--active' : ''
                          }`}
                          onClick={() =>
                            setSelectedStageIndex((prev) => (prev === idx ? null : idx))
                          }
                        >
                          <span className="experience-pillar-num">0{idx + 1}</span>
                          <span className="experience-pillar-text">{pillar}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="journey-timeline" role="list" aria-label="Career progression stages at CentraLogic">
                  {visibleHighlights.map((item, idx) => {
                    const stageNumber =
                      selectedStageIndex !== null ? selectedStageIndex + 1 : idx + 1;
                    return (
                      <div key={item.phase} className="journey-timeline-item" role="listitem">
                        <div className="journey-timeline-rail" aria-hidden="true">
                          <span className="journey-node-badge">0{stageNumber}</span>
                          {idx < visibleHighlights.length - 1 && (
                            <span className="journey-connector-line" />
                          )}
                        </div>

                        <div className="journey-stage-card">
                          <div className="journey-stage-header">
                            <div className="journey-stage-meta">
                              <span className="journey-phase-pill">{item.phase}</span>
                              <span className="journey-period-text">{item.period}</span>
                            </div>
                            <span className="exp-highlight-domain">{item.domain}</span>
                          </div>

                          <h4 className="exp-highlight-title">{item.title}</h4>
                          <p className="exp-highlight-desc">{item.description}</p>

                          <ul className="journey-bullet-list">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>

                          <div className="exp-highlight-tags">
                            {item.technologies.map((tech) => (
                              <span key={tech} className="tech-chip tech-chip--subtle tech-chip--with-icon">
                                <TechIcon name={tech} size={13} />
                                <span>{tech}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="experience-footer">
                  <div className="experience-stack-label">
                    Core Production Stack at {entry.company}:
                  </div>
                  <div className="experience-stack-pills">
                    {entry.coreStack.map((tech) => (
                      <span key={tech} className="tech-chip tech-chip--with-icon">
                        <TechIcon name={tech} size={14} />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
