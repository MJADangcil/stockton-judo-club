import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import {
  useMediaQuery,
  Container,
  Grid,
  IconButton,
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo512.png';

const sections = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/membership', text: 'Membership' },
  { to: '/instructors', text: 'Instructors' },
  { to: '/contact-info', text: 'Contact Info' },
  { to: '/useful-links', text: 'Useful Links' },
];

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  if (isMobile) {
    return (
      <Container
        component='nav'
        maxWidth={false}
        sx={{
          display: 'table-row',
          backgroundColor: 'primary.main',
          color: 'text.dark',
          height: '1px',
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
            padding: '6px 16px',
          }}
        >
          <Grid item>
            <Link to='/'>
              <Button sx={{ padding: '1px' }}>
                <img
                  src={logo}
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
              onClick={handleSidebar}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
        <aside>
          <Drawer anchor='right' open={sidebar} onClose={handleSidebar}>
            <Box
              onClick={handleSidebar}
              sx={{
                backgroundColor: 'primary.main',
                color: 'text.dark',
                height: '100%',
              }}
            >
              <List>
                {sections.map((section, i) => (
                  <ListItemButton key={section.text}>
                    <CustomLink to={section.to}>
                      <ListItemText primary={section.text} />
                    </CustomLink>
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        </aside>
      </Container>
    );
  } else {
    return (
      <Container
        component='nav'
        maxWidth={false}
        sx={{
          display: 'table-row',
          backgroundColor: 'primary.main',
          color: 'text.dark',
          height: '1px',
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
            padding: '6px 16px',
          }}
        >
          <Grid item>
            <Link to='/'>
              <Button sx={{ padding: '1px' }}>
                <img
                  src={logo}
                  alt='Stockton Judo Club logo'
                  style={{ height: '50px', width: '50px' }}
                ></img>
              </Button>
            </Link>
          </Grid>
          {sections.map((section, i) => (
            <CustomLink key={i} to={section.to} fontSize={'20px'}>
              <Grid
                component='span'
                item
                sx={{
                  color: 'text.dark',
                }}
              >
                {section.text}
              </Grid>
            </CustomLink>
          ))}
        </Grid>
      </Container>
    );
  }
}
