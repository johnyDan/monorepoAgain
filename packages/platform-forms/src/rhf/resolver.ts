import type { Resolver, FieldValues, FieldErrors } from 'react-hook-form';
import { required, minAmount, maxAmount } from '@platform-core';

export type FieldValidator = (value: unknown, allValues?: Record<string, unknown>) => true | string;
export type Schema = Record<string, FieldValidator[]>;

export function makePlatformCoreResolver<TFieldValues extends FieldValues>(
  schema: Schema
): Resolver<TFieldValues> {
  return async (values) => {
    const fieldErrors = {} as FieldErrors<TFieldValues>;

    for (const [field, validators] of Object.entries(schema)) {
      const v = (values as any)[field];
      for (const fn of validators) {
        const res = fn(v, values);
        if (res !== true) {
          (fieldErrors as any)[field] = { type: 'validation', message: String(res) };
          break;
        }
      }
    }

    const hasErrors = Object.keys(fieldErrors).length > 0;
    return {
      values: hasErrors ? ({} as any) : values,
      errors: fieldErrors
    };
  };
}

export const v = {
  required: (message?: string): FieldValidator => (val) => required(val, message),
  minAmount: (min?: number, message?: string): FieldValidator => (val) => {
    if (val === null || val === undefined || val === '') return 'Amount is required';
    const num = typeof val === 'string' ? parseFloat(val) : (typeof val === 'number' ? val : NaN);
    if (isNaN(num)) return 'Invalid number';
    return minAmount(num, min ?? 0.01, message) as true | string;
  },
  maxAmount: (max?: number, message?: string): FieldValidator => (val) => {
    if (val === null || val === undefined || val === '') return true; // Skip if empty
    const num = typeof val === 'string' ? parseFloat(val) : (typeof val === 'number' ? val : NaN);
    if (isNaN(num)) return 'Invalid number';
    return maxAmount(num, max ?? 100000, message) as true | string;
  }
};