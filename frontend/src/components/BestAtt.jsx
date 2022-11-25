/* eslint-disable */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/rub.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const BestAtt = () => {
  return (
    <div className="rub-container">
      <div className="back-container">
        <div className="txt-container">
          <h2 className="rub-title1">Top 3</h2>
          <h2 className="rub-title2">des parcs</h2>
        </div>
        <div className="card-container">
          <Card
            sx={{ width: "20vw", height: "45vh", borderRadius: "2rem" }}
            className="card-cont3"
          >
            <CardActionArea>
              <CardMedia className="img-card3" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="rub-tit1"
                >
                  Europapark
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <span className="rub-tit">2ème</span>
            </CardActions>
          </Card>
          <Card
            sx={{ width: "20vw", height: "45vh", borderRadius: "2rem" }}
            className="card-cont1"
          >
            <CardActionArea>
              <CardMedia className="img-card1" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="rub-tit1"
                >
                  Disneyland Paris
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <span className="rub-tit">1er</span>
            </CardActions>
          </Card>
          <Card
            sx={{ width: "20vw", height: "45vh", borderRadius: "2rem" }}
            className="card-cont2"
          >
            <CardActionArea>
              <CardMedia className="img-card2" />
              <CardContent>
                <span className="rub-tit1">Disneyland Orlando</span>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <span className="rub-tit">3ème</span>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BestAtt;
