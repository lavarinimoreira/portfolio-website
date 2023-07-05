import { NavLink } from "react-router-dom";
import { LavariniMoreira, NavBar, NavBarLinks } from "../styles/nav-bar";
import Player from "../shared/player-button";
import LanguageSelector from "../shared/language-button";

interface NavBarProps {
  toggleLanguage: () => void;
}

function PortugueseNavBar({ toggleLanguage }: NavBarProps) {
  return (
    <NavBar>
      <LavariniMoreira>
        <Player />
        <NavLink to="/">
          <img src="/images/lavarinimoreira.png" alt="" />
        </NavLink>
      </LavariniMoreira>
      <NavBarLinks>
        <NavLink className="first-link nav-a" to="/">
          Início
        </NavLink>
        <NavLink className="first-link nav-a" to="/about">
          Sobre
        </NavLink>
        <NavLink className="nav-a" to="/projects">
          Projectos
        </NavLink>
        <NavLink className="nav-a" to="/gallery">
          Galeria
        </NavLink>
        <NavLink className="nav-a" to="/contact">
          Contato
        </NavLink>
        <LanguageSelector toggleLanguage={toggleLanguage} />
      </NavBarLinks>
    </NavBar>
  );
}

export default PortugueseNavBar;
