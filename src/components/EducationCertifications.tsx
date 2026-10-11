import React from 'react';
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export const EducationCertifications: React.FC = () => {
  return (
    <section className="section-block" id="credentials" aria-labelledby="credentials-heading">
      <div className="container-shell">
        <div className="section-header">
          <span className="section-eyebrow">ACADEMIC FOUNDATION &amp; CREDENTIALS</span>
          <h2 id="credentials-heading" className="section-title">
            Education &amp; Professional Certifications
          </h2>
          <p className="section-subtitle">
            Strong computer science fundamentals paired with verified certifications in AWS cloud, Node.js backend development, and containerization.
          </p>
        </div>

        <div className="credentials-grid">
          {/* Education Column */}
          <div className="credentials-column">
            <h3 className="credentials-column-title">Education</h3>
            {EDUCATION_DATA.map((edu) => (
              <article key={edu.id} className="credential-card credential-card--education">
                <div className="credential-card__top">
                  <span className="credential-period">{edu.period}</span>
                  {edu.distinction && (
                    <span className="credential-distinction-badge">{edu.distinction}</span>
                  )}
                </div>

                <h4 className="credential-degree">{edu.degree}</h4>
                <div className="credential-institution">{edu.institution}</div>

                <div className="credential-score-row">
                  <span className="credential-score-pill">{edu.score}</span>
                  <span className="credential-location">{edu.location}</span>
                </div>

                <ul className="credential-details-list">
                  {edu.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="credentials-column">
            <h3 className="credentials-column-title">Certifications</h3>
            <div className="certifications-stack">
              {CERTIFICATIONS_DATA.map((cert) => (
                <article key={cert.id} className="credential-card credential-card--cert">
                  <div className="credential-card__top">
                    <span className="cert-category-pill">
                      <TechIcon name={cert.name} size={14} />
                      <span>{cert.category}</span>
                    </span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <h4 className="cert-title">{cert.name}</h4>
                  <p className="cert-description">{cert.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;


