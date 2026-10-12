import React, { useState, useRef, useCallback } from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCategoryFilter, ProjectItem } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectPreviewModal } from './ProjectPreviewModal';

const CATEGORY_FILTERS: ProjectCategoryFilter[] = [
  'All',
  'AI Engineering',
  'Document Intelligence',
  'Data & Analytics',
  'Distributed Systems',
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.filterTag === activeFilter);

  const handleOpenPreview = useCallback(
    (project: ProjectItem, triggerElement: HTMLButtonElement | null) => {
      lastTriggerRef.current = triggerElement;
      setSelectedProject(project);
    },
    []
  );

  const handleClosePreview = useCallback(() => {
    setSelectedProject(null);
    if (lastTriggerRef.current) {
      lastTriggerRef.current.focus();
    }
  }, []);

  return (
    <section className="section-block" id="projects" aria-labelledby="projects-heading">
      <div className="container-shell">
        <div className="section-header">
          <span className="section-eyebrow">AI ENGINEERING &amp; BACKEND SYSTEMS ROADMAP</span>
          <h2 id="projects-heading" className="section-title">
            Featured AI &amp; Distributed Systems Projects
          </h2>
          <p className="section-subtitle">
            Independent architectural concepts designed around multi-step AI orchestration, deterministic document validation, verifiable SQL analytics, and real-time queue observability.
          </p>
        </div>

        {/* Status Transparency & Filter Bar */}
        <div className="projects-toolbar">
          <div className="projects-filter-group" role="group" aria-label="Filter projects by engineering domain">
            {CATEGORY_FILTERS.map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  className={`filter-pill-btn ${isSelected ? 'filter-pill-btn--active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="status-legend" aria-label="Project status legend">
            <span className="legend-item">
              <span className="legend-dot legend-dot--planned" aria-hidden="true" />
              <span>Planned Concept</span>
            </span>
            <span className="legend-item">
              <span className="legend-dot legend-dot--progress" aria-hidden="true" />
              <span>In Progress</span>
            </span>
            <span className="legend-item">
              <span className="legend-dot legend-dot--available" aria-hidden="true" />
              <span>Available on GitHub</span>
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-showcase-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onPreviewConcept={handleOpenPreview}
            />
          ))}
        </div>
      </div>

      <ProjectPreviewModal project={selectedProject} onClose={handleClosePreview} />
    </section>
  );
};

export default Projects;
