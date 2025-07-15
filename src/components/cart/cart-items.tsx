import useCartContext from '@/context/cart/useCartContext';
import { Game } from '@/utils/endpoint';
import React from 'react';
import CartItem from './cart-item';
import Wrapper from '../shared/wrapper';

const CartItems = () => {
  const { cart } = useCartContext();

  return (
    <Wrapper className="flex flex-col">
      {cart.map((game, index) => (
        <CartItem
          key={game.id}
          game={game}
          index={index}
          totalItems={cart.length}
        />
      ))}
    </Wrapper>
  );
};

export default CartItems;
