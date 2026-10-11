import { ProjectItem, ProjectStatus } from '../types/portfolio';

/**
 * Strongly typed project configuration for portfolio showcase.
 *
 * Status guidelines:
 * - Use 'Planned' for project concepts that have not yet started implementation.
 * - Switch to 'In Progress' once active development has begun.
 * - Switch to 'Available on GitHub' and populate `githubUrl` (and optional `liveDemoUrl`)
 *   only when the repository is published.
 */
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'agentflow-ai',
    projectNumber: '01',
    title: 'AgentFlow AI',
    category: 'AI Engineering · Backend Systems',
    filterTag: 'AI Engineering',
    status: 'Planned',
    conceptCaption: 'Concept preview — implementation in progress.',
    description:
      'An AI workflow orchestration platform for building, executing, and monitoring multi-step AI agents with tools, background jobs, retries, and execution tracing.',
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Docker',
      'LLM APIs',
    ],
    previewImage: '/images/projects/agentflow-ai-preview.webp',
    plannedFeatures: [
      'Multi-step AI workflow execution.',
      'Tool calling and structured outputs.',
      'Background processing with BullMQ.',
      'Retries, timeouts, and failure recovery.',
      'Execution history and tracing.',
      'Token usage and cost monitoring.',
      'Human approval checkpoints.',
    ],
    architectureSummary:
      'DAG-based workflow engine backed by NestJS workers, BullMQ job queues, Redis state locks, and PostgreSQL execution trace persistence with human-in-the-loop checkpoints.',
    accentColor: 'violet',
    // Configure real URLs below only when published:
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: 'documind-ai',
    projectNumber: '02',
    title: 'DocuMind AI',
    category: 'Applied AI · Document Intelligence',
    filterTag: 'Document Intelligence',
    status: 'Planned',
    conceptCaption: 'Concept preview — implementation in progress.',
    description:
      'An AI-powered document intelligence platform that extracts structured information from PDFs and validates results using deterministic rules.',
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'React',
      'PostgreSQL',
      'Redis',
      'AWS S3',
      'AWS SQS',
      'LLM API',
    ],
    previewImage: '/images/projects/documind-ai-preview.webp',
    plannedFeatures: [
      'PDF upload and document management.',
      'Asynchronous document processing.',
      'Structured information extraction.',
      'Rule-based validation.',
      'Confidence indicators and human review.',
      'Processing history and error recovery.',
    ],
    architectureSummary:
      'Event-driven document ingestion pipeline using Amazon S3 and SQS queues, pairing schema-constrained LLM extraction with deterministic rule validation and human review routing.',
    accentColor: 'emerald',
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: 'querypilot-ai',
    projectNumber: '03',
    title: 'QueryPilot AI',
    category: 'AI Agents · Data Engineering',
    filterTag: 'Data & Analytics',
    status: 'Planned',
    conceptCaption: 'Concept preview — implementation in progress.',
    description:
      'A natural-language analytics assistant that answers questions about a controlled dataset using validated queries and verifiable results.',
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'React',
      'LLM API',
    ],
    previewImage: '/images/projects/querypilot-ai-preview.webp',
    plannedFeatures: [
      'Natural-language questions.',
      'Structured query planning.',
      'Read-only, validated data access.',
      'Source-backed numerical answers.',
      'Result explanations and visualizations.',
      'Authorization, query limits, and safe refusal behavior.',
    ],
    architectureSummary:
      'Zero-hallucination analytics architecture where numerical metrics are strictly sourced from read-only, AST-validated PostgreSQL queries and verified before LLM prose synthesis.',
    accentColor: 'cyan',
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
  {
    id: 'scaleboard',
    projectNumber: '04',
    title: 'ScaleBoard',
    category: 'Backend Engineering · Distributed Systems',
    filterTag: 'Distributed Systems',
    status: 'Planned',
    conceptCaption: 'Concept preview — implementation in progress.',
    description:
      'A real-time monitoring dashboard for background jobs, worker processes, queue health, retries, and failed tasks.',
    technologies: [
      'Node.js',
      'TypeScript',
      'NestJS',
      'Redis',
      'BullMQ',
      'PostgreSQL',
      'React',
      'WebSockets',
      'Docker',
    ],
    previewImage: '/images/projects/scaleboard-preview.webp',
    plannedFeatures: [
      'Real-time queue monitoring.',
      'Job lifecycle tracking.',
      'Retry and dead-letter workflows.',
      'Worker health monitoring.',
      'Searchable execution logs.',
      'Failure simulation and recovery.',
    ],
    architectureSummary:
      'High-frequency WebSocket telemetry control plane for BullMQ and Redis clusters, featuring worker heartbeat tracking, exponential backoff inspection, and dead-letter queue replay.',
    accentColor: 'amber',
    githubUrl: undefined,
    liveDemoUrl: undefined,
  },
];

export const shouldShowConceptCaption = (status: ProjectStatus): boolean => {
  return status === 'Planned' || status === 'In Progress';
};

export const resolveAssetUrl = (assetPath: string): string => {
  const publicUrl = process.env.PUBLIC_URL || '';
  if (!assetPath.startsWith('/')) {
    return `${publicUrl}/${assetPath}`;
  }
  return `${publicUrl}${assetPath}`;
};

