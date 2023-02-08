import { useEffect, useState } from 'react';
import { NextPage } from "next";
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui/";
import { localFavorite } from '@/utils';
import { FavoritePokemons } from '@/components/pokemon';

const FavoritePages: NextPage = () => {
  const [pokemons, setPokemons] = useState<number[]>([]);

  useEffect(() => {
    setPokemons(localFavorite.favoritesPokemons());
  }, []);

  return (
    <Layout title="Pokemones Favoritos">
      {!pokemons.length && (
        <NoFavorites />
      )}
      {pokemons.length && (
        <FavoritePokemons pokemons={pokemons} />
      )}
    </Layout>
  );
};

export default FavoritePages;