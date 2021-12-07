import React from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <Container
      component='footer'
      maxWidth={false}
      sx={{
        display: 'table-row',
        backgroundColor: 'secondary.main',
        color: 'text.dark',
        height: '1px',
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
            href='mailto:stocktonjudo@yahoo.com'
            aria-label='Stockton Judo contact email'
            sx={{ color: 'text.dark' }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton
            component='button'
            href='https://www.facebook.com/StocktonJudoClub/'
            target='_blank'
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
