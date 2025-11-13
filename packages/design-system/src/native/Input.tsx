// Placeholder until mobile host is wired (excluded from build for now)
import React from 'react';
export type InputProps = { value?: string; onChangeText?: (t: string) => void; placeholder?: string };
export function Input(_props: InputProps) {
  throw new Error('Native Input not available until mobile host is ready.');
}
export default Input;