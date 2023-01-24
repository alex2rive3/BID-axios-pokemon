import { React, useState } from "react";
import { PokeContex } from "../Context/PokeContex";

const Container = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <PokeContex.Provider
            value={{ pokemons, setPokemons, isDisabled, setIsDisabled }}
        >
            {children}
        </PokeContex.Provider>
    );
};

export default Container;
