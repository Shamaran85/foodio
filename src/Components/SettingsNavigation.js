import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

import SVGIcon from "../SVGIcon";

const SettingsNavigation = () => {
  return (
    <ul className="sidebar__navigation__ul">
      <li className="sidebar__navigation__ul__li">
        <NavLink exact to="/" activeClassName="active">
          <SVGIcon name="dashboard" />
          Dashboard
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/breakfast" activeClassName="active">
          <SVGIcon name="settings" />
          Settings
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/lunch" activeClassName="active">
          <SVGIcon name="breakfast" />
          Lunch
        </NavLink>
      </li>
    </ul>
  );
};

export default SettingsNavigation;
