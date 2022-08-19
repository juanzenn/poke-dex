// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";
import { pokemonRouter } from "./pokemon";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("pokemon.", pokemonRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
