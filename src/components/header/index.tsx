'use client';

import { HeaderContainer } from './components/header-container';
import { Navigation } from './components/navigation';
export default function Header() {
  return (
    <HeaderContainer>
      <Navigation href="/Home">Home</Navigation>
      <Navigation href="/Pokedex">Pokédex</Navigation>
      <Navigation href="/Legendaries">Legendaries</Navigation>
      <Navigation href="/Compare">Compare</Navigation>
    </HeaderContainer>
  );
}
