import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {

  state = {
    filterGreased: false
  }

  handleClick = () => {
    this.setState({
      filterGreased: !this.state.filterGreased
    })
  }

  filteredStatus = () => {
    return this.state.filterGreased
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HelloWorld hogs={hogs} handleClick={this.handleClick} filteredStatus={this.filteredStatus}/>
      </div>
    );
  }
}

export default App;
