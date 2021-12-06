import React from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

function Footer() {
  return (
    <Container
      component='footer'
      maxWidth={false}
      sx={{
        backgroundColor: 'secondary.main',
        color: 'text.dark',
        bottom: 0,
        position: 'absolute',
      }}
    >
      <Grid
        component='div'
        container
        columnGap={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          component='span'
          item
          sx={{
            textAlign: 'center',
            fontSize: '14px',
            paddingTop: { xs: '8px', sm: '0px' },
          }}
        >
          {new Date().getFullYear()} Stockton Judo Club. All rights reserved.
        </Grid>
        <Grid component='div' item>
          <IconButton
            component='button'
            aria-label='Stockton Judo contact email'
            sx={{ color: 'text.dark' }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component='button'
            title='Stockton Judo Facebook page'
            aria-label='Stockton Judo Facebook page'
            sx={{ color: 'text.dark' }}
          >
            <FacebookIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
