import React from 'react';
import './Pokemon.css';

export class Pokemon extends React.Component {

  render() {

    return (
      <section className="poke-div">
        <div>
          <h1>{this.props.name}</h1>
          <p>{this.props.type}</p>
          <p>Average weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        </div>
        <img src={this.props.image}alt={this.props.name}></img>
      </section>
    )
  }

}