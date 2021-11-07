import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function AbilityInfo() {
  const { ability } = useParams();
  console.log(ability);
  const { data } = useSWR(`https://pokeapi.co/api/v2/ability/${ability}`, fetcher);

  if (!data) return 'Loading...';
  const effectDesc = data.effect_entries.find((item) => {
    return item.language.name === 'en';
  });

  return (
    <div className='text-center text-yellow-900 tracking-wide text-lg font-medium'>
      {' '}
      {effectDesc.effect}{' '}
    </div>
  );
}
