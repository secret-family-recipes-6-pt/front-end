import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import HomaPage from "./components/HomePage";
import AddEditRecipe from "./components/AddEditRecipe";
import { Button, Toolbar, AppBar, Typography, Grid } from "@material-ui/core";

function App() {
  const logout = () => {};
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Grid container justifyContent="space-between">
              <Typography variant="h6">Secret Family Recipes</Typography>
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
        {
          //will need to be a private eventually
          <Route exact path="/AddEditRecipe" component={AddEditRecipe} />
        }
      </div>
    </Router>
  );
}

export default App;
