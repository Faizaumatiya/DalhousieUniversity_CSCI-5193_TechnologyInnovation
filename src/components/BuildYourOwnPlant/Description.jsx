import React, { Component } from "react";
import { HTML_TAGS } from "../../constants";
import Typography from "@mui/material/Typography";

const Description = ({ text }) => {
  return (
    <>
      <Typography variant={HTML_TAGS.BODY_2} gutterBottom>
        {text}
      </Typography>
    </>
  );
};

export default Description;
