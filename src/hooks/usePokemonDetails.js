import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);
const genderfetcher = (url) => axios.get(url).then((res) => res.data);
const colorfetcher = (url) => axios.get(url).then((res) => res.data);
const shapefetcher = (url) => axios.get(url).then((res) => res.data);
const characteristicfetcher = (url) => axios.get(url).then((res) => res.data);

export function usePokemonDetails(pokemonName) {
  const { data: pokemonDetails } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    fetcher
  );
  const { data: gender } = useSWR(
    pokemonDetails && `https://pokeapi.co/api/v2/gender/${pokemonDetails.id}`,
    genderfetcher
  );
  const { data: color } = useSWR(
    pokemonDetails && `https://pokeapi.co/api/v2/pokemon-color/${pokemonDetails.id}`,
    colorfetcher
  );
  const { data: characteristic } = useSWR(
    pokemonDetails && `https://pokeapi.co/api/v2/characteristic/${pokemonDetails.id}`,
    characteristicfetcher
  );
  const { data: shape } = useSWR(
    pokemonDetails && `https://pokeapi.co/api/v2/pokemon-shape/${pokemonDetails.id}`,
    shapefetcher
  );
  const description = characteristic?.descriptions.find((item) => {
    return item.language.name === 'en';
  });

  return {
    name: pokemonName,
    abilities: pokemonDetails?.abilities?.map((abl) => abl.ability.name) ?? [],
    picture_url: pokemonDetails?.sprites?.other['official-artwork'].front_default,
    height: pokemonDetails?.height,
    weight: pokemonDetails?.weight,
    types: pokemonDetails?.types?.map((type) => type.type.name) ?? [],
    gender: gender?.name,
    color: color?.name,
    characteristic: description?.description,
    shape: shape?.name,
  };
}
