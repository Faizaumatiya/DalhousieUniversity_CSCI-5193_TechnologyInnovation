import React, { Component, useState } from "react";
import { Box } from "@mui/material";
import Description from "./Description";
import Heading from "./Heading";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ProductPage from "./ProductPage";
import { MOCK_PUCHASE_OPTION } from "../../constants";

const BuildPot = ({ stateChangeHandler }) => {
  const [color, setColor] = useState("white");

  const handleChange = (event) => {
    setColor(event.target.value);
    stateChangeHandler(event.target.value);
  };

  return (
    <>
      {/* <Box className="home-banner-container" sx={{ bgcolor: "#FAD4D4" }}>
        <Box
          className="home-bannerImage=container"
          sx={{ width: 500, marginX: 20, flexGrow: 6, background: "#00000040" }}
        >
          <Heading text={"Build your Pot"} />

          <Description
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum minima asperiores consectetur cum temporibus error eligendi neque possimus reprehenderit sunt quae consequuntur dolore, placeat officia dicta quidem, totam esse reiciendis."
            }
          />
        </Box>

        <Box classname="home-text-section" sx={{ padding: 0, flexGrow: 4 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={color}
            onChange={handleChange}
            label="Pot"
          >
            <MenuItem value={"white"}>White</MenuItem>
            <MenuItem value={"black"}>Black</MenuItem>
          </Select>
        </Box>
      </Box> */}
      <ProductPage
        product={MOCK_PUCHASE_OPTION.POT}
        stateChangeHandler={stateChangeHandler}
      />
    </>
  );
};

export default BuildPot;
