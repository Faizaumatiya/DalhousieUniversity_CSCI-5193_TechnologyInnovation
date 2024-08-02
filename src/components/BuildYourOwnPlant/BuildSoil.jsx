import React from "react";
import { MOCK_PUCHASE_OPTION } from "../../constants";
import ProductPage from "./ProductPage";

const BuildSoil = ({ stateChangeHandler }) => {
  return (
    <>
      <ProductPage
        product={MOCK_PUCHASE_OPTION.SOIL}
        stateChangeHandler={stateChangeHandler}
      />
    </>
  );
};

export default BuildSoil;
