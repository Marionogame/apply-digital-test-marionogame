'use client';

import { Game } from '@/utils/endpoint';
import { createContext } from 'react';

// In this example, I'm using React Context instead of Redux because the state management
// required for this specific challenge is relatively simple and localized to the cart.

export interface CartContext {
  cart: Game[];
  addItem: (game: Game) => void;
  removeItem: (id: string) => void;
  itemExists: (id: string) => boolean;
}

export const CartContext = createContext<CartContext | undefined>(undefined);
