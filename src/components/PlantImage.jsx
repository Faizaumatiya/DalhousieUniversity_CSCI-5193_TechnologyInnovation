import React, { Component } from "react";
import { PLANT_IMAGE_URL } from "../constants";

const getImageUrl = (plantId) => {
  switch (plantId) {
    case "0":
      return { imageurl: PLANT_IMAGE_URL.TOMATO, altText: "Tomato Image" };
    case "1":
      return { imageurl: PLANT_IMAGE_URL.CILANTRO, altText: "Cilantro Image" };
    case "2":
      return { imageurl: PLANT_IMAGE_URL.MINT, altText: "Mint Image" };
    case "3":
      return { imageurl: PLANT_IMAGE_URL.PEPPER, altText: "Pepper Image" };
    case "4":
      return { imageurl: PLANT_IMAGE_URL.SPINACH, altText: "Spinach Image" };
    default:
      return { imageurl: PLANT_IMAGE_URL.TOMATO, altText: "Tomato Image" };
  }
};

const PlantImage = ({ plantId, width = 300, height = 300 }) => {
  const { imageurl, altText } = getImageUrl(plantId);
  return (
    <>
      <img
        src={imageurl}
        alt={altText}
        style={{ width: width, height: height }}
      />
    </>
  );
};

export default PlantImage;
