"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

import Link from "next/link";
import { FC } from "react";

type Props = {
  img: string;
  alt: string;
  size?: "xs" | "md" | "xl";
  id: string;
};

export const PokemonCard: FC<Props> = ({ img, alt, id, size = "md" }) => {
  const cardSize =
    size === "md"
      ? "sm:h-[380px] sm:w-[278px] h-[250px] w-[180px]"
      : size === "xl"
      ? "sm:h-[780px] sm:w-[578px] h-[550px] w-[380px]"
      : //TODO ver despues si uso este size
        "sm:h-[380px] sm:w-[278px] h-[250px] w-40";

  return (
    <Link key={id} href={`/${id}`}>
      <div
        className={cn(
          ` relative ${cardSize} cursor-pointer overflow-hidden rounded-xl border p-4 shadow-md dark:shadow-slate-700`
        )}
      >
        <Image alt={alt} fill src={img} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
      </div>
    </Link>
  );
};
