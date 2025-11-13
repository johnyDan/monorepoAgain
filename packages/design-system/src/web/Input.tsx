import React from 'react';
import TextField from '@mui/material/TextField';

export type InputProps = React.ComponentProps<typeof TextField>;

export function Input(props: InputProps) {
  return <TextField variant="outlined" size="small" fullWidth {...props} />;
}

export default Input;