import React, { Component } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { COLORS, HTML_TAGS, ICONS } from "../../constants";

export default function SmallOrderReviewCard({
  icon = ICONS.POT,
  title,
  amount,
  isSelected = false,
}) {
  const theme = useTheme();
  const CardIcon = icon;
  return (
    <Card
      sx={{
        border: isSelected ? `2px solid ${COLORS.BRIGHT_GREEN}` : "",
        borderSpacing: "10px",
        display: "flex",
        justifyContent: "flex-start",
        width: 200,
        height: 73,
        boxShadow: "none",
        paddingX: 1.5,
        borderRadius: 2,
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      }}
    >
      <Box
        sx={{
          my: 1.5,
          padding: 1.5,
          width: 50,
          height: 50,
          borderRadius: 50,
          background: COLORS.SECONDARY,
          color: COLORS.BRIGHT_GREEN,
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        <div className="card-icon">
          <CardIcon />
        </div>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant={HTML_TAGS.BODY_1}
            sx={{ fontWeight: 600 }}
          >
            {title}
          </Typography>
          <Typography
            variant={HTML_TAGS.BODY_2}
            color={COLORS.LIGHT_GREEN}
            sx={{ fontWeight: 600 }}
            component="div"
          >
            {amount}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
