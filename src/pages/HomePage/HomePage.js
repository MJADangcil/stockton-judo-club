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
          textAlign: "center",
          top: "20%",
        }}
      >
        <Grid
          container
          direction="column"
          rowGap={6}
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
                paddingTop: "20px",
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Welcome to Stockton Judo Club
              <br />
              Established 1946
              <br />
              Member – Daiheigen Yudanshakai & United States Judo Federation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              sx={{ fontStyle: "italic", fontWeight: "600" }}
            >
              When confronted by an attacker,
              <br />
              hit your adversary with the biggest thing available:
              <br />
              THE GROUND
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
