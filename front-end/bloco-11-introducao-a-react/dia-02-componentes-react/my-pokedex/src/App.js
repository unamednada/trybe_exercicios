import './App.css';
import { pokemons } from './data.js';
import { Pokemon } from './components/Pokemon';

function App() {

  return (
    pokemons.map(({ name, type, averageWeight, image }) => <Pokemon name={name} type={type} averageWeight={averageWeight} image={image} />
  ));
}

export default App;
