'use client';

import { useEffect, useState } from 'react';
import { CartContext } from './cart-context';
import { Game } from '@/utils/endpoint';

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const addItem = (game: Game) => {
    const updatedCart = [...cart, game];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const itemExists = (id: string) =>
    cart.findIndex((game) => game.id === id) !== -1;

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, itemExists }}>
      {children}
    </CartContext.Provider>
  );
};
