import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import { PokemonGrid } from "@/pokemons";


export const metadata = {
  title: "Pokemon App",
  description: "Next Pokemon Api test",
};


const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function asyncPokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col bg-[#1A2238] p-5">
      <h1 className="text-5xl my-2 text-white">
        Listado de Pokemons <small>-Estatico-</small>
      </h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
