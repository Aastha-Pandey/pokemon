import Card from "./Card";
import  usePokemonList from '../hooks/usePokemonList';

const Home = () => {
  const { data, next, isValidating } = usePokemonList();

  console.log(data);

  return (
    <div className="container flex flex-col items-center h-screen py-5 m-auto">
      <div className="grid items-center justify-center grid-cols-3 gap-16 md:grid-cols-5">
        {data?.map((pokemon, index) => <Card pokemon={pokemon} key={index} id = {index+1}  />)}
      </div>

      {isValidating && "Loading..."}

      <div className="p-4 ">
        <button
          onClick={() => {
            next();
          }}
          className="p-2 text-sm font-medium text-white bg-blue-500 rounded-md"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
