import { NextPage, GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/typescript";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "@/components/pokemon";

interface HomeProps {
  pokemons: SmallPokemon[],
}

const HomePage: NextPage<HomeProps> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data: {
    results
  } } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  };
};

export default HomePage;