import React from 'react';
import MuiButton from '@mui/material/Button';

export type ButtonProps = React.ComponentProps<typeof MuiButton>;

export function Button(props: ButtonProps) {
  return <MuiButton variant="contained" color="primary" {...props} />;
}

export default Button;