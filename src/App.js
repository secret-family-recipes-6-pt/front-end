import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from "./views/SignUp";
import SignIn from "./views/SignIn";
import Home from "./views/Home";
import AddEditRecipe from "./components/AddEditRecipe";

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
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
  );
}

export default App;
