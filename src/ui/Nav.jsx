import React from "react";
import logo from "../assets/logo-1200-589b3ef693ce8a750fa4b4704f1e61f2.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
      <Link to="/">
        <figure className="logo">
          <img src={logo} alt="" className="leagueImg" />
        </figure>
        </Link>
        <ul className="nav__links">
          <Link to="/">
            <li className="nav__link">Home</li>
          </Link>
          <Link to="/champions">
            <li className="nav__link">Champions</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
