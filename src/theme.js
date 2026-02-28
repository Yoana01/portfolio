// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C3E5F', // your green
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
    h4: {
      fontWeight: 700, // bold headings
    },
    body1: {
      fontWeight: 400,
    },
  },
});

export default theme;
