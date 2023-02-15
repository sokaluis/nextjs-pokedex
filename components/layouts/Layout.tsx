import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { Navbar } from '../ui';

interface LayoutProps extends PropsWithChildren<{}> {
  title: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Fernando Herrera" />
        <meta name="description" content={`Información sobre el pokemon : ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <link rel="icon" href={`${origin}/thirteen.svg`} />
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta property="og:description" content={`Esta es la página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
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