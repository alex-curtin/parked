import React from "react";
import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import ParkDetails from "./components/ParkDetails";

import { getParks, getParkDetails } from "./services/api";
import ParksList from "./components/ParksList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parks: [],
      selected: '',
    };
  }

  handleSubmit = async (location) => {
    const parks = await getParks(location);
    this.setState({ parks });
  }

  selectPark = async (id) => {
    const park = await getParkDetails(id);
    this.setState({
      selected: park,
    })
  }

  closeModal = () => {
    this.setState({
      selected: '',
    })
  }

  render() {
    const { parks, selected } = this.state;

    return (
      <div className="App">
        <Header>
          <Search handleSubmit={this.handleSubmit} />
        </Header>
        <ParksList
          parks={parks}
          selectPark={this.selectPark}
        />
        <ParkDetails
          park={selected}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}

export default App;
