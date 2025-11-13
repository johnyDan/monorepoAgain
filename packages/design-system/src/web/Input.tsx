import React from 'react';
import TextField from '@mui/material/TextField';

export type InputProps = React.ComponentProps<typeof TextField>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <TextField variant="outlined" size="small" fullWidth {...props} inputRef={ref} />;
});

Input.displayName = 'Input';

export default Input;