import React, { Component } from 'react';

import AnimalCard from './AnimalCard';

class Zoo extends Component {
  render() {
    // console.log("PROPS", this.props)
    return (
      <div>
        <h2>My Zoo</h2>
        <div className="container-row">
        {/* <AnimalCard /> */}
        {this.props.zooArray.map((animal) => {
          return <AnimalCard animal={animal} handleUnselect={this.props.handleUnselect}/>
        })}
        </div>
      </div>
    );
  }
}

export default Zoo;
