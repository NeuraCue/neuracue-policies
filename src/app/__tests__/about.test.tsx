import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from '../about/page';

describe('About Page', () => {
  it('renders main heading', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /about neuracue/i })).toBeInTheDocument();
  });

  it('displays NeuraCue logo', () => {
    render(<AboutPage />);
    const logo = screen.getByAltText(/neuracue logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/assets/images/logo_orange_256.png');
  });

  it('shows tagline', () => {
    render(<AboutPage />);
    expect(
      screen.getByText(/Smart location reminders that trigger when it matters/i)
    ).toBeInTheDocument();
  });

  it('renders "What is NeuraCue?" section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /what is neuracue/i })).toBeInTheDocument();
    expect(
      screen.getByText(/NeuraCue is an Android app that helps you remember/i)
    ).toBeInTheDocument();
  });

  it('renders "Test Internal Track" section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /test internal track/i })).toBeInTheDocument();
    expect(screen.getByText(/currently in internal testing/i)).toBeInTheDocument();
  });

  it('renders internal access CTA button', () => {
    render(<AboutPage />);
    const ctaButton = screen.getByRole('link', { name: /request internal access/i });
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:support@neuracue.com')
    );
  });

  it('renders "Why NeuraCue?" section with benefits', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /why neuracue/i })).toBeInTheDocument();
    // Check for the specific benefit headings with emojis
    expect(screen.getByRole('heading', { name: /reliable.*⏱️.*📍/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /private.*🔒/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /smart.*🧠/i })).toBeInTheDocument();
  });

  it('renders "Core Features" section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /core features/i })).toBeInTheDocument();
    expect(screen.getByText(/Location-based cues:/i)).toBeInTheDocument();
    expect(screen.getByText(/Offline-first:/i)).toBeInTheDocument();
    expect(screen.getByText(/Battery optimized:/i)).toBeInTheDocument();
  });

  it('renders "Development Phases" section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { name: /development phases/i })).toBeInTheDocument();
    expect(screen.getByText(/Phase 1: Core/i)).toBeInTheDocument();
    expect(screen.getByText(/Phase 2: Auth/i)).toBeInTheDocument();
  });

  it('includes Contact component', () => {
    render(<AboutPage />);
    // Contact component should be present with its heading
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /support@neuracue\.com/i })).toBeInTheDocument();
  });

  it('has proper article structure', () => {
    const { container } = render(<AboutPage />);
    const article = container.querySelector('article');
    expect(article).toBeInTheDocument();
    expect(article).toHaveClass('prose', 'prose-invert', 'prose-lg');
  });
});
