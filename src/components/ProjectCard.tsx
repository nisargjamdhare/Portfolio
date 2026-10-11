import React from 'react';
import { ProjectItem, ProjectStatus } from '../types/portfolio';
import { resolveAssetUrl, shouldShowConceptCaption } from '../data/projects';
import { TechIcon } from './TechIcon';

interface ProjectCardProps {
  project: ProjectItem;
  onPreviewConcept: (project: ProjectItem, triggerElement: HTMLButtonElement | null) => void;
}

export const getStatusBadgeClass = (status: ProjectStatus): string => {
  switch (status) {
    case 'Available on GitHub':
      return 'status-badge status-badge--available';
    case 'In Progress':
      return 'status-badge status-badge--progress';
    case 'Planned':
    default:
      return 'status-badge status-badge--planned';
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPreviewConcept }) => {
  const showCaption = shouldShowConceptCaption(project.status);
  const imageSrc = resolveAssetUrl(project.previewImage);
  const hasGithubUrl = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveDemoUrl = Boolean(project.liveDemoUrl && project.liveDemoUrl.trim().length > 0);

  return (
    <article
      className={`project-showcase-card project-showcase-card--${project.accentColor}`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Large Screenshot Preview Area */}
      <div
        className="project-preview-frame"
        onClick={(e) => {
          const btn = e.currentTarget.parentElement?.querySelector<HTMLButtonElement>('.btn-preview-concept') ?? null;
          onPreviewConcept(project, btn);
        }}
        role="presentation"
      >
        <div className="project-preview-image-wrapper">
          <img
            src={imageSrc}
            alt={`${project.title} dashboard concept preview`}
            className="project-preview-image"
            width={800}
            height={500}
          />
          <div className="project-preview-overlay" aria-hidden="true">
            <span className="overlay-action-pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Inspect High-Res Concept</span>
            </span>
          </div>
        </div>

        <div className="project-preview-top-badges">
          <span className="project-number-pill">Project {project.projectNumber}</span>
          <span className={getStatusBadgeClass(project.status)}>
            <span className="status-indicator-dot" aria-hidden="true" />
            <span>{project.status}</span>
          </span>
        </div>
      </div>

      {/* Subtle Concept Caption */}
      {showCaption && project.conceptCaption && (
        <div className="project-concept-caption">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8h.01M11 12h1v4h1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{project.conceptCaption}</span>
        </div>
      )}

      {/* Card Body */}
      <div className="project-card-body">
        <div className="project-category-label">{project.category}</div>

        <h3 id={`project-title-${project.id}`} className="project-card-title">
          {project.title}
        </h3>

        <p className="project-card-description">{project.description}</p>

        {/* Key Planned Features Preview (top 4 on card, all in modal) */}
        <div className="project-features-preview">
          <div className="project-features-heading">Planned Capabilities</div>
          <ul className="project-features-list">
            {project.plannedFeatures.slice(0, 4).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {project.plannedFeatures.length > 4 && (
            <span className="project-features-more">
              +{project.plannedFeatures.length - 4} more architectural features in concept preview
            </span>
          )}
        </div>

        {/* Proposed Technology Stack */}
        <div className="project-tech-stack" aria-label={`Proposed technologies for ${project.title}`}>
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip tech-chip--with-icon">
              <TechIcon name={tech} size={13} />
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-card-actions">
          <button
            type="button"
            className="btn-preview-concept"
            onClick={(e) => onPreviewConcept(project, e.currentTarget)}
            aria-haspopup="dialog"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Preview Concept</span>
          </button>

          {hasGithubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}

          {hasLiveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-project-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

