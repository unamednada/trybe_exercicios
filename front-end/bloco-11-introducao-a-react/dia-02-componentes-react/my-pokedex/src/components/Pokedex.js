import React from 'react';
import { Pokemon } from './Pokemon.js';
import { pokemons } from '../data.js';
import './Pokedex.css';

export class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        {pokemons.map(({ name, type, averageWeight, image }) => <Pokemon name={name} type={type} averageWeight={averageWeight} image={image} />)}
      </div>
    );
  }
}