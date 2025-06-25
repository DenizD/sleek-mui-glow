
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
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '0.875rem',
    },
    body2: {
      fontSize: '0.75rem',
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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});
