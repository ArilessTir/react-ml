import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <AppBar>
    <Toolbar>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/Prediction"> Prediction </NavLink>
    </Toolbar>
  </AppBar>
);

export default Nav;
