import axios from "axios";

import useSWRInfinite from "swr/infinite";
const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function usePokemonList() {
    const { data, error, size, setSize, isValidating } =  useSWRInfinite(
        (index, prevData) => {
            if (!prevData)
                return `https://pokeapi.co/api/v2/pokemon/`;
            else
                return prevData.next;
        },
        fetcher
    );

    return {data: data?.flatMap( data=> data.results ), isValidating, error, next: () => {  setSize(size+1) }};
}
