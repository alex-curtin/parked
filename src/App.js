import React from "react";
import "./App.css";
import { getParks } from "./services/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>PARKED</h1>
      </div>
    );
  }
}

export default App;
