import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return( 
  <div className="navbar">
    <NavLink to ="/" exact style={linkStyles}>Home</NavLink>
    <NavLink to ="/Movies" exact style={linkStyles}>Movies</NavLink>
    <NavLink to ="/Directors" exact style={linkStyles} >Directors</NavLink>
    <NavLink to ="/Actors" exact style={linkStyles}>Actors</NavLink>
  </div>
  )
}

export default NavBar;
