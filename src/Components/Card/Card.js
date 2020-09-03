import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardUi from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import defaultPoster from "../../img/default.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "transparent",
    width: "270px",
    margin: "10px",
    height: "auto",
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
    color: "white",
  },
  media: {
    height: 140,
  },
});

const Card = ({ title, year, imageUrl, id, openModal }) => {
  const classes = useStyles();
  const url = `https://image.tmdb.org/t/p/w300${imageUrl}`;
  /* 
  useEffect(() => {
    const getId = async (omdbid) => {
      const resp = await fetch(`tmdb-data?id=${omdbid}`);
      const respJSON = await resp.json();
      const imdbId = respJSON.imdb_id;
      console.log(imdbId);
      const linkresp = await fetch(`getPlayer?imdb=${imdbId}`);
      const linkJSON = await linkresp.json();
      console.log(linkJSON);
    };

    getId(id);
  }); */
  return (
    <CardUi className={classes.root}>
      <CardActionArea onClick={() => openModal(id)}>
        <CardMedia
          component="img"
          style={{ height: "auto" }}
          className={classes.media}
          alt={`${title} poster`}
          width="100%"
          image={imageUrl ? url : defaultPoster}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {year}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => openModal(id)}>
          More Info
        </Button>
      </CardActions>
    </CardUi>
  );
};

export default Card;
