import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo_large.png";

export default function HomePage() {
  return (
    <section>
      <Container
        maxWidth={false}
        sx={{
          display: "block",
          position: "absolute",
          textAlign: "center",
          top: "20%",
        }}
      >
        <Grid
          container
          direction="column"
          rowGap={8}
          sx={{
            padding: "16px",
          }}
        >
          <Grid item>
            <img
              src={logo}
              alt="Stockton Judo Club logo"
              style={{
                height: "300px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">Welcome to Stockton Judo Club</Typography>
            <Typography variant="h6">
              Established 1946 Member – Daiheigen Yudanshakai & United States
              Judo Federation
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              When confronted by an attacker, hit your adversary with the
              biggest thing available:
            </Typography>
            <Typography variant="h6">THE GROUND</Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
