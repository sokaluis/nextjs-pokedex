import { NextPage } from "next";
import { Button } from "@nextui-org/react";

const HomePage: NextPage = () => {
  const Component = () => <Button>Click me</Button>;
  return (
    <>
      {<Component />}
      <h1>Hola Mundo</h1>
    </>
  );
};

export default HomePage;