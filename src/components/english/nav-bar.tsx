import { NavLink } from "react-router-dom";
import { LavariniMoreira, NavBar, NavBarLinks } from "../styles/nav-bar";

function EnglishNavBar() {
  return (
    <NavBar>
      <LavariniMoreira>
        <NavLink to="/">
          <img src="/images/lavarinimoreira.png" alt="" />
        </NavLink>
      </LavariniMoreira>
      <NavBarLinks>
        <NavLink className="first-link nav-a" to="/">
          Home
        </NavLink>
        <NavLink className="first-link nav-a" to="/about">
          About
        </NavLink>
        <NavLink className="nav-a" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-a" to="/gallery">
          Gallery
        </NavLink>
        <NavLink className="nav-a" to="/contact">
          Contact
        </NavLink>
      </NavBarLinks>
    </NavBar>
  );
}

export default EnglishNavBar;
