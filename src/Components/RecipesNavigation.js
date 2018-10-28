import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

import SVGIcon from "../SVGIcon";

const RecipesNavigation = () => {
  return (
    <ul className="sidebar__navigation__ul">
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/breakfast" activeClassName="active">
          <SVGIcon name="breakfast" />
          Breakfast
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/lunch" activeClassName="active">
          <SVGIcon name="lunch" />
          Lunch
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/dinner" activeClassName="active">
          <SVGIcon name="dinner" />
          Dinner
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/desert" activeClassName="active">
          <SVGIcon name="desert" />
          Desert
        </NavLink>
      </li>
      <li className="sidebar__navigation__ul__li">
        <NavLink to="/smoothies" activeClassName="active">
          <SVGIcon name="smoothie" />
          Smoothies
        </NavLink>
      </li>
    </ul>
  );
};

export default RecipesNavigation;
