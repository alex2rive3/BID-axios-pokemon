import React from "react";
import { PokemonItem, Img, Span } from "./StyledComponents";

const Pokemones = ({ pokemon, idx }) => {
    return (
        <PokemonItem>
            <Span>{pokemon.name.toUpperCase()}</Span>
            <Img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    idx + 1
                }.png`}
                alt={`imagen de ${pokemon.name}`}
            />
        </PokemonItem>
    );
};

export default Pokemones;
