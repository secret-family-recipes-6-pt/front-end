import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { MenuItem, Select, TextField, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function AddRecipe() {
  const classes = useStyles();

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <div>
            <TextField
              id="outlined-basic"
              label="Recipe Name"
              variant="outlined"
              // value={value}
              onChange={handleChange}
            />
          </div>
          <div>
            {" "}
            <TextField
              id="outlined-basic"
              label="Source of Recipe"
              variant="outlined"
              // value={value}
              onChange={handleChange}
            />
          </div>
          <div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleChange}
            >
              <MenuItem value="Select One">Select One</MenuItem>
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Desert">Desert</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
            </Select>
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Ingredients"
              multiline
              rows={8}
              variant="outlined"
              // value={value}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Instructions"
              multiline
              rows={8}
              variant="outlined"
              // value={value}
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              // onClick={handleSubmit}
              variant="contained"
            >
              Save
            </Button>
            <Button
              // onClick={cancel}
              variant="contained"
            >
              Cancel
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
