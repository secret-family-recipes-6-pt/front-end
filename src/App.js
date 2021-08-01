import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useMemo } from "react";

import PrivateRoute from "./components/PrivateRoute";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddRecipe from "./views/AddRecipe";

import { RecipeContext } from "./context/RecipeContext";
// import { axiosWithAuth } from "./helpers/axiosWithAuth"; UNUSED VARIABLE
import EditRecipe from "./views/EditRecipe";

export default function App() {
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
    <>
      <RecipeContext.Provider value={providerValue}>
        <Router>
          <Switch>
            <PrivateRoute path="/EditRecipe/:id" component={EditRecipe} />
            <PrivateRoute path="/AddRecipe" component={AddRecipe} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" component={SignIn} />
          </Switch>
        </Router>
      </RecipeContext.Provider>
    </>
  );
}
