import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import makeStyles from '@mui/styles/makeStyles';

import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles((theme) => ({
  viewportSm: {
    display: 'none',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  viewportLg: {
    display: 'none',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  imgHeader: {
    width: '69px',
    height: '69px',
  },
}));

const sections = [
  { to: '/', text: 'Home' },
  { to: '/class-schedule', text: 'Class Schedule' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
];

function NavBar() {
  const styles = useStyles();
  return (
    <nav>
      <AppBar position='static'>
        <Toolbar>
          {/* NavBar on 0-899 width */}
          <Box className={styles.viewportSm}>
            <Grid container alignItems='center' justifyContent='space-between'>
              <Grid
                item
                sx={{
                  backgroundColor: 'white',
                  height: 50,
                  width: 50,
                }}
                component='img'
                src='/logo512.png'
                alt='Stockton Judo Club logo'
              />
              <Grid item component='h4'>
                STOCKTON JUDO CLUB
              </Grid>
              <Grid item>
                <MenuIcon />
              </Grid>
            </Grid>
          </Box>

          {/* NavBar on 900+ width */}
          <Box className={styles.viewportLg}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={2}
            >
              {sections.map((section, i) => {
                return (
                  <Button
                    item='true'
                    key={i}
                    color='inherit'
                    href={section.to}
                    size='large'
                  >
                    <Link underline='always' color='inherit'>
                      {section.text}
                    </Link>
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default NavBar;
