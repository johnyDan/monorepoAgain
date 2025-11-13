export type Tokens = typeof tokens;

const tokens = {
  colors: {
    primary: '#0B5FFF',
    secondary: '#6E59FF',
    success: '#12B76A',
    danger: '#F04438',
    warning: '#F79009',
    text: { primary: '#0B0F19', secondary: '#475467', inverse: '#FFFFFF' },
    background: { canvas: '#FFFFFF', surface: '#F8FAFC' }
  },
  radii: { xs: 2, sm: 4, md: 8, lg: 12, full: 999 },
  spacing: (n: number) => n * 4,
  typography: {
    fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial",
    sizes: { xs: 12, sm: 14, md: 16, lg: 20, xl: 24 }
  }
} as const;

export default tokens;