import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function PlantCard({ plant }) {
  const [plantId, setPlantId] = useState(0);
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300, marginRight: 20 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} variant="h1" gutterBottom>
          {plant.name}
        </Typography>
        <Typography variant="h5">Health: {plant.health} %</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Water Level: {plant.waterLevel} %
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to="/plant-details"
          state={{ plant: plant }}
          onClick={() => setPlantId(1)}
          style={{ textDecoration: "none" }}
        >
          <Button
            size="small"
            variant="contained"
            onClick={() => setPlantId(1)}
          >
            Check Status
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
