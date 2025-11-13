import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';
import tokens from '../theme';

export const muiTheme = createTheme({
  palette: {
    primary: { main: tokens.colors.primary },
    secondary: { main: tokens.colors.secondary },
    text: {
      primary: tokens.colors.text.primary,
      secondary: tokens.colors.text.secondary
    },
    background: {
      default: tokens.colors.background.canvas,
      paper: tokens.colors.background.surface
    }
  },
  shape: { borderRadius: tokens.radii.md },
  typography: {
    fontFamily: tokens.typography.fontFamily,
    fontSize: tokens.typography.sizes.md
  }
} satisfies ThemeOptions);