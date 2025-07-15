"use client";

import useCartContext from "@/context/cart/useCartContext";
import { Game } from "@/utils/endpoint";
import Image from "next/image";
import Button from "../shared/button";
import Wrapper from "../shared/wrapper";

interface GameItemProps {
  game: Game;
}

const GameItem = ({ game }: GameItemProps) => {
  const { addItem, removeItem, itemExists } = useCartContext();

  const handleAddOrRemove = () => {
    const { id } = game;
    if (itemExists(id)) {
      removeItem(id);
    } else {
      addItem(game);
    }
  };

  return (
    <Wrapper className="flex flex-col w-[327px] sm:w-[380px] h-[436px] border-[0.5px] rounded-2xl p-6 gap-5">
      <>
        <Image alt="" width={332} height={240} src={game.image} className="w-[332px] h-[240px] rounded-tl-2xl	rounded-tr-2xl object-cover" />

        {game.isNew && <span className="z-50 m-3 absolute bg-[#F5F5F4] text-sm px-3 py-2 rounded-md shadow">New</span>}
      </>

      <div className="flex flex-col gap-3">
        <p className="text-sm	leading-4 font-bold text-text-secondary">{game.genre.toLocaleUpperCase()}</p>
        <div className="text-sm	flex items-center justify-between font-bold">
          <p>{game.name}</p>
          <p>${game.price}</p>
        </div>
      </div>

      <Button onClick={handleAddOrRemove} className="px-6 py-2 border border-black font-bold rounded-md">
        {!itemExists(game.id) ? "ADD TO CART" : "REMOVE FROM CART"}
      </Button>
    </Wrapper>
  );
};

export default GameItem;
