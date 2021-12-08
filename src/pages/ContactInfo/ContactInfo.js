import React from 'react';
import { Container, Divider, Grid, Link, Typography } from '@mui/material';

export default function ContactInfo() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: 'table-row', height: 'auto' }}>
        <Grid container rowSpacing={2.5} sx={{ padding: '16px' }}>
          <Grid item xs={12}>
            <Typography variant='h4'>Contact Info</Typography>
            <Divider />
          </Grid>
          <Grid item>
            <Typography variant='h6'>
              Schedule: Monday, Tuesday, and Thursday, 6:30pm to 8:00pm PST
            </Typography>
            <Typography variant='h6'>
              Email:{' '}
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
