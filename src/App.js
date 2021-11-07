import React from "react";
import "tailwindcss/tailwind.css";
import "./App.css";

import Routing from "./components/Routing/Routing";

function App() {
  return (
    <div className="overflow-auto ">
      <div className="w-full py-4 mb-8 text-5xl text-center bg-yellow-300 border shadow">
          Pokémon
          </div>
      <Routing />
    </div>
  );
}

export default App;
