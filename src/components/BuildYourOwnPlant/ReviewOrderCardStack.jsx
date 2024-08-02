import React, { Component, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { COLORS, HTML_TAGS, ICONS, TEXT_ALIGN } from "../../constants";
import SmallOrderReviewCard from "./SmallOrderReviewCard";
import { Typography } from "@mui/material";
import Heading from "./Heading";

const { POT, PLANT, SOIL, LIGHT } = ICONS;

const ReviewOrderCardStack = ({ plant }) => {
  const { pot, seed, soil, light } = plant;
  // const [totalAmount, setTotalAmount] = useState(0);

  const getTotalAmount = () => {
    return (
      Number(pot.price) +
      Number(seed.price) +
      Number(soil.price) +
      Number(light.price)
    );
  };

  return (
    <>
      <Stack spacing={2}>
        <SmallOrderReviewCard
          icon={POT}
          title={"Pot"}
          amount={`$${pot.price}`}
        />
        <SmallOrderReviewCard
          icon={PLANT}
          title={"Seed"}
          amount={`$${seed.price}`}
        />
        <SmallOrderReviewCard
          icon={SOIL}
          title={"Soil"}
          amount={`$${soil.price}`}
        />
        <SmallOrderReviewCard
          icon={LIGHT}
          title={"Light"}
          amount={light.price}
        />

        <Stack spacing={0}>
          <Typography variant={HTML_TAGS.H6} color={COLORS.BLACK}>
            Total:
          </Typography>
          <Heading
            text={`$${getTotalAmount()}`}
            align={TEXT_ALIGN.LEFT}
            color={COLORS.BRIGHT_GREEN}
            variant={HTML_TAGS.H3}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ReviewOrderCardStack;
