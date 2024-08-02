import React, { Component, useState } from "react";
import { Box } from "@mui/material";
import Description from "./Description";
import Heading from "./Heading";
import { HTML_TAGS, ICONS, MOCK_PUCHASE_OPTION } from "../../constants";
import { Stack } from "@mui/system";
import SmallOrderReviewCard from "./SmallOrderReviewCard";

const SEED_OPTIONS = Object.values(MOCK_PUCHASE_OPTION.SEED);

const BuildSeeds = ({ stateChangeHandler }) => {
  const [seeds, setSeeds] = useState(SEED_OPTIONS[0]);

  const selectSeedHandler = (seed) => {
    setSeeds(seed);
    stateChangeHandler(seed);
  };

  return (
    <>
      <Box className="home-banner-container">
        <Box
          className="home-bannerImage=container"
          sx={{ width: 600, marginX: 5 }}
        >
          <Heading text={"Select seeds"} variant={HTML_TAGS.H4} />

          <Description
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima asperiores consectetur cum temporibus error eligendi neque possimus reprehenderit sunt quae consequuntur dolore, placeat officia dicta quidem, totam esse reiciendis."
            }
          />
        </Box>

        <Box classname="home-text-section" sx={{ paddingX: 10 }}>
          <Stack spacing={2}>
            {SEED_OPTIONS.map((seed, index) => {
              return (
                <div
                  onClick={() => {
                    selectSeedHandler(seed);
                  }}
                >
                  <SmallOrderReviewCard
                    title={seed.name}
                    amount={seed.price}
                    icon={ICONS.PLANT}
                    isSelected={seeds.id === seed.id}
                  />
                </div>
              );
            })}
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default BuildSeeds;
