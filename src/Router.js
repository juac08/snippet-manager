import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Register';
import Logout from './Components/Logout'
import Footer from './Components/Footer'
import UserContext from "../src/Context/UserContext";


const Router = () => {
  const {logout} = React.useContext(UserContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        {logout && 
          <Route exact path='/logout'><Logout/></Route>
        }
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
