import './App.css';
import { pokemons } from './data.js';
import { Pokemon } from './components/Pokemon';

function App() {

  const { name, type, averageWeight, image } = pokemons[0];

  return (
    <Pokemon name={name} type={type} averageWeight={averageWeight} image={image} />
  );
}

export default App;
