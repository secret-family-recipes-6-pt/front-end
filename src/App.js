import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useMemo } from "react";
import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddEditRecipe from "./components/AddEditRecipe";

import { RecipeContext } from "./context/RecipeContext";

function App() {
  const [recipe, setRecipe] = useState(null);
  const providerValue = useMemo(
    () => ({ recipe, setRecipe }),
    [recipe, setRecipe]
  );
  return (
    <div className="App">
      <RecipeContext.Provider value={providerValue}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>
            {
              //will need to be a private eventually
              <Route exact path="/AddEditRecipe" component={AddEditRecipe} />
            }

            <Route path="/">
              <SignIn />
            </Route>
          </Switch>
        </Router>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
