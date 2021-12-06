import React from 'react';
import { Link } from 'react-router-dom';
import {
  useMediaQuery,
  Container,
  Grid,
  List,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { to: '/', text: 'Home' },
  { to: '/class-schedule', text: 'Class Schedule' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
];

function NavBar() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Container
        component='nav'
        maxWidth={false}
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.dark',
          height: '4rem',
        }}
      >
        <Grid
          component='div'
          container
          columnGap={2}
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Link to='/'>
              <Button sx={{ padding: '1px' }}>
                <img
                  src='/logo512.png'
                  alt='Stockton Judo Club logo'
                  style={{ height: '50px', width: '50px' }}
                ></img>
              </Button>
            </Link>
          </Grid>
          <Grid component='span' item>
            Stockton Judo Club
          </Grid>
          <Grid component='div' item>
            <IconButton
              component='button'
              title='Navigation bar menu'
              aria-label='Navigation bar menu'
              sx={{ color: 'text.dark' }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          {/* render a List component */}
        </Grid>
      </Container>
    );
  } else {
    return (
      <Container
        component='nav'
        maxWidth={false}
        sx={{
          backgroundColor: 'primary.main',
          color: 'text.dark',
          height: '4rem',
        }}
      >
        <Grid
          component='div'
          container
          columnGap={3}
          sx={{
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {sections.map((section, i) => (
            <Link
              to={section.to}
              style={{
                textDecoration: 'none',
                fontSize: '20px',
              }}
            >
              <Grid
                key={i}
                component='span'
                item
                sx={{
                  color: 'text.dark',
                }}
              >
                {section.text}
              </Grid>
            </Link>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default NavBar;
