import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MdCatchingPokemon size={36} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Cart searcher</DropdownMenuItem>
        <DropdownMenuItem>Deck builder</DropdownMenuItem>
        <DropdownMenuItem>My Carts</DropdownMenuItem>
        <DropdownMenuItem>Open boosters</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
