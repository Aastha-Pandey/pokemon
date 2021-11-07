import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
const Description = () => {
  let location = useLocation();
  const [abilityName, setAbilityName] = useState();
  const characteristicFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: characteristic } = useSWR(
    `https://pokeapi.co/api/v2/characteristic/${location.state.data.id}`,
    characteristicFetcher
  );

  const genderFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: gender } = useSWR(
    `https://pokeapi.co/api/v2/gender/${location.state.data.id}`,
    genderFetcher
  );
  const colorFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: color } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-color/${location.state.data.id}`,
    colorFetcher
  );
  const shapeFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: shape } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-shape/${location.state.data.id}`,
    shapeFetcher
  );

  const abilitiesFetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: abilities } = useSWR(
    abilityName ? `https://pokeapi.co/api/v2/ability/${abilityName}` : null,
    abilitiesFetcher
  );

  return (
    <>
      <div className='flex flex-col h-screen bg-white justify-center items-center'>
        <h1 className='capitalize font-semibold text-gray-800'>{location.state.data.name}</h1>
        <div className='flex flex-col md:flex md:flex-row md:items-center md:space-x-6 lg:flex lg:flex-row lg:items-center lg:space-x-6'>
          <img
            className='object-none h-20 bg-white shadow-lg border border-gray-50 '
            src={location.state.data.sprites.front_default}
          ></img>
          <div className='bg-white h-autoflex flex-col space-y-6'>
            <p className='text-md font-medium text-gray-600'>
              {characteristic && characteristic.descriptions[2].description}
            </p>

            <div className='bg-blue-300 py-4 flex w-72 rounded-md justify-around text-white text-sm font-semibold'>
              <div>
                <div>Color: {color && color.name}</div>
                <div>Gender: {gender && gender.name}</div>
                <div>Shape: {shape && shape.name}</div>
                <div>Height: {location.state.data.height}</div>
                <div>Weight: {location.state.data.weight}</div>
              </div>
              <div>
                <div className='flex flex-col space-y-2'>
                  Abilities:{' '}
                  {location.state.data.abilities.map((ability) => {
                    return (
                      <button
                        onClick={() => {
                          setAbilityName(ability.ability.name);
                        }}
                        className='text-left bg-blue-500 rounded-md font-medium text-sm px-2'
                      >
                        {ability.ability.name}
                      </button>
                    );
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
          <div>{abilities && abilities.effect_entries[0].effect}</div>
        </div>
      </div>
    </>
  );
};

export default Description;
