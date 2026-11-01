import type { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
  enCarrito: number;
  children: ReactNode;
}

export function Layout({ enCarrito, children }: Props) {
  return (
    <>
      <Header enCarrito={enCarrito} />
      <main>{children}</main>
      <Footer />
    </>
  );
}