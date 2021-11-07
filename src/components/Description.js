import { useLocation } from 'react-router-dom';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
const Description = () => {
  let location = useLocation();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/characteristic/${location.state.data.id}`,
    fetcher
  );

  return (
    <>
      <div className='flex flex-col h-screen bg-white justify-center items-center'>
        <h1 className='capitalize font-semibold text-gray-800'>{location.state.data.name}</h1>
        <div className='flex flex-col md:flex md:flex-row md:items-center md:space-x-6 lg:flex lg:flex-row lg:items-center lg:space-x-6'>
          <img
            className='object-none h-20 bg-white shadow-lg border border-gray-100 '
            src={location.state.data.sprites.front_default}
          ></img>
          <div className='bg-white h-autoflex flex-col space-y-6'>
            <p className='text-md font-medium text-gray-600'>
              {data && data.descriptions[2].description}
            </p>
            <div className='bg-blue-500 py-4 flex w-72 rounded-md justify-around text-white text-sm font-semibold'>
              <div>
                <div>Height: {location.state.data.height}</div>
                <div>Weight: {location.state.data.weight}</div>
              </div>
              <div>
                <div>
                  Abilities:{' '}
                  {location.state.data.abilities.map((ability, index) => {
                    return <div className='text-left'>{ability.ability.name}</div>;
                  })}
                </div>
              </div>
            </div>
            <div className='flex flex-col space-y-4'>
              {' '}
              <h2 className='font-semibold text-gray-800'>Type</h2>
              <div className='flex space-x-2'>
                {location.state.data.types.map((type) => (
                  <div className='bg-green-400 px-2 text-md font-medium text-gray-800 rounded-md w-auto'>
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
