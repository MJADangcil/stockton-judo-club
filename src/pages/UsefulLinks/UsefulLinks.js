import React from "react";
import { Container, Divider, Grid, Link, Typography } from "@mui/material";

const links = [
  {
    name: "International Judo Federation",
    href: "https://ijf.org",
  },
  {
    name: "United States Judo Federation",
    href: "https://usjf.com",
  },
  {
    name: "Daiheigen Yudanshakai",
    href: "https://daiheigen.org",
  },
  {
    name: "Kodokan Judo Institute",
    href: "http://kodokanjudoinstitute.org/en/",
  },
];

export default function UsefulLinks() {
  return (
    <section>
      <Container maxWidth={false} sx={{ display: "block", height: "auto" }}>
        <Grid
          container
          rowGap={3}
          columnGap={3}
          sx={{
            padding: "16px",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Divider>
              <Typography variant="h4">Useful Links</Typography>
            </Divider>
          </Grid>
          {links.map((link, i) => (
            <Grid key={i} item xs={12}>
              <Typography variant="h6">
                <Link href={link.href} target="_blank">
                  {link.name}
                </Link>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
