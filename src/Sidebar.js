import React from "react";
import "./Sidebar.css";
import RecipesNavigation from "./Components/RecipesNavigation";
import SettingsNavigation from "./Components/SettingsNavigation";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__logo">CMS Panel</p>
      <p className="sidebar__navigation__settings__header">Settings</p>
      <SettingsNavigation />
      <p className="sidebar__navigation__recipes__header">Recipes</p>
      <RecipesNavigation />
    </div>
  );
};

export default Sidebar;
