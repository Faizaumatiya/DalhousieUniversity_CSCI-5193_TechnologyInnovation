import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { COLORS } from "../constants";

const steps = ["Pot", "Seeds", "Soil", "Lights", "Review Order"];

export default function PlantStepper({ activeStep, updateStepperState }) {
  const stepClickHandler = (stepIndex) => {
    updateStepperState(stepIndex);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-root .Mui-completed": {
                color: COLORS.BRIGHT_GREEN, // circle color (COMPLETED)
              },
              "& .MuiStepLabel-root .Mui-active": {
                color: COLORS.PRIMARY, // circle color (ACTIVE)
              },
            }}
            onClick={() => {
              stepClickHandler(index);
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
