import { SmallPokemon } from "@/typescript";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { FC } from "react";

interface PokemonCardProps {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon: { sprite, name, id } }) => (
  <Grid xs={6} sm={3} md={2} xl={1}>
    <Card isHoverable isPressable>
      <Card.Body css={{
        padding: 1
      }}>
        <Card.Image
          src={sprite}
          width="100%"
          height={140}
        />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text># {id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  </Grid>
);