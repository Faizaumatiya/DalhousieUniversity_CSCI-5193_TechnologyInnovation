import React, { Component } from "react";
import { COLORS, HTML_TAGS, TEXT_ALIGN } from "../../constants";
import Typography from "@mui/material/Typography";

const Heading = ({
  text,
  variant = HTML_TAGS.H2,
  color = COLORS.BLACK,
  align = TEXT_ALIGN.LEFT,
}) => {
  return (
    <>
      <Typography
        variant={variant}
        gutterBottom
        style={{ fontWeight: "bold", color: { color } }}
        color={color}
        align={align}
      >
        {text}
      </Typography>
    </>
  );
};

export default Heading;
