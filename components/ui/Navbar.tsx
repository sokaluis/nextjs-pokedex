import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>
      <Image
        alt="Image app"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
        width={70}
        height={70}
      />
      <Text color="white" h2>P</Text>
      <Text color="white" h3>okemon</Text>
      <Spacer css={{
        flex: 1
      }} />
      <Text color="white">Favoritos</Text>
    </div>
  );
};