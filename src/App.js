import React, { useState } from 'react'
import axios from 'axios'
import PokemonDisplay from './Components/PokemonDisplay'
import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;
const H1 = styled.h1`
    margin: 6px;
`;
const Button = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    border: none;
    background-color: #3678ff;
    color: #ffffff;
    font-weight: 600;
`;
const P = styled.p`
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    margin: 0px;
`;

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)
  const handleAllPokemons = async () => {
    try {
      const { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=807'
      )
      setPokemons(data.results)
      setIsDisabled(true)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Container >
      <H1>Pokemons API</H1>
      <P>Preciona el Boton oara obtener listado de todos los Pokemones</P>
      <Button
        onClick={handleAllPokemons}
        disabled={isDisabled}>
        Fetch Pokemon
      </Button>
      <PokemonDisplay pokemons={pokemons} />
    </Container>
  )
}

export default App