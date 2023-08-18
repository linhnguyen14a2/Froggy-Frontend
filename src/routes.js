import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";

function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:name" component={Details} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
