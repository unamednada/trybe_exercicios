import React from 'react';

export class Pokemon extends React.Component {

  render() {

    return (
      <div className="poke-div">
        <h1>{this.props.name}</h1>
        <p>{this.props.type}</p>
        <p>Average weight: {this.props.averageWeight.value} {this.props.averageWeight.measurementUnit}</p>
        <img src={this.props.image}alt={this.props.name}></img>
      </div>
    )
  }

}