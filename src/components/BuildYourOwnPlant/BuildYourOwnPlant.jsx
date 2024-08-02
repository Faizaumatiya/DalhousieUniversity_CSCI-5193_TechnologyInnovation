import React, { useEffect, useState } from "react";
import PlantStepper from "../Stepper";
import Button from "@mui/material/Button";
import BuildPot from "./BuildPot";
import BuildSeeds from "./BuildSeeds";
import BuildSoil from "./BuildSoil";
import BuildLights from "./BuildLights";
import ReviewOrder from "./ReviewOrder";
import { MOCK_PUCHASE_OPTION, COLORS, BUTTON_ALIGN } from "../../constants";
import { Box } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import { Grid } from "@mui/material";
import CheckoutPage from "./CheckoutPage";

const { POT, SEED, SOIL, LIGHT } = MOCK_PUCHASE_OPTION;

const BuildYourOwnPlant = () => {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [pot, setPot] = useState(POT.NORMAL);
  const [seed, setSeed] = useState(SEED.TOMATO);
  const [soil, setSoil] = useState(SOIL.NORMAL);
  const [light, setLight] = useState(LIGHT.NORMAL);
  const [plant, setPlant] = useState({ pot, seed, soil, light });

  const incrementStepper = () => {
    if (activeStep <= 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const decrementStepper = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleConfirmOrder = () => {
    setActiveStep(0);
    handleBackdropClose();
  };

  const handleRejectOrder = () => {
    setActiveStep(0);
  };

  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };

  const handleBackdropOpen = () => {
    setBackdropOpen(true);
  };

  const NavigationButton = ({
    label,
    onClickHandler,
    float = BUTTON_ALIGN.CENTER,
    disabled = false,
  }) => {
    return (
      <>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            onClickHandler();
          }}
          color="success"
          sx={{ background: COLORS.BRIGHT_GREEN, float: float }}
          disabled={disabled}
        >
          {label}
        </Button>
      </>
    );
  };

  useEffect(() => {
    setPlant({ pot, seed, soil, light });
  }, [pot, seed, soil, light]);

  return (
    <>
      <Box
        sx={{
          background: COLORS.LIGHT_GREY,
          paddingX: 20,
          paddingY: 3,
        }}
      >
        <PlantStepper
          activeStep={activeStep}
          updateStepperState={setActiveStep}
        />
      </Box>

      <Box
        sx={{
          background: COLORS.LIGHT_GREY,
          paddingX: 20,
          maxHeight: 500,
        }}
      >
        {activeStep === 0 ? <BuildPot stateChangeHandler={setPot} /> : <></>}
        {activeStep === 1 ? <BuildSeeds stateChangeHandler={setSeed} /> : <></>}
        {activeStep === 2 ? <BuildSoil stateChangeHandler={setSoil} /> : <></>}
        {activeStep === 3 ? (
          <BuildLights stateChangeHandler={setLight} />
        ) : (
          <></>
        )}
        {activeStep === 4 ? (
          <ReviewOrder
            plant={plant}
            confirmOrderHandler={handleConfirmOrder}
            rejectOrderHandler={handleRejectOrder}
          />
        ) : (
          <></>
        )}

        <Grid
          direction={"row"}
          container
          justify="space-between"
          sx={{ paddingX: 25, paddingY: 5 }}
        >
          <Grid xs={6} md={6}>
            <NavigationButton
              label={"Back"}
              onClickHandler={decrementStepper}
              float={BUTTON_ALIGN.LEFT}
              disabled={activeStep <= 0}
            />
          </Grid>
          <Grid xs={6} md={6} textAlign={"right"}>
            {activeStep < 4 ? (
              <NavigationButton
                label={"Next"}
                onClickHandler={incrementStepper}
                float={BUTTON_ALIGN.RIGHT}
              />
            ) : (
              <NavigationButton
                label={"Checkout"}
                onClickHandler={handleBackdropOpen}
                float={BUTTON_ALIGN.RIGHT}
              />
            )}
          </Grid>
        </Grid>
      </Box>

      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: "blur(10px)",
        }}
        open={backdropOpen}
      >
        <CheckoutPage
          plant={plant}
          handleCloseBtnAction={handleBackdropClose}
          handleConfirmOrder={handleConfirmOrder}
        />
      </Backdrop>
    </>
  );
};

export default BuildYourOwnPlant;
