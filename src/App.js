import React, { Component } from 'react';
import './App.css';

import SVGIcon from "./SVGIcon";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-top">
            <p className="sidebar-logo">CMS Panel</p>
          </div>
          <div className="sidebar-navigation">
            <p className="sidebar-navigation-title">Pages</p>
            <a href="#breakfast"><i class="fas fa-coffee"></i>Breakfast</a>
            <a href="#lunch"><i class="fas fa-utensils"></i>Lunch</a>
              <div className="navbar-item">
              <span>
                <SVGIcon name="breakfast" width="32px" className="testTwo" />
                </span>
              <a href="#dinner"> Dinner </a>
              </div>
              <a href="#desert"> Desert </a>
              <a href="#smoothies"> Smoothies </a>

              <p className="sidebar-navigation-title">Settings</p>
          </div>
        </div>
        <div className="content">
          <p>Content</p>
        </div>
      </div>
    );
  }
}

export default App;
