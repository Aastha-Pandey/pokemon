import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { AbilityInfo } from './AbilityInfo';

const Description = () => {
  const { name } = useParams();
  const { picture_url, abilities, height, weight, types, gender, color, characteristic, shape } =
    usePokemonDetails(name);

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center text-xl align-middle  mt-28 space-y-4'>
        <div className='flex flex-col h-full bg-gray-200 '>
          <img src={picture_url} className='w-80 ' />
        </div>
        <div className='text-xl font-semibold text-yellow-900 capitalize'>{name}</div>
        <div className='text-lg tracking-wide font-medium text-yellow-900 '>{characteristic}</div>
      </div>
      <div className='flex justify-center pt-2 space-x-2'>
        <div className='bg-yellow-600 text-yellow-50 font-medium text-sm py-1 px-2 rounded-md'>
          Height: {height}
        </div>
        <div className='bg-yellow-600 text-yellow-50 font-medium text-sm py-1 px-2 rounded-md'>
          Weight: {weight}
        </div>
        {gender && (
          <div className='bg-yellow-600 text-yellow-50 font-medium text-sm py-1 px-2 rounded-md'>
            Gender: {gender}
          </div>
        )}
        {shape && (
          <div className='bg-yellow-600 text-yellow-50 font-medium text-sm py-1 px-2 rounded-md'>
            Shape: {shape}
          </div>
        )}
        {color && (
          <div className='bg-yellow-600 text-yellow-50 font-medium text-sm py-1 px-2 rounded-md'>
            Color: {color}
          </div>
        )}
      </div>
      <div className='flex justify-center pt-4 space-x-4 text-xl font-semibold text-yellow-800'>
        {' '}
        Abilities{' '}
      </div>
      <nav className='flex justify-center py-4 space-x-4'>
        {abilities.map((item) => (
          <Link
            to={`abilities/${item}`}
            className='text-blue-50 focus:bg-blue-900 px-4 py-2 text-xl bg-blue-600 rounded'
          >
            {item}
          </Link>
        ))}
      </nav>

      <Routes>
        <Route path='abilities/:ability' element={<AbilityInfo />} />
      </Routes>
      <div className='flex justify-center pt-4 space-x-4 text-xl text-yellow-900 font-semibold'>
        {' '}
        Types{' '}
      </div>
      <nav className='flex justify-center py-4  space-x-4'>
        {types.map((type) => (
          <div className='px-4 py-2 text-green-50 text-lg font-medium bg-green-600 rounded'>
            {type}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Description;
