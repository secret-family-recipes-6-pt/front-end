import React from "react";

import {
  Typography,
  Button,
  Card,
  makeStyles,
  CardContent,
  CardActions,
  Grid,
} from "@material-ui/core";

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

export default function RecipePage() {
  const classes = useStyles();

  const data = {
    name: "Grandma's Rice, Beans and Pork Chops.",
    source: "Grandma",
    category: "Dinner",
    description:
      "This my grandma's old recipe past down to her from her Mom and now to me.",
    ingredients: "Rice, beans and pork.",
    instructions:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  };
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12}>
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
              Title: {data.name}
            </Typography>
            <Typography className={classes.pos} color="textPrimay">
              Recipe Source: {data.source}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Category: {data.category}
            </Typography>
            <Typography className={classes.pos} variant="body2" component="p">
              <Typography color="primary">Description</Typography>

              {data.description}
            </Typography>
            <Typography className={classes.pos} variant="body2" component="p">
              <Typography color="primary">Ingredients</Typography>
              {data.ingredients}
            </Typography>
            <Typography variant="body2" component="p">
              <Typography color="primary">Instructions</Typography>
              {data.instructions}
            </Typography>
          </CardContent>

          <CardActions>
            <Grid container justify="space-between">
              <Grid item>
                <Button color="primary" size="small">
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
      </Grid>
    </Grid>
  );
}
