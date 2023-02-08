import { Card, Grid } from "@nextui-org/react";
import { FC } from "react";

interface FavoritePokemonCardProps {
  id: number;
}

export const FavoritePokemonCard: FC<FavoritePokemonCardProps> = ({ id }) => (
  <Grid xs={6} sm={3} md={2} xl={1} key={id}>
    <Card
      isHoverable
      isPressable
      // onClick={onClick}
      css={{ ds: "none", padding: 10 }}
    >
      <Card.Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={'100%'}
        height={140}
      />
    </Card>
  </Grid>
);