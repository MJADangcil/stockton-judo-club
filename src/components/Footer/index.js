import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer>
      <AppBar
        position='fixed' 
        sx={{
          backgroundColor: '#292929',
          top: 'auto',
          bottom: 0,
        }}
      >
        <Toolbar>
          <Box sx={{ width: '100%' }}>
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              rowSpacing={0.5}
              spacing={2}
            >
              <Grid item component='h5' align='center'>
                STOCKTON JUDO CLUB
              </Grid>
              <Grid item align='center'>
                <FacebookIcon />
              </Grid>
              <Grid item align='center'>
                <EmailIcon />
              </Grid>
              <Grid item component='span' align='center'>
                All rights reserved.
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
    </footer>
  );
}

export default Footer;
