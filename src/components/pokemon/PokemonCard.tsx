import { cn } from "@/lib/utils";
import Image from "next/image";
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
    <figure
      className={cn(
        `relative ${cardSize} cursor-pointer overflow-hidden rounded-xl border p-4 shadow-md dark:shadow-slate-700`
      )}
    >
      <div className="flex flex- items-center gap-2 background">
        <Image alt={alt} fill src={img} />
      </div>
    </figure>
  );
};
