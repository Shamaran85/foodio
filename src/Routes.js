import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Breakfast from "./Pages/Breakfast";
import Lunch from "./Pages/Lunch";
import Dinner from "./Pages/Dinner";
import Desert from "./Pages/Desert";
import Smoothies from "./Pages/Smoothies";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/breakfast" component={Breakfast} />
    <Route path="/lunch" component={Lunch} />
    <Route path="/dinner" component={Dinner} />
    <Route path="/desert" component={Desert} />
    <Route path="/smoothies" component={Smoothies} />
  </Switch>
);

export default Routes;
