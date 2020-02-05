import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    height: "100%"
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box p={2} minWidth={300} width={"33%"}>
      <Card className={classes.card}>
        <Link href="/p/[id]" as={`/p/${props.show.id}`}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.show.image.medium}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.show.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.show.genres}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <Button size="small" color="primary">
            <Link href="/p/[id]" as={`/p/${props.show.id}`}>
              <a>Подробнее </a>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
