import React from "react";
import Pokemones from "./Pokemones";
import { PokemonContent } from "./StyledComponents";

const PokemonDisplay = ({ pokemons }) => {
    return (
        <PokemonContent>
            {pokemons?.map((pokemon, idx) => (
                <Pokemones pokemon={pokemon} idx={idx} key={idx} />
            ))}
        </PokemonContent>
    );
};

export default PokemonDisplay;
