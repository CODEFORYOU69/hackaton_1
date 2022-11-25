/* eslint-disable */
/* eslint eqeqeq: 0 */
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function FavoriteCard({ park }) {
  const [isFavorite, setIsFavorite] = React.useState(true);
  const removeStorage = () => {
    const storedData = window.localStorage.parks.split(",");
    const newData = storedData.filter((ID) => ID != park.ID);
    window.localStorage.parks = newData;
    setIsFavorite(!isFavorite);
  };
  return isFavorite ? (
    <Card className="card-favorite">
      <CardHeader
        action={<IconButton aria-label="settings" />}
        title={park.NAME}
      />
      <CardMedia
        className="favorite-image"
        component="img"
        height="194"
        image={park.IMAGE}
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon onClick={removeStorage} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ) : (
    <div />
  );
}
