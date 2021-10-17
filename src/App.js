import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Splash from "./containers/Splash";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/">
          <Splash />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
