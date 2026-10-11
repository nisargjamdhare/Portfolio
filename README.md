# Nisarga Jamdhare — Software Engineer Portfolio

Personal engineering portfolio built with **React 18** and **TypeScript**, featuring production full-stack experience, cloud & applied AI engineering capabilities, and interactive concept previews for upcoming AI and distributed backend projects.

## Featured Project Concepts

| # | Project | Category | Status | Preview Asset |
|---|---|---|---|---|
| 01 | **AgentFlow AI** | AI Engineering · Backend Systems | Planned | `public/images/projects/agentflow-ai-preview.webp` |
| 02 | **DocuMind AI** | Applied AI · Document Intelligence | Planned | `public/images/projects/documind-ai-preview.webp` |
| 03 | **QueryPilot AI** | AI Agents · Data Engineering | Planned | `public/images/projects/querypilot-ai-preview.webp` |
| 04 | **ScaleBoard** | Backend Engineering · Distributed Systems | Planned | `public/images/projects/scaleboard-preview.webp` |

## Publishing a Project Repository or Live Demo

Project metadata is strictly typed and separated from UI components in [`src/data/projects.ts`](./src/data/projects.ts).

To update a project's status or attach a live repository:

1. Open `src/data/projects.ts`.
2. Update `status` from `'Planned'` to `'In Progress'` or `'Available on GitHub'`.
3. Set `githubUrl` and/or `liveDemoUrl` to the published URLs — the `ProjectCard` and `ProjectPreviewModal` components automatically render the corresponding action buttons when valid URLs are provided.

## Local Development & Build

```bash
# Start development server
npm start

# Run TypeScript typecheck
npx tsc --noEmit

# Create production bundle
npm run build
```
