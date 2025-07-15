import Footer from '@/components/footer/footer';
import Navbar from '@/components/navbar/navbar';
import { CartProvider } from '@/context/cart/cart-provider';
import { GenreProvider } from '@/context/genre/genre-provider';
import React from 'react';

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  return (
    <CartProvider>
      <GenreProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </GenreProvider>
    </CartProvider>
  );
};

export default App;
