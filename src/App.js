import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const App = () => (
	<div className="App">
		<Switch>
			<Route path="/" component={HomePage} exact/>
			<Route path="/shop/hats" component={HatsPage} exact/>
		</Switch>
  </div>
);

export default App;
