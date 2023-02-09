import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { Pokemon, PokemonListResponse } from '@/typescript';
import { getPokemonInfo } from '@/utils';
import localFavorites from '@/utils/localFavorites';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const { name } = pokemon;

  const [isFavorite, setIsFavorite] = useState(localFavorites.exitInFavorite(pokemon.id));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsFavorite(!isFavorite);
    if (isFavorite) return;
    confetti({
      zIndex: 9999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    });
  };

  return (
    <Layout title={name}>
      <Grid.Container css={{
        marginTop: '5px'
      }}
        gap={2}
      >
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ ds: "none", padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button color="gradient" bordered={!isFavorite} onPress={onToggleFavorite}>
                {isFavorite ? 'Guardado' : "Guardar en Favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites</Text>
              <Container display="flex" direction="row" justify="center">
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                />
                <Image
                  alt={pokemon.name}
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: {
    results
  } } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    paths: results.map(({ name }) => ({
      params: { name },
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string; };
  const pokemon = await getPokemonInfo(name);

  return {
    props: {
      pokemon
    }
  };
};

export default PokemonByNamePage;