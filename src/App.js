import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddRecipe from "./components/AddEditRecipe";
// import AddRecipe from "./views/AddEditRecipe";

function App() {
  const [allUsers, setAllUsers] = [];
  const [currentUser, setCurrentUser] = useState({ username: "", email: "", password: "" });

  useEffect(() => {
    axios
      .get(" https://secret-family-recipes6.herokuapp.com/api/users/	")
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/home/add-edit-recipe">
          <AddRecipe />
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
  );
}

export default App;
