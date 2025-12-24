import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact', () => {
  it('renders contact heading', () => {
    render(<Contact />);
    expect(screen.getByRole('heading', { name: /contact/i })).toBeInTheDocument();
  });

  it('renders support email link', () => {
    render(<Contact />);
    const link = screen.getByRole('link', { name: /support@neuracue\.com/i });
    expect(link).toHaveAttribute('href', 'mailto:support@neuracue.com');
  });

  it('renders privacy email link', () => {
    render(<Contact />);
    const link = screen.getByRole('link', { name: /privacy@neuracue\.com/i });
    expect(link).toHaveAttribute('href', 'mailto:privacy@neuracue.com');
  });

  it('displays last updated text with date', () => {
    render(<Contact />);
    expect(screen.getByText(/last updated:/i)).toBeInTheDocument();
  });

  it('has correct structure with section and styling', () => {
    const { container } = render(<Contact />);
    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass('mb-8');
  });
});
