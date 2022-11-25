/* eslint-disable */
/* eslint eqeqeq: 0 */
import React, { useEffect } from "react";
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

function ParkCard({
  parks,
  setGetID,
  handleClick,
  getID,
  country,
  theme,
  attraction,
}) {
  const addStorage = (park) => {
    const storedData = window.localStorage.parks
      ? window.localStorage.parks.split(",")
      : [];
    if (!storedData.includes(park.ID.toString())) {
      storedData.push(park.ID);
      window.localStorage.parks = storedData;
    }
  };
  const removeStorage = (park) => {
    const storedData = window.localStorage.parks.split(",");
    const newData = storedData.filter((ID) => ID != park.ID);
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
      {parks
        .filter((park) => park.NAME.includes(attraction))
        .filter((park) => country.length === 0 || park.COUNTRY === country)
        .filter((park) => theme.length === 0 || park.THEME === theme)
        .map((park) => (
          <Card key={park.ID} className="card_park" sx={{ maxWidth: 1000 }}>
            <CardMedia
              onClick={() => {
                handleClick();
                setGetID(park.ID);
              }}
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
              <FavoriteBorderIcon onClick={() => addStorage(park)} />

              <FavoriteIcon onClick={() => removeStorage(park)} />
              <Button disabled size="small">
                {park.COUNTRY}
              </Button>
              <Button disabled size="small"></Button>
              <Button
                variant="contained"
                className="btn-info"
                onClick={handleOpenModal}
              >
                Plus d'infos
              </Button>
              <SimpleModal
                open={open}
                handleCloseModal={handleCloseModal}
                park={park}
              />
            </CardActions>
          </Card>
        ))}
    </div>
  );
}

export default ParkCard;
