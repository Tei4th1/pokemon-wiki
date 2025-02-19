'use client';
import styled from 'styled-components';
import Navigation from './components/navigation';
import Link from 'next/link';
import Image from 'next/image';

const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: #f5db13;
  display: flex;
  gap: 305px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const NavigationContainer = styled.div`
  display: flex;
  gap: 60px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image
          src="/PokemonLogo.svg"
          alt="Logo"
          width={150}
          height={63}
          priority
          style={{ cursor: 'pointer' }}
        />
      </Link>
      <NavigationContainer>
        <Navigation href="/">Home</Navigation>
        <Navigation href="/Pokedex">Pokédex</Navigation>
        <Navigation href="/Legendaries">Legendaries</Navigation>
        <Navigation href="/Compare">Compare</Navigation>
      </NavigationContainer>
    </HeaderContainer>
  );
}
