import useSWR from 'swr';
import axios from 'axios';
import Card from './Card';
import { useState } from 'react';

const Home = () => {
  const [next, setNext] = useState('https://pokeapi.co/api/v2/pokemon/');

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(next, fetcher);

  console.log(data && data);
  return (
    <>
      <div className='flex flex-wrap space-x-2 space-y-2 h-screen md:grid lg:grid md:grid-cols-5 lg:grid-cols-5 bg-white md:place-items-center lg:place-items-center items-center justify-center'>
        {data && data.results.map((pokemon) => <Card pokemon={pokemon} />)}
      </div>
      <div className='flex space-x-4'>
        <button
          onClick={() => {
            setNext(data.next);
          }}
          className='px-2 bg-blue-500 text-white text-sm font-medium rounded-md'
        >
          Load more
        </button>
        <button
          onClick={() => {
            if (data.previous) {
              setNext(data.previous);
            }
          }}
          className='px-2 bg-blue-500 text-white text-sm font-medium rounded-md'
        >
          Previous
        </button>
      </div>
    </>
  );
};

export default Home;
