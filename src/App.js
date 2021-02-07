import Baselayout from "./base/baselayout/Layout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App({pageProps}) {
  return (
    <Router>
      <div className="container-fluid p-0 m-0">
      <Baselayout {...pageProps}>
        <Switch>
          <Route path="/">
            Home page
          </Route>
        </Switch>
      </Baselayout>
      </div>
    </Router>
  );
}

export default App;
