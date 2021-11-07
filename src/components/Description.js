import React from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { AbilityInfo } from './AbilityInfo';

const Description = () => {
  const { name } = useParams();
  const { picture_url, abilities } = usePokemonDetails(name);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center text-xl align-middle">
        <div className="flex flex-col h-full bg-gray-200 ">
          <img src={picture_url} className="w-80 " />
        </div>
        <div className="text-xl font-semibold uppercase">{name}</div>
      </div>



      <div className="flex justify-center pt-4 space-x-4 text-lg font-semibold">    Abilities </div>
      <nav className="flex justify-center pb-4 space-x-4">
        {abilities.map((item) => (
          <Link to={`abilities/${item}` }>
            <div className="px-4 py-2 text-2xl bg-yellow-300 rounded"> {item} </div>
          </Link>
        ))}
      </nav>

      <Routes>
        <Route path="abilities/:ability" element={ <AbilityInfo/> } />
      </Routes>
    </div>
  );
};

export default Description;
