import { SmallPokemon } from "@/typescript";
import { Button, Card, Container, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from 'next/router';

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon: { sprite, name, id } }) => {
  const router = useRouter();

  const onclickById = () => {
    router.push(`/pokemon/${id}`);
  };

  const onclickByName = () => {
    router.push(`/pokemon/name/${name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable css={{ ds: "none" }}>
        <Card.Body css={{
          padding: 1
        }}>
          <Card.Image
            src={sprite}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Divider />
        <Card.Footer
          css={{ padding: 0 }}
        >
          <Container css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 20px'
          }}>
            <Row justify="space-between">
              <Text transform="capitalize">{name}</Text>
              <Text># {id}</Text>
            </Row>
            <Row justify="space-between">
              <Button auto color="primary" onClick={onclickById}>
                By Id
              </Button>
              <Button auto color="secondary" onClick={onclickByName}>
                By Name
              </Button>
            </Row>
          </Container>
        </Card.Footer>
      </Card>
    </Grid>
  );
};