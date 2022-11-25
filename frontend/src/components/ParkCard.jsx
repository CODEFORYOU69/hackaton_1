import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../style/park_card.css";
import { Button } from "@mui/material";
import SimpleModal from "./SimpleModal";

function ParkCard({ parks }) {
  const [open, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <SimpleModal open={open} handleCloseModal={handleCloseModal} />
      <div className="park-card-container">
        {parks.map((park) => (
          <Card className="card_park" sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500"
              image={park.image ? park.image : ""}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {park.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button disabled size="small">
                {park.countryCode}
              </Button>
              <Button disabled size="small">
                {park.parkType}
              </Button>
              <Button
                variant="contained"
                className="btn-info"
                onClick={handleOpenModal}
              >
                Plus d'infos
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ParkCard;
