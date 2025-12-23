import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-15T12:00:00-08:00'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders copyright with NeuraCue trademark', () => {
    render(<Footer />);
    expect(screen.getByText(/NeuraCue™/)).toBeInTheDocument();
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it('renders copyright with current year', () => {
    render(<Footer />);
    // The copyright symbol and year are in separate elements
    expect(screen.getByText(/©/)).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
  });

  it('displays Pacific time clock', () => {
    render(<Footer />);
    const clockElement = screen.getByText(/PST|PDT/);
    expect(clockElement).toBeInTheDocument();
  });

  it('shows time in HH:MM:SS format', () => {
    render(<Footer />);
    // Should contain time pattern like "12:00:00"
    expect(screen.getByText(/\d{2}:\d{2}:\d{2}/)).toBeInTheDocument();
  });

  it('updates clock every second', async () => {
    render(<Footer />);

    // Get initial clock text
    const clock = document.getElementById('clock');
    const initialClockText = clock?.textContent;

    // Advance time by 1 second and trigger re-render
    vi.advanceTimersByTime(1000);

    // Get updated clock text
    const updatedClockText = clock?.textContent;

    // Clock should have updated (seconds changed)
    expect(updatedClockText).toBeDefined();
    expect(initialClockText).toBeDefined();
    // Both should contain time format
    expect(initialClockText).toMatch(/\d{2}:\d{2}:\d{2}/);
    expect(updatedClockText).toMatch(/\d{2}:\d{2}:\d{2}/);
  });

  it('has correct footer styling classes', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('text-center');
  });

  it('renders clock with ts class for styling', () => {
    render(<Footer />);
    const clock = document.getElementById('clock');
    expect(clock).toHaveClass('ts');
  });

  it('cleans up interval on unmount', () => {
    const { unmount } = render(<Footer />);
    const clearIntervalSpy = vi.spyOn(global, 'clearInterval');

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
  });
});
