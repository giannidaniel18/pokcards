import React from "react";

import { Button } from "./Button";
import { Avatar } from "../user/avatar";
import { ThemeToggler } from "./ThemeToggler";

const NavBar = () => {
  return (
    <div className=" flex justify-between flex-row items-center w-full h-20 sticky top-0 z-50 p-1 border">
      <h1 className="">Logo</h1>

      <div className=" flex flex-row items-center gap-4">
        <p>Item1</p>
        <p>Item1</p>
        <p>Item1</p>
        <p>Item1</p>
        <Avatar />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default NavBar;
