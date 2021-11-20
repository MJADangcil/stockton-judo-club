import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#ed1c24',
      light: '#ff5f4e',
      dark: '#b20000',
    },
    secondary: {
      main: '#2e3192',
      light: '#635bc3',
      dark: '#000c63',
    },
  },
});
