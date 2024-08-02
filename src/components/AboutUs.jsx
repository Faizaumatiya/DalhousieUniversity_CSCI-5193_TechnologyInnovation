import {
  Box,
  Button,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import React from "react";
import Image from "../Assets/home-banner-image.png";
import { Link } from "react-router-dom";
import { COLORS } from "../constants";

function AboutUs() {
  const theme = createTheme();
  theme.spacing(2);
  return (
    <Container>
      <Grid container spacing={2} mt={5}>
        <ThemeProvider theme={theme}>
          <Grid item xs>
            <item>
              <Typography variant="h2" gutterBottom>
                How are we the best?
              </Typography>
              <Typography variant="h5" gutterBottom>
                Creating an in-house farming kit can serve a variety of
                purposes, depending on the goals and needs of the individual or
                organisation. Here are the benefits you can avail using our
                services:
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                Access to fresh produce, Cost Savings, Sustainability, Education
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                Building community, Supplemental income, & Therapeutic benefits
              </Typography>
            </item>
            <Box sx={{ display: "flex", gap: "16px" }}>
              <Link to="/build-plant">
                <Button variant="contained">Build you plant</Button>
              </Link>
              {/* <Link to="/products">
                    <Button variant="contained">Products</Button>
                    </Link> */}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <item>
              <Box
                className="home-bannerImage=container"
                sx={{ width: 400, marginX: 20 }}
              >
                <img src={Image} alt="" />
              </Box>
            </item>
          </Grid>
        </ThemeProvider>
      </Grid>
    </Container>
  );
}

export default AboutUs;
