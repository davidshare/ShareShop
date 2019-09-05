import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";
import ShopPage from "./pages/shop/shop.component";

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  </div>
);

export default App;
