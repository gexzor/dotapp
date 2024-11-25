import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#02fb4a',
    },
    secondary: {
      main: '#b700ff',
    },
    background: {
      paper: '#191331',
      default: '#04050c',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#00ad4d',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#191331',
          color: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          backgroundColor: '#1976d2',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2e2e2e',
          color: '#ffffff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});

export default theme;
