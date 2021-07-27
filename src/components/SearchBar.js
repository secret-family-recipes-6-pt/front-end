import React, { useState } from "react";
import { InputBase, Paper, Select, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "40%",
  },

  dropdown: {
    padding: "0 .5rem",
    border: "none",
  },

  divider: {
    margin: "0 .3rem",
  },

  searchInput: {
    width: "100%",
  },
});

export default function SearchBar(props) {
  const classes = useStyles();
  const { searchForm, setSearchForm } = props;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  return (
    <Paper component="form" className={classes.root} variant="outlined" onChange={handleChange}>
      <Select name="mealCategory" autoWidth={true} disableUnderline={true} className={classes.dropdown} defaultValue="all" placeholder="All Meals" onChange={handleChange}>
        <MenuItem value="all">All Meals</MenuItem>
        <MenuItem value="breakfast">Breakfast</MenuItem>
        <MenuItem value="lunch">Lunch</MenuItem>
        <MenuItem value="dinner">Dinner</MenuItem>
        <MenuItem value="dessert">Dessert</MenuItem>
        <MenuItem value="snacks">Snacks</MenuItem>
      </Select>
      <Divider orientation="vertical" flexItem className={classes.divider} />
      <InputBase name="searchTerm" placeholder="Search" className={`${classes.searchInput}`} />
    </Paper>
  );
}
