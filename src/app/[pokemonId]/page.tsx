import React from "react";

const PokemonPage = ({ params }: { params: { pokemonId: string } }) => {
  return <div>{params.pokemonId}</div>;
};

export default PokemonPage;
