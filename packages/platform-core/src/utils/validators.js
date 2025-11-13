export function required(v, message = 'This field is required') {
    if (v === null || v === undefined)
        return message;
    if (typeof v === 'string' && v.trim().length === 0)
        return message;
    return true;
}
export function minAmount(v, min = 0.01, message) {
    return v >= min || message || `Must be at least ${min}`;
}
export function maxAmount(v, max = 100000, message) {
    return v <= max || message || `Must be at most ${max}`;
}
