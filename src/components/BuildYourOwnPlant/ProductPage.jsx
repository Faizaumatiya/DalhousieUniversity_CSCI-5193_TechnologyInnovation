import React, { Component, useState } from "react";
import { Box, Grid } from "@mui/material";
import Description from "./Description";
import Heading from "./Heading";
import PurchaseOptionCard from "./PurchaseOptionCard";
import { HTML_TAGS } from "../../constants";

const ProductPage = ({ product, stateChangeHandler }) => {
  const { name, description, NORMAL, PREMIUM } = product;
  const [puchaseOption, setPurchaseOption] = useState(NORMAL);

  const handleProductSelection = (option) => {
    setPurchaseOption(option);
    stateChangeHandler(option.id === PREMIUM.id ? PREMIUM : NORMAL);
  };

  return (
    <>
      <div
        className="review-order-stack"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 50,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={4} md={5}>
            <Box className="home-bannerImage=container" sx={{ width: 400 }}>
              <Heading text={`Select ${name}`} variant={HTML_TAGS.H4} />

              <Description text={`${description}`} />
            </Box>
          </Grid>
          <Grid item xs={4} md={4}>
            <div
              onClick={() => {
                handleProductSelection(NORMAL);
              }}
            >
              <PurchaseOptionCard
                {...NORMAL}
                isSelected={puchaseOption.id === NORMAL.id}
              />
            </div>
          </Grid>
          <Grid item xs={4} md={3}>
            <div
              onClick={() => {
                handleProductSelection(PREMIUM);
              }}
            >
              <PurchaseOptionCard
                {...PREMIUM}
                isSelected={puchaseOption.id === PREMIUM.id}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProductPage;
