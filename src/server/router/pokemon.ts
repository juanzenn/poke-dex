import { PokemonClient } from "pokenode-ts";
import { z } from "zod";
import { createRouter } from "./context";

export const pokemonRouter = createRouter()
  .query("get-group", {
    input: z.object({
      page: z.number(),
    }),
    async resolve({ input }) {
      const api = new PokemonClient();
      const { page } = input;
      const pokemonsId: number[] = [];

      for (let i = 24 * page - 23; i <= 24 * page; i++) {
        if (i > 898) continue;

        pokemonsId.push(i);
      }

      const pokemons = Promise.all(
        pokemonsId.map(async (pokemonId) => {
          const { id, name, sprites } = await api.getPokemonById(pokemonId);

          return { id, name, sprites };
        })
      );

      return pokemons;
    },
  })
  .query("get-single", {
    input: z.object({ id: z.number() }),
    async resolve({ input }) {
      const api = new PokemonClient();
      const { id } = input;
      const pokemon = await api.getPokemonById(id);

      return pokemon;
    },
  });
