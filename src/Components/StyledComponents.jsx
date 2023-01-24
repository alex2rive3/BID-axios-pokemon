import styled from "styled-components";

const PokemonItem = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 4px 0px black;
    border-radius: 10px;
`;

const Img = styled.img`
    width: 150px;
`;

const Span = styled.span`
    font-size: 14px;
    font-weight: 600;
`;

const PokemonContent = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;
export { PokemonItem, Img, Span, PokemonContent };
