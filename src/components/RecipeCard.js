import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Card,
  makeStyles,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";
import AddEditRecipe from "../views/AddRecipe";

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
        <Grid container justify="space-between">
          <Grid item>
            <Button href="/EditRecipe" color="primary" size="small">
              Edit
            </Button>
          </Grid>
          <Grid item>
            <Button color="secondary" size="small">
              Delete
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
