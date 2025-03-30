import { styled } from 'styled-components';

interface PokemonNameProps {
  name: string;
}
const PokemonName = styled.h3`
  font-family: karla;
  font-weight: 700;
  font-size: 18px;
  margin-left: 15px;
  margin-top: 5px;
`;

export const GetPokemonName: React.FC<PokemonNameProps> = ({ name }) => (
    <PokemonName>{name}</PokemonName>
);