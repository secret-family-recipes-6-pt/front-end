import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddEditRecipe from "./views/AddEditRecipe";

import { RecipeContext } from "./context/RecipeContext";

function App() {
  const [allUsers, setAllUsers] = [];
  const [currentUser, setCurrentUser] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    axios
      .get(" https://secret-family-recipes6.herokuapp.com/api/users/")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch();
  }, []);

  const [recipe, setRecipe] = useState(null);
  const providerValue = useMemo(() => ({ recipe, setRecipe }), [recipe, setRecipe]);
  return (
    <div className="App">
      <RecipeContext.Provider value={providerValue}>
        <Router>
          <Switch>
            <Route path="/home/AddEditRecipe">
              <AddEditRecipe />
            </Route>

            <Route path="/home">
              <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
            </Route>

            <Route path="/signup">
              <SignUp setCurrentUser={setCurrentUser} />
            </Route>

            <Route path="/">
              <SignIn allUsers={allUsers} setCurrentUser={setCurrentUser} />
            </Route>
          </Switch>
        </Router>
      </RecipeContext.Provider>
    </div>
  );
}

export default App;
