'use client';

import Breadcrumb from '@/components/cart/breadcrumb';
import CartHeader from '@/components/cart/cart-header';
import Order from '@/components/cart/order';
import Wrapper from '@/components/shared/wrapper';
import useCartContext from '@/context/cart/useCartContext';
import React from 'react';

const Cart = () => {
  const { cart } = useCartContext();

  return (
    <Wrapper className="custom-container flex flex-col justify-center gap-12">
      <Breadcrumb />
      <CartHeader />
      {cart.length > 0 && <Order />}
    </Wrapper>
  );
};

export default Cart;
