import React, { Component } from 'react';

import AnimalCard from './AnimalCard';

class AnimalCatalogue extends Component {


    showAnimalCard = () => {

        return this.props.animalArray.map((animal) =>

          {return <AnimalCard animal={animal} handleClick={this.props.handleClick}/>}

        )
    }

  render() {
    // console.log("ANIMAL CATALOGUE", this.props)

    return (
      <div>
        <h2>Animal Catalogue</h2>
        <div className="container-row">
          {this.showAnimalCard()}
        </div>
      </div>
    );
  }
}

export default AnimalCatalogue;
