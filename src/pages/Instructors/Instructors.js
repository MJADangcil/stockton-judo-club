import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import steveIkedaImage from "../../assets/steve_ikeda.png";
import deanKomureImage from "../../assets/dean_komure.png";
import raulOchoaImage from "../../assets/raul_ochoa.png";
import mikeLearyImage from "../../assets/mike_leary.png";
import josephHernandezImage from "../../assets/joseph_hernandez.png";
import mikeSchubertImage from "../../assets/mike_schubert.png";

const instructors = [
  {
    name: "Steve Ikeda",
    title: "Sensei, 5th Degree Black Belt",
    headshot: steveIkedaImage,
    headshotAlt: "Headshot of Steve Ikeda",
    content: `Steve Ikeda started judo at Stockton Judo Club in 1971 and has practiced continuously since then. He has studied and continues to study under many notable judo instructors, including Masao “Duke” Yoshimura, Benso Tsuji, Charles R. “Chuck” Fuertsch, Ted Kawasaki, Haruo Makimoto, Matsuo “Mac” Takeda, Dr. David Matsumoto, and Dr. Kuniko Takeuchi, among others. Steve has been a national level competitor and is only the fourth sensei in Stockton Judo Club’s history, following Jack Ferrill, Duke Yoshimura, and founding sensei Carl Kawasaki. He is certified by USA Judo as a self-defense instructor, and in the winter, he can also be found on the slopes as a certified ski instructor. Steve is a Life Member of the United States Judo Federation.`,
  },
  {
    name: "Dean Komure",
    title: "Assistant Instructor, 3rd Degree Black Belt",
    headshot: deanKomureImage,
    headshotAlt: "Headshot of Dean Komure",
    content: `Dean Komure started judo at the age of 5 at Stockton Judo Club. While he was growing up, he not only worked out at Stockton Judo Club, but also with Yutaka “Dick” Ito, at Manteca Judo Club for many years. Dean is a second-generation farmer in French Camp, and is also an actor best known for his breakthrough role as “Spectator” in the film, “Day of Independence”. Dean is certified by USA Judo as a self-defense instructor. Dean is also a Life Member of the United States Judo Federation.`,
  },
  {
    name: "Raul Ochoa",
    title: "Assistant Instructor, 2nd Degree Black Belt",
    headshot: raulOchoaImage,
    headshotAlt: "Headshot of Raul Ochoa",
    content: `Raul Ochoa began his judo studies in 1995 at Stockton Judo Club and was a ferocious competitor in his day. Even though his competitive days are behind him, Raul is continuously learning new techniques and refining old ones. Raul is certified by USA Judo as a self-defense instructor.`,
  },
  {
    name: "Mike Leary",
    title: "Assistant Instructor, 2nd Degree Black Belt",
    headshot: mikeLearyImage,
    headshotAlt: "Headshot of Mike Leary",
    content: `Mike Leary started judo lessons at Stockton Judo Club in 1965. He is a south Stockton native and St. Mary’s High School alumnus, and grew up two blocks from the club’s current location. Throughout his years as a club member, he has trained with nearly every national champion in the club’s history, and now excels teaching children and beginners.`,
  },
  {
    name: "Joseph Hernandez",
    title: "Assistant Instructor, 1st Degree Black Belt",
    headshot: josephHernandezImage,
    headshotAlt: "Headshot of Joseph Hernandez",
    content: `Joseph Hernandez started judo with Stockton Judo Club after playing both football and basketball in high school. He advanced quickly, sometimes working out six and even seven times per week, studying with Rodney Imamura Sensei at CSU Sacramento in addition to Stockton Judo Club. As a result of his diligence, he was selected to participate in a 2022 Kakehashi Project, sponsored by the Japanese government, as part of a cultural exchange program in Nobeoka (Miyazaki Prefecture). Joseph has a strong technical sense for judo and is consistently looking to broaden his knowledge base. Joseph has an inexplicable affinity for 7-Eleven hot dogs, preferring them even to Costco hot dogs, but pizza is his true kryptonite.`,
  },
  {
    name: "Mike Schubert",
    title: "5th Degree Black Belt",
    headshot: mikeSchubertImage,
    headshotAlt: "Picture of Mike Schubert playing ice hockey",
    content: `Mike joined Stockton Judo Club while still in high school in 1980 and remained a member while he was part of the USMC Judo Team (1986-1988) and even as he opened and operated his own club in Pittsburg for many years. He has since relocated in retirement to Idaho, and ramping up a judo club in Nampa, but a piece of his heart is still with Stockton Judo Club, and is always welcome on the mat with us.`,
  },
];

export default function Instructors() {
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
          <Grid item xs={12}>
            <Divider>
              <Typography variant="h4">Instructors</Typography>
            </Divider>
          </Grid>
          {instructors.map((instructor, i) => (
            <Grid
              key={i}
              component={Card}
              elevation={6}
              item
              sm={5}
              md={3}
              lg={2.5}
              xl={2}
            >
              <CardHeader
                title={instructor.name}
                subheader={instructor.title}
              />
              <CardMedia
                component="img"
                image={instructor.headshot}
                alt={instructor.headshotAlt}
                sx={{ width: "100%", height: "auto" }}
              />
              <CardContent>
                <Typography variant="body1">{instructor.content}</Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
