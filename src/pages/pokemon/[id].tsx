import { Button } from "@mantine/core";
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

  const handleGoBack = () => {
    router.back();
  };

  // 905 Pokémon
  return (
    <div className="flex flex-col w-3/4 h-3/4 gap-4">
      <Head>
        <title>{currentPokemon?.name.toUpperCase()}</title>
      </Head>

      <Button onClick={handleGoBack} className="w-fit">
        Go back
      </Button>
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
