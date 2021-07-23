import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import SigninPage from "./views/SigninPage";
function App() {
  return (
    <Router>
      <div>
        <Link to="/home">Bring to home</Link>
      </div>

      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/">
          <SigninPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
