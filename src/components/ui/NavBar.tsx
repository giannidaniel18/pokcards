"use client";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import BurgerMenu from "./BurgerMenu";
import UserMenu from "../user/UserMenu";
import Link from "next/link";
import { MENU_ITEMS } from "@/constants";
import useUserStore from "@/stores/auth/userStore";
import { Button } from "./Button";

const NavBar = () => {
  const { userName } = useUserStore();
  console.log("userName", userName);
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
        {userName ? (
          <UserMenu />
        ) : (
          <Button variant={"outline"}>
            <Link href={`/auth/login`}>Logo</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
