import * as React from "react";
import Heading from "./Heading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { COLORS, HTML_TAGS, TEXT_ALIGN } from "../../constants";

export default function PurchaseOptionCard({
  variant,
  features,
  price,
  isSelected = false,
}) {
  return (
    <>
      <Box
        sx={{
          border: isSelected ? `3px solid ${COLORS.BRIGHT_GREEN}` : "",
          background: COLORS.SECONDARY,
          padding: 5,
          borderRadius: 4,
          width: 320,
          marginX: 5,
        }}
      >
        <Heading text={variant} variant={HTML_TAGS.H4} />
        <hr />
        <Box sx={{ minHeight: 200 }}>
          {features &&
            features.map((feature) => (
              <Typography variant={HTML_TAGS.BODY_1}>{feature}</Typography>
            ))}
        </Box>
        <Heading
          text={`$${price}`}
          variant={HTML_TAGS.H4}
          color={COLORS.BRIGHT_GREEN}
          align={TEXT_ALIGN.CENTER}
        />
        <Heading
          text={"CAD"}
          variant={HTML_TAGS.BODY_1}
          align={TEXT_ALIGN.CENTER}
        />
      </Box>
    </>
  );
}
