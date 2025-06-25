
import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#43BEAC', // Green Turquoise
      dark: '#30A390',
      light: '#6FCAB8',
    },
    secondary: {
      main: '#3890C5', // Blue
      dark: '#2B7BA3',
      light: '#5BA8D4',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#25242E', // Dark Grey-blue
      secondary: '#747474', // Secondary text
    },
    grey: {
      100: '#AEAEAE',
      200: '#7C7F82',
      300: '#555558',
      400: '#747474',
      500: '#AEAEAE',
    },
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#FF8E03', // Orange
    },
    success: {
      main: '#43BEAC',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '0.75rem',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
    caption: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: 'none',
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", sans-serif',
        },
      },
    },
  },
});
