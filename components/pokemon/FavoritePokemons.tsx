import { Grid } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

interface FavoritePokemonsProps extends PropsWithChildren {
  pokemons: number[];
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => (
  <Grid.Container gap={2} direction='row' justify='flex-start'>
    {pokemons.map(id => (
      <FavoritePokemonCard key={id} id={id} />
    ))}
  </Grid.Container>
);