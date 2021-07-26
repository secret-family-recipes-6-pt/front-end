import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddRecipe from "./components/AddEditRecipe";
// import AddRecipe from "./views/AddEditRecipe";

function App() {
  const [currentUser, setCurrentUser] = useState({ username: "", email: "", password: "" });
  console.log(currentUser);
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
          <SignIn setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
