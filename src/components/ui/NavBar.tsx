"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../user/avatar";
import { ThemeToggler } from "./ThemeToggler";
import BurgerMenu from "./BurgerMenu";
import UserMenu from "../user/UserMenu";
import Link from "next/link";

const MENU_ITEMS: { id: string; label: string }[] = [
  { id: "cart_searcher", label: "Cart searcher" },
  { id: "deck_builder", label: "Deck builder" },
  { id: "my_carts", label: "My carts" },
  { id: "boosters", label: "Boosters" },
];

const NavBar = () => {
  return (
    <div className=" flex flex-row justify-between items-center w-full h-20 sticky top-0 z-50 px-4 ">
      <div className="sm:hidden">
        <BurgerMenu />
      </div>
      <Link href={`/`}>Logo</Link>
      <div className="hidden sm:flex sm:flex-row gap-8 ">
        {MENU_ITEMS.map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-row gap-2">
        <ThemeToggler />
        <UserMenu />
      </div>
    </div>
  );
};

export default NavBar;
