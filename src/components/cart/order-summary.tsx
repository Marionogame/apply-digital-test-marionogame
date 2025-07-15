import useCartContext from "@/context/cart/useCartContext";
import React from "react";
import OrderDetail from "./order-detail";
import { Game } from "@/utils/endpoint";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";

const OrderSummary = () => {
  const { cart } = useCartContext();

  const calculateOrderTotal = () => {
    return cart.reduce((total: number, game: Game) => total + game.price, 0);
  };

  return (
    <Wrapper className="flex flex-col gap-10">
      <div className="border flex flex-col gap-8 py-8 px-6 rounded-lg md:min-w-[600px]">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold leading-7">Order Summary</h1>
          <p className="text-lg font-extralight">
            {cart.length} item{`${cart.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <OrderDetail key={item.id} name={item.name} price={item.price} />
          ))}
        </div>
        <div className="border-b"></div>
        <div className="flex items-center justify-between gap-14">
          <p className="text-xl	font-bold">Order Total</p>
          <p>${calculateOrderTotal().toFixed(2)}</p>
        </div>
      </div>
      <Button className="px-6 py-4 bg-secondary text-white text-base rounded-lg">Checkout</Button>
    </Wrapper>
  );
};

export default OrderSummary;
