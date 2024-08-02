import React from "react";
import ProductPage from "./ProductPage";
import { MOCK_PUCHASE_OPTION } from "../../constants";

const BuildLights = ({ stateChangeHandler }) => {
  return (
    <>
      <ProductPage
        product={MOCK_PUCHASE_OPTION.LIGHT}
        stateChangeHandler={stateChangeHandler}
      />
    </>
  );
};

export default BuildLights;
