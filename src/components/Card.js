'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const CardComponent = ({ pokemonid }) => {
  const [pokemon, setPokemon] = useState({
    name: '',
    types: [
      {
        slot: 1,
        type: {
          name: 'grass',
          url: 'https://pokeapi.co/api/v2/type/12/',
        },
      },
    ],
    sprites: { front_default: 'default' },
  });

  const getPokemon = async (pokemonid) => {
    const pokeresponse = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonid}`
    );

    // if(!pokeresponse) return

    const data = {
      name: pokeresponse.data.name,
      types: [...pokeresponse.data.types],
      sprites: { front_default: pokeresponse.data.sprites.front_default },
    };

    setPokemon(data);
  };

  useEffect(() => {
    getPokemon(pokemonid);
  }, [pokemonid]);

  return (
    <div className='card-bg'>
      <img src={pokemon.sprites.front_default} />
      <h2>{pokemon.name}</h2>
      {pokemon.types.map((object) => {
        console.log(object);
        return <p>{object.type.name}</p>;
      })}
    </div>
  );
};
