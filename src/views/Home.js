// import PrivateRoute from "./components/PrivateRoute";
import SearchBar from "../components/SearchBar";
import { Button, Toolbar, AppBar, Typography, Grid } from "@material-ui/core";
import { Route, useHistory } from "react-router-dom";
import React, { useState } from "react";

export default function Home() {
  const [searchForm, setSearchForm] = useState({
    category: "all",
    searchTerm: "",
  });

  let history = useHistory();
  const logout = () => {
    history.push("/");
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Typography variant="h6">Secret Family Recipes</Typography>
            <SearchBar searchForm={searchForm} setSearchForm={setSearchForm} />
            <Button onClick={logout} variant="contained">
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>

      {
        //Jose needs to build the private route first.
        /* <PrivateRoute exact path="/private" component={HomaPage} /> */
      }

      {
        //This is the route for login uncomment when done.
        /* <Route exact path="/" component={Login} /> */
      }
    </div>
  );
}
