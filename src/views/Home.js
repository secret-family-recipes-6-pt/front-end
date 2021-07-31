// import PrivateRoute from "./components/PrivateRoute";
import SearchBar from "../components/SearchBar";
import { Button, Toolbar, AppBar, Typography, Grid } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import React, { useState } from "react";
import RecipeCards from "../components/RecipeCards";



export default function Home() {
  const [searchForm, setSearchForm] = useState({
    searchCategory: "all",
    searchTerm: "",
  });

  let history = useHistory();
  const logout = () => {
    console.log("Logged out success!");
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar >
          <Grid container justifyContent="space-between">
            <Typography variant="h6">Secret Family Recipes</Typography>
            <SearchBar searchForm={searchForm} setSearchForm={setSearchForm} />
            <Link
              to={'/AddRecipe'}
              style={{ textDecoration: "none", margin: "0 -15rem 0 0"}}
            >
              <Button variant="contained" style={{backgroundColor: "green"}}>Add Recipe</Button>
            </Link>
            <Button onClick={logout} variant="contained">
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      <RecipeCards searchForm={searchForm} />
    </div>
  );
}
