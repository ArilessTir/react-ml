import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav>
    <div className="">
      <h1> Titanic prediction</h1>
    </div>

    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Prediction">Prediction</NavLink>
    </div>
  </nav>
);

export default Nav;
