"use client";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../user/avatar";
import { ThemeToggler } from "./ThemeToggler";
import BurgerMenu from "./BurgerMenu";
import UserMenu from "../user/UserMenu";

const NavBar = () => {
  return (
    <div className=" flex flex-row justify-between  items-center w-full h-20 sticky top-0 z-50 p-1 border">
      <div className="sm:hidden">
        <BurgerMenu />
      </div>
      <h1 className="">Logo</h1>

      <div className="hidden sm:flex sm:flex-row gap-8 ">
        <p>Item1</p>
        <p>Item1</p>
        <p>Item1</p>
        <p>Item1</p>
      </div>

      <div className="flex flex-row gap-2">
        <ThemeToggler />
        <UserMenu />
      </div>
    </div>
  );
};

export default NavBar;
