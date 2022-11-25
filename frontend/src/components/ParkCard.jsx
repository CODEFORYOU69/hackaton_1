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
  return (
    <div>
      {parks.map((park) => (
        <Card key={park.id} className="card_park" sx={{ maxWidth: 1000 }}>
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
            <FavoriteBorderIcon onClick={() => addStorage(park)} />

            <FavoriteIcon onClick={() => removeStorage(park)} />

            <Button size="small">{park.countryCode}</Button>
            <Button size="small">{park.parkType}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ParkCard;
