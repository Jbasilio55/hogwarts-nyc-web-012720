import React, { Fragment } from "react";
import Hog from "./hog.js"

class HelloWorld extends React.Component {


  render() {
    return (
      <div>
        <div>
          <button onClick={this.props.handleClick}>Filter By Greased</button>
        </div>
        <h1>Hello World</h1>
        <div className="ui grid container">
          {this.props.filteredStatus() ? this.props.hogs.filter(hog => hog.greased)
          .map(filteredHog => {return <Hog key={filteredHog.name} data={filteredHog}/>}): 
          this.props.hogs.map(hog => {return <Hog key={hog.name} data={hog}/>})}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
