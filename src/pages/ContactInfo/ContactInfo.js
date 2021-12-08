import React from 'react';
import { Container, Divider, Grid, Link, Typography } from '@mui/material';

export default function ContactInfo() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: 'table-row', height: 'auto' }}>
        <Grid
          container
          rowGap={3}
          columnGap={3}
          sx={{
            padding: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item xs={12}>
            <Divider>
              <Typography variant='h4'>Contact Info</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant='h5'>Schedule</Typography>
            <Typography varient='body1'>
              Monday, Tuesday, and Thursday, 6:30pm-8:00pm PST
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography variant='h5'>Email</Typography>
            <Typography variant='body1'>
              <Link href='mailto:stocktonjudo@yahoo.com'>
                stocktonjudo@yahoo.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
