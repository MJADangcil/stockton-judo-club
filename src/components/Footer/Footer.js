import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <footer>
      <Box bgcolor='secondary.main'>
        <Container maxWidth='xs'>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              {new Date().getFullYear()} Stockton Judo Club. All rights reserved.
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconButton aria-label='Stockton Judo contact email'>
                <EmailIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} sm={4}>
              <IconButton aria-label='Stockton Judo Facebook page'>
                <FacebookIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
