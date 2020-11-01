import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../layout/Home";
import Collections from "../../layout/Collections";
import Search from "../../layout/Search";
import NotFound from "../../layout/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact={true} path="/Unsplash-Clone" component={Home} />
      <Route path="/Unsplash-Clone/collections" component={Collections} />
      <Route path="/Unsplash-Clone/search/:type/:query" component={Search} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
