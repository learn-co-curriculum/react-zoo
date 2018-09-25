import React, { Component } from 'react';

class AnimalCard extends Component {

  renderButton = () => {
    if (this.props.handleUnselect === undefined) {
      return <button onClick={() => this.props.handleClick(this.props.animal)}>select</button>
    } else {
      return <button onClick={() => this.props.handleUnselect(this.props.animal)}>unselect</button>
    }
  }

  render() {
    // console.log("AnimalCard", this.props.handleClick)
    // console.log("Animal Card Props", this.props)
    console.log("Unselected Function", this.props.handleUnselect)

    return (
      <div className="animal-card">
        {/* <img src={this.props.animal.img} /> */}
        <h2>{this.props.animal.name}</h2>
        <p>{this.props.animal.type}</p>
        <p>{this.props.animal.sex}</p>
        {this.renderButton()}
      </div>
    );
  }
}

export default AnimalCard

// {id: 1, name: "Joey", type: "kangaroo", img: "https://i.ytimg.com/vi/WlaEXGISF7I/maxresdefault.jpg", sex: "male"}
