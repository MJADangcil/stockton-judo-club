import { Container, Divider, Grid, Link, Typography } from "@mui/material";
import React from "react";

export default function AboutPage() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: "block", height: "auto" }}>
        <Grid container rowGap={3} sx={{ padding: "16px" }}>
          <Grid item xs={12}>
            <Divider>
              <Typography variant="h4">About</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">About Judo</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Judo is a sport that was developed by Japanese educator Jigoro
              Kano in 1882. In 1964, judo became the first Asian martial art to
              be an Olympic sport and it is currently the second most popular
              sport in the world, trailing only soccer in total participation.
              Famous judoka include former UFC Champion and Olympic medalist
              Ronda Rousey, two-time Olympic champion Kayla Harrison,
              entertainers Mel C (of the Spice Girls) and Simon LeBon (of Duran
              Duran), as well as many world leaders including Senator Ben
              Nighthorse Campbell (member of the US Olympic team in 1964),
              President Teddy Roosevelt, Canadian Prime Minister Pierre Trudeau,
              and Prince Albert of Monaco to name a few. Tickets to judo events
              at the Summer Olympics are usually the first to sell out.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              The objective in competitive judo is to defeat your opponents by
              throwing them to the ground decisively, immobilizing them on the
              ground, or forcing them to submit by way of strangulation or joint
              locks. Rules govern how throws, pins, strangulations, or joint
              locks may be applied, and the best practitioners learn to use
              their opponents’ movement against them.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">About Stockton Judo</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              The Stockton Judo Club was founded in the early 1920s by Carl
              Kawasaki Sensei. The club was quite active, competing with other
              clubs throughout the Bay Area and Central Valley in Northern
              California up to World War II. The club was forced on hiatus
              during the war, since most of the members and instructors were
              interned by the United States Government, many not returning until
              long after the end of the war. In 1946, Sensei Masao “Duke”
              Yoshimura, who was eventually awarded the rank of Hachidan (8th
              degree black belt) by the United States Judo Federation (USJF),
              re-established Stockton Judo Club, which has operated continuously
              since then and is the oldest judo club in Northern California.
            </Typography>
          </Grid>
          <Grid component="span" item>
            <Typography variant="body1">
              Stockton Judo Club is led by Sensei Steve Ikeda. Other on-the-mat
              instructors are Dean Komure, Raul Ochoa, Michael Leary, and Chris
              Eley.
            </Typography>
          </Grid>
          <Grid component="span" item>
            <Typography variant="body1">
              Over the years, Stockton Judo Club has produced numerous local,
              state, and national champions. It is the home dojo of two-time
              Olympian Tommy Martin, who represented the United States at the
              1976 Montreal Olympic Games and was also on the 1980 Olympic team
              that was to have competed in Moscow.
            </Typography>
          </Grid>
          <Grid component="span" item>
            <Typography variant="body1">
              Stockton Judo Club is located in the{" "}
              <Link
                href="https://goo.gl/maps/XdtFPYiMBb56Zhe96"
                target="_blank"
              >
                McKinley Neighborhood Center at the corner of Ninth and
                California Streets in McKinley Park (424 E. Ninth Street)
              </Link>
              . We offer affordable membership rates, and family discounts may
              apply, too. Members of all ages are welcome. Competition is
              encouraged but is not required of members.
            </Typography>
          </Grid>
          <Grid component="span" item>
            <Typography variant="body1">
              Stockton Judo Club offers self defense seminars to local community
              groups. Please contact us for more information at{" "}
              <Link href="mailto:stocktonjudo@yahoo.com">
                stocktonjudo@yahoo.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
