import React from "react";
import "./Sidebar.css";
import Navigation from "./Components/Navigation";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__logo">CMS Panel</p>
      <p className="sidebar__navigation__header">Pages</p>
      <Navigation />
      <p className="sidebar__navigation__header">Settings</p>
    </div>
  );
};

export default Sidebar;
