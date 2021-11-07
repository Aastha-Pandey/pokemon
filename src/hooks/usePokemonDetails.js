import useSWR from "swr";
import axios from "axios";


const fetcher = (url) => axios.get(url).then((res) => res.data);


export function usePokemonDetails(pokemonName) {

    const { data} =  useSWR( `https://pokeapi.co/api/v2/pokemon/${pokemonName}`, fetcher );



    return {
        name: pokemonName,
        abilities: data?.abilities?.map( abl =>  abl.ability.name) ?? [],
        picture_url: data?.sprites?.other['official-artwork'].front_default,
        height: `123`,
        weight: `12`,
        shape: `goal`,
        color: `red`,
        type: [`grass`, `poison`],
    };
}
