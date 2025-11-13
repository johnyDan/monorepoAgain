import { describe, it, expect } from 'vitest';
import { formatCurrency } from '../formatters';

describe('formatCurrency', () => {
  it('formats USD', () => {
    expect(formatCurrency(10)).toMatch(/\$\s?10/);
  });
});