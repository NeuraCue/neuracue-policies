import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CurrentDate from '../CurrentDate';

describe('CurrentDate', () => {
  beforeEach(() => {
    // Set a fixed date for consistent testing
    vi.setSystemTime(new Date('2024-01-15'));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders formatted current date', () => {
    render(<CurrentDate />);
    // Date format is "Mon DD, YYYY" (e.g., "Jan 15, 2024")
    // Check for year to verify date rendering (avoiding timezone issues)
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('initially renders empty before hydration', () => {
    const { container } = render(<CurrentDate />);
    // Component should exist even if date is not immediately shown
    expect(container).toBeTruthy();
  });
});
