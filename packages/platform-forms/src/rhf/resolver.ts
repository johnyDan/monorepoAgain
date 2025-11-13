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
  minAmount: (min?: number, message?: string): FieldValidator => (val) =>
    typeof val === 'number'
      ? (minAmount(val, min ?? 0.01, message) as true | string)
      : 'Invalid number',
  maxAmount: (max?: number, message?: string): FieldValidator => (val) =>
    typeof val === 'number'
      ? (maxAmount(val, max ?? 100000, message) as true | string)
      : 'Invalid number'
};