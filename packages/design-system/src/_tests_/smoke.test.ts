import { describe, it, expect } from 'vitest';
import tokens from '../theme';

describe('design tokens', () => {
  it('have primary color', () => {
    expect(tokens.colors.primary).toBeTruthy();
  });
});