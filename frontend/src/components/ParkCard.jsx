/* eslint-disable */
/* eslint eqeqeq: 0 */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../style/park_card.css";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SimpleModal from "./SimpleModal";

function ParkCard({ parks }) {
  const addStorage = (park) => {
    const storedData = window.localStorage.parks
      ? window.localStorage.parks.split(",")
      : [];
    if (!storedData.includes(park.id.toString())) {
      storedData.push(park.id);
      window.localStorage.parks = storedData;
    }
  };
  const removeStorage = (park) => {
    const storedData = window.localStorage.parks.split(",");
    const newData = storedData.filter((id) => id != park.id);
    window.localStorage.parks = newData;
  };
  const [open, setOpenModal] = React.useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="park-card-container">
      <SimpleModal open={open} handleCloseModal={handleCloseModal} />
      <div className="park-card-container">
        {parks.map((park) => (
          <Card className="card_park" sx={{ maxWidth: 1000 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="500"
              image={park.IMAGE ? park.IMAGE : ""}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {park.NAME}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {park.DESCRIPTION}
              </Typography>
            </CardContent>
            <CardActions>
              <Button disabled size="small">
                {park.COUNTRY}
              </Button>
              <Button disabled size="small">
                {park.THEME}
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
