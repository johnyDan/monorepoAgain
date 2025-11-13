// Placeholder until mobile host is wired (excluded from build for now)
import React from 'react';
export type ButtonProps = { title: string; onPress?: () => void; disabled?: boolean };
export function Button(_props: ButtonProps) {
  throw new Error('Native Button not available until mobile host is ready.');
}
export default Button;