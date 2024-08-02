import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import BannerImage from "../Assets/home-banner-image.png";
import PlantCard from "./PlantCard";
import Alert from "@mui/material/Alert";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/system";
import SmallOrderReviewCard from "./BuildYourOwnPlant/SmallOrderReviewCard";
import { COLORS, ICONS } from "../constants";
import PlantImage from "./PlantImage";

function PlantPage() {
  const location = useLocation();
  const plant = location.state?.plant;

  return (
    <>
      <Box
        className="home-banner-container"
        sx={{ bgcolor: `${COLORS.WHITE}`, paddingY: 10 }}
      >
        <Box
          className="home-bannerImage=container"
          sx={{ width: 400, marginX: 20 }}
        >
          <PlantImage plantId={plant.id} />
          {/* <img src={TomatoImage} alt="plantImage" /> */}
        </Box>
        <Box classname="home-text-section" sx={{ padding: 10 }}>
          <h1 className="primary-heading">{plant.name}</h1>
          <br />
          <h2
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

          <Stack spacing={2} sx={{ margin: 2 }}>
            <SmallOrderReviewCard
              icon={ICONS.WATER}
              title={"Water"}
              amount={`${plant.waterLevel}%`}
            />
            <SmallOrderReviewCard
              icon={ICONS.HUMIDITY}
              title={"Humidity"}
              amount={`${plant.humidity}%`}
            />
            <SmallOrderReviewCard
              icon={ICONS.LIGHT}
              title={"Light"}
              amount={`${plant.light}%`}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default PlantPage;
