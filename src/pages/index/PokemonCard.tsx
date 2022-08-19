import Image from "next/image";
import { useRouter } from "next/router";
import { JSXElementConstructor } from "react";

type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
};

const pokemonCardClass =
  "p-4 rounded-md shadow text-center bg-slate-600 text-white cursor-pointer hover:bg-slate-500 hover:-translate-y-1 transition-all";

const PokemonCard: JSXElementConstructor<PokemonCardProps> = ({
  id,
  name,
  image,
}) => {
  const router = useRouter();

  return (
    <div
      className={pokemonCardClass}
      onClick={() => router.push(`/pokemon/${id}`)}
    >
      <strong className="capitalize block">{name}</strong>
      <Image
        className="block"
        src={image}
        alt={`sprite for ${name}`}
        width={96}
        height={96}
      />
    </div>
  );
};

export default PokemonCard;
