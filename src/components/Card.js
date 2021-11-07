import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
const Card = ({ pokemon, id }) => {
  return (
    <>
      <Link to={`/${pokemon.name}`} className="transform shadow hover:scale-150">
        <div className="flex flex-col h-full bg-gray-200 ">
          <img  className="w-40"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={ pokemon.name }
          ></img>
        </div>
        <p className="text-sm font-semibold text-center text-gray-800 capitalize">
          {pokemon.name}
        </p>
      </Link>
    </>
  );
};

export default Card;
