import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeartOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-slate-600 border-b">
          <div className="relative w-[50px] h-[50px] mx-auto">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={name}
              fill
              style={{ objectFit: "contain" }}
              priority={false}
            />
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-pointer hover:bg-white hover:text-gray-900"
            >
              Ver Pokemon
            </Link>
          </div>
        </div>
        <div>
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex justify-center items-center gap-1"
          >
            <IoHeartOutline className="text-red-700" />
            No es Favorito
          </Link>
        </div>
      </div>
    </div>
  );
};
