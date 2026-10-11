import {
  CertificationItem,
  EducationItem,
  ExperienceEntry,
  ProfileData,
  SkillCategory,
} from '../types/portfolio';

export const PROFILE_DATA: ProfileData = {
  name: 'Nisarga Jamdhare',
  role: 'Software Engineer — Full Stack',
  tagline: 'Full-Stack Engineering · Distributed Backend Systems · Applied AI & Cloud',
  location: 'Pune, Maharashtra, India',
  email: 'nisarga.v.jamdhare@gmail.com',
  phone: '+91 9623560567',
  experienceYears: '2.5+ Years',
  resumePath: '/Nisarga_Jamdhare_Resume.pdf',
  resumeDownloadName: 'Nisarga_Jamdhare_Resume.pdf',
  summary:
    'Full-stack software engineer with 2.5+ years of experience building resilient backend services, cloud-native document processing pipelines, and verifiable AI applications using Node.js, TypeScript, NestJS, React, ASP.NET Core, and AWS.',
  rotatingRoles: [
    'Full-Stack Software Engineer',
    'Node.js & TypeScript Architect',
    'Applied AI & Agent Systems Builder',
    'Cloud & Distributed Backend Engineer',
  ],
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nisarga-jamdhare/',
      handle: 'in/nisarga-jamdhare',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/nisargjamdhare',
      handle: '@nisargjamdhare',
    },
    {
      id: 'hackerrank',
      label: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/nisarga_v_jamdh1',
      handle: 'nisarga_v_jamdh1',
    },
  ],
};

