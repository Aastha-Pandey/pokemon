import useSWR from 'swr';
import axios from 'axios';
import Card from './Card';
import React from 'react';

const Home = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon', fetcher);

  return (
    <>
      <div className='flex flex-wrap space-x-2 space-y-2 h-screen md:grid lg:grid md:grid-cols-5 lg:grid-cols-5 bg-white md:place-items-center lg:place-items-center items-center justify-center'>
        {data && data.results.map((pokemon) => <Card pokemon={pokemon} />)}
      </div>
    </>
  );
};

export default Home;
