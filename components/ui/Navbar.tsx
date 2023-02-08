import { randomIntFromInterval } from "@/utils";
import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

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
      <Link href='/' passHref>
        <div style={{ display: 'flex', alignItems: 'baseline', paddingTop: '5px' }}>
          <Image
            alt="Image app"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${randomIntFromInterval(1, 151)}.svg`}
            width={30}
            height={30}
          />
          <Text color="white" h2 css={{
            paddingLeft: 10
          }}>P</Text>
          <Text color="white" h3>okemon</Text>
        </div>
      </Link>
      <Spacer css={{
        flex: 1
      }} />
      <Link href='/favorites' passHref>
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};