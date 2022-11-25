import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "../style/park_card.css";
import { Button } from "@mui/material";

function ParkCard({ parks }) {
  return (
    <div>
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
              {park.country_name}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{park.currency_code}</Button>
            <Button size="small">{park.park_type_id}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default ParkCard;
