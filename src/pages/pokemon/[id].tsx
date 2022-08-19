import Head from "next/head";
import { useRouter } from "next/router";
import React, { JSXElementConstructor } from "react";
import { trpc } from "../../utils/trpc";

type PokemonPageProps = unknown;

const PokemonPage: JSXElementConstructor<PokemonPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: currentPokemon } = trpc.useQuery([
    "pokemon.get-single",
    { id: +(id || 1) },
  ]);

  console.log(currentPokemon);
  // 905 Pokémon
  return (
    <div className="flex flex-col w-3/4 h-3/4 gap-4">
      <Head>
        <title>{currentPokemon?.name.toUpperCase()}</title>
      </Head>

      <button
        className="w-fit bg-slate-500 text-white px-6 py-2 rounded-md cursor-pointer hover:text-black hover:bg-teal-300 focus:ring focus:ring-teal-100 transition-colors font-semibold shadow-sm"
        onClick={() => router.back()}
      >
        Go back
      </button>
      <article className="bg-slate-500 rounded-md shadow-xl flex-1">
        {/* todo: add the pokemon information:
          sprites (in a carousel)
          name etc
          types
          and evolutions (for now)
        */}
      </article>
    </div>
  );
};

export default PokemonPage;
