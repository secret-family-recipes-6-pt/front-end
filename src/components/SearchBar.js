import React from "react";
import { InputBase, Paper, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: ".5rem",
    width: "60%",
  },
});

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} variant="outlined">
      <Select autoWidth="true" defaultValue="All Meals">
        <MenuItem value="breakfast">Breakfast</MenuItem>
        <MenuItem value="lunch">Lunch</MenuItem>
        <MenuItem value="dinner">Dinner</MenuItem>
        <MenuItem value="dessert">Dessert</MenuItem>
        <MenuItem value="snacks">Snacks</MenuItem>
      </Select>
      <InputBase placeholder="Search Meals" />
    </Paper>
  );
}
