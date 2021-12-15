import React from 'react';
import {
  Container,
  Divider,
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
} from '@mui/material';

const membershipCosts = [
  {
    student: '1 student',
    qualifier: undefined,
    due: '$70/month',
  },
  {
    student: '2 students',
    qualifier: 'from same household',
    due: '$90/month',
  },
  {
    student: '3+ students',
    qualifier: 'from same household',
    due: '$110/month',
  },
];

export default function Membership() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: 'block', height: 'auto' }}>
        <Grid
          container
          rowGap={3}
          columnGap={3}
          sx={{
            padding: '16px',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
          }}
        >
          <Grid item xs={12}>
            <Divider>
              <Typography variant='h4'>Membership</Typography>
            </Divider>
            <Typography variant='overline'>
              (rates current as of January 1, 2022)
            </Typography>
          </Grid>
          {membershipCosts.map((membership, i) => (
            <Grid
              item
              key={i}
              component={Card}
              elevation={6}
              sx={{
                margin: '16px',
                width: '200px',
              }}
            >
              <CardContent>
                <Typography variant='h5'>{membership.student}</Typography>
                <Typography variant='caption'>
                  {membership.qualifier}
                  <Divider />
                </Typography>
                <Typography variant='body1'>{membership.due}</Typography>
              </CardContent>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant='body1'>
              Members must also join the United States Judo Federation (USJF).
              Individual memberships to the USJF are $70 per year, with family
              memberships available for families of three or more. Go to{' '}
              <Link href='https://www.usjf.com/registration/' target='_blank'>
                https://www.usjf.com/registration/
              </Link>{' '}
              for more information or to register online.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1'>
              Stockton Judo Club charges a $10 per session mat fee for guests,
              and guests must show proof of membership in the United States Judo
              Federation, United States Judo Association, or US Judo,
              Incorporated prior to stepping on the mat.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
