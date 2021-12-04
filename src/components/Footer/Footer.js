import React from 'react';
import { Container, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Container
        component='div'
        sx={{
          backgroundColor: 'secondary.main',
          color: 'secondary.text',
          bottom: 0,
          position: 'absolute',
          paddingTop: '16px',
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
          <Grid component='span' item sx={{ textAlign: 'center' }}>
            {new Date().getFullYear()} Stockton Judo Club. All rights reserved.
          </Grid>
          <Grid component='div' item>
            <IconButton
              component='button'
              aria-label='Stockton Judo contact email'
              sx={{ color: 'secondary.text' }}
            >
              <EmailIcon />
            </IconButton>
            <IconButton
              component='button'
              title='Stockton Judo Facebook page'
              aria-label='Stockton Judo Facebook page'
              sx={{ color: 'secondary.text' }}
            >
              <FacebookIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
