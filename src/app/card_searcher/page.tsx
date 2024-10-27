import CardsSearcher from "@/components/pokemon/CardSearcher";

import React, { Suspense } from "react";

interface SearchParams {
  search?: string;
}

const CardsSearcherPage = ({ searchParams }: { searchParams: SearchParams }) => {
  const filterParam: string = searchParams.search?.toString() ?? "";

  return (
    <Suspense key={filterParam} fallback={<h1>cargando ...</h1>}>
      <CardsSearcher filterParam={filterParam} />
    </Suspense>
  );
};

export default CardsSearcherPage;
