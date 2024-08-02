import { Box, Grid } from "@mui/material";
import React, { Component, useState } from "react";
import Description from "./Description";
import Heading from "./Heading";
import ReviewOrderCardStack from "./ReviewOrderCardStack";
import { HTML_TAGS, TEXT_ALIGN } from "../../constants";
import PlantImage from "../PlantImage";

const PLANT_FERTILIZERS = {
  NORMAL: "normal",
  PREMIUM: "premium",
};

const ReviewOrder = ({ plant, confirmOrderHandler, rejectOrderHandler }) => {
  const { pot, seed, soil, light } = plant;
  return (
    <>
      <div
        className="review-order-stack"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 30,
          maxHeight: 500,
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={10}>
            <Box
              className="home-bannerImage=container"
              sx={{ width: 200, marginX: 30 }}
            >
              <Heading
                text={seed.name}
                variant={HTML_TAGS.H3}
                color={"#000000"}
                align={TEXT_ALIGN.CENTER}
              />
              <PlantImage plantId={seed.id} width={200} height={200} />
            </Box>
          </Grid>
          <Grid xs={2}>
            <ReviewOrderCardStack plant={plant} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ReviewOrder;
