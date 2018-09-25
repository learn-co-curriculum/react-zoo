import React, { Component } from 'react';
import './App.css';
import AnimalCatalogue from './components/AnimalCatalogue';
import Zoo from './components/Zoo';

class App extends Component {

  state = {
    animalArray: [],
    zooArray: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/animals')
    .then(res => res.json())
    .then(animals => {
      this.setState({animalArray: animals})
    })
  }

  handleClick = (animal) => {
    // console.log("EVENT", animal)

    const removeAnimalArray = this.state.animalArray.filter((a) => {
      return a !== animal
      //return whole entire animal Array except selected one
    })
    const zooArray = this.state.zooArray;
    zooArray.push(animal);

    this.setState({
      animalArray: removeAnimalArray,
      zooArray: zooArray
    })
  }

  handleUnselect = (animal) => {
    // console.log("HI")
    // console.log("ANIMAL", animal)

    const removeZooArray = this.state.zooArray.filter((a) => {
      return a !== animal
    })
    const animalArray = this.state.animalArray;
    animalArray.push(animal);

    this.setState({
      animalArray: animalArray,
      zooArray: removeZooArray
    })
  }

  render() {
    // console.log("APP", this.state)

    return (
      <div className="App">
        <AnimalCatalogue animalArray={this.state.animalArray} handleClick={this.handleClick}/>
        <Zoo zooArray={this.state.zooArray} handleUnselect={this.handleUnselect}/>
      </div>
    );
  }
}

export default App;
