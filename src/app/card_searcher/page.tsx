"use client";
import { PokemonCard } from "@/components/pokemon/PokemonCard";
import { Input } from "@/components/ui/Input";
import { cardService } from "@/services/cardService";
import { pokemonCard } from "@/types/models/pokemonCard";
import Link from "next/link";
import { useSearchParams, usePathname, useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CardsSearcherPage = () => {
  const searchparams = useSearchParams();
  const [cards, setCards] = useState<pokemonCard[] | null>(null);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const getCard = async (string?: string) => {
    setLoading(true);
    const resp = await cardService.getCardByName(string ? string : nameFilter);
    if (resp.data.data.length) {
      setCards(resp.data.data);
      setLoading(false);
    }
  };

  //todo falta actualizar el query param por lo que escriba en el input

  const handleSetNameFilter = (e: any) => {
    e.preventDefault();
    setNameFilter(e.target.value);
  };

  useEffect(() => {
    if (searchparams.get("search")?.toString()) {
      getCard(searchparams.get("search")?.toString());
    } else {
      getCard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameFilter]);

  return (
    <div className="flex flex-col items-center gap-16">
      <Input
        className="w-full sm:w-[350px]"
        placeholder="Search your card"
        type="search"
        onChange={handleSetNameFilter}
        defaultValue={searchparams.get("search")?.toString()}
      />
      {loading ? (
        "cargando..."
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {cards?.map((card) => (
            <PokemonCard key={card.id} alt={card.name} id={card.id} img={card.images.large} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsSearcherPage;
