import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Sidebar from "./Sidebar";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
