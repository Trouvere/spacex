import React from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../.././img/logo.svg";
import "./header.css";

const Header = ({ rockets, changeRocket }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo Space X" className="logo" />
      </Link>
      <nav className="main-nav nav">
        <ul className="list">
          {rockets.map((item, i) => (
            <li key={i} className="item">
              <Link
                to="/rocket"
                onClick={() => {
                  // e.preventDefault();
                  changeRocket(item);
                }}
                className="item-link"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="secondary-nav">
        <ul className="list">
          <li className="item">
            <NavLink exact to="/" className="item-link">
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to="/calendar" className="item-link">
              Calendar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
