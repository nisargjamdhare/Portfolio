export type ProjectStatus = 'Planned' | 'In Progress' | 'Available on GitHub';

export type ProjectCategoryFilter =
  | 'All'
  | 'AI Engineering'
  | 'Document Intelligence'
  | 'Data & Analytics'
  | 'Distributed Systems';

export interface ProjectItem {
  id: string;
  projectNumber: string;
  title: string;
  description: string;
  category: string;
  filterTag: Exclude<ProjectCategoryFilter, 'All'>;
  status: ProjectStatus;
  conceptCaption?: string;
  technologies: string[];
  previewImage: string;
  plannedFeatures: string[];
  architectureSummary: string;
  accentColor: 'violet' | 'emerald' | 'cyan' | 'amber';
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface ExperienceHighlight {
  phase: string;
  period: string;
  domain: string;
  title: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  employmentType: string;
  summary: string;
  keyPillars: string[];
  highlights: ExperienceHighlight[];
  coreStack: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  distinction?: string;
  details: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  handle: string;
}

export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  experienceYears: string;
  resumePath: string;
  resumeDownloadName: string;
  summary: string;
  rotatingRoles: string[];
  socials: SocialLink[];
}

