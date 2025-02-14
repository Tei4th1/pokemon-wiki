'use client';
import styled from 'styled-components';
import Navigation from './components/navigation';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: #f5db13;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Navigation href="/">Home</Navigation>
      <Navigation href="/Pokedex">Pokédex</Navigation>
      <Navigation href="/Legendaries">Legendaries</Navigation>
      <Navigation href="/Compare">Compare</Navigation>
    </HeaderContainer>
  );
}
