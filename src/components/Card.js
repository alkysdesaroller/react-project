import axios from 'axios';
import { useEffect, useState } from 'react';

export const CardComponent = ({ pokemonid }) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    types: [
      {
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    sprites: [{ front_default: 'default' }],
  });

  const getPokemon = async (pokemonid) => {
    const pokeresponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonid}`
    );
    setPokemon(pokeresponse.data);
  };

  useEffect(() => {
    getPokemon(pokemonid);
  }, [pokemonid]);

  return (
    <div className='card-bg'>
      <h2>{pokemon.name}</h2>
      {pokemon.types.map((object) => {
        console.log(object);
        return <p>{object.type}</p>;
      })}
    </div>
  );
};
