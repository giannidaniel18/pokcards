import React from "react";
import { MdCatchingPokemon } from "react-icons/md";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { MENU_ITEMS } from "@/constants";
import Link from "next/link";

const BurgerMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MdCatchingPokemon size={36} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {MENU_ITEMS.map((item) => (
          <DropdownMenuItem key={item.id}>
            <Link href={`/${item.id}`}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default BurgerMenu;
