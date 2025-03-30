import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PowerType } from '../powers-prop';
import { PowerCircle } from '../power-circle';
import { GetPokemonName } from '../pokemon-name';
import { getPokemon } from '@/api';
import axios from 'axios';

type Pokemon = {
  name: string;
  url: string;
  attack?: number;
  defense?: number;
  image?: string;
  types?: string[];
};

const typeColors: { [key: string]: string } = {
  grass: '#78C850',
  poison: '#A040A0',
  fire: '#F08030',
  water: '#6890F0',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
};

const PokemonCard = styled.div`
  background-color: f7f7f7;
  width: 350px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  position: relative;
`;

const ColorCardContainer = styled.div<{ typeColor: string }>`
  background-color: ${(props) => props.typeColor || '#f6f7f9'};
  width: 60%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1100px;
  padding: 20px;
`;

const PowersPropsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const PowersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  margin-left: 8px;
`;

interface PokemonImageProps {
  image: string;
}

const PokemonImage = styled.div<PokemonImageProps>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 60%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

function PokemonTable() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon()
      .then((response) => {
        const pokemonList = response.results;

        const detailedPokemonPromises = pokemonList.map((pokemon: Pokemon) =>
          axios.get(pokemon.url).then((details) => ({
            ...pokemon,
            attack: details.data.stats.find(
              (stat: any) => stat.stat.name === 'attack'
            )?.base_stat,
            defense: details.data.stats.find(
              (stat: any) => stat.stat.name === 'defense'
            )?.base_stat,
            image: details.data.sprites.other.home.front_default,
            types: details.data.types.map((type: any) => type.type.name),
          }))
        );

        Promise.all(detailedPokemonPromises).then((detailedPokemons) => {
          setPokemons(detailedPokemons);
        });
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <Grid>
      {pokemons.map((pokemon, index) => {
        const primaryType = pokemon.types?.[0] || 'default'; 
        const typeColor = typeColors[primaryType] || '#f6f7f9';

        return (
          <PokemonCard key={index}>
            <ColorCardContainer typeColor={typeColor}>
              <PokemonImage image={pokemon.image || ''} />
              <GetPokemonName name={pokemon.name} />
              <PowersContainer>
                <PowersPropsContainer>
                  <PowerCircle value={pokemon.attack || 0} />
                  <PowerCircle value={pokemon.defense || 0} />
                </PowersPropsContainer>
                <PowersPropsContainer>
                  <PowerType value="attack" />
                  <PowerType value="defense" />
                </PowersPropsContainer>
              </PowersContainer>
            </ColorCardContainer>
          </PokemonCard>
        );
      })}
    </Grid>
  );
}

export default PokemonTable;
