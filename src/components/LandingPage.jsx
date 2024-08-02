import {
  Box,
  Button,
  Grid,
  DialogTitle,
  DialogContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BannerImage from "../Assets/home-banner-image.png";
import PlantCard from "./PlantCard";
import Alert from "@mui/material/Alert";
import TomatoImage from "../Assets/tomato.png";
import { Link } from "react-router-dom";
import MockPlantsData from "../dummyData";
class Plant {
  constructor(name, waterLevel, health) {
    this.name = name;
    this.waterLevel = waterLevel;
    this.health = health;
  }
}

const userPlants = MockPlantsData;

const PlantsList = ({ plantsArr }) => {
  return (
    <>
      <Container>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            My Plants
          </Box>
        </DialogTitle>
        <DialogContent>
          <Container>
            <Box sx={{ mb: "2" }}>
              <Grid container spacing={3}>
                {plantsArr.map((plant) => {
                  return (
                    <Grid item xs={4}>
                      <PlantCard plant={plant} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Container>
        </DialogContent>
      </Container>
    </>
  );
};

const DamagedPlant = ({ plant }) => {
  const [plantId, setPlantId] = useState(1);
  return (
    <>
      <Box className="home-banner-container" sx={{ bgcolor: "#FAD4D4" }}>
        <Box
          className="home-bannerImage=container"
          sx={{ width: 400, marginX: 20 }}
        >
          <img src={TomatoImage} alt="" />
        </Box>
        <Box classname="home-text-section" sx={{ padding: 10 }}>
          <h1 className="primary-heading">{plant.name}</h1>

          <h2
            className=""
            style={{
              padding: "16px",
              backgroundColor: "#EA5455",
              borderRadius: "16px",
              textAlign: "center",
              color: "#F9F5EB",
            }}
          >
            Health: {plant.health} %
          </h2>

          <div className="show-details-button" style={{ padding: " 50px 0px" }}>
            <Link
              to="/plant-details"
              state={{ plant: plant }}
              // onClick={() => setPlantId(1)}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                className="secondary-button"
                onClick={() => setPlantId(1)}
              >
                <Typography>Show details</Typography>
              </Button>
            </Link>
          </div>
        </Box>
      </Box>
    </>
  );
};

function LandingPage() {
  return (
    <>
      <DamagedPlant plant={userPlants[0]} />
      <PlantsList plantsArr={userPlants} />
    </>
  );
}

export default LandingPage;
