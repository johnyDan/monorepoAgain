export function required(v: unknown, message = 'This field is required') {
  if (v === null || v === undefined) return message;
  if (typeof v === 'string' && v.trim().length === 0) return message;
  return true;
}

export function minAmount(v: number, min = 0.01, message?: string) {
  return v >= min || message || `Must be at least ${min}`;
}

export function maxAmount(v: number, max = 100000, message?: string) {
  return v <= max || message || `Must be at most ${max}`;
}