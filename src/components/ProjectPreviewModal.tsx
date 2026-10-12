import React, { useEffect, useRef } from 'react';
import { ProjectItem } from '../types/portfolio';
import { resolveAssetUrl, shouldShowConceptCaption } from '../data/projects';
import { getStatusBadgeClass } from './ProjectCard';
import { TechIcon } from './TechIcon';

interface ProjectPreviewModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const imageSrc = resolveAssetUrl(project.previewImage);
  const showCaption = shouldShowConceptCaption(project.status);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveDemoUrl = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

  return (
    <div
      className="modal-backdrop-layer"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={`concept-modal concept-modal--${project.accentColor}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${project.id}`}
        aria-describedby={`modal-desc-${project.id}`}
      >
        {/* Modal Header */}
        <div className="concept-modal__header">
          <div className="concept-modal__title-group">
            <div className="concept-modal__badges">
              <span className="project-number-pill">Project {project.projectNumber}</span>
              <span className="modal-category-pill">{project.category}</span>
              <span className={getStatusBadgeClass(project.status)}>
                <span className="status-indicator-dot" aria-hidden="true" />
                <span>{project.status}</span>
              </span>
            </div>
            <h2 id={`modal-title-${project.id}`} className="concept-modal__title">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="concept-modal__close"
            onClick={onClose}
            aria-label="Close project concept preview"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="concept-modal__content">
          {showCaption && project.conceptCaption && (
            <div className="modal-concept-notice">
              <span className="modal-concept-notice__badge">TRANSPARENCY NOTE</span>
              <span>
                {project.conceptCaption} All data shown in the application preview below is synthetic.
              </span>
            </div>
          )}

          {/* High-Resolution Screenshot Showcase */}
          <div className="concept-modal__screenshot-box">
            <img
              src={imageSrc}
              alt={`${project.title} full dashboard concept preview`}
              className="concept-modal__screenshot"
            />
          </div>

          {/* Details Grid */}
          <div className="concept-modal__details-grid">
            <div className="concept-modal__col-main">
              <h3 className="modal-section-heading">Project Overview</h3>
              <p id={`modal-desc-${project.id}`} className="modal-body-text">
                {project.description}
              </p>

              <h3 className="modal-section-heading modal-section-heading--spaced">
                Architectural Blueprint
              </h3>
              <p className="modal-body-text">{project.architectureSummary}</p>

              <h3 className="modal-section-heading modal-section-heading--spaced">
                Proposed Technology Stack
              </h3>
              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-chip tech-chip--with-icon">
                    <TechIcon name={tech} size={13} />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="concept-modal__col-side">
              <h3 className="modal-section-heading">Planned Features &amp; Scope</h3>
              <ul className="modal-planned-features-list">
                {project.plannedFeatures.map((feature) => (
                  <li key={feature}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="modal-status-card">
                <div className="modal-status-card__label">Repository &amp; Demo Availability</div>
                {hasGithubUrl || hasLiveDemoUrl ? (
                  <div className="modal-external-actions">
                    {hasGithubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero-primary"
                      >
                        View on GitHub
                      </a>
                    )}
                    {hasLiveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-hero-secondary"
                      >
                        Open Live Demo
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="modal-status-card__note">
                    Status: <strong>{project.status}</strong>. GitHub repository and live deployment links will be enabled here once implementation is published.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreviewModal;