export const EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    id: 'centralogic-fullstack',
    role: 'Software Engineer — Full Stack',
    company: 'CentraLogic India Pvt. Ltd.',
    period: 'April 2024 – Present',
    location: 'Pune, India',
    employmentType: 'Full-Time · On-Site',
    summary:
      'Progressed from building core full-stack web modules and versioned REST APIs to architecting high-throughput database layers, serverless AWS document automation pipelines, and deterministic AI agent workflows.',
    keyPillars: [
      'Full-Stack Web & API Engineering',
      'Database & Caching Optimization',
      'AWS Document Automation',
      'Applied AI & MCP Agents',
    ],
    highlights: [
      {
        phase: 'STAGE 01',
        period: 'Foundation & Core Engineering',
        domain: 'Full-Stack Web & REST APIs',
        title: 'Modular Backend Services & Reactive Frontend Applications',
        description:
          'Built and maintained end-to-end web features, versioned RESTful APIs, and interactive user interfaces across enterprise platforms.',
        bullets: [
          'Engineered backend microservices and REST endpoints using Node.js, TypeScript, Express.js, NestJS, and ASP.NET Core (C#), governed by strict OpenAPI / Swagger schemas.',
          'Developed responsive React.js interfaces (Hooks, Redux Toolkit, Tailwind CSS) and browser workflow extensions that streamlined complex multi-step user operations.',
          'Implemented role-based access control (RBAC), request validation middleware, and standardized error-handling contracts.',
        ],
        technologies: ['Node.js', 'TypeScript', 'React.js', 'NestJS', 'ASP.NET Core (C#)', 'Redux', 'OpenAPI / Swagger'],
      },
      {
        phase: 'STAGE 02',
        period: 'Scale & Persistence Architecture',
        domain: 'Database & Performance Optimization',
        title: 'High-Throughput Storage, Indexing & Distributed Caching',
        description:
          'Owned data modeling, query tuning, and caching strategies across relational and distributed NoSQL databases.',
        bullets: [
          'Designed and optimized schemas across PostgreSQL, AWS DynamoDB, and Azure Cosmos DB to support high-volume transactional and operational workloads.',
          'Refined composite indexes, partition-key access patterns, and SQL execution plans while introducing Redis caching layers to reduce database round-trips and API latency.',
          'Delivered automated Unit and Integration test suites with Jest (TDD) and participated in rigorous PR code reviews to keep regressions near zero.',
        ],
        technologies: ['PostgreSQL', 'Redis', 'AWS DynamoDB', 'Azure Cosmos DB', 'SQL Optimization', 'Jest & TDD'],
      },
      {
        phase: 'STAGE 03',
        period: 'Cloud-Native & Event-Driven Systems',
        domain: 'Document Automation & AWS Infrastructure',
        title: 'Asynchronous Document Processing & Deterministic Rule Engines',
        description:
          'Architected cloud-native pipelines for automated PDF ingestion, structured field extraction, and multi-rule compliance validation.',
        bullets: [
          'Built event-driven document processing workflows on AWS Lambda, ECS Fargate, Amazon S3, and AWS SQS packaged as multi-stage Docker containers.',
          'Engineered deterministic rule-validation pipelines that cross-check extracted fields, compute confidence indicators, and route exceptions for human review.',
          'Maintained automated Jenkins CI/CD pipelines and production telemetry dashboards using AWS CloudWatch and Datadog.',
        ],
        technologies: ['AWS Lambda', 'AWS ECS Fargate', 'Amazon S3 & SQS', 'Docker', 'Rule Engines', 'Jenkins CI/CD', 'Datadog'],
      },
      {
        phase: 'STAGE 04',
        period: 'Applied AI & Agentic Systems',
        domain: 'AI Integrations & MCP Tooling',
        title: 'Verifiable LLM Workflows & Model Context Protocol (MCP) Agents',
        description:
          'Designed production AI capabilities that combine LLM reasoning with deterministic tool execution and source-backed data verification.',
        bullets: [
          'Integrated OpenAI API and Claude Agents using provider-agnostic service layers, structured outputs, and deterministic tool-calling contracts.',
          'Built Model Context Protocol (MCP) agent tools and natural-language analytical pipelines backed by Databricks and read-only SQL query planners.',
          'Enforced post-generation fact validators, token/cost telemetry, retry recovery, and safe-refusal guardrails to eliminate hallucinated outputs.',
        ],
        technologies: ['OpenAI API', 'Claude Agents', 'Model Context Protocol (MCP)', 'LLM Tool Calling', 'Databricks', 'AI Guardrails'],
      },
    ],
    coreStack: [
      'Node.js',
      'TypeScript',
      'React.js',
      'NestJS',
      'Express.js',
      'ASP.NET Core (C#)',
      'PostgreSQL',
      'Redis',
      'AWS DynamoDB',
      'Azure Cosmos DB',
      'AWS Lambda & ECS Fargate',
      'Amazon S3 & SQS',
      'Docker',
      'OpenAI API & Claude Agents',
      'Model Context Protocol (MCP)',
      'Databricks',
      'Jest & Jenkins CI/CD',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages & Core',
    subtitle: 'Strongly typed & core programming foundations',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'C#', 'SQL', 'Java', 'HTML5 & CSS3'],
  },
  {
    id: 'backend-apis',
    title: 'Backend & API Architecture',
    subtitle: 'Scalable microservices & contract-first APIs',
    skills: [
      'Node.js',
      'NestJS',
      'Express.js',
      'ASP.NET Core',
      'RESTful APIs',
      'OpenAPI / Swagger',
      'WebSockets',
      'RBAC & Auth',
    ],
  },
  {
    id: 'ai-agents',
    title: 'Applied AI & Agent Systems',
    subtitle: 'Verifiable LLM orchestration & MCP tooling',
    skills: [
      'OpenAI API',
      'Claude Agents',
      'Model Context Protocol (MCP)',
      'LLM Tool Calling',
      'Structured Outputs',
      'Prompt Engineering',
      'Fact Validation Guardrails',
    ],
  },
  {
    id: 'databases-queues',
    title: 'Databases, Queues & Caching',
    subtitle: 'Relational, NoSQL, distributed queues & analytics',
    skills: [
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'AWS DynamoDB',
      'Azure Cosmos DB',
      'Databricks',
      'Indexing & Query Tuning',
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend & Client Engineering',
    subtitle: 'Reactive web interfaces & browser tooling',
    skills: [
      'React.js (Hooks)',
      'Redux Toolkit',
      'TypeScript UI',
      'Tailwind CSS',
      'Responsive Systems',
      'Chrome Extensions',
      'Accessible UI (WCAG)',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud, DevOps & Quality',
    subtitle: 'AWS serverless, containers, CI/CD & observability',
    skills: [
      'AWS Lambda',
      'AWS ECS Fargate',
      'Amazon S3 & SQS',
      'Docker',
      'Jenkins CI/CD',
      'Jest & TDD',
      'Datadog & CloudWatch',
      'Git & Agile',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'be-it-sppu',
    degree: 'Bachelor of Engineering — Information Technology',
    institution: 'Savitribai Phule Pune University (PVG’s College of Engineering)',
    location: 'Pune, Maharashtra, India',
    period: '2020 – 2024',
    score: 'CGPA: 9.18 / 10',
    distinction: '2nd Rank in Department',
    details: [
      'Graduated with First Class with Distinction (9.18 / 10 CGPA) and awarded 2nd Rank across the Information Technology Department.',
      'Core Engineering Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Distributed Systems.',
      'Led full-stack software engineering capstone projects and competitive programming initiatives.',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    category: 'Cloud Architecture',
    description:
      'Validated expertise in AWS cloud concepts, serverless compute, storage, security compliance, and cloud architecture best practices.',
  },
  {
    id: 'lf-nodejs',
    name: 'Node.js Application Development',
    issuer: 'The Linux Foundation',
    category: 'Backend Engineering',
    description:
      'Focused on asynchronous programming, event loop internals, streams, buffer management, modular backend design, and production Node.js services.',
  },
  {
    id: 'ibm-docker',
    name: 'Docker Essentials',
    issuer: 'IBM',
    category: 'Containers & DevOps',
    description:
      'Container lifecycle management, multi-stage Dockerfiles, image optimization, and containerized microservice orchestration.',
  },
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera',
    category: 'Data & Analytics',
    description:
      'Structured analytical thinking, SQL querying, data validation, cleaning pipelines, and actionable visualization design.',
  },
];

