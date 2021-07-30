import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  makeStyles,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RecipeCard({ cardInfo }) {
  const classes = useStyles();
  const { id } = useParams();
  console.log("id in recipecard component: ", id);
  // console.log("card info id: ", cardInfo.id);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Secret Recipe
        </Typography>
        <Typography variant="h5" component="h2">
          Title: {cardInfo.recipe_name}
        </Typography>
        <Typography className={classes.pos} color="textPrimay">
          Recipe Source: {cardInfo.recipe_source}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Category: {cardInfo.category}
        </Typography>
        <Typography className={classes.pos} variant="body2" component="p">
          <Typography color="primary">Description</Typography>

          {cardInfo.description}
        </Typography>
        <Typography className={classes.pos} variant="body2" component="p">
          <Typography color="primary">Ingredients</Typography>
          {cardInfo.ingredients}
        </Typography>
        <Typography variant="body2" component="p">
          <Typography color="primary">Instructions</Typography>
          {cardInfo.instructions}
        </Typography>
      </CardContent>

      <CardActions>
        <Grid container justify="flex-end">
          <Grid item>
            <Link
              to={`/EditRecipe/${cardInfo.id}`}
              style={{ textDecoration: "none" }}
            >
              <Button color="primary" size="small">
                Edit
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
