import { useState } from 'react';
import './App.css';
import { CardComponent } from './components/Card';

function App() {
  const [pokemonid, setPokemonid] = useState(1);

  return (
    <div className='App'>
      <CardComponent pokemonid={pokemonid} />
      <button
        onClick={() => {
          setPokemonid(pokemonid + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default App;
