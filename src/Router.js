import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          Login
        </Route>
        <Route exact path="/register">
          Register
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
