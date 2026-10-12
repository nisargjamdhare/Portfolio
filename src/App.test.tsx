import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Nisarga Jamdhare Portfolio', () => {
  test('renders profile, CentraLogic career journey, and all four AI & backend project concepts', () => {
    render(<App />);
    expect(screen.getAllByText(/Nisarga Jamdhare/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Engineering Journey at CentraLogic/i)).toBeInTheDocument();
    expect(screen.getByText(/AgentFlow AI/i)).toBeInTheDocument();
    expect(screen.getByText(/DocuMind AI/i)).toBeInTheDocument();
    expect(screen.getByText(/QueryPilot AI/i)).toBeInTheDocument();
    expect(screen.getByText(/ScaleBoard/i)).toBeInTheDocument();
  });

  test('opens and closes the accessible project concept preview modal', () => {
    render(<App />);
    const previewButtons = screen.getAllByRole('button', { name: /Preview Concept/i });
    expect(previewButtons.length).toBe(4);

    fireEvent.click(previewButtons[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/Architectural Blueprint/i)).toBeInTheDocument();

    const closeBtn = screen.getByRole('button', { name: /Close project concept preview/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  test('supports interactive career journey stage filtering and architecture layer switching', () => {
    render(<App />);
    const aiPillarBtn = screen.getByRole('button', { name: /Applied AI & MCP Agents/i });
    fireEvent.click(aiPillarBtn);
    expect(screen.getByText(/Show All 4 Stages/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Show All 4 Stages/i));
    expect(screen.getByText(/STAGE 01/i)).toBeInTheDocument();
    expect(screen.getByText(/STAGE 04/i)).toBeInTheDocument();
  });
});
