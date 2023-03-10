import { useState } from "react";
import { Layout } from "@/components/layouts";
import { Pokemon } from "@/typescript";
import { getPokemonInfo, localFavorite } from "@/utils";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import confetti from "canvas-confetti";

interface PokemonPageProps {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonPageProps> = ({ pokemon }) => {
  const { name } = pokemon;

  const [isFavorite, setIsFavorite] = useState(localFavorite.exitInFavorite(pokemon.id));

  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(pokemon.id);
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
  const mockPokeArr = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: mockPokeArr.map(id => ({
      params: { id },
    })),
    // paths: [
    //   {
    //     params: {
    //       id: '1'
    //     }
    //   }
    // ],
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string; };
  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400 // revalidate each 24h
  };
};

export default PokemonPage;;
