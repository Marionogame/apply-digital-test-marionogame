import React from 'react';
import CartItems from './cart-items';
import OrderSummary from './order-summary';
import Wrapper from '../shared/wrapper';

const Order = () => {
  return (
    <Wrapper className="flex flex-col justify-between gap-20 pb-12 xl:flex-row">
      <CartItems />
      <OrderSummary />
    </Wrapper>
  );
};

export default Order;
