import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { resolveAssetUrl } from '../data/projects';
import { TechIcon } from './TechIcon';

interface ArchLayerItem {
  id: string;
  code: string;
  title: string;
  tagColor: 'violet' | 'cyan' | 'emerald';
  meta: string;
  description: string;
  flowSteps: [string, string, string];
  stack: string[];
}

const ARCH_LAYERS: ArchLayerItem[] = [
  {
    id: 'backend',
    code: '01 · BACKEND & APIS',
    title: 'Contract-First Microservices',
    tagColor: 'violet',
    meta: 'TypeScript · NestJS · Express · ASP.NET Core',
    description:
      'Versioned REST services, OpenAPI contracts, RBAC middleware, and distributed background worker queues.',
    flowSteps: ['React / Client', 'NestJS / REST API', 'BullMQ / Postgres'],
    stack: ['Node.js', 'TypeScript', 'NestJS', 'ASP.NET Core', 'OpenAPI / Swagger'],
  },
  {
    id: 'ai',
    code: '02 · APPLIED AI & AGENTS',
    title: 'Verifiable LLM & MCP Workflows',
    tagColor: 'cyan',
    meta: 'OpenAI · Claude Agents · MCP · Guardrails',
    description:
      'Deterministic tool calling, schema-validated document extraction, and source-backed SQL analytics assistants.',
    flowSteps: ['User Prompt', 'MCP Tool Planner', 'Fact Validator'],
    stack: ['OpenAI API', 'Claude Agents', 'Model Context Protocol (MCP)', 'Databricks'],
  },
  {
    id: 'cloud',
    code: '03 · DATA & CLOUD INFRA',
    title: 'Serverless & High-Throughput Storage',
    tagColor: 'emerald',
    meta: 'PostgreSQL · Redis · DynamoDB · AWS',
    description:
      'Composite indexing, Redis caching layers, and containerized pipelines on AWS Lambda, ECS Fargate, S3 & SQS.',
    flowSteps: ['Amazon S3 / SQS', 'ECS Fargate / Lambda', 'PostgreSQL / Redis'],
    stack: ['AWS Lambda', 'Docker', 'PostgreSQL', 'Redis', 'AWS DynamoDB'],
  },
];

export const Banner: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [activeLayerId, setActiveLayerId] = useState<string>('backend');

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PROFILE_DATA.rotatingRoles.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const resumeHref = resolveAssetUrl(PROFILE_DATA.resumePath);
  const activeLayer = ARCH_LAYERS.find((l) => l.id === activeLayerId) ?? ARCH_LAYERS[0];

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-heading">
      <div className="hero-ambient-glow hero-ambient-glow--primary" aria-hidden="true" />
      <div className="hero-ambient-glow hero-ambient-glow--secondary" aria-hidden="true" />

      <div className="container-shell hero-grid">
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>{PROFILE_DATA.role} · CentraLogic India Pvt. Ltd.</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Hi, I&apos;m <span className="text-gradient">{PROFILE_DATA.name}</span>
          </h1>

          <div className="hero-role-banner" aria-live="polite">
            <span className="hero-role-prefix">Engineering Focus:</span>{' '}
            <span className="hero-role-highlight" key={roleIndex}>
              {PROFILE_DATA.rotatingRoles[roleIndex]}
            </span>
          </div>

          <p className="hero-description">{PROFILE_DATA.summary}</p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn-hero-primary">
              <span>Explore AI &amp; Backend Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={resumeHref}
              download={PROFILE_DATA.resumeDownloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-secondary"
            >
              <span>Download Resume</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#experience" className="btn-hero-ghost">
              Career Journey
            </a>
          </div>

          <dl className="hero-metrics" aria-label="Career snapshot">
            <div className="hero-metric-item">
              <dt>Experience</dt>
              <dd>{PROFILE_DATA.experienceYears} (Full-Time)</dd>
            </div>
            <div className="hero-metric-item">
              <dt>Primary Stack</dt>
              <dd>Node.js · TypeScript · React</dd>
            </div>
            <div className="hero-metric-item">
              <dt>Cloud &amp; Applied AI</dt>
              <dd>AWS · LLM APIs · MCP</dd>
            </div>
            <div className="hero-metric-item">
              <dt>Current Role &amp; Base</dt>
              <dd>CentraLogic · Pune, IN</dd>
            </div>
          </dl>
        </div>

        {/* Right Column: Interactive Engineering Architecture & Telemetry Console */}
        <div className="hero-visual" aria-label="Interactive engineering architecture overview">
          <div className="arch-card">
            <div className="arch-card__header">
              <div className="window-dots" aria-hidden="true">
                <span className="w-dot w-dot--red" />
                <span className="w-dot w-dot--amber" />
                <span className="w-dot w-dot--green" />
              </div>
              <span className="arch-card__filename">architecture-blueprint.ts</span>
              <span className="arch-badge">INTERACTIVE STACK</span>
            </div>

            <div className="arch-card__body">
              {ARCH_LAYERS.map((layer) => {
                const isSelected = layer.id === activeLayerId;
                return (
                  <button
                    key={layer.id}
                    type="button"
                    className={`arch-layer arch-layer--interactive ${isSelected ? 'arch-layer--active' : ''}`}
                    onClick={() => setActiveLayerId(layer.id)}
                    aria-pressed={isSelected}
                  >
                    <div className="arch-layer__label">
                      <span className={`layer-tag layer-tag--${layer.tagColor}`}>{layer.code}</span>
                      <span className="layer-meta">{layer.meta}</span>
                    </div>
                    <p className="arch-layer__desc">{layer.description}</p>
                    <div className="arch-layer__chips">
                      {layer.stack.map((tech) => (
                        <span key={tech} className="arch-mini-chip">
                          <TechIcon name={tech} size={13} />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}

              {/* Live SVG Architecture Flow Visualization for Selected Layer */}
              <div className="arch-flow-visualizer" aria-label={`Architecture data flow for ${activeLayer.title}`}>
                <div className="arch-flow-header">
                  <span className="arch-flow-title">LIVE PIPELINE TOPOLOGY · {activeLayer.title.toUpperCase()}</span>
                  <span className="arch-flow-status">● VERIFIED</span>
                </div>
                <div className="arch-flow-nodes">
                  <div className="arch-flow-node">{activeLayer.flowSteps[0]}</div>
                  <svg className="arch-flow-arrow" width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M2 7h22m-4-4 4 4-4 4" stroke="#67e8f9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="arch-flow-node arch-flow-node--highlight">{activeLayer.flowSteps[1]}</div>
                  <svg className="arch-flow-arrow" width="28" height="14" viewBox="0 0 28 14" fill="none" aria-hidden="true">
                    <path d="M2 7h22m-4-4 4 4-4 4" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="arch-flow-node">{activeLayer.flowSteps[2]}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;


