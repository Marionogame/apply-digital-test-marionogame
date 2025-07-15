import React from 'react';
import Wrapper from '../shared/wrapper';

interface OrderDetailProps {
  name: string;
  price: number;
}

const OrderDetail = ({ name, price }: OrderDetailProps) => {
  return (
    <Wrapper className="flex items-center justify-between gap-14">
      <p>{name}</p>
      <p>${price}</p>
    </Wrapper>
  );
};

export default OrderDetail;
