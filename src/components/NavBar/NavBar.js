import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Container, Grid, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { to: '/', text: 'Home' },
  { to: '/class-schedule', text: 'Class Schedule' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
];

function NavBar() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Container
      component='nav'
      maxWidth={false}
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.text',
      }}
    >
      <Grid
        component='div'
        container
        columnGap={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          component='img'
          item
          src='/logo512.png'
          alt='Stockton Judo Club logo'
          sx={{ height: '40px', width: '40px' }}
        />
        <Grid component='span' item>
          Stockton Judo Club
        </Grid>
        <Grid component='div' item>
          <IconButton
            component='button'
            title='Navigation bar menu'
            aria-label='Navigation bar menu'
            sx={{ color: 'primary.text' }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default NavBar;
