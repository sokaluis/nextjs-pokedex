import { NextPage } from "next";
import { Button } from "@nextui-org/react";
import { Layout } from "@/components/layouts";

const HomePage: NextPage = () => {
  const Component = () => <Button>Click me</Button>;
  return (
    <Layout title="Listado de Pokemons">
      {<Component />}
      <h1>Hola Mundo</h1>
    </Layout>
  );
};

export default HomePage;