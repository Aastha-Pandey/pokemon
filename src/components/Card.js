import useSWR from 'swr';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react';
const Card = ({ pokemon }) => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`, fetcher);

  return (
    <>
      <Link
        className='flex flex-col bg-yellow-300'
        to={`/${pokemon.name}`}
        state={{ data: data && data }}
      >
        <img src={data && data.sprites.front_default}></img>
        <p className='capitalize text-sm font-semibold text-center text-gray-800'>{pokemon.name}</p>
      </Link>
    </>
  );
};

export default Card;
