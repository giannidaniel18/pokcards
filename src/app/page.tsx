import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { Input } from "@/components/ui/Input";
import Marquee from "@/components/ui/Marquee";
import { data } from "@/constants/mock";

export default function Home() {
  return (
    <div className=" flex flex-col gap-12 w-full px-2 items-center">
      <span className="pointer-events-none text-4xl whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center sm:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Poke Cards
      </span>
      <div className="flex flex-row gap-2 items-center">
        <Input className="w-full sm:w-[350px]" placeholder="Search your card" type="search" />
      </div>
      <div className="flex flex-col gap-6 w-full md:w-[1000px] p-2 md:p-0">
        <Marquee className="[--duration:20s] w-full" pauseOnHover>
          {data.slice(40, 48).map((pokemon) => (
            <PokemonCard key={pokemon.id} img={pokemon.images.large} alt={pokemon.name} id={pokemon.id} />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:20s] w-full" pauseOnHover>
          {data.slice(9, 17).map((pokemon) => (
            <PokemonCard key={pokemon.id} img={pokemon.images.small} alt={pokemon.name} id={pokemon.id} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
