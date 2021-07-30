import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useMemo } from "react";

import PrivateRoute from "./components/PrivateRoute";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddRecipe from "./views/AddRecipe";

import { RecipeContext } from "./context/RecipeContext";
import { axiosWithAuth } from "./helpers/axiosWithAuth";
import EditRecipe from "./views/EditRecipe";

function App() {
  const initialValues = [
    {
      name: "",
      source: "",
      category: "",
      description: "",
      ingredients: "",
      instructions: "",
    },
  ];
  const [recipe, setRecipe] = useState(initialValues);

  const providerValue = useMemo(() => ({ recipe, setRecipe }), [recipe, setRecipe]);

  return (
    <div className="App">
      <RecipeContext.Provider value={providerValue}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/AddRecipe" component={AddRecipe} />
            <PrivateRoute exact path="/EditRecipe/:id" component={EditRecipe} />
            <Route path="/signup">
              <SignUp />
            </Route>
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
