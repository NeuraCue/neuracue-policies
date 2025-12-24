import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home Page', () => {
  it('renders welcome heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /welcome to neuracue/i })).toBeInTheDocument();
  });

  it('displays NeuraCue logo', () => {
    render(<Home />);
    const logo = screen.getByAltText(/neuracue logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/assets/images/logo_orange_768.png');
  });

  it('shows app description text', () => {
    render(<Home />);
    expect(
      screen.getByText(/AI-powered geo-fenced reminders for Android on Google Play Store/i)
    ).toBeInTheDocument();
  });

  it('shows policy compliance text', () => {
    render(<Home />);
    expect(
      screen.getByText(/This site hosts required policy and compliance pages/i)
    ).toBeInTheDocument();
  });

  it('renders About link', () => {
    render(<Home />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  it('renders Privacy Policy link', () => {
    render(<Home />);
    const privacyLink = screen.getByRole('link', { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('renders Terms of Use link', () => {
    render(<Home />);
    const termsLink = screen.getByRole('link', { name: /terms of use/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveAttribute('href', '/terms');
  });

  it('has responsive layout classes', () => {
    const { container } = render(<Home />);
    const mainDiv = container.querySelector('div');
    expect(mainDiv).toHaveClass('flex', 'min-h-[80vh]', 'flex-col', 'items-center');
  });
});
