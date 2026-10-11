import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, size = 15, className = '' }) => {
  const normalized = name.toLowerCase();

  // TypeScript
  if (normalized.includes('typescript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path d="M10.8 11.2H8V18H6.2v-6.8H3.4V9.7h7.4v1.5Zm3.1 5.3c.6.4 1.4.6 2.2.6.9 0 1.5-.3 1.5-.9 0-.6-.5-.8-1.6-1.2-1.5-.5-2.5-1.1-2.5-2.5 0-1.5 1.2-2.6 3.1-2.6 1 0 1.8.2 2.4.5l-.5 1.4c-.5-.2-1.1-.4-1.9-.4-.8 0-1.3.3-1.3.8 0 .5.5.8 1.7 1.2 1.6.5 2.4 1.2 2.4 2.5 0 1.6-1.2 2.7-3.3 2.7-1.1 0-2.1-.3-2.7-.6l.5-1.5Z" fill="#fff" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes('javascript')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
        <path d="M11 16.4c0 1.8-1 2.7-2.6 2.7-.9 0-1.6-.3-2.1-.7l.7-1.3c.3.3.7.5 1.2.5.6 0 1-.3 1-1.1v-5.8H11v5.7Zm3.5.7c.6.4 1.4.7 2.2.7.9 0 1.5-.3 1.5-.9 0-.6-.5-.9-1.5-1.3-1.5-.5-2.5-1.1-2.5-2.5 0-1.4 1.2-2.5 3-2.5 1 0 1.8.2 2.4.6l-.6 1.3c-.4-.3-1.1-.5-1.8-.5-.8 0-1.2.3-1.2.8 0 .5.5.8 1.6 1.2 1.6.6 2.5 1.2 2.5 2.6 0 1.6-1.2 2.6-3.3 2.6-1.1 0-2.1-.3-2.8-.8l.5-1.3Z" fill="#111827" />
      </svg>
    );
  }

  // Node.js / Linux Foundation Node
  if (normalized.includes('node')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 2 3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2Z" fill="#339933" fillOpacity="0.22" stroke="#5FA04E" strokeWidth="1.7" />
        <path d="M9.2 9.2v5.6l2.8 1.6 2.8-1.6V9.2L12 7.6 9.2 9.2Z" fill="#68A063" />
      </svg>
    );
  }

  // React
  if (normalized.includes('react')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
      </svg>
    );
  }

  // NestJS
  if (normalized.includes('nest')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 2.5c5.2 0 9.5 4.2 9.5 9.5 0 4.6-3.3 8.4-7.7 9.3-.8-1.5-.8-3.5.3-5.1 1.3-1.9 3.6-2.4 3.6-5.2 0-2.5-2-4.6-4.7-4.8-1.8-.1-3.5.8-4.4 2.3-.9-1.5-2.5-2.4-4.2-2.3 1.7-2.2 4.5-3.7 7.6-3.7Z" fill="#E0234E" />
        <circle cx="9" cy="13.5" r="2.2" fill="#E0234E" fillOpacity="0.45" />
      </svg>
    );
  }

  // Express.js
  if (normalized.includes('express')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.4" />
        <path d="M5.5 9.5h4.8M5.5 12h3.8M5.5 14.5h4.8M13 9.5l5 5m0-5-5 5" stroke="#E2E8F0" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  // ASP.NET Core / C#
  if (normalized.includes('asp.net') || normalized.includes('c#')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" fill="#512BD4" />
        <path d="M9.5 15.5c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5c1 0 1.8.4 2.4 1M14.5 9.5v5m2.5-5v5m-3.5-3.5h4.5m-4.5 2h4.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // PostgreSQL / SQL
  if (normalized.includes('postgres') || normalized === 'sql' || normalized.includes('sql ')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" fill="#336791" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" stroke="#60A5FA" strokeWidth="1.5" />
        <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" stroke="#60A5FA" strokeWidth="1.5" />
      </svg>
    );
  }

  // Redis / BullMQ
  if (normalized.includes('redis') || normalized.includes('bullmq')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" fill="#DC382D" />
        <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" stroke="#F87171" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // AWS / Lambda / S3 / SQS / DynamoDB / CloudWatch
  if (
    normalized.includes('aws') ||
    normalized.includes('amazon') ||
    normalized.includes('dynamodb') ||
    normalized.includes('lambda') ||
    normalized.includes('cloudwatch') ||
    normalized.includes('fargate')
  ) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M6.5 15.5a6.5 6.5 0 0 1 0-9M17.5 6.5a6.5 6.5 0 0 1 0 9" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 5.5 7.5 15h2.2l.9-2.2h2.8l.9 2.2h2.2L12 5.5Z" fill="#FF9900" />
        <path d="M5 18.2c4.2 2.4 9.8 2.4 14 0" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  // Azure Cosmos DB
  if (normalized.includes('cosmos') || normalized.includes('azure')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <circle cx="12" cy="12" r="5" fill="#0089D6" fillOpacity="0.3" stroke="#38BDF8" strokeWidth="1.6" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.5" transform="rotate(-28 12 12)" stroke="#38BDF8" strokeWidth="1.5" />
        <circle cx="18" cy="8" r="1.6" fill="#38BDF8" />
      </svg>
    );
  }

  // Docker / IBM Container
  if (normalized.includes('docker')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="5" y="10" width="3" height="2.6" rx="0.5" fill="#2496ED" />
        <rect x="8.6" y="10" width="3" height="2.6" rx="0.5" fill="#2496ED" />
        <rect x="12.2" y="10" width="3" height="2.6" rx="0.5" fill="#2496ED" />
        <rect x="8.6" y="6.8" width="3" height="2.6" rx="0.5" fill="#38BDF8" />
        <rect x="12.2" y="6.8" width="3" height="2.6" rx="0.5" fill="#38BDF8" />
        <path d="M3 13.5h14.5c1.5 0 2.7-.8 3.5-2-.9-.4-1.8-.3-2.5.2-.3-1.2-1.2-2-2.4-2.2v4H3c0 3.6 2.8 6 7.2 6 5.4 0 8.8-2.6 9.8-6H3Z" fill="#2496ED" />
      </svg>
    );
  }

  // OpenAI / LLM / AI / Claude / MCP / Guardrails / Prompt
  if (
    normalized.includes('openai') ||
    normalized.includes('claude') ||
    normalized.includes('llm') ||
    normalized.includes('mcp') ||
    normalized.includes('protocol') ||
    normalized.includes('prompt') ||
    normalized.includes('guardrail') ||
    normalized.includes('structured') ||
    normalized.includes('validation')
  ) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 2.5 14.4 8l5.6.9-4.1 3.9 1 5.6L12 15.7l-4.9 2.7 1-5.6-4.1-3.9L9.6 8 12 2.5Z" fill="#10A37F" fillOpacity="0.28" stroke="#34D399" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="11.5" r="2" fill="#6EE7B7" />
      </svg>
    );
  }

  // Databricks / Analytics / Google Data
  if (normalized.includes('databricks') || normalized.includes('analytics') || normalized.includes('google')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 3 3.5 7.5 12 12l8.5-4.5L12 3Z" fill="#FF3621" fillOpacity="0.85" />
        <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16.5 12 21l8.5-4.5" stroke="#FB923C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Redux
  if (normalized.includes('redux')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M15.5 6.5a4.5 4.5 0 0 0-7.8 3c0 2.5 2 4.5 4.5 4.5h3.5" stroke="#A78BFA" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.5 17.5a4.5 4.5 0 0 0 7.8-3c0-2.5-2-4.5-4.5-4.5H8.3" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="15.5" cy="6.5" r="1.6" fill="#A78BFA" />
        <circle cx="8.5" cy="17.5" r="1.6" fill="#C4B5FD" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes('tailwind')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="M12 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.6 7.2 14.5 6 12 6Zm-5 6c-2.7 0-4.3 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3 1 1 2.1 2.2 4.6 2.2 2.7 0 4.3-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-1-1-2.1-2.2-4.6-2.2Z" fill="#38BDF8" />
      </svg>
    );
  }

  // Jest / TDD
  if (normalized.includes('jest') || normalized.includes('tdd')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" fill="#99425B" fillOpacity="0.25" stroke="#F43F5E" strokeWidth="1.6" />
        <path d="m8.5 12.2 2.3 2.3 4.8-4.8" stroke="#FDA4AF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Jenkins / CI/CD / Git / Agile
  if (normalized.includes('jenkins') || normalized.includes('ci/cd') || normalized.includes('git')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <circle cx="7" cy="7" r="2.3" stroke="#F97316" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="2.3" stroke="#F97316" strokeWidth="1.7" />
        <circle cx="7" cy="17" r="2.3" stroke="#F97316" strokeWidth="1.7" />
        <path d="M7 9.3v5.4M17 9.3c0 3-2.5 4.2-10 4.2" stroke="#F97316" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  // Datadog / Observability
  if (normalized.includes('datadog')) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#632CA6" fillOpacity="0.3" stroke="#A855F7" strokeWidth="1.6" />
        <path d="M6.5 15.5 10 11l2.8 3 4.7-5.5" stroke="#D8B4FE" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // OpenAPI / Swagger / REST / WebSockets
  if (
    normalized.includes('openapi') ||
    normalized.includes('swagger') ||
    normalized.includes('rest') ||
    normalized.includes('websocket')
  ) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
        <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-5.5 2 3-12" stroke="#85EA2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Default Engineering / Code Chip Icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={`tech-svg-icon ${className}`} aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#38BDF8" strokeWidth="1.6" fill="#0EA5E9" fillOpacity="0.16" />
      <circle cx="12" cy="12" r="2.4" fill="#67E8F9" />
    </svg>
  );
};

export default TechIcon;

