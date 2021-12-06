import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  // breakpoints: {
  //   xs: '0px',
  //   sm: '600px',
  //   md: '900px',
  //   lg: '1200px',
  //   xl: '1536px',
  // },
  palette: {
    primary: {
      main: '#b71c1c',
      light: '#f05545',
      dark: '#7f0000',
    },
    secondary: {
      main: '#0d47a1',
      light: '#5472d3',
      dark: '#002171',
    },
    text: {
      dark: '#ffffff',
      light: '#000000',
    },
  },
});
