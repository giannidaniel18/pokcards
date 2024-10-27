"use client";
import { cardService } from "@/services/cardService";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FC, Suspense, useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import { CardEntity } from "@/types/entities/card/card.entity";
import { Input } from "../ui/Input";
import useDebouncedCallback from "@/hooks/useDebounce";

type Props = {
  filterParam: string;
};

const CardsSearcher: FC<Props> = ({ filterParam }) => {
  const searchparams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [cards, setCards] = useState<CardEntity[] | null>(null);
  //   const [nameFilter, setNameFilter] = useState<string>(filterParam);
  const [loading, setLoading] = useState(false);

  const getCard = async (string?: string) => {
    setLoading(true);
    const resp = await cardService.getCardByName(string ? string : filterParam);
    if (resp.data.data.length) {
      setCards(resp.data.data);
    }
    setLoading(false);
  };

  const handleSetNameFilter = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchparams);
    if (e.target.value) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  useEffect(() => {
    console.log("first");
    if (filterParam) {
      getCard(filterParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterParam]);

  return (
    <div className="flex flex-col items-center gap-16">
      <Input
        className="w-full sm:w-[350px]"
        placeholder="Search your card"
        type="search"
        onChange={handleSetNameFilter}
        defaultValue={searchparams.get("search")?.toString()}
        readOnly={loading}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {loading && <div>Loading...</div>}
        {cards?.map((card) => (
          <PokemonCard key={card.id} alt={card.name} id={card.id} img={card.images.large} />
        ))}
      </div>
    </div>
  );
};

export default CardsSearcher;

// import { FC, useState, useEffect, useRef } from "react";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import useDebounce from "@/hooks/useDebounce";
// import { cardService } from "@/services/cardService";
// import { Input } from "../ui/Input";
// import { PokemonCard } from "./PokemonCard";
// import { CardEntity } from "@/types/entities/card/card.entity";

// type Props = {
//   filterParam: string;
// };

// const CardsSearcher: FC<Props> = ({ filterParam }) => {
//   const searchparams = useSearchParams();
//   const { replace } = useRouter();
//   const pathname = usePathname();
//   const [cards, setCards] = useState<CardEntity[] | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [nameFilter, setNameFilter] = useState<string>(searchparams.get("search") || filterParam);
//   const isMounted = useRef(false);

//   // Hook de debounce para el valor del filtro
//   const { debouncedValue: debouncedNameFilter, isTyping } = useDebounce(nameFilter, 500);

//   const getCard = async (name: string) => {
//     setLoading(true);
//     const resp = await cardService.getCardByName(name);
//     setCards(resp.data.data.length ? resp.data.data : []);
//     setLoading(false);
//   };

//   const handleSetNameFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     setNameFilter(e.target.value);
//   };

//   // Llama a la API solo cuando el valor de `debouncedNameFilter` cambia
//   useEffect(() => {
//     if (isMounted.current) {
//       if (debouncedNameFilter) {
//         const params = new URLSearchParams(searchparams);
//         params.set("search", debouncedNameFilter);
//         replace(`${pathname}?${params.toString()}`);
//         getCard(debouncedNameFilter);
//       }
//     } else {
//       isMounted.current = true; // Marca el componente como montado después de la primera ejecución
//     }
//   }, [debouncedNameFilter, ]); // Este efecto depende solo de `debouncedNameFilter`

//   // Llamada inicial única cuando el componente se monta
//   useEffect(() => {
//     console.log("second");
//     const initialSearch = searchparams.get("search") || filterParam;
//     if (initialSearch) {
//       setNameFilter(initialSearch);
//       getCard(initialSearch);
//     }
//   }, []); // Ejecutado solo una vez en el montaje

//   return (
//     <div className="flex flex-col items-center gap-16">
//       <Input
//         className="w-full sm:w-[350px]"
//         placeholder="Search your card"
//         type="search"
//         onChange={handleSetNameFilter}
//         defaultValue={nameFilter}
//         readOnly={loading}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//         {loading && <div>Loading...</div>}
//         {cards?.map((card) => (
//           <PokemonCard key={card.id} alt={card.name} id={card.id} img={card.images.large} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardsSearcher;
