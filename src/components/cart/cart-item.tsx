import useCartContext from "@/context/cart/useCartContext";
import { Game } from "@/utils/endpoint";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import Wrapper from "../shared/wrapper";

interface CartItemProps {
  game: Game;
  index: number;
  totalItems: number;
}

const CartItem = ({ game, index, totalItems }: CartItemProps) => {
  const { removeItem } = useCartContext();

  const handleRemoveItem = () => {
    removeItem(game.id);
  };

  return (
    <Wrapper className={`flex flex-col py-5 px-4 gap-6 ${index + 1 !== totalItems ? "border-b" : ""} sm:flex-row`}>
      <div className="flex justify-between">
        <Image alt="" src={game.image} width={256} height={156} className="w-[256px] h-[156px]" />
        <X onClick={handleRemoveItem} className="cursor-pointer sm:hidden" />
      </div>

      <div className="flex flex-col gap-3 mt-2">
        <p className="text-sm leading-4 font-bold text-text-secondary">{game.genre.toLocaleUpperCase()}</p>
        <p className="text-xl font-bold">{game.name}</p>
        <p className="text-sm font-light text-secondary break-words">{game.description}</p>
      </div>

      <div className="flex flex-col items-end justify-between ml-auto">
        <X onClick={handleRemoveItem} className="hidden cursor-pointer sm:block" />
        <p className="flex items-end justify-end text-xl font-bold">${game.price}</p>
      </div>
    </Wrapper>
  );
};

export default CartItem;
