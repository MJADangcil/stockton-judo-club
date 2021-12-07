import React from 'react';
import { Container, Grid } from '@mui/material';

export default function Membership() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: 'table-row', height: 'auto' }}>
        <Grid container rowSpacing={2.5} sx={{ padding: '16px' }}>
          <Grid component='h3' item xs={12}>
            Membership
          </Grid>
          <Grid component='span' item xs={12}>
            (rates current as of January 1, 2022)
          </Grid>
          <Grid component='span' item xs={12}>
            Individual - $70 per month
          </Grid>
          <Grid component='span' item xs={12}>
            2 from same household - $90 per month
          </Grid>
          <Grid component='span' item xs={12}>
            3 or more from same household - $110 per month
          </Grid>
          <Grid component='span' item xs={12}>
            Members must also join the United States Judo Federation (USJF).
            Individual memberships to the USJF are $70 per year, with family
            memberships available for families of three or more. Go to
            https://www.usjf.com/registration/ for more information or to
            register online.
          </Grid>
          <Grid component='span' item xs={12}>
            Stockton Judo Club charges a $10 per session mat fee for guests, and
            guests must show proof of membership in the United States Judo
            Federation, United States Judo Association, or US Judo, Incorporated
            prior to stepping on the mat.
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
