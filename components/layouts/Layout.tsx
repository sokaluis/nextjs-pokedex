import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';

interface LayoutProps extends PropsWithChildren<{}> {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Fernando Herrera" />
        <meta name="description" content={`Información sobre el pokemon : ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main style={{
        padding: '0 20px'
      }}>
        {children}
      </main>
    </>
  );
};