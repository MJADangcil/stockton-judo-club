import React from "react";
import {
  Container,
  Divider,
  Grid,
  Link,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

const schedule = [
  {
    day: "Sunday",
    hours: "Closed",
  },
  {
    day: "Monday*",
    hours: "6:30 to 8:00pm",
  },
  {
    day: "Tuesday†",
    hours: "6:30 to 8:00pm",
  },
  {
    day: "Wednesday",
    hours: "Closed",
  },
  {
    day: "Thursday*",
    hours: "6:30 to 8:00pm",
  },
  {
    day: "Friday",
    hours: "Closed",
  },
  {
    day: "Saturday",
    hours: "Closed",
  },
];

export default function ScheduleAndContactInfo() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: "block", height: "auto" }}>
        <Grid
          container
          rowGap={3}
          columnGap={2}
          sx={{
            padding: "16px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Grid item xs={12}>
            <Divider>
              <Typography variant="h4">Schedule & Contact Info</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={5} lg={3}>
            <Typography variant="h5">Schedule</Typography>
            <TableContainer component={Paper} elevation={6}>
              <Table>
                <TableBody>
                  {schedule.map((s, i) => (
                    <TableRow key={i}>
                      <TableCell component="td" scope="row">
                        {s.day}
                      </TableCell>
                      <TableCell component="td" scope="row" align="right">
                        {s.hours}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="body2">* - General workouts</Typography>
            <Typography variant="body2">
              † - Advanced/competitive sessions
            </Typography>
            <br />
            <Typography variant="body1">
              Special/individual sessions are available on an ad hoc basis.
              <br />
              <br />
              Please contact us for more information regarding our “Beginning
              Littles Judo” for children ages 5-7!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={2}>
            <Typography variant="h5">Email</Typography>
            <Typography variant="body1">
              <Link href="mailto:stocktonjudo@yahoo.com">
                stocktonjudo@yahoo.com
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={2}>
            <Typography variant="h5">Facebook</Typography>
            <Typography variant="body1">
              <Link
                href="https://www.facebook.com/StocktonJudoClub/"
                target="_blank"
              >
                Stockton Judo Club
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={2}>
            <Typography variant="h5">Instagram</Typography>
            <Typography variant="body1">
              <Link
                href="https://www.instagram.com/stocktonjudoclub/"
                target="_blank"
              >
                @stocktonjudoclub
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} lg={2}>
            <Typography variant="h5">Address</Typography>
            <Typography variant="body1">
              <Link
                href="https://goo.gl/maps/XdtFPYiMBb56Zhe96"
                target="_blank"
              >
                424 E 9th St, Stockton, CA 95206
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
